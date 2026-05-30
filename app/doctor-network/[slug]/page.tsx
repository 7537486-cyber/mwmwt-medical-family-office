import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctorProfiles, getDoctorProfile } from "@/lib/doctors";
import { normalizeLanguage, withLanguage } from "@/lib/site";

type DoctorPageProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

const sections = [
  ["学历", "education"],
  ["学会资格", "societies"],
  ["研究方向", "research"],
  ["论文", "papers"],
  ["案例", "cases"]
] as const;

export function generateStaticParams() {
  return doctorProfiles.map((doctor) => ({ slug: doctor.slug }));
}

export function generateMetadata({ params }: DoctorPageProps): Metadata {
  const doctor = getDoctorProfile(params.slug);

  if (!doctor) {
    return {
      title: "医生档案"
    };
  }

  return {
    title: `${doctor.name} 医生档案`,
    description: `${doctor.name}（${doctor.jaName}）${doctor.specialty}专家档案，包含学历、学会资格、研究方向、论文和适配案例。`
  };
}

export default function DoctorProfilePage({ params, searchParams }: DoctorPageProps) {
  const doctor = getDoctorProfile(params.slug);
  const lang = normalizeLanguage(searchParams?.lang);

  if (!doctor) {
    notFound();
  }

  return (
    <>
      <section className="noise bg-ink px-5 pb-16 pt-44 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href={withLanguage("/doctor-network", lang)}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne transition hover:text-pearl"
          >
            ← Doctor Network
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
                {doctor.specialty}
              </p>
              <h1 className="mt-7 font-serif text-5xl leading-[1.03] text-balance md:text-7xl">
                {doctor.name}
              </h1>
              <p className="mt-4 font-serif text-3xl text-champagne">{doctor.jaName}</p>
              <p className="mt-8 max-w-3xl text-lg leading-9 text-pearl/76">
                {doctor.summary}
              </p>
            </div>
            <aside className="border border-white/12 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                Current Profile
              </p>
              <dl className="mt-7 space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    Institution
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{doctor.institution}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    Role
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{doctor.role}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-5">
          {sections.map(([title, key]) => (
            <article key={key} className="border border-mist bg-white/72 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                {title}
              </p>
              <ul className="mt-6 space-y-4">
                {doctor[key].map((item) => (
                  <li key={item} className="text-sm leading-7 text-graphite/78">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Public Sources
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              公开资料线索
            </h2>
            <p className="mt-5 text-sm leading-7 text-graphite/70">
              以下链接用于初步履历核验；正式转诊前仍需再次确认医生当前任职、接诊规则与机构准入要求。
            </p>
          </div>
          <div className="divide-y divide-mist border-y border-mist">
            {doctor.sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-6 py-6 text-ink transition hover:text-jade"
              >
                <span className="text-lg">{source.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
