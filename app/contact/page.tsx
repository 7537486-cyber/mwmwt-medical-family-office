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
  "再生医疗 / 抗衰项目",
  "重大疾病第二意见",
  "赴日就医礼宾",
  "冻卵与生育力保存",
  "家庭长期健康规划"
];

const inquiryTypesEn = [
  "Executive checkups in Japan",
  "Regenerative medicine / anti-aging",
  "Major illness second opinion",
  "Medical concierge travel to Japan",
  "Egg freezing / fertility preservation",
  "Long-term family health planning"
];

const inquiryTypesJa = [
  "日本での精密健診",
  "再生医療・アンチエイジング",
  "重大疾患のセカンドオピニオン",
  "訪日医療コンシェルジュ",
  "卵子凍結・妊孕性温存",
  "家族の長期健康計画"
];

const contactCopy = {
  zh: {
    firstStep: "私密初步沟通",
    scope: "联系方式",
    wechatTitle: "微信咨询",
    wechatBody: "可扫码添加微信，适合补充说明时间安排、家庭成员情况或希望先进行简短沟通。"
  },
  ja: {
    firstStep: "プライベート初回相談",
    scope: "連絡方法",
    wechatTitle: "WeChat相談",
    wechatBody: "QRコードからWeChatを追加し、希望時期やご家族の状況について簡単にご相談いただけます。"
  },
  en: {
    firstStep: "Private First Step",
    scope: "Contact Options",
    wechatTitle: "WeChat Inquiry",
    wechatBody: "Scan the QR code to add us on WeChat for timing, family context, or a brief first conversation."
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
                ? "Tell us the family's most important health priority"
                : lang === "ja"
                  ? "ご家族にとって最も重要な健康課題をお知らせください"
                  : "告诉我们家庭当前最重要的健康议题"}
            </h2>
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
