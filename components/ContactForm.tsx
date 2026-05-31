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
    name: "称呼",
    countryCity: "所在国家 / 城市",
    preferredLanguage: "希望沟通语言",
    preferredContactMethod: "首选联系方式",
    contactDetail: "联系方式 / 账号",
    inquiry: "咨询方向",
    urgency: "紧急程度",
    background: "背景说明",
    namePlaceholder: "陈先生 / 王女士",
    countryCityPlaceholder: "例如：中国上海 / 日本东京 / 新加坡",
    contactDetailPlaceholder: "请填写微信号、WhatsApp、LINE ID、电话或邮箱",
    languageOptions: ["中文", "日文", "英文"],
    contactOptions: ["微信", "WhatsApp", "LINE", "电话", "邮箱"],
    urgencyOptions: ["非紧急", "1个月内", "尽快"],
    placeholder: "请简要说明健康目标、家庭情况、时间安排、已有检查结果或正在面对的风险议题。",
    submit: "申请私密顾问沟通",
    note:
      "提交后将进入 Medical Family Office 私人医疗协调流程。我们会先判断适配度，再安排中日双语或英文沟通。",
    submitting: "正在安全提交...",
    error: "暂时无法提交，请稍后再试。",
    consentStart: "我已阅读并同意",
    consentMiddle: "，并理解本网站不提供诊断或治疗建议。",
    privacy: "隐私政策",
    terms: "服务条款",
    disclaimer: "医疗免责声明"
  },
  ja: {
    name: "お名前",
    countryCity: "居住国 / 都市",
    preferredLanguage: "希望する言語",
    preferredContactMethod: "希望する連絡方法",
    contactDetail: "連絡先 / アカウント",
    inquiry: "ご相談内容",
    urgency: "緊急度",
    background: "ご状況",
    namePlaceholder: "山田様",
    countryCityPlaceholder: "例：中国・上海 / 日本・東京 / シンガポール",
    contactDetailPlaceholder: "WeChat、WhatsApp、LINE ID、電話番号、メールをご記入ください",
    languageOptions: ["中国語", "日本語", "英語"],
    contactOptions: ["WeChat", "WhatsApp", "LINE", "電話", "メール"],
    urgencyOptions: ["緊急ではない", "1か月以内", "できるだけ早く"],
    placeholder: "健康目標、ご家族の状況、希望時期、既存の検査結果、現在のリスク課題を簡潔にご記入ください。",
    submit: "プライベート相談を申請",
    note:
      "送信後、Medical Family Office のプライベート医療調整プロセスに入ります。適合性を確認したうえで、中日または英語でのご連絡を調整します。",
    submitting: "安全に送信しています...",
    error: "現在送信できません。時間をおいて再度お試しください。",
    consentStart: "私は",
    consentMiddle: "を確認し、本サイトが診断または治療助言を提供しないことを理解しました。",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    disclaimer: "医療免責事項"
  },
  en: {
    name: "Name",
    countryCity: "Country / City",
    preferredLanguage: "Preferred language",
    preferredContactMethod: "Preferred contact method",
    contactDetail: "Contact detail / account",
    inquiry: "Inquiry purpose",
    urgency: "Urgency",
    background: "Background",
    namePlaceholder: "Mr. Chen / Ms. Wang",
    countryCityPlaceholder: "e.g. Shanghai, China / Tokyo, Japan / Singapore",
    contactDetailPlaceholder: "WeChat, WhatsApp, LINE ID, phone number, or email",
    languageOptions: ["Chinese", "Japanese", "English"],
    contactOptions: ["WeChat", "WhatsApp", "LINE", "Phone", "Email"],
    urgencyOptions: ["Not urgent", "Within 1 month", "As soon as possible"],
    placeholder: "Briefly describe health goals, family context, timing, existing test results, or risk concerns.",
    submit: "Apply for Private Consultation",
    note:
      "Your inquiry enters the Medical Family Office private medical coordination process. We first review fit, then arrange communication in Chinese, Japanese, or English.",
    submitting: "Submitting securely...",
    error: "Submission is temporarily unavailable. Please try again later.",
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

export function ContactForm({ lang, typeOptions }: ContactFormProps) {
  const router = useRouter();
  const text = copy[lang];
  const [name, setName] = useState("");
  const [countryCity, setCountryCity] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState(text.languageOptions[0]);
  const [preferredContactMethod, setPreferredContactMethod] = useState(text.contactOptions[0]);
  const [contactDetail, setContactDetail] = useState("");
  const [inquiryType, setInquiryType] = useState(typeOptions[0] ?? "");
  const [urgency, setUrgency] = useState(text.urgencyOptions[0]);
  const [background, setBackground] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return;
    setStatus("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lang,
        name,
        countryCity,
        preferredLanguage,
        preferredContactMethod,
        contactDetail,
        email: contactDetail.includes("@") ? contactDetail : "",
        inquiryType,
        urgency,
        background,
        consent,
        sourcePage: window.location.toString()
      })
    }).catch(() => undefined);

    if (response?.ok) {
      router.push(withLanguage("/thank-you", lang));
      return;
    }

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

        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.background}
          <textarea
            required
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
            {text.error}
          </p>
        ) : null}

        <p className="text-xs leading-6 text-graphite/62">{text.note}</p>
      </div>
    </form>
  );
}
