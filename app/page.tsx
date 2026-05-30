import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import {
  homeServices,
  normalizeLanguage,
  pageText,
  serviceImages,
  withLanguage
} from "@/lib/site";

const homeCopy = {
  zh: {
    title: "为中国高净值家庭连接日本先进医疗与长寿管理",
    intro:
      "我们提供再生医疗咨询、抗衰项目、精密体检、第二诊疗意见、海外转诊与长期家庭健康规划。以私行式礼宾与医学顾问体系，让跨境医疗决策更安静、更审慎、更可执行。",
    side:
      "日本の高度医療、再生医療、予防医療、長寿管理を、中国語と日本語で丁寧にコーディネートします。",
    inquiry: "预约私密咨询",
    metrics: ["日本本地医疗资源协调", "中日英三语家庭健康顾问", "长期健康档案与年度复盘"],
    sectionTitle: "不是医院中介，而是面向家庭长期利益的医疗顾问平台",
    sectionBody:
      "每一次检查、会诊或治疗都应纳入更长周期的健康治理框架。我们帮助家庭理解选择、排序风险、管理隐私，并在日本完成高质量医疗协作。",
    governanceTitle: "把医疗资源、时间成本与家族风险放在同一张桌上讨论",
    governanceBody: [
      "高净值家庭面对的医疗问题，往往不是单一预约，而是信息不对称、跨语言沟通、隐私保护、时间效率和重大决策压力的叠加。",
      "私人医疗家族办公室以顾问视角整理问题：哪些事情需要立即处理，哪些需要年度观察，哪些不应被过度医疗推动。"
    ]
  },
  ja: {
    title: "中国富裕層家族を日本の高度医療と長寿管理へ",
    intro:
      "再生医療相談、アンチエイジング、精密健診、セカンドオピニオン、海外紹介、長期的な家族健康計画を、プライベートバンキングのような静かな体制で支援します。",
    side:
      "中国語、日本語、英語で、日本の高度医療、予防医療、長寿管理を丁寧にコーディネートします。",
    inquiry: "プライベート相談",
    metrics: ["日本現地の医療調整", "中日英トリリンガル顧問", "長期健康記録と年次レビュー"],
    sectionTitle: "病院紹介ではなく、家族の長期利益に向き合う医療アドバイザリー",
    sectionBody:
      "検査、診察、治療を長期的な健康ガバナンスの中に位置づけ、選択肢、リスク、秘匿性、医療連携を整理します。",
    governanceTitle: "医療資源、時間コスト、家族リスクを同じテーブルで整理する",
    governanceBody: [
      "富裕層家族の医療課題は、予約だけではなく、情報格差、言語、秘匿性、時間効率、重大判断が重なります。",
      "医療ファミリーオフィスは、今すぐ対応すべきこと、観察すべきこと、過剰医療を避けるべきことを整理します。"
    ]
  },
  en: {
    title: "Japan medical access and longevity planning for Chinese high-net-worth families",
    intro:
      "We provide regenerative medicine consultation, anti-aging programs, executive checkups, second opinions, overseas referrals, and long-term family health planning through a discreet medical concierge and advisory model.",
    side:
      "Japan's advanced medicine, preventive care, and longevity management are coordinated in Chinese, Japanese, and English.",
    inquiry: "Book a private inquiry",
    metrics: ["Japan-based medical coordination", "Chinese, Japanese, and English family advisors", "Long-term health archive and annual review"],
    sectionTitle: "Not a hospital broker, but a medical advisory platform for long-term family interests",
    sectionBody:
      "Every checkup, consultation, and treatment should sit inside a longer health governance framework. We help families understand options, prioritize risk, protect privacy, and coordinate high-quality care in Japan.",
    governanceTitle: "Medical resources, time cost, and family risk belong at the same table",
    governanceBody: [
      "For high-net-worth families, medical decisions are rarely just appointments. They involve information asymmetry, language, privacy, efficiency, and high-stakes judgment.",
      "A private medical family office clarifies what needs immediate action, what requires annual observation, and what should not be driven by unnecessary intervention."
    ]
  }
};

export default function Home({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = homeCopy[lang];

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-pearl">
        <Image
          src="/hero-longevity-concierge.png"
          alt="Luxury Tokyo medical family office lounge"
          fill
          priority
          className="object-cover object-center opacity-72"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.2),rgba(18,20,18,0.72))]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-44 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            Japan Medical Family Office
          </p>
          <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
            {copy.title}
          </h1>
          <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <p className="text-lg leading-9 text-pearl/78">
              {copy.intro}
            </p>
            <p className="border-l border-champagne/50 pl-6 text-base leading-8 text-pearl/68">
              {copy.side}
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={withLanguage("/contact", lang)}
              className="inline-flex items-center justify-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              {copy.inquiry} <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={withLanguage("/services", lang)}
              className="inline-flex items-center justify-center border border-pearl/45 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:border-champagne hover:text-champagne"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {copy.metrics.map((label, index) => (
            <div key={label} className="border-t border-champagne/50 pt-6">
              <p className="font-serif text-5xl text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-lg text-ink">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What We Arrange"
            title={copy.sectionTitle}
            body={copy.sectionBody}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeServices.map((service) => {
              const serviceText = pageText(service, lang);
              const image = serviceImages[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={withLanguage(`/${service.slug}`, lang)}
                  className="group overflow-hidden border border-mist bg-pearl/55 transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
                >
                  {image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                      {serviceText.eyebrow}
                    </p>
                    <h2 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                      {serviceText.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-graphite/72">
                      {serviceText.description}
                    </p>
                    <span className="mt-8 inline-flex text-sm font-semibold text-jade">
                      {serviceText.cta} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Family Governance
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              {copy.governanceTitle}
            </h2>
          </div>
          <div className="grid gap-6 text-pearl/72">
            {copy.governanceBody.map((item) => (
              <p key={item} className="text-lg leading-9">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
