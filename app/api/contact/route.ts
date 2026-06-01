import { NextResponse } from "next/server";

type ContactPayload = {
  lang?: string;
  name?: string;
  gender?: string;
  ageRange?: string;
  countryCity?: string;
  preferredLanguage?: string;
  preferredContactMethod?: string;
  contactDetail?: string;
  contact?: string;
  phone?: string;
  messenger?: string;
  email?: string;
  inquiryType?: string;
  urgency?: string;
  background?: string;
  backgroundTags?: string[];
  sourcePage?: string;
  consent?: boolean;
};

type ResendError = {
  message?: string;
  name?: string;
};

const defaultContactEmail = "contact@aeteralife.com";
const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim() || defaultContactEmail;
const configuredContactFromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
const contactFromEmail =
  configuredContactFromEmail && !configuredContactFromEmail.includes("mwmwt.com")
    ? configuredContactFromEmail
    : "AETERA Medical Family Office <contact@aeteralife.com>";
const contactCcEmail = process.env.CONTACT_CC_EMAIL;
const crmWebhookUrl = process.env.CONTACT_CRM_WEBHOOK_URL;
const lineNotificationWebhookUrl = process.env.LINE_NOTIFICATION_WEBHOOK_URL;
const lineChannelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
const lineToId = process.env.LINE_TO_ID;

function logContact(event: string, details: Record<string, unknown>) {
  console.log(
    JSON.stringify({
      scope: "contact-form",
      event,
      ...details
    })
  );
}

function logContactError(event: string, error: unknown, details: Record<string, unknown> = {}) {
  const normalized =
    error instanceof Error
      ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      }
      : { value: error };

  console.error(
    JSON.stringify({
      scope: "contact-form",
      event,
      error: normalized,
      ...details
    })
  );
}

function clean(value?: string) {
  return value?.trim().slice(0, 4000) ?? "";
}

