type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionIntro({ eyebrow, title, body }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-4xl leading-tight text-ink text-balance md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-base leading-8 text-graphite/72">{body}</p> : null}
    </div>
  );
}
