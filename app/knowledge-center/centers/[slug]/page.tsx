import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getKnowledgeCenter, knowledgeCenters } from "@/lib/knowledge-centers";
import { getKnowledgeArticle } from "@/lib/knowledge";
import { createPageMetadata, languageAlternates, localizedUrl, siteUrl } from "@/lib/seo";
import { normalizeLanguage, withLanguage } from "@/lib/site";

type KnowledgeCenterDetailProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

const pageCopy = {
  zh: {
    center: "知识中心",
    overview: "中心定位",
    literature: "专业文献方向",
    readings: "延伸阅读",
    download: "行业资料下载",
    downloadTitle: "Medical Family Office 行业 FAQ",
    downloadBody: "用于初步了解私人医疗协调、长期健康治理、赴日医疗资源和合规边界。后续你发送新的行业 FAQ PDF 后，可以继续放在这里供客户下载。",
    downloadButton: "下载 PDF",
    consult: "私密咨询",
    disclaimer: "本中心内容用于医学教育、资料准备与风险认知，不构成诊断、治疗建议或效果承诺。具体诊疗方案必须由持牌医生基于个人情况判断。",
    empty: "更多专业文章正在整理中。"
  },
  ja: {
    center: "ナレッジセンター",
    overview: "センター概要",
    literature: "専門文献テーマ",
    readings: "関連記事",
    download: "業界資料ダウンロード",
    downloadTitle: "Medical Family Office FAQ",
    downloadBody: "プライベート医療調整、長期健康ガバナンス、訪日医療資源、コンプライアンス境界を理解するための資料です。新しい FAQ PDF は後からここへ追加できます。",
    downloadButton: "PDF をダウンロード",
    consult: "プライベート相談",
    disclaimer: "本センターの内容は教育、資料準備、リスク理解のための情報であり、診断、治療助言、効果保証ではありません。具体的な診療は医師が個別に判断します。",
    empty: "関連する専門記事を順次追加しています。"
  },
  en: {
    center: "Knowledge Center",
    overview: "Center Focus",
    literature: "Professional Literature Map",
    readings: "Related Reading",
    download: "Industry Knowledge Download",
    downloadTitle: "Medical Family Office FAQ",
    downloadBody: "A downloadable primer on private medical coordination, long-term health governance, Japan medical access, and compliance boundaries. Future FAQ PDFs can be added here.",
    downloadButton: "Download PDF",
    consult: "Private Inquiry",
    disclaimer: "This center is for education, preparation, and risk awareness. It does not provide diagnosis, treatment advice, or outcome guarantees. Clinical decisions must be made by licensed physicians based on individual circumstances.",
    empty: "More professional articles are being prepared."
  }
};

export function generateStaticParams() {
  return knowledgeCenters.map((center) => ({ slug: center.slug }));
}

export function generateMetadata({ params }: KnowledgeCenterDetailProps): Metadata {
  const center = getKnowledgeCenter(params.slug);

  if (!center) {
    return {
      title: "Knowledge Center"
    };
  }

  return createPageMetadata({
    path: `/knowledge-center/centers/${center.slug}`,
    title: `${center.title.zh} | Knowledge Center`,
    description: center.description.zh,
    image: center.image.src
  });
}

export default function KnowledgeCenterDetailPage({
  params,
  searchParams
}: KnowledgeCenterDetailProps) {
  const center = getKnowledgeCenter(params.slug);

  if (!center) notFound();

  const lang = normalizeLanguage(searchParams?.lang);
  const copy = pageCopy[lang];
  const relatedArticles = center.featuredArticleSlugs
    .map((slug) => getKnowledgeArticle(slug))
    .filter(Boolean);
  const centerUrl = localizedUrl(
    `/knowledge-center/centers/${center.slug}`,
    lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN"
  );
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: center.title[lang],
      description: center.description[lang],
      inLanguage: lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN",
      url: centerUrl,
      publisher: {
        "@type": "Organization",
        name: "Japan Medical Family Office",
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
          name: copy.center,
          item: localizedUrl("/knowledge-center", lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: center.title[lang],
          item: centerUrl
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
      <PageHero
        eyebrow={copy.center}
        title={center.title[lang]}
        secondaryTitle={center.label}
        description={center.description[lang]}
        secondaryDescription={center.purpose[lang]}
        cta={copy.consult}
        ctaHref={withLanguage("/contact", lang)}
        image={center.image}
      />

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.overview}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {center.title[lang]}
            </h2>
            <p className="mt-7 text-lg leading-9 text-graphite/74">
              {center.purpose[lang]}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-mist bg-white">
            <Image
              src={center.image.src}
              alt={center.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {center.label}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.literature}
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
              {center.literatureTopics[lang].map((topic) => (
                <div key={topic} className="bg-pearl p-6">
                  <p className="text-base font-semibold leading-8 text-ink">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.download}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              {copy.downloadTitle}
            </h2>
            <p className="mt-7 text-base leading-8 text-pearl/68">
              {copy.downloadBody}
            </p>
            <a
              href="/medical-family-office-faq.pdf"
              download
              className="mt-9 inline-flex bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              {copy.downloadButton} →
            </a>
          </div>
          <div className="border border-white/12 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne">
              {copy.readings}
            </p>
            <div className="mt-8 grid gap-4">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((article) =>
                  article ? (
                    <Link
                      key={article.slug}
                      href={withLanguage(`/knowledge-center/${article.slug}`, lang)}
                      className="border border-white/12 bg-ink/50 p-5 transition hover:border-champagne"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                        {article.category}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-tight">
                        {article.title[lang]}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-pearl/64">
                        {article.description[lang]}
                      </p>
                    </Link>
                  ) : null
                )
              ) : (
                <p className="text-base leading-8 text-pearl/68">{copy.empty}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl border border-mist bg-white p-7">
          <p className="text-sm leading-7 text-graphite/72">{copy.disclaimer}</p>
          <div className="sr-only">
            {Object.entries(languageAlternates(`/knowledge-center/centers/${center.slug}`)).map(
              ([locale, href]) => (
                <a key={locale} href={href}>
                  {locale}
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
