import { PageHero } from "@/components/PageHero";
import type { TrustPageContent } from "@/lib/trust";
import { type Language, withLanguage } from "@/lib/site";

type TrustPageProps = {
  page: TrustPageContent;
  lang: Language;
};

export function TrustPage({ page, lang }: TrustPageProps) {
  const copy = page.copies[lang];

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        secondaryTitle={copy.secondaryTitle}
        description={copy.description}
        secondaryDescription={copy.secondaryDescription}
        cta={lang === "ja" ? "プライベート相談" : lang === "en" ? "Private Consultation" : "私密咨询"}
        ctaHref={withLanguage("/contact", lang)}
        image={{
          src: page.image,
          alt: copy.title
        }}
      />

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            {copy.cards.map((card) => (
              <article key={card.title} className="border-l border-champagne/60 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-semibold text-ink">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/72">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-6">
            {copy.sections.map((section) => (
              <article key={section.title} className="border border-mist bg-white p-7 shadow-quiet md:p-10">
                <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-graphite/76">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
