import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getKnowledgeArticle, knowledgeArticles } from "@/lib/knowledge";
import { createPageMetadata, localizedUrl, siteUrl } from "@/lib/seo";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

type KnowledgeArticlePageProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: KnowledgeArticlePageProps): Metadata {
  const article = getKnowledgeArticle(params.slug);

  if (!article) {
    return {
      title: "Knowledge Center"
    };
  }

  return createPageMetadata({
    path: `/knowledge-center/${article.slug}`,
    title: article.title.zh,
    description: article.description.zh,
    image: serviceImages["medical-resource-database"].src,
    type: "article"
  });
}

export default function KnowledgeArticlePage({
  params,
  searchParams
}: KnowledgeArticlePageProps) {
  const article = getKnowledgeArticle(params.slug);

  if (!article) notFound();

  const lang = normalizeLanguage(searchParams?.lang);
  const sections = article.sections[lang];
  const articleUrl = localizedUrl(`/knowledge-center/${article.slug}`, lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title[lang],
      description: article.description[lang],
      inLanguage: lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN",
      mainEntityOfPage: articleUrl,
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
          name: lang === "ja" ? "ナレッジセンター" : lang === "en" ? "Knowledge Center" : "知识中心",
          item: localizedUrl("/knowledge-center", lang === "ja" ? "ja-JP" : lang === "en" ? "en-US" : "zh-CN")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title[lang],
          item: articleUrl
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
        eyebrow={article.category}
        title={article.title[lang]}
        secondaryTitle="Medical Intelligence"
        description={article.description[lang]}
        secondaryDescription={
          lang === "ja"
            ? "本記事は教育目的の情報であり、診断、治療助言、効果保証ではありません。"
            : lang === "en"
              ? "This article is educational and does not provide diagnosis, treatment advice, or outcome guarantees."
              : "本文为医学教育与决策参考内容，不构成诊断、治疗建议或效果承诺。"
        }
        cta={lang === "ja" ? "プライベート相談" : lang === "en" ? "Private Inquiry" : "私密咨询"}
        ctaHref={withLanguage("/contact", lang)}
        image={serviceImages["medical-resource-database"]}
      />

      <article className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6">
            {sections.map((section) => (
              <section key={section.heading} className="border border-mist bg-white p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                  {article.category}
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
                  {section.heading}
                </h2>
                <p className="mt-6 text-base leading-8 text-graphite/76">
                  {section.body}
                </p>
                {section.points ? (
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {section.points.map((point) => (
                      <p key={point} className="border border-mist bg-pearl p-4 text-sm leading-7 text-ink">
                        {point}
                      </p>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
