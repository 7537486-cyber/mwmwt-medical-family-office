import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  jaTitle: string;
  description: string;
  jaDescription: string;
};

export function PageHero({
  eyebrow,
  title,
  jaTitle,
  description,
  jaDescription
}: PageHeroProps) {
  return (
    <section className="noise bg-ink px-5 pb-20 pt-44 text-pearl lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            {eyebrow}
          </p>
          <h1 className="mt-8 font-serif text-5xl leading-[1.03] text-balance md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-pearl/76">
            {description}
          </p>
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/12 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="font-serif text-3xl leading-tight text-champagne">{jaTitle}</p>
          <p className="text-base leading-8 text-pearl/66">{jaDescription}</p>
        </div>
        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
        >
          Private Inquiry <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
