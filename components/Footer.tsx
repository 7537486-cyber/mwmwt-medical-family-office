"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { navItems, navLabel, normalizeLanguage, withLanguage } from "@/lib/site";

const footerCopy = {
  zh: {
    headline: "连接日本先进医疗生态的私密入口。",
    disclaimer:
      "本网站内容仅用于服务介绍，不构成医疗诊断或治疗建议。具体医疗安排需基于医生评估、机构规则与个人健康状况确认。",
    navigation: "导航",
    legal: "合规",
    contact: "联系",
    desk: "东京协调办公室",
    response: "优先电话 / WhatsApp / LINE / 微信回复",
    languages: "中文 / 日语 / 英语",
    appointment: "仅限预约",
    legalLinks: [
      { label: "关于 Medical Family Office", href: "/about-medical-family-office" },
      { label: "创始人", href: "/founder" },
      { label: "医疗顾问体系", href: "/medical-advisory" },
      { label: "隐私政策", href: "/privacy-policy" },
      { label: "医疗免责声明", href: "/medical-disclaimer" },
      { label: "服务条款", href: "/terms-of-service" },
      { label: "合规与医疗治理", href: "/compliance" }
    ]
  },
  ja: {
    headline: "日本の高度医療エコシステムへのプライベートアクセス。",
    disclaimer:
      "本サイトの内容はサービス紹介を目的としており、医学的診断、治療助言、効果保証を行うものではありません。具体的な医療手配は医師評価、医療機関の規定、個人の健康状態に基づいて確認されます。",
    navigation: "ナビゲーション",
    legal: "コンプライアンス",
    contact: "お問い合わせ",
    desk: "東京コーディネーションデスク",
    response: "電話 / WhatsApp / LINE / WeChat 優先",
    languages: "中国語 / 日本語 / 英語",
    appointment: "完全予約制",
    legalLinks: [
      { label: "Medical Family Officeについて", href: "/about-medical-family-office" },
      { label: "創業者", href: "/founder" },
      { label: "医療アドバイザリー", href: "/medical-advisory" },
      { label: "プライバシーポリシー", href: "/privacy-policy" },
      { label: "医療免責事項", href: "/medical-disclaimer" },
      { label: "利用規約", href: "/terms-of-service" },
      { label: "コンプライアンス", href: "/compliance" }
    ]
  },
  en: {
    headline: "Private access to Japan's advanced medical ecosystem.",
    disclaimer:
      "This website is for service introduction only and does not constitute medical diagnosis or treatment advice. Specific arrangements depend on physician assessment, institutional rules, and individual health status.",
    navigation: "Navigation",
    legal: "Compliance",
    contact: "Contact",
    desk: "Tokyo coordination desk",
    response: "Phone / WhatsApp / LINE / WeChat first",
    languages: "Chinese / Japanese / English",
    appointment: "By appointment only",
    legalLinks: [
      { label: "About Medical Family Office", href: "/about-medical-family-office" },
      { label: "Founder", href: "/founder" },
      { label: "Medical Advisory", href: "/medical-advisory" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Compliance", href: "/compliance" }
    ]
  }
};

export function Footer() {
  const searchParams = useSearchParams();
  const lang = normalizeLanguage(searchParams.get("lang") ?? undefined);
  const copy = footerCopy[lang];

  return (
    <footer className="bg-ink px-5 py-16 text-pearl lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">
            Japan Medical Family Office
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-balance md:text-5xl">
            {copy.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-pearl/68">
            {copy.disclaimer}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-champagne">{copy.navigation}</p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={withLanguage(item.href, lang)}
                  className="text-sm text-pearl/70 transition hover:text-champagne"
                >
                  {navLabel(item, lang)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-champagne">{copy.legal}</p>
            <div className="mt-4 grid gap-3">
              {copy.legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={withLanguage(item.href, lang)}
                  className="text-sm text-pearl/70 transition hover:text-champagne"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-champagne">{copy.contact}</p>
            <div className="mt-4 space-y-3 text-sm text-pearl/70">
              <p>{copy.desk}</p>
              <p>{copy.response}</p>
              <p>{copy.languages}</p>
              <p>{copy.appointment}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
