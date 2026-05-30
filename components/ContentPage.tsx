import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { type Language, type PageContent, pageText, serviceImages } from "@/lib/site";

type ContentPageProps = {
  page: PageContent;
  lang: Language;
};

export function ContentPage({ page, lang }: ContentPageProps) {
  const text = pageText(page, lang);
  const image = serviceImages[page.slug];
  const sectionLabels = {
    zh: {
      visual: "视觉呈现",
      assurance: "信任依据",
      protocol: "服务流程"
    },
    ja: {
      visual: "ビジュアル",
      assurance: "信頼の根拠",
      protocol: "進行プロトコル"
    },
    en: {
      visual: "Visual Diligence",
      assurance: "Assurance",
      protocol: "Working Protocol"
    }
  }[lang];

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
      {image ? (
        <section className="bg-pearl px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="relative aspect-[16/10] overflow-hidden border border-mist bg-ink shadow-quiet">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="border-l border-champagne/50 pl-6">
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sectionLabels.visual}
              </p>
              <p className="mt-5 font-serif text-3xl leading-tight text-ink md:text-4xl">
                {lang === "en"
                  ? "A quieter visual language for high-stakes medical decisions."
                  : lang === "ja"
                    ? "重要な医療判断にふさわしい、静かなビジュアル設計。"
                    : "用更安静的视觉语言承载高风险医疗决策。"}
              </p>
            </div>
          </div>
        </section>
      ) : null}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border-l border-champagne/50 pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne">
              {sectionLabels.assurance}
            </p>
            <div className="mt-8 space-y-5">
              {text.proof.map((item) => (
                <p key={item} className="font-serif text-2xl leading-tight text-ink">
                  {item}
                </p>
              ))}
            </div>
          </aside>
          <div className="grid gap-5 md:grid-cols-3">
            {text.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="border border-mist bg-white/50 p-7 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{pillar.label}</p>
                <h2 className="mt-5 text-xl font-semibold text-ink">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/72">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {sectionLabels.protocol}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {lang === "en"
                ? "A clear protocol to reduce uncertainty"
                : lang === "ja"
                  ? "明確なプロトコルで不確実性を減らす"
                  : "清晰流程，减少不确定性"}
            </h2>
          </div>
          <div className="divide-y divide-mist border-y border-mist">
            {text.process.map((item, index) => (
              <div key={item} className="grid grid-cols-[4rem_1fr] py-6">
                <span className="font-serif text-3xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
