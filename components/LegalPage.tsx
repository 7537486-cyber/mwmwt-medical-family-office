import { PageHero } from "@/components/PageHero";
import type { LegalPageContent } from "@/lib/legal";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

type LegalPageProps = {
  page: LegalPageContent;
  searchParams?: {
    lang?: string;
  };
};

const secondaryTitles = {
  zh: "信任、隐私与合规边界",
  ja: "信頼、秘匿性、コンプライアンス境界",
  en: "Trust, privacy, and compliance boundaries"
};

const ctaLabels = {
  zh: "私密咨询",
  ja: "プライベート相談",
  en: "Private Inquiry"
};

export function LegalPage({ page, searchParams }: LegalPageProps) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = page.copies[lang];

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        secondaryTitle={secondaryTitles[lang]}
        description={copy.description}
        secondaryDescription={copy.note}
        cta={ctaLabels[lang]}
        ctaHref={withLanguage("/contact", lang)}
        image={serviceImages.about}
      />

      <article className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="border-l border-champagne pl-5 text-sm font-semibold text-graphite/70">
            {copy.updated}
          </p>
          <div className="mt-12 grid gap-6">
            {copy.sections.map((section) => (
              <section
                key={section.title}
                className="border border-mist bg-white p-7 shadow-quiet md:p-10"
              >
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
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
