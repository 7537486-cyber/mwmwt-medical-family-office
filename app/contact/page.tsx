import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage, pageText, pages, serviceImages } from "@/lib/site";

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
    scope: "咨询范围"
  },
  ja: {
    firstStep: "プライベート初回相談",
    scope: "相談範囲"
  },
  en: {
    firstStep: "Private First Step",
    scope: "Inquiry Scope"
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
      />
      <section className="bg-pearl px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="border-l border-champagne/50 pl-6">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.firstStep}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {lang === "en"
                ? "A discreet first conversation before any medical record transfer."
                : lang === "ja"
                  ? "医療資料を共有する前に、まずは静かな初回相談を。"
                  : "在传递敏感病历前，先进行一次克制而私密的初步沟通。"}
            </h2>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-mist bg-ink shadow-quiet">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>
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
            <div className="mt-10 grid gap-4">
              {typeOptions.map((item) => (
                <div key={item} className="border-l border-champagne/50 bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm lang={lang} typeOptions={typeOptions} />
        </div>
      </section>
    </>
  );
}
