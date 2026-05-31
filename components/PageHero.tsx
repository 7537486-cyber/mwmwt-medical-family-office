import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  secondaryTitle: string;
  description: string;
  secondaryDescription: string;
  cta?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  secondaryTitle,
  description,
  secondaryDescription,
  cta = "Private Inquiry",
  image
}: PageHeroProps) {
  return (
    <section className="noise relative overflow-hidden bg-ink px-5 pb-14 pt-28 text-pearl md:min-h-[86vh] md:pb-20 md:pt-44 lg:px-8">
      {image ? (
        <>
          <div className="relative mb-10 aspect-[21/9] overflow-hidden border border-white/10 md:hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-contain object-center opacity-95"
              sizes="100vw"
            />
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="hidden object-cover object-center opacity-58 md:block"
            sizes="100vw"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/82 to-ink/22 md:block" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_bottom,rgba(18,20,18,0.08),rgba(18,20,18,0.78))] md:block" />
        </>
      ) : null}
      <div className="relative mx-auto flex max-w-7xl flex-col justify-end md:min-h-[calc(86vh-16rem)]">
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
          <p className="font-serif text-3xl leading-tight text-champagne">{secondaryTitle}</p>
          <p className="text-base leading-8 text-pearl/66">{secondaryDescription}</p>
        </div>
        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
        >
          {cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
