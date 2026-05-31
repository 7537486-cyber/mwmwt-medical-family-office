import { CinematicSection } from "@/components/CinematicSection";
import { PageHero } from "@/components/PageHero";
import type { TrustPageContent } from "@/lib/trust";
import { type Language, withLanguage } from "@/lib/site";

type TrustPageProps = {
  page: TrustPageContent;
  lang: Language;
};

export function TrustPage({ page, lang }: TrustPageProps) {
  const copy = page.copies[lang];
  const cinematic =
    page.slug === "founder"
      ? {
          eyebrow: "Founder Philosophy",
          title: "Aging is inevitable. Decline is not.",
          body:
            lang === "en"
              ? "Time cannot be stopped. Health can be managed. Risk can be discovered earlier. The future can be planned with greater clarity."
              : lang === "ja"
                ? "時間は止められません。しかし健康は管理でき、リスクは早く見つけられ、未来はより明確に計画できます。"
                : "时间无法停止。但健康可以被管理，风险可以被提前发现，未来可以被更好地规划。"
        }
      : page.slug === "medical-advisory"
        ? {
            eyebrow: "Medical Advisory",
            title: "The most valuable medical decision is often the one made early.",
            body:
              lang === "en"
                ? "A private advisory structure helps families evaluate resources, risk, compliance, and follow-up before decisions become urgent."
                : lang === "ja"
                  ? "判断が急を要する前に、資源、リスク、適法性、フォローを整理するための医療顧問体制です。"
                  : "私人医疗顾问体系帮助家庭在决策变得紧急之前，先评估资源、风险、合规与后续管理。"
          }
        : {
            eyebrow: "Medical Family Office",
            title: "Your health deserves a long-term strategy.",
            body:
              lang === "en"
                ? "Health risk should be managed with the same discipline families use for assets, legal structures, and succession."
                : lang === "ja"
                  ? "健康リスクも、資産、法務、継承と同じ規律で管理されるべきです。"
                  : "健康风险也应像资产、法律结构和传承安排一样，被长期、系统、审慎地管理。"
          };

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

      <CinematicSection
        eyebrow={cinematic.eyebrow}
        title={cinematic.title}
        body={cinematic.body}
        image={{
          src: page.image,
          alt: copy.title
        }}
        align={page.slug === "medical-advisory" ? "right" : "left"}
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