function splitEmails(value?: string) {
  return value
    ?.split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function cleanArray(value?: string[]) {
  return Array.isArray(value) ? value.map(clean).filter(Boolean).slice(0, 12) : [];
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
  gender: string;
  ageRange: string;
  countryCity: string;
  preferredLanguage: string;
  preferredContactMethod: string;
  phone: string;
  messenger: string;
  email: string;
  inquiryType: string;
  urgency: string;
  backgroundTags: string[];
  sourcePage: string;
}) {
  const message = [
    "Medical Family Office new inquiry",
    `Time: ${payload.submittedAt}`,
    `Name: ${payload.name}`,
    payload.gender ? `Gender: ${payload.gender}` : undefined,
    payload.ageRange ? `Age: ${payload.ageRange}` : undefined,
    payload.countryCity ? `Country/City: ${payload.countryCity}` : undefined,
    payload.preferredLanguage ? `Preferred language: ${payload.preferredLanguage}` : undefined,
    payload.preferredContactMethod ? `Preferred contact: ${payload.preferredContactMethod}` : undefined,
    `Contact detail: ${payload.phone}`,
    payload.messenger ? `WeChat/Backup: ${payload.messenger}` : undefined,
    payload.email ? `Email: ${payload.email}` : undefined,
    `Type: ${payload.inquiryType}`,
    payload.urgency ? `Urgency: ${payload.urgency}` : undefined,
    payload.backgroundTags.length ? `Context: ${payload.backgroundTags.join(" / ")}` : undefined,
    `Source: ${payload.sourcePage || "aeteralife.com"}`
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
  const requestId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  logContact("incoming_request", {
    requestId,
    method: request.method,
    url: request.url,
    hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
    hasContactFromEmail: Boolean(configuredContactFromEmail),
    hasContactToEmail: Boolean(process.env.CONTACT_TO_EMAIL),
    contactFromEmail,
    contactToEmail,
    hasCrmWebhook: Boolean(crmWebhookUrl),
    hasLineWebhook: Boolean(lineNotificationWebhookUrl),
    hasLinePushConfig: Boolean(lineChannelAccessToken && lineToId)
  });

  if (configuredContactFromEmail?.includes("mwmwt.com")) {
    logContactError("invalid_contact_from_email_domain", new Error("CONTACT_FROM_EMAIL uses the old mwmwt.com domain."), {
      requestId,
      configuredContactFromEmail,
      fallbackContactFromEmail: contactFromEmail
    });
  }

  try {
    payload = (await request.json()) as ContactPayload;
  } catch (error) {
    logContactError("invalid_json", error, { requestId });
    return NextResponse.json(
      { success: false, error: "INVALID_JSON", message: "Request body is not valid JSON.", requestId },
      { status: 400 }
    );
  }

  const name = clean(payload.name);
  const gender = clean(payload.gender);
  const ageRange = clean(payload.ageRange);
  const countryCity = clean(payload.countryCity);
  const preferredLanguage = clean(payload.preferredLanguage);
  const preferredContactMethod = clean(payload.preferredContactMethod);
  const contactDetail = clean(payload.contactDetail);
  const phone = clean(payload.phone ?? payload.contact ?? payload.contactDetail);
  const messenger = clean(payload.messenger);
  const email = clean(payload.email) || (isLikelyEmail(contactDetail) ? contactDetail : "");
  const inquiryType = clean(payload.inquiryType);
  const urgency = clean(payload.urgency);
  const background = clean(payload.background);
  const backgroundTags = cleanArray(payload.backgroundTags);
  const sourcePage = clean(payload.sourcePage) || "aeteralife.com";
  const lang = clean(payload.lang) || "zh";

  const missingFields = [
    !name ? "name" : "",
    !countryCity ? "countryCity" : "",
    !phone ? "contactDetail" : "",
    !inquiryType ? "inquiryType" : "",
    !urgency ? "urgency" : "",
    !payload.consent ? "consent" : ""
  ].filter(Boolean);

  logContact("validation_result", {
    requestId,
    ok: missingFields.length === 0,
    missingFields,
    lang,
    inquiryType,
    urgency,
    preferredContactMethod,
    hasEmail: Boolean(email),
    hasMessenger: Boolean(messenger),
    hasBackground: Boolean(background),
    backgroundTagCount: backgroundTags.length
  });

  if (missingFields.length) {
    return NextResponse.json(
      {
        success: false,
        error: "MISSING_REQUIRED_FIELDS",
        message: `Missing required fields: ${missingFields.join(", ")}`,
        requestId
      },
      { status: 400 }
    );
  }

  const submittedAt = new Date().toISOString();
  const crmPayload = {
    submittedAt,
    source: "aeteralife.com",
    lang,
    name,
    gender,
    ageRange,
    countryCity,
    preferredLanguage,
    preferredContactMethod,
    contactDetail: phone,
    phone,
    messenger,
    email,
    inquiryType,
    urgency,
    backgroundTags,
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
    logContact("email_service_not_configured", { requestId });
    return NextResponse.json(
      {
        success: false,
        error: "EMAIL_SERVICE_NOT_CONFIGURED",
        message: "RESEND_API_KEY is not configured in Vercel.",
        requestId
      },
      { status: 500 }
    );
  }

  const contactInformation = [
    `Contact detail: ${phone}`,
    messenger ? `WeChat / Backup contact: ${messenger}` : "",
    email ? `Email: ${email}` : "",
    countryCity ? `Country / City: ${countryCity}` : "",
    preferredLanguage ? `Preferred language: ${preferredLanguage}` : "",
    urgency ? `Urgency: ${urgency}` : "",
    sourcePage ? `Source page: ${sourcePage}` : ""
  ].filter(Boolean);

  const messageContent = [
    backgroundTags.length ? backgroundTags.join(" / ") : "",
    background || ""
  ].filter(Boolean).join("\n\n");

  const subject = `Private Inquiry - ${inquiryType}`;
  const text = [
    "AETERA Private Inquiry",
    "",
    "Client Information",
    `Name: ${name}`,
    `Gender: ${gender || "-"}`,
    `Age: ${ageRange || "-"}`,
    "",
    "Requested Service",
    inquiryType,
    "",
    "Preferred Contact Method",
    preferredContactMethod || "-",
    "",
    "Inquiry Details",
    messageContent || "-",
    "",
    "Contact Information:",
    contactInformation.length ? contactInformation.join("\n") : "-",
    "",
    "Submitted via AETERA Medical Family Office",
    "https://aeteralife.com",
    "",
    `Submitted at: ${submittedAt}`,
    `Request ID: ${requestId}`
  ].join("\n");

	  const html = `
	    <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#171915;max-width:680px">
	      <h1 style="font-size:24px;margin:0 0 24px">AETERA Private Inquiry</h1>
	      <div style="margin:0 0 28px">
	        <p style="margin:0 0 8px"><strong>Client Information</strong></p>
	        <p style="margin:0">Name: ${escapeHtml(name)}</p>
	        <p style="margin:0">Gender: ${escapeHtml(gender || "-")}</p>
	        <p style="margin:0">Age: ${escapeHtml(ageRange || "-")}</p>
	      </div>
	      <div style="margin:28px 0">
	        <p style="margin:0 0 8px"><strong>Requested Service</strong></p>
	        <p style="margin:0">${escapeHtml(inquiryType)}</p>
	      </div>
	      <div style="margin:28px 0">
	        <p style="margin:0 0 8px"><strong>Preferred Contact Method</strong></p>
	        <p style="margin:0">${escapeHtml(preferredContactMethod || "-")}</p>
	      </div>
	      <div style="margin:28px 0">
	        <p style="margin:0 0 8px"><strong>Inquiry Details</strong></p>
	        <p style="margin:0;white-space:pre-wrap">${escapeHtml(messageContent || "-")}</p>
	      </div>
	      <div style="margin:28px 0">
	        <p style="margin:0 0 8px"><strong>Contact Information:</strong></p>
	        <p style="margin:0;white-space:pre-wrap">${escapeHtml(contactInformation.length ? contactInformation.join("\n") : "-")}</p>
	      </div>
	      <div style="border-top:1px solid #d8c59d;margin-top:32px;padding-top:18px">
	        <p style="margin:0"><strong>Submitted via AETERA Medical Family Office</strong></p>
	        <p style="margin:0">https://aeteralife.com</p>
        <p style="margin:18px 0 0;color:#6f6f67;font-size:13px">Submitted at: ${escapeHtml(submittedAt)}</p>
        <p style="margin:0;color:#6f6f67;font-size:13px">Request ID: ${escapeHtml(requestId)}</p>
      </div>
    </div>
  `;

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
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
  } catch (error) {
    logContactError("resend_internal_fetch_threw", error, { requestId });
    return NextResponse.json(
      {
        success: false,
        error: "RESEND_FETCH_FAILED",
        message: error instanceof Error ? error.message : "Resend fetch failed before receiving a response.",
        requestId
      },
      { status: 500 }
    );
  }

  const resendBody = (await response.json().catch((error) => {
    logContactError("resend_internal_json_parse_failed", error, {
      requestId,
      status: response.status
    });
    return undefined;
  })) as (ResendError & { id?: string }) | undefined;

  logContact("resend_internal_result", {
    requestId,
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    resendId: resendBody?.id,
    resendErrorName: resendBody?.name,
    resendErrorMessage: resendBody?.message
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
          text: getAutoReplyText(lang, name, gender),
          html: getAutoReplyHtml(lang, name, gender)
        })
      })
      : Promise.resolve(undefined);

  if (!response.ok) {
    logContactError("resend_email_send_failed", new Error(resendBody?.message ?? resendBody?.name ?? response.statusText), {
      requestId,
      status: response.status,
      statusText: response.statusText,
      resendError: resendBody
    });

    return NextResponse.json(
      {
        success: false,
        error: "EMAIL_SEND_FAILED",
        message: resendBody?.message ?? resendBody?.name ?? response.statusText ?? "Resend email sending failed.",
        resendStatus: response.status,
        resendStatusText: response.statusText,
        resendError: resendBody,
        requestId
      },
      { status: 500 }
    );
  }

  const postSendResults = await Promise.allSettled([
    crmWrite,
    autoReply,
    pushLineNotification({
      submittedAt,
      name,
      gender,
      ageRange,
      countryCity,
      preferredLanguage,
      preferredContactMethod,
      phone,
      messenger,
      email,
      inquiryType,
      urgency,
      backgroundTags,
      sourcePage
    })
  ]);

  logContact("post_send_results", {
    requestId,
    crm: postSendResults[0].status,
    autoReply: postSendResults[1].status,
    line: postSendResults[2].status
  });

  return NextResponse.json({ success: true, requestId });
}

