import Image from "next/image";
import Link from "next/link";

type CinematicSectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image: {
    src: string;
    alt: string;
  };
  cta?: string;
  href?: string;
  align?: "left" | "center" | "right";
  height?: "medium" | "large";
};

export function CinematicSection({
  eyebrow,
  title,
  body,
  image,
  cta,
  href,
  align = "left",
  height = "medium"
}: CinematicSectionProps) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center"
      : align === "right"
        ? "ml-auto text-right"
        : "";
  const heightClass = height === "large" ? "min-h-[78vh]" : "min-h-[58vh]";

  return (
    <section className={`relative overflow-hidden bg-ink px-5 py-20 text-pearl lg:px-8 ${heightClass}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-center opacity-62"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/18" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.08),rgba(18,20,18,0.78))]" />
      <div className="relative mx-auto flex min-h-[inherit] max-w-7xl items-end">
        <div className={`max-w-4xl ${alignClass}`}>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-6 font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
            {title}
          </h2>
          {body ? (
            <p className="mt-7 max-w-3xl text-lg leading-9 text-pearl/74">{body}</p>
          ) : null}
          {cta && href ? (
            <Link
              href={href}
              className="mt-9 inline-flex bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              {cta} <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
