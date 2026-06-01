import type { Metadata } from "next";
import Link from "next/link";
import { knowledgeCenters } from "@/lib/knowledge-centers";
import { FAQ_LIBRARY_UPDATED_AT, getFaqByCenter, knowledgeFaqItems } from "@/lib/knowledge-faq";
import { createPageMetadata, languageAlternates, localizedUrl, siteUrl } from "@/lib/seo";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  path: "/knowledge-center/faq",
  title: "Medical Family Office FAQ Magazine",
  description:
    "A compact, expandable FAQ library for Medical Family Office, longevity medicine, regenerative medicine, executive health, and global medical access."
});

const pageCopy = {
  zh: {
    eyebrow: "FAQ Magazine",
    title: "高净值健康管理 FAQ 杂志",
    subtitle: "不做教科书。每天整理一个更接近真实客户问题的答案。",
    body: "这里收录 Medical Family Office、长寿医学、再生医学、全球医疗资源、企业家健康与家庭健康治理相关问题。答案保持短、清楚、有边界；不想看就收起，想看再展开。",
    updated: "每日更新资料库",
    total: "当前 FAQ 条目",
    centers: "按知识中心浏览",
    latest: "最新问题",
    archive: "完整 FAQ 目录",
    readCenter: "进入中心",
    disclaimer: "FAQ 用于医学教育、风险认知和资料准备，不构成诊断、治疗建议或效果承诺。具体医疗决策必须由持牌医生基于个人情况判断。"
  },
  ja: {
    eyebrow: "FAQ Magazine",
    title: "富裕層向け健康管理 FAQ マガジン",
    subtitle: "教科書ではなく、実際の相談に近い問いを短く整理します。",
    body: "Medical Family Office、長寿医学、再生医療、国際医療アクセス、経営者健康、家族健康ガバナンスに関する質問を収録します。読みたい時だけ開ける短い回答形式です。",
    updated: "毎日更新型ライブラリ",
    total: "現在の FAQ 数",
    centers: "ナレッジセンター別に見る",
    latest: "最新の質問",
    archive: "FAQ 全体",
    readCenter: "センターを見る",
    disclaimer: "FAQ は教育、リスク理解、資料準備のための情報であり、診断、治療助言、効果保証ではありません。具体的な医療判断は医師が個別に行います。"
  },
  en: {
    eyebrow: "FAQ Magazine",
    title: "Private Health Management FAQ Magazine",
    subtitle: "Not a textbook. A compact daily library of real decision questions.",
    body: "This library covers Medical Family Office, longevity medicine, regenerative medicine, global medical access, executive health, and family health governance. Answers stay short and bounded: closed by default, opened only when useful.",
    updated: "Daily FAQ library",
    total: "Current FAQ items",
    centers: "Browse by Knowledge Center",
    latest: "Latest Questions",
    archive: "Full FAQ Archive",
    readCenter: "Explore Center",
    disclaimer: "FAQ content is for education, risk awareness, and preparation. It does not provide diagnosis, treatment advice, or outcome guarantees. Clinical decisions must be made by licensed physicians based on individual circumstances."
  }
};

export default function KnowledgeFaqPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = pageCopy[lang];
  const latestFaq = knowledgeFaqItems.slice(0, 24);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: copy.title,
      description: copy.body,
      inLanguage: lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN",
      url: localizedUrl("/knowledge-center/faq", lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN"),
      mainEntity: latestFaq.map((item) => ({
        "@type": "Question",
        name: item.question[lang],
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer[lang]
        }
      })),
      publisher: {
        "@type": "Organization",
        name: "AETERA Medical Family Office",
        url: siteUrl
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: lang === "ja" ? "ホーム" : lang === "en" ? "Home" : "首页",
          item: localizedUrl("/", lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN")
        },
        {
          "@type": "ListItem",
          position: 2,
          name: lang === "ja" ? "ナレッジセンター" : lang === "en" ? "Knowledge Center" : "知识中心",
          item: localizedUrl("/knowledge-center", lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: copy.title,
          item: localizedUrl("/knowledge-center/faq", lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN")
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="bg-ink px-5 pb-20 pt-36 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-champagne">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              {copy.title}
            </h1>
          </div>
          <div>
            <p className="text-2xl leading-9 text-pearl/88 md:text-3xl">
              {copy.subtitle}
            </p>
            <p className="mt-6 text-base leading-8 text-pearl/66">
              {copy.body}
            </p>
            <div className="mt-8 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2">
              <div className="bg-ink p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{copy.updated}</p>
                <p className="mt-3 text-2xl font-semibold">{FAQ_LIBRARY_UPDATED_AT}</p>
              </div>
              <div className="bg-ink p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{copy.total}</p>
                <p className="mt-3 text-2xl font-semibold">{knowledgeFaqItems.length.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {copy.centers}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.centers}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {knowledgeCenters.map((center) => (
                <a
                  key={center.slug}
                  href={`#${center.slug}`}
                  className="group border border-mist bg-white p-6 transition hover:border-champagne hover:bg-ink"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                    {center.label}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-ink transition group-hover:text-pearl">
                    {center.title[lang]}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/70 transition group-hover:text-pearl/66">
                    {getFaqByCenter(center.slug).length.toLocaleString()} FAQ
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {copy.latest}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.latest}
              </h2>
            </div>
            <Link
              href={withLanguage("/knowledge-center", lang)}
              className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne transition hover:text-ink"
            >
              {lang === "ja" ? "ナレッジセンターへ" : lang === "en" ? "Back to Knowledge Center" : "返回知识中心"} →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {latestFaq.map((item) => (
              <FaqCard
                key={item.id}
                question={item.question[lang]}
                answer={item.answer[lang]}
                meta={`${item.centerLabel} / ${item.publishedAt}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.archive}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {copy.archive}
            </h2>
          </div>
          <div className="space-y-16">
            {knowledgeCenters.map((center) => {
              const centerFaq = getFaqByCenter(center.slug);
              return (
                <section key={center.slug} id={center.slug} className="scroll-mt-28">
                  <div className="mb-6 flex flex-col gap-4 border-b border-mist pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-champagne">
                        {center.label}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl leading-tight text-ink md:text-5xl">
                        {center.title[lang]}
                      </h3>
                    </div>
                    <Link
                      href={withLanguage(`/knowledge-center/centers/${center.slug}`, lang)}
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne transition hover:text-ink"
                    >
                      {copy.readCenter} →
                    </Link>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {centerFaq.map((item) => (
                      <FaqCard
                        key={item.id}
                        question={item.question[lang]}
                        answer={item.answer[lang]}
                        meta={`${item.publishedAt} / ${item.audienceKey}`}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl border border-white/12 bg-white/5 p-7">
          <p className="text-sm leading-7 text-pearl/68">{copy.disclaimer}</p>
          <div className="sr-only">
            {Object.entries(languageAlternates("/knowledge-center/faq")).map(([locale, href]) => (
              <a key={locale} href={href}>
                {locale}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqCard({
  question,
  answer,
  meta
}: {
  question: string;
  answer: string;
  meta: string;
}) {
  return (
    <details className="group border border-mist bg-white p-6 shadow-sm transition open:border-champagne open:bg-pearl">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
        <span>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-champagne">{meta}</span>
          <span className="mt-3 block text-xl font-semibold leading-tight text-ink">{question}</span>
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center border border-champagne text-lg leading-none text-champagne">
          <span className="group-open:hidden">＋</span>
          <span className="hidden group-open:block">−</span>
        </span>
      </summary>
      <p className="mt-5 text-sm leading-7 text-graphite/74">{answer}</p>
    </details>
  );
}
