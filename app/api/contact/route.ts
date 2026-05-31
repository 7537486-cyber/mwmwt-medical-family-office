import { NextResponse } from "next/server";

type ContactPayload = {
  lang?: string;
  name?: string;
  contact?: string;
  phone?: string;
  messenger?: string;
  email?: string;
  inquiryType?: string;
  background?: string;
  sourcePage?: string;
  consent?: boolean;
};

type ResendError = {
  message?: string;
};

const contactToEmail = "info@mwmwt.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "Medical Family Office <info@mwmwt.com>";
const contactCcEmail = process.env.CONTACT_CC_EMAIL;
const crmWebhookUrl = process.env.CONTACT_CRM_WEBHOOK_URL;
const lineNotificationWebhookUrl = process.env.LINE_NOTIFICATION_WEBHOOK_URL;
const lineChannelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const lineToId = process.env.LINE_TO_ID;

function clean(value?: string) {
  return value?.trim().slice(0, 4000) ?? "";
}

function splitEmails(value?: string) {
  return value
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function isLikelyEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function pushLineNotification(payload: {
  submittedAt: string;
  name: string;
  phone: string;
  messenger: string;
  email: string;
  inquiryType: string;
  sourcePage: string;
}) {
  const message = [
    "MWMWT new inquiry",
    `Time: ${payload.submittedAt}`,
    `Name: ${payload.name}`,
    `Phone/LINE: ${payload.phone}`,
    payload.messenger ? `WeChat/Backup: ${payload.messenger}` : undefined,
    payload.email ? `Email: ${payload.email}` : undefined,
    `Type: ${payload.inquiryType}`,
    `Source: ${payload.sourcePage || "mwmwt.com"}`
  ]
    .filter(Boolean)
    .join("\n");

  const tasks: Array<Promise<Response | undefined>> = [];

  if (lineNotificationWebhookUrl) {
    tasks.push(
      fetch(lineNotificationWebhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message, payload })
      })
    );
  }

  if (lineChannelAccessToken && lineToId) {
    tasks.push(
      fetch("https://api.line.me/v2/bot/message/push", {
        method: "POST",
        headers: {
          authorization: `Bearer ${lineChannelAccessToken}`,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          to: lineToId,
          messages: [{ type: "text", text: message }]
        })
      })
    );
  }

  await Promise.allSettled(tasks);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone ?? payload.contact);
  const messenger = clean(payload.messenger);
  const email = clean(payload.email);
  const inquiryType = clean(payload.inquiryType);
  const background = clean(payload.background);
  const sourcePage = clean(payload.sourcePage) || "mwmwt.com";
  const lang = clean(payload.lang) || "zh";

  if (!name || !phone || !inquiryType || !payload.consent) {
    return NextResponse.json({ ok: false, error: "MISSING_REQUIRED_FIELDS" }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const crmPayload = {
    submittedAt,
    source: "mwmwt.com",
    lang,
    name,
    phone,
    messenger,
    email,
    inquiryType,
    background,
    sourcePage,
    consent: Boolean(payload.consent)
  };

  const crmWrite = crmWebhookUrl
    ? fetch(crmWebhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(crmPayload)
    }).catch(() => undefined)
    : Promise.resolve(undefined);

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: "EMAIL_SERVICE_NOT_CONFIGURED" }, { status: 503 });
  }

  const subject = `Private inquiry - ${inquiryType}`;
  const text = [
    "New private inquiry from mwmwt.com",
    "",
    `Submitted at: ${submittedAt}`,
    `Language: ${lang}`,
    `Source page: ${sourcePage}`,
    `Name: ${name}`,
    `Phone / WhatsApp / LINE: ${phone}`,
    `WeChat / Backup contact: ${messenger || "-"}`,
    `Email: ${email || "-"}`,
    `Inquiry type: ${inquiryType}`,
    "",
    "Background:",
    background || "-"
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#171915">
      <h1 style="font-size:22px">New private inquiry</h1>
      <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
      <p><strong>Language:</strong> ${escapeHtml(lang)}</p>
      <p><strong>Source page:</strong> ${escapeHtml(sourcePage)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone / WhatsApp / LINE:</strong> ${escapeHtml(phone)}</p>
      <p><strong>WeChat / Backup contact:</strong> ${escapeHtml(messenger || "-")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
      <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
      <p><strong>Background:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(background || "-")}</p>
    </div>
  `;

  const internalEmail = fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      cc: splitEmails(contactCcEmail),
      reply_to: isLikelyEmail(email) ? email : undefined,
      subject,
      text,
      html
    })
  });

  const autoReply =
    isLikelyEmail(email)
      ? fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          from: contactFromEmail,
          to: [email],
          subject: getAutoReplySubject(lang),
          text: getAutoReplyText(lang, name),
          html: getAutoReplyHtml(lang, name)
        })
      })
      : Promise.resolve(undefined);

  const response = await internalEmail;

  if (!response.ok) {
    const error = (await response.json().catch(() => ({}))) as ResendError;
    return NextResponse.json(
      { ok: false, error: error.message ?? "EMAIL_SEND_FAILED" },
      { status: 502 }
    );
  }

  await Promise.allSettled([
    crmWrite,
    autoReply,
    pushLineNotification({
      submittedAt,
      name,
      phone,
      messenger,
      email,
      inquiryType,
      sourcePage
    })
  ]);

  return NextResponse.json({ ok: true });
}

function getAutoReplySubject(lang: string) {
  if (lang === "ja") return "お問い合わせを受け付けました | Medical Family Office";
  if (lang === "en") return "Thank you for your inquiry | Medical Family Office";
  return "我们已收到您的私密咨询 | Medical Family Office";
}

function getAutoReplyText(lang: string, name: string) {
  const salutation = name ? `${name},` : "";

  if (lang === "ja") {
    return [
      salutation,
      "",
      "お問い合わせありがとうございます。",
      "Medical Family Office のコンシェルジュチームが内容を確認し、24時間以内を目安にご連絡いたします。",
      "",
      "医療記録、画像データ、その他の機微な資料は、担当者から安全な送付方法をご案内するまで返信メールで送らないでください。",
      "",
      "Medical Family Office"
    ].join("\n");
  }

  if (lang === "en") {
    return [
      salutation,
      "",
      "Thank you for your inquiry.",
      "Our medical concierge team will review your request and contact you within 24 hours.",
      "",
      "Please do not reply with complete medical records, imaging files, or highly sensitive information until our team provides a secure submission method.",
      "",
      "Medical Family Office"
    ].join("\n");
  }

  return [
    salutation,
    "",
    "感谢您的私密咨询。",
    "Medical Family Office 医疗礼宾团队将先进行内容确认，并预计在 24 小时内与您联系。",
    "",
    "在团队提供安全提交方式前，请勿直接通过邮件回复完整病历、影像资料或高度敏感信息。",
    "",
    "Medical Family Office"
  ].join("\n");
}

function getAutoReplyHtml(lang: string, name: string) {
  const text = getAutoReplyText(lang, name)
    .split("\n")
    .map((line) => `<p style="margin:0 0 14px">${escapeHtml(line || " ")}</p>`)
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#171915;max-width:620px">
      <h1 style="font-size:22px;margin:0 0 20px">Medical Family Office</h1>
      ${text}
    </div>
  `;
}
