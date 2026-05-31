import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage, pageText, pages, serviceImages, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系",
  description: pages.contact.description
};

const inquiryTypes = [
  "日本精密体检",
  "企业家健康管理",
  "长寿医学 / 抗衰管理",
  "再生医疗咨询",
  "重大疾病第二意见",
  "赴日就医协调",
  "生育力保存 / 冻卵咨询",
  "家庭长期健康规划"
];

const inquiryTypesEn = [
  "Executive checkups in Japan",
  "Executive health management",
  "Longevity medicine / anti-aging management",
  "Regenerative medicine consultation",
  "Major illness second opinion",
  "Japan medical coordination",
  "Fertility preservation / egg freezing",
  "Long-term family health planning"
];

const inquiryTypesJa = [
  "日本での精密健診",
  "エグゼクティブ健康管理",
  "長寿医学・アンチエイジング管理",
  "再生医療相談",
  "重大疾患のセカンドオピニオン",
  "訪日医療コーディネーション",
  "妊孕性温存・卵子凍結相談",
  "家族の長期健康計画"
];

const contactCopy = {
  zh: {
    firstStep: "私密初步沟通",
    scope: "联系方式",
    wechatTitle: "微信咨询",
    wechatBody: "可扫码添加私人礼宾微信，用于确认沟通时间、补充基础背景或预约初步说明。涉及完整病历、影像和敏感资料时，我们会另行提供更安全的提交方式。",
    trust: ["仅限预约沟通", "中日英协调", "信息保密", "不替代医生诊断", "适合高净值家庭、企业家与跨境医疗需求"]
  },
  ja: {
    firstStep: "プライベート初回相談",
    scope: "連絡方法",
    wechatTitle: "WeChat相談",
    wechatBody: "プライベートコンシェルジュのWeChatを追加し、面談時間、基本背景、初回説明の予約を確認できます。完全な病歴、画像、機微な資料については、安全な提出方法を別途ご案内します。",
    trust: ["予約制", "中日英対応", "情報の秘匿性", "医師の診断に代わるものではありません", "富裕層家族・経営者・国際医療ニーズに対応"]
  },
  en: {
    firstStep: "Private First Step",
    scope: "Contact Options",
    wechatTitle: "WeChat Inquiry",
    wechatBody: "Scan the QR code to add the private concierge WeChat for scheduling, basic context, or an introductory call. Complete medical records, imaging, and sensitive files should be sent only through a secure method provided by our team.",
    trust: ["Appointment only", "Chinese, Japanese, and English coordination", "Confidential handling", "Not a substitute for physician diagnosis", "For UHNW families, entrepreneurs, and cross-border medical needs"]
  }
};

export default function ContactPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const page = pages.contact;
  const text = pageText(page, lang);
  const typeOptions = lang === "en" ? inquiryTypesEn : lang === "ja" ? inquiryTypesJa : inquiryTypes;
  const copy = contactCopy[lang];
  const image = serviceImages.contact;

  return (
    <>
      <PageHero
        eyebrow={text.eyebrow}
        title={text.title}
        secondaryTitle={text.secondaryTitle}
        description={text.description}
        secondaryDescription={text.secondaryDescription}
        cta={text.cta}
        ctaHref={withLanguage("/contact", lang)}
        image={image}
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.scope}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {lang === "en"
                ? "Tell us the family's most important health priority."
                : lang === "ja"
                  ? "ご家族にとって最も重要な健康課題をお知らせください。"
                  : "告诉我们家庭当前最重要的健康议题。"}
            </h2>
            <div className="mt-8 grid gap-3">
              {copy.trust.map((item) => (
                <div key={item} className="border-l border-champagne/50 bg-white px-5 py-3">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-5 border border-mist bg-white p-6 shadow-sm sm:grid-cols-[150px_1fr] sm:items-center">
              <div className="relative mx-auto aspect-square w-36 overflow-hidden bg-pearl">
                <Image
                  src="/wechat-tyler-qr.jpg"
                  alt="MWMWT WeChat QR code"
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  WeChat
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{copy.wechatTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite/70">{copy.wechatBody}</p>
              </div>
            </div>
          </div>
          <ContactForm lang={lang} typeOptions={typeOptions} />
        </div>
      </section>
    </>
  );
}
