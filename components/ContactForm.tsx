"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type Language, withLanguage } from "@/lib/site";

type ContactFormProps = {
  lang: Language;
  typeOptions: string[];
};

const copy = {
  zh: {
    name: "姓名",
    gender: "称呼方式",
    ageRange: "年龄",
    countryCity: "所在国家 / 城市",
    preferredLanguage: "希望沟通语言",
    preferredContactMethod: "首选联系方式",
    contactDetail: "联系方式 / 账号",
    inquiry: "咨询方向",
    urgency: "紧急程度",
    situation: "当前情况",
    background: "补充说明",
    namePlaceholder: "例如：陈 / 王 / 李",
    countryCityPlaceholder: "例如：中国上海 / 日本东京 / 新加坡",
    contactDetailPlaceholder: "请填写微信号、WhatsApp、LINE ID、电话或邮箱",
    languageOptions: ["中文", "日文", "英文"],
    genderOptions: ["先生", "女士"],
    ageOptions: ["30岁以下", "30–39岁", "40–49岁", "50–59岁", "60–69岁", "70岁以上"],
    contactOptions: ["微信", "WhatsApp", "LINE", "电话", "邮箱"],
    urgencyOptions: ["非紧急", "1个月内", "尽快"],
    situationOptions: ["已有体检报告", "有明确症状", "需要第二意见", "计划赴日就医", "为家人咨询", "希望长期管理"],
    situationPrefix: "当前情况",
    backgroundPrefix: "补充说明",
    placeholder: "可简单写目前最想解决的问题、希望沟通时间、已有资料情况。可不填写完整病历。",
    submit: "申请私密顾问沟通",
    note:
      "提交后将进入 Medical Family Office 私人医疗协调流程。我们会先判断适配度，再安排中日双语或英文沟通。",
    submitting: "正在安全提交...",
    error: "暂时无法提交，请稍后再试。",
    errors: {
      EMAIL_SERVICE_NOT_CONFIGURED: "邮件服务尚未配置。请在 Vercel 添加 RESEND_API_KEY 后重新部署。",
      EMAIL_SEND_FAILED: "邮件发送失败。请检查 Resend 发信域名是否已验证，或 CONTACT_FROM_EMAIL 是否可用。",
      MISSING_REQUIRED_FIELDS: "请补全必填信息后再提交。",
      INVALID_JSON: "提交内容格式异常，请刷新页面后再试。",
      NETWORK: "网络连接暂时失败，请稍后再试。"
    },
    consentStart: "我已阅读并同意",
    consentMiddle: "，并理解本网站不提供诊断或治疗建议。",
    privacy: "隐私政策",
    terms: "服务条款",
    disclaimer: "医疗免责声明"
  },
  ja: {
    name: "お名前",
    gender: "敬称",
    ageRange: "年齢",
    countryCity: "居住国 / 都市",
    preferredLanguage: "希望する言語",
    preferredContactMethod: "希望する連絡方法",
    contactDetail: "連絡先 / アカウント",
    inquiry: "ご相談内容",
    urgency: "緊急度",
    situation: "現在の状況",
    background: "補足説明",
    namePlaceholder: "山田様",
    countryCityPlaceholder: "例：中国・上海 / 日本・東京 / シンガポール",
    contactDetailPlaceholder: "WeChat、WhatsApp、LINE ID、電話番号、メールをご記入ください",
    languageOptions: ["中国語", "日本語", "英語"],
    genderOptions: ["男性", "女性"],
    ageOptions: ["30歳未満", "30–39歳", "40–49歳", "50–59歳", "60–69歳", "70歳以上"],
    contactOptions: ["WeChat", "WhatsApp", "LINE", "電話", "メール"],
    urgencyOptions: ["緊急ではない", "1か月以内", "できるだけ早く"],
    situationOptions: ["健診結果あり", "明確な症状あり", "セカンドオピニオン希望", "訪日医療を検討", "家族の相談", "長期管理を希望"],
    situationPrefix: "現在の状況",
    backgroundPrefix: "補足説明",
    placeholder: "現在の課題、希望時期、既存資料の有無を簡単にご記入ください。完全な病歴は不要です。",
    submit: "プライベート相談を申請",
    note:
      "送信後、Medical Family Office のプライベート医療調整プロセスに入ります。適合性を確認したうえで、中日または英語でのご連絡を調整します。",
    submitting: "安全に送信しています...",
    error: "現在送信できません。時間をおいて再度お試しください。",
    errors: {
      EMAIL_SERVICE_NOT_CONFIGURED: "メール送信サービスが未設定です。Vercel に RESEND_API_KEY を追加して再デプロイしてください。",
      EMAIL_SEND_FAILED: "メール送信に失敗しました。Resend の送信ドメインまたは CONTACT_FROM_EMAIL を確認してください。",
      MISSING_REQUIRED_FIELDS: "必須項目をご入力ください。",
      INVALID_JSON: "送信内容の形式に問題があります。ページを更新して再度お試しください。",
      NETWORK: "ネットワーク接続に失敗しました。時間をおいて再度お試しください。"
    },
    consentStart: "私は",
    consentMiddle: "を確認し、本サイトが診断または治療助言を提供しないことを理解しました。",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    disclaimer: "医療免責事項"
  },
  en: {
    name: "Name",
    gender: "Salutation",
    ageRange: "Age",
    countryCity: "Country / City",
    preferredLanguage: "Preferred language",
    preferredContactMethod: "Preferred contact method",
    contactDetail: "Contact detail / account",
    inquiry: "Inquiry purpose",
    urgency: "Urgency",
    situation: "Current context",
    background: "Additional notes",
    namePlaceholder: "Mr. Chen / Ms. Wang",
    countryCityPlaceholder: "e.g. Shanghai, China / Tokyo, Japan / Singapore",
    contactDetailPlaceholder: "WeChat, WhatsApp, LINE ID, phone number, or email",
    languageOptions: ["Chinese", "Japanese", "English"],
    genderOptions: ["Mr.", "Ms."],
    ageOptions: ["Under 30", "30–39", "40–49", "50–59", "60–69", "70+"],
    contactOptions: ["WeChat", "WhatsApp", "LINE", "Phone", "Email"],
    urgencyOptions: ["Not urgent", "Within 1 month", "As soon as possible"],
    situationOptions: ["Existing checkup reports", "Clear symptoms", "Need a second opinion", "Considering care in Japan", "For a family member", "Long-term management"],
    situationPrefix: "Current context",
    backgroundPrefix: "Additional notes",
    placeholder: "Briefly describe the key concern, preferred timing, and whether existing records are available. Full medical records are not needed here.",
    submit: "Apply for Private Consultation",
    note:
      "Your inquiry enters the Medical Family Office private medical coordination process. We first review fit, then arrange communication in Chinese, Japanese, or English.",
    submitting: "Submitting securely...",
    error: "Submission is temporarily unavailable. Please try again later.",
    errors: {
      EMAIL_SERVICE_NOT_CONFIGURED: "Email service is not configured. Add RESEND_API_KEY in Vercel and redeploy.",
      EMAIL_SEND_FAILED: "Email sending failed. Please verify the Resend sending domain or CONTACT_FROM_EMAIL.",
      MISSING_REQUIRED_FIELDS: "Please complete the required fields before submitting.",
      INVALID_JSON: "The submission format was invalid. Please refresh and try again.",
      NETWORK: "Network connection failed. Please try again later."
    },
    consentStart: "I have read and agree to the",
    consentMiddle:
      "and understand this website does not provide diagnosis or treatment advice.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimer: "Medical Disclaimer"
  }
};

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  columns = "sm:grid-cols-3"
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  columns?: string;
}) {
  return (
    <fieldset className="grid gap-3">
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className={`grid gap-3 ${columns}`}>
        {options.map((item) => {
          const active = value === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              className={`min-h-12 border px-4 py-3 text-left text-sm font-semibold leading-6 transition ${
                active
                  ? "border-champagne bg-ink text-pearl"
                  : "border-mist bg-pearl text-ink hover:border-champagne"
              }`}
              aria-pressed={active}
            >
              {item}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function MultiChoiceGroup({
  label,
  options,
  values,
  onChange,
  columns = "sm:grid-cols-3"
}: {
  label: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
  columns?: string;
}) {
  function toggle(item: string) {
    onChange(values.includes(item) ? values.filter((value) => value !== item) : [...values, item]);
  }

  return (
    <fieldset className="grid gap-3">
      <legend className="text-sm font-semibold text-ink">{label}</legend>
      <div className={`grid gap-3 ${columns}`}>
        {options.map((item) => {
          const active = values.includes(item);

          return (
            <button
              key={item}
              type="button"
              onClick={() => toggle(item)}
              className={`min-h-12 border px-4 py-3 text-left text-sm font-semibold leading-6 transition ${
                active
                  ? "border-champagne bg-ink text-pearl"
                  : "border-mist bg-pearl text-ink hover:border-champagne"
              }`}
              aria-pressed={active}
            >
              {item}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function getErrorMessage(
  lang: Language,
  error?: string,
  message?: string,
  status?: number,
  requestId?: string,
  rawBody?: string
) {
  const text = copy[lang];
  const key = error as keyof typeof text.errors | undefined;
  const known = key ? text.errors[key] : undefined;
  const details = [
    status ? `HTTP ${status}` : "",
    requestId ? `Request ${requestId}` : ""
  ].filter(Boolean);
  const suffix = details.length ? `（${details.join(" / ")}）` : "";

  if (message) return `${message}${suffix}`;
  if (known) return `${known}${suffix}`;
  if (error) return `${error}${suffix}`;
  if (rawBody) return `${rawBody}${suffix}`;
  return `${text.error}${suffix}`;
}

export function ContactForm({ lang, typeOptions }: ContactFormProps) {
  const router = useRouter();
  const text = copy[lang];
  const [name, setName] = useState("");
  const [gender, setGender] = useState(text.genderOptions[0]);
  const [ageRange, setAgeRange] = useState(text.ageOptions[0]);
  const [countryCity, setCountryCity] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState(text.languageOptions[0]);
  const [preferredContactMethod, setPreferredContactMethod] = useState(text.contactOptions[0]);
  const [contactDetail, setContactDetail] = useState("");
  const [inquiryType, setInquiryType] = useState(typeOptions[0] ?? "");
  const [urgency, setUrgency] = useState(text.urgencyOptions[0]);
  const [situations, setSituations] = useState<string[]>([]);
  const [background, setBackground] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;
    setStatus("loading");
    setErrorMessage("");

    const backgroundSummary = [
      situations.length ? `${text.situationPrefix}: ${situations.join(" / ")}` : "",
      background.trim() ? `${text.backgroundPrefix}: ${background.trim()}` : ""
    ]
      .filter(Boolean)
      .join("\n\n");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lang,
        name,
        gender,
        ageRange,
        countryCity,
        preferredLanguage,
        preferredContactMethod,
        contactDetail,
        email: contactDetail.includes("@") ? contactDetail : "",
        inquiryType,
        urgency,
        background: backgroundSummary,
        backgroundTags: situations,
        consent,
        sourcePage: window.location.toString()
      })
    }).catch(() => undefined);

    const rawBody = await response?.text().catch(() => "");
    let errorBody:
      | {
          success?: boolean;
          error?: string;
          message?: string;
          requestId?: string;
          resendStatus?: number;
          resendStatusText?: string;
          resendError?: { message?: string; name?: string };
        }
      | undefined;

    try {
      errorBody = rawBody ? JSON.parse(rawBody) : undefined;
    } catch {
      errorBody = undefined;
    }

    if (response && errorBody?.success === true) {
      router.push(withLanguage("/thank-you", lang));
      return;
    }

    const serverMessage =
      errorBody?.message ??
      errorBody?.resendError?.message ??
      errorBody?.resendError?.name ??
      errorBody?.resendStatusText;
    setErrorMessage(
      response
        ? getErrorMessage(
            lang,
            errorBody?.error,
            serverMessage,
            errorBody?.resendStatus ?? response.status,
            errorBody?.requestId,
            rawBody
          )
        : getErrorMessage(lang, "NETWORK")
    );
    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="border border-mist bg-white p-6 shadow-quiet md:p-10">
      <div className="grid gap-6">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.name}
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.namePlaceholder}
          />
        </label>

        <ChoiceGroup
          label={text.gender}
          options={text.genderOptions}
          value={gender}
          onChange={setGender}
          columns="grid-cols-2"
        />

        <ChoiceGroup
          label={text.ageRange}
          options={text.ageOptions}
          value={ageRange}
          onChange={setAgeRange}
          columns="sm:grid-cols-3"
        />

        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.countryCity}
          <input
            required
            value={countryCity}
            onChange={(event) => setCountryCity(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.countryCityPlaceholder}
          />
        </label>

        <ChoiceGroup
          label={text.preferredLanguage}
          options={text.languageOptions}
          value={preferredLanguage}
          onChange={setPreferredLanguage}
        />

        <ChoiceGroup
          label={text.preferredContactMethod}
          options={text.contactOptions}
          value={preferredContactMethod}
          onChange={setPreferredContactMethod}
          columns="sm:grid-cols-5"
        />

        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.contactDetail}
          <input
            required
            value={contactDetail}
            onChange={(event) => setContactDetail(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.contactDetailPlaceholder}
          />
        </label>

        <ChoiceGroup
          label={text.inquiry}
          options={typeOptions}
          value={inquiryType}
          onChange={setInquiryType}
          columns="sm:grid-cols-2"
        />

        <ChoiceGroup
          label={text.urgency}
          options={text.urgencyOptions}
          value={urgency}
          onChange={setUrgency}
        />

        <MultiChoiceGroup
          label={text.situation}
          options={text.situationOptions}
          values={situations}
          onChange={setSituations}
          columns="sm:grid-cols-2"
        />

        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.background}
          <textarea
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="min-h-36 border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.placeholder}
          />
        </label>

        <label className="flex gap-3 text-xs leading-6 text-graphite/70">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[#c8a86a]"
          />
          <span>
            {text.consentStart}{" "}
            <Link
              href={withLanguage("/privacy-policy", lang)}
              className="font-semibold text-ink underline underline-offset-4"
            >
              {text.privacy}
            </Link>
            {lang === "en" ? ", " : "、"}
            <Link
              href={withLanguage("/terms-of-service", lang)}
              className="font-semibold text-ink underline underline-offset-4"
            >
              {text.terms}
            </Link>
            {lang === "en" ? ", and " : "、"}
            <Link
              href={withLanguage("/medical-disclaimer", lang)}
              className="font-semibold text-ink underline underline-offset-4"
            >
              {text.disclaimer}
            </Link>{" "}
            {text.consentMiddle}
          </span>
        </label>

        <button
          type="submit"
          disabled={!consent || status === "loading"}
          className="bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink disabled:cursor-not-allowed disabled:opacity-45"
        >
          {status === "loading" ? text.submitting : text.submit}
        </button>

        {status === "error" ? (
          <p className="border border-champagne/50 bg-pearl px-4 py-3 text-xs leading-6 text-ink">
            {errorMessage || text.error}
          </p>
        ) : null}

        <p className="text-xs leading-6 text-graphite/62">{text.note}</p>
      </div>
    </form>
  );
}
