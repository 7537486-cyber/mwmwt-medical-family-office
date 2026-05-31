import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getKnowledgeArticle, knowledgeArticles } from "@/lib/knowledge";
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

  return {
    title: article.title.zh,
    description: article.description.zh
  };
}

export default function KnowledgeArticlePage({
  params,
  searchParams
}: KnowledgeArticlePageProps) {
  const article = getKnowledgeArticle(params.slug);

  if (!article) notFound();

  const lang = normalizeLanguage(searchParams?.lang);
  const sections = article.sections[lang];

  return (
    <>
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
