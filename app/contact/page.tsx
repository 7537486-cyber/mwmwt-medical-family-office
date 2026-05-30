import type { Metadata } from "next";
import Image from "next/image";
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
  "家庭长期健康规划"
];

const inquiryTypesEn = [
  "Executive checkups in Japan",
  "Regenerative medicine / anti-aging",
  "Major illness second opinion",
  "Medical concierge travel to Japan",
  "Long-term family health planning"
];

export default function ContactPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const page = pages.contact;
  const text = pageText(page, lang);
  const typeOptions = lang === "en" ? inquiryTypesEn : inquiryTypes;
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
              Private First Step
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
              Inquiry Scope
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
          <form className="border border-mist bg-white p-6 shadow-quiet md:p-10">
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {lang === "en" ? "Name" : "称呼 / お名前"}
                <input
                  className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
                  placeholder="Mr. Chen"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {lang === "en" ? "Contact" : "联系方式 / ご連絡先"}
                <input
                  className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
                  placeholder="Email / WeChat / Phone"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {lang === "en" ? "Inquiry type" : "咨询方向 / ご相談内容"}
                <select className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne">
                  {typeOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                {lang === "en" ? "Background" : "背景说明 / ご状況"}
                <textarea
                  className="min-h-36 border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
                  placeholder={
                    lang === "en"
                      ? "Briefly describe goals, timing, family member context, or available medical records."
                      : "请简要说明目标、时间安排、家庭成员情况或已持有的医疗资料。"
                  }
                />
              </label>
              <button
                type="button"
                className="bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
              >
                Submit Private Inquiry
              </button>
              <p className="text-xs leading-6 text-graphite/62">
                {lang === "en"
                  ? "This form is a front-end demo. A secure email, CRM, booking, or protected file upload workflow can be connected later."
                  : "表单为前端展示版本。正式上线时可接入加密邮件、CRM、预约系统或安全文件上传流程。"}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
