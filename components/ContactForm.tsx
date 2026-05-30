"use client";

import { FormEvent, useState } from "react";
import type { Language } from "@/lib/site";

type ContactFormProps = {
  lang: Language;
  typeOptions: string[];
};

const recipient = "7537486@qq.com";

const copy = {
  zh: {
    name: "称呼",
    contact: "联系方式",
    inquiry: "咨询方向",
    background: "背景说明",
    namePlaceholder: "陈先生",
    contactPlaceholder: "邮箱 / 微信 / 电话",
    placeholder: "请简要说明目标、时间安排、家庭成员情况或已持有的医疗资料。",
    submit: "发送私密咨询",
    note:
      "点击后会打开邮件草稿，请在邮件里确认内容后发送。正式版后续可接入加密邮件、CRM、预约系统或安全文件上传流程。"
  },
  ja: {
    name: "お名前",
    contact: "ご連絡先",
    inquiry: "ご相談内容",
    background: "ご状況",
    namePlaceholder: "山田様",
    contactPlaceholder: "メール / WeChat / 電話",
    placeholder: "目的、時期、ご家族の状況、すでにお持ちの医療資料を簡潔にご記入ください。",
    submit: "プライベート相談を送信",
    note:
      "クリックするとメール下書きが開きます。内容をご確認のうえ送信してください。正式版では暗号化メール、CRM、予約、ファイル共有にも接続できます。"
  },
  en: {
    name: "Name",
    contact: "Contact",
    inquiry: "Inquiry type",
    background: "Background",
    namePlaceholder: "Mr. Chen",
    contactPlaceholder: "Email / WeChat / Phone",
    placeholder: "Briefly describe goals, timing, family member context, or available medical records.",
    submit: "Submit Private Inquiry",
    note:
      "Clicking opens an email draft. Please review and send it from your email app. A secure email, CRM, booking, or protected file upload workflow can be connected later."
  }
};

export function ContactForm({ lang, typeOptions }: ContactFormProps) {
  const text = copy[lang];
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [inquiryType, setInquiryType] = useState(typeOptions[0] ?? "");
  const [background, setBackground] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Private inquiry - ${inquiryType}`);
    const body = encodeURIComponent(
      [
        `${text.name}: ${name}`,
        `${text.contact}: ${contact}`,
        `${text.inquiry}: ${inquiryType}`,
        "",
        `${text.background}:`,
        background
      ].join("\n")
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="border border-mist bg-white p-6 shadow-quiet md:p-10">
      <div className="grid gap-6">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.name}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.namePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          {text.contact}
          <input
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.contactPlaceholder}
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
            value={background}
            onChange={(event) => setBackground(event.target.value)}
            className="min-h-36 border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
            placeholder={text.placeholder}
          />
        </label>
        <button
          type="submit"
          className="bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
        >
          {text.submit}
        </button>
        <p className="text-xs leading-6 text-graphite/62">{text.note}</p>
      </div>
    </form>
  );
}