function getAutoReplySubject(lang: string) {
  return "AETERA Medical Family Office";
}

function getAutoReplySalutation(lang: string, name: string, gender: string) {
  const normalizedGender = gender.toLowerCase();
  const normalizedName = name.trim();
  const isFemale =
    gender.includes("女") ||
    normalizedGender.includes("ms") ||
    normalizedGender.includes("mrs") ||
    normalizedGender.includes("miss") ||
    normalizedGender.includes("female");

  if (lang === "ja") {
    return normalizedName ? `${normalizedName}様` : "お客様";
  }

  if (lang === "en") {
    const title = isFemale ? "Ms." : "Mr.";
    if (!normalizedName) return "Dear client,";
    if (/^(mr\.?|ms\.?|mrs\.?|miss)\s+/i.test(normalizedName)) return `Dear ${normalizedName},`;
    return `Dear ${title} ${normalizedName},`;
  }

  if (!normalizedName) {
    return isFemale ? "女士，" : "先生，";
  }

  if (/[先女]士$/.test(normalizedName)) return `${normalizedName}，`;

  if (isFemale) {
    return `${normalizedName}女士，`;
  }

  return `${normalizedName}先生，`;
}

function getAutoReplyText(lang: string, name: string, gender: string) {
  const salutation = getAutoReplySalutation(lang, name, gender);

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

function getAutoReplyHtml(lang: string, name: string, gender: string) {
  const text = getAutoReplyText(lang, name, gender)
    .split("\n")
    .map((line) => `<p style="margin:0 0 14px">${escapeHtml(line || " ")}</p>`)
    .join("");

	  return `
	    <div style="font-family:Inter,Arial,sans-serif;line-height:1.7;color:#171915;max-width:620px">
	      <h1 style="font-size:22px;margin:0 0 20px">AETERA Medical Family Office</h1>
	      ${text}
	    </div>
	  `;
}
