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
    phone: "电话 / WhatsApp / LINE",
    messenger: "微信 / 备用联系方式",
    email: "邮箱",
    inquiry: "咨询方向",
    background: "背景说明",
    namePlaceholder: "陈先生",
    phonePlaceholder: "+86 / +81 / +65 手机号，或 WhatsApp / LINE ID",
    messengerPlaceholder: "微信号或其他备用联系方式，可选",
    emailPlaceholder: "邮箱，可选",
    placeholder: "请简要说明目标、时间安排、家庭成员情况或已持有的医疗资料。",
    submit: "发送私密咨询",
    note:
      "提交后将进入 MWMWT 私人礼宾咨询系统，我们会优先通过您留下的电话、WhatsApp、LINE 或微信回复。",
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
    phone: "電話 / WhatsApp / LINE",
    messenger: "WeChat / 予備連絡先",
    email: "メール",
    inquiry: "ご相談内容",
    background: "ご状況",
    namePlaceholder: "山田様",
    phonePlaceholder: "+86 / +81 / +65 の電話番号、または WhatsApp / LINE ID",
    messengerPlaceholder: "WeChat ID または予備連絡先、任意",
    emailPlaceholder: "メール、任意",
    placeholder: "目的、時期、ご家族の状況、すでにお持ちの医療資料を簡潔にご記入ください。",
    submit: "プライベート相談を送信",
    note:
      "送信内容は MWMWT のプライベートコンシェルジュ相談システムに入り、電話、WhatsApp、LINE、WeChat を優先してご連絡します。",
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
    phone: "Phone / WhatsApp / LINE",
    messenger: "WeChat / Backup Contact",
    email: "Email",
    inquiry: "Inquiry type",
    background: "Background",
    namePlaceholder: "Mr. Chen",
    phonePlaceholder: "+86 / +81 / +65 phone number, or WhatsApp / LINE ID",
    messengerPlaceholder: "WeChat ID or backup contact, optional",
    emailPlaceholder: "Email, optional",
    placeholder: "Briefly describe goals, timing, family member context, or available medical records.",
    submit: "Submit Private Inquiry",
    note:
      "Your inquiry enters the MWMWT private concierge system. We will prioritize follow-up by phone, WhatsApp, LINE, or WeChat.",
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

export function ContactForm({ lang, typeOptions }: ContactFormProps) {
  const router = useRouter();
  const text = copy[lang];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [messenger, setMessenger] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState(typeOptions[0] ?? "");
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
        phone,
        messenger,
        email,
        inquiryType,
        background,
        consent
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
          {text.phone}
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.phonePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.messenger}
          <input
            value={messenger}
            onChange={(event) => setMessenger(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.messengerPlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.email}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.emailPlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.inquiry}
          <select
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
          >
            {typeOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
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
