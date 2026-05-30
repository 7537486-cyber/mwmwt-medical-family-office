import { PageHero } from "@/components/PageHero";
import type { PageContent } from "@/lib/site";

type ContentPageProps = {
  page: PageContent;
};

export function ContentPage({ page }: ContentPageProps) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        jaTitle={page.jaTitle}
        description={page.description}
        jaDescription={page.jaDescription}
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border-l border-champagne/50 pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne">Assurance</p>
            <div className="mt-8 space-y-5">
              {page.proof.map((item) => (
                <p key={item} className="font-serif text-2xl leading-tight text-ink">
                  {item}
                </p>
              ))}
            </div>
          </aside>
          <div className="grid gap-5 md:grid-cols-3">
            {page.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="border border-mist bg-white/50 p-7 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                  {pillar.ja}
                </p>
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
              Working Protocol
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              清晰流程，减少不确定性
            </h2>
          </div>
          <div className="divide-y divide-mist border-y border-mist">
            {page.process.map((item, index) => (
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
