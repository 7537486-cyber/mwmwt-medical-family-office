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
  consent?: boolean;
};

type ResendError = {
  message?: string;
};

const contactToEmail = "info@mwmwt.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "MWMWT Concierge <info@mwmwt.com>";
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
}) {
  const message = [
    "MWMWT new inquiry",
    `Time: ${payload.submittedAt}`,
    `Name: ${payload.name}`,
    `Phone/LINE: ${payload.phone}`,
    payload.messenger ? `WeChat/Backup: ${payload.messenger}` : undefined,
    payload.email ? `Email: ${payload.email}` : undefined,
    `Type: ${payload.inquiryType}`
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
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone / WhatsApp / LINE:</strong> ${escapeHtml(phone)}</p>
      <p><strong>WeChat / Backup contact:</strong> ${escapeHtml(messenger || "-")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "-")}</p>
      <p><strong>Inquiry type:</strong> ${escapeHtml(inquiryType)}</p>
      <p><strong>Background:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(background || "-")}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
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

  if (!response.ok) {
    const error = (await response.json().catch(() => ({}))) as ResendError;
    return NextResponse.json(
      { ok: false, error: error.message ?? "EMAIL_SEND_FAILED" },
      { status: 502 }
    );
  }

  await Promise.allSettled([
    crmWrite,
    pushLineNotification({
      submittedAt,
      name,
      phone,
      messenger,
      email,
      inquiryType
    })
  ]);

  return NextResponse.json({ ok: true });
}
