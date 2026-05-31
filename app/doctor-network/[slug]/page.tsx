import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctorProfiles, getDoctorProfile } from "@/lib/doctors";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

type DoctorPageProps = {
  params: { slug: string };
  searchParams?: { lang?: string };
};

const sectionSets = {
  zh: [
    ["学历", "education"],
    ["医师资格 / 学会资格", "societies"],
    ["研究方向", "research"],
    ["代表论文", "papers"],
    ["临床经验与案例方向", "cases"]
  ],
  ja: [
    ["学歴", "education"],
    ["医師資格 / 学会活動", "societies"],
    ["研究領域", "research"],
    ["代表的な論文・公開資料", "papers"],
    ["臨床経験と相談領域", "cases"]
  ],
  en: [
    ["Education", "education"],
    ["Qualifications / Societies", "societies"],
    ["Research Focus", "research"],
    ["Selected Publications", "papers"],
    ["Clinical Experience and Case Focus", "cases"]
  ]
} as const;

const genericDoctorDetails = {
  ja: {
    education: ["公開履歴と医療機関情報を基に整理", "正式紹介前に現在の所属と受診条件を再確認", "必要に応じて追加資料を取得"],
    societies: ["関連学会活動と専門領域を公開情報で確認", "資格、役職、受診可否は個別に再確認", "医療機関の規定と紹介条件を確認"],
    research: ["専門領域と研究テーマの整理", "公開論文・研究資料の初期確認", "相談内容との適合性評価"],
    papers: ["公開論文、大学・病院プロフィール、PubMed 等を参照", "正式紹介前に最新情報を再確認", "ページ内容は背景紹介であり診療判断ではありません"],
    cases: ["セカンドオピニオン前の資料整理", "専門医相談の適合性確認", "国際医療紹介と長期フォローの準備"]
  },
  en: {
    education: ["Organized from public profiles and institution information", "Current role and access rules are reconfirmed before referral", "Additional documents are requested when needed"],
    societies: ["Society activity and specialty scope reviewed from public information", "Qualifications, roles, and availability are confirmed case by case", "Institution rules and referral requirements are checked"],
    research: ["Specialty focus and research themes are organized", "Public papers and research materials are reviewed initially", "Fit with the client's question is assessed before referral"],
    papers: ["Publications, university or hospital profiles, and PubMed references may be used", "Latest information is reconfirmed before any referral", "This page introduces background and does not provide medical advice"],
    cases: ["Document preparation before second opinions", "Specialist-fit review", "International referral preparation and long-term follow-up planning"]
  }
};

const doctorCopy = {
  zh: {
    back: "← 医生网络",
    profile: "医生基本信息",
    institution: "机构",
    role: "职务",
    sources: "公开资料",
    sourceTitle: "公开资料线索",
    field: "所属领域",
    city: "所在城市",
    cooperation: "合作身份",
    cooperationValue: "转诊前个案确认",
    languages: "可服务语言",
    languagesValue: "日语 / 中文协调 / 英文协调",
    positioning: "专业定位",
    positioningBody:
      "医生专注领域基于公开资料与研究方向整理，适用于专科匹配、第二诊疗意见、长期健康管理和跨境医疗资源判断。具体诊疗方案需由持牌医生根据个人情况决定。",
    suitable: "适合客户",
    suitableItems: ["企业家", "家族办公室客户", "高净值家庭", "希望进行深度体检的人群", "需要第二诊疗意见的客户", "希望进行长期健康管理的人群"],
    support: "医疗家族办公室如何协助",
    supportBody:
      "我们不是单一诊所，而是医疗资源整合顾问。我们协助客户匹配合适医生、整理既往病历、安排预约、翻译医疗资料、陪同就诊、协调第二诊疗意见，并建立长期健康管理档案。",
    disclaimer: "合规免责声明",
    disclaimerBody:
      "本页面内容仅用于医生专业背景介绍，不构成医疗广告、诊断建议或治疗承诺。具体诊疗方案需由持牌医生根据客户个人情况进行判断。医生当前任职、接诊规则、合作身份与机构准入要求需在正式转诊前再次核验。",
    sourceBody:
      "以下链接用于初步履历核验；正式转诊前仍需再次确认医生当前任职、接诊规则与机构准入要求。",
    genericSpecialty: "",
    genericRole: "",
    genericSummary: ""
  },
  ja: {
    back: "← 医師ネットワーク",
    profile: "医師基本情報",
    institution: "所属機関",
    role: "役職",
    sources: "公開情報",
    sourceTitle: "公開情報の手がかり",
    field: "専門領域",
    city: "所在都市",
    cooperation: "協力形態",
    cooperationValue: "紹介前に個別確認",
    languages: "対応言語",
    languagesValue: "日本語 / 中国語調整 / 英語調整",
    positioning: "専門的な位置づけ",
    positioningBody:
      "専門領域は公開情報と研究方向に基づいて整理しています。専門医マッチング、セカンドオピニオン、長期健康管理、国際医療判断の参考情報です。",
    suitable: "適したクライアント",
    suitableItems: ["起業家", "ファミリーオフィス顧客", "富裕層家族", "深度健診を希望する方", "セカンドオピニオンが必要な方", "長期健康管理を希望する方"],
    support: "医療ファミリーオフィスの支援",
    supportBody:
      "当社は単一クリニックではなく、医療資源統合アドバイザーです。医師マッチング、既往資料整理、予約調整、医療資料翻訳、受診同行、セカンドオピニオン調整、長期健康記録の構築を支援します。",
    disclaimer: "免責事項",
    disclaimerBody:
      "本ページは医師の専門背景紹介を目的としており、医療広告、診断助言、治療効果の保証ではありません。具体的な診療方針は、個別状況に基づき医師が判断します。",
    sourceBody:
      "以下のリンクは初期確認のための公開情報です。正式紹介前には現在の所属、受診規定、医療機関の受入条件を再確認します。",
    genericSpecialty: "専門医プロフィール",
    genericRole: "公開情報に基づく専門医リソース",
    genericSummary:
      "公開情報、研究領域、紹介前の確認項目を整理した専門医プロフィールです。実際の受診可否、協力形態、医療機関規定は個別に確認します。"
  },
  en: {
    back: "← Doctor Network",
    profile: "Doctor Information",
    institution: "Institution",
    role: "Role",
    sources: "Public Sources",
    sourceTitle: "Public source references",
    field: "Specialty",
    city: "City",
    cooperation: "Cooperation identity",
    cooperationValue: "Confirmed case by case before referral",
    languages: "Available languages",
    languagesValue: "Japanese / Chinese coordination / English coordination",
    positioning: "Professional Positioning",
    positioningBody:
      "The doctor's field is organized from public information and research focus. It supports specialist matching, second opinions, long-term health management, and cross-border medical resource decisions.",
    suitable: "Suitable For",
    suitableItems: ["Entrepreneurs", "Family office clients", "High-net-worth families", "Clients seeking advanced screening", "Clients needing second opinions", "Clients seeking long-term health management"],
    support: "How We Support",
    supportBody:
      "We are not a single clinic. We act as a medical resource integration advisor, supporting doctor matching, record preparation, appointment coordination, translation, on-site support, second-opinion coordination, and long-term health archives.",
    disclaimer: "Disclaimer",
    disclaimerBody:
      "This page is for professional background introduction only and does not constitute medical advertising, diagnostic advice, or treatment commitment. Specific care decisions must be made by licensed physicians based on individual circumstances.",
    sourceBody:
      "The following links support initial profile review. Current role, appointment rules, and institution access requirements must be confirmed again before referral.",
    genericSpecialty: "Specialist Profile",
    genericRole: "Public-information-based specialist resource",
    genericSummary:
      "A specialist profile organized from public information, research focus, and pre-referral review points. Current availability, cooperation identity, and institution rules are confirmed case by case."
  }
};

const citiesBySlug: Record<string, string> = {
  "hideyuki-okano": "Tokyo",
  "tetsuya-mitsudomi": "Osaka / Kanagawa",
  "yoshiki-sawa": "Osaka",
  "ryosuke-takahashi": "Kyoto",
  "takashi-kadowaki": "Tokyo",
  "ryosuke-kuroda": "Kobe"
};

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
  const copy = doctorCopy[lang];

  if (!doctor) {
    notFound();
  }

  const city = citiesBySlug[doctor.slug] ?? "Japan";
  const sectionSet = sectionSets[lang];
  const specialty = lang === "zh" ? doctor.specialty : copy.genericSpecialty;
  const role = lang === "zh" ? doctor.role : copy.genericRole;
  const summary = lang === "zh" ? doctor.summary : copy.genericSummary;

  return (
    <>
      <section className="noise relative min-h-[86vh] overflow-hidden bg-ink px-5 pb-16 pt-44 text-pearl lg:px-8">
        <Image
          src={serviceImages["doctor-network"].src}
          alt={serviceImages["doctor-network"].alt}
          fill
          priority
          className="object-contain object-top opacity-70 md:object-cover md:object-center md:opacity-52"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-ink/22" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.08),rgba(18,20,18,0.8))]" />
        <div className="relative mx-auto flex min-h-[calc(86vh-15rem)] max-w-7xl flex-col justify-end">
          <Link
            href={withLanguage("/doctor-network", lang)}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne transition hover:text-pearl"
          >
            {copy.back}
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
                {specialty}
              </p>
              <h1 className="mt-7 font-serif text-5xl leading-[1.03] text-balance md:text-7xl">
                {doctor.name}
              </h1>
              {lang !== "en" ? (
                <p className="mt-4 font-serif text-3xl text-champagne">{doctor.jaName}</p>
              ) : null}
              <p className="mt-8 max-w-3xl text-lg leading-9 text-pearl/76">
                {summary}
              </p>
            </div>
            <aside className="border border-white/12 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                {copy.profile}
              </p>
              <dl className="mt-7 space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    {copy.field}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{specialty}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    {copy.institution}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{doctor.institution}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    {copy.city}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{city}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    {copy.role}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{role}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    {copy.cooperation}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{copy.cooperationValue}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.22em] text-pearl/45">
                    {copy.languages}
                  </dt>
                  <dd className="mt-2 text-lg leading-7 text-pearl">{copy.languagesValue}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.positioning}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {doctor.name} | {specialty}
            </h2>
          </div>
          <p className="text-lg leading-9 text-graphite/72">{copy.positioningBody}</p>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-5">
          {sectionSet.map(([title, key]) => (
            <article key={key} className="border border-mist bg-white/72 p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                {title}
              </p>
              <ul className="mt-6 space-y-4">
                {(lang === "zh" ? doctor[key] : genericDoctorDetails[lang][key]).map((item) => (
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
              {copy.suitable}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {copy.suitable}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
            {copy.suitableItems.map((item) => (
              <div key={item} className="bg-pearl p-6">
                <p className="text-sm font-semibold leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.support}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Medical Family Office
            </h2>
          </div>
          <p className="text-lg leading-9 text-pearl/72">{copy.supportBody}</p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.sources}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {copy.sourceTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-graphite/70">
              {copy.sourceBody}
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

      <section className="bg-pearl px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl border-l border-champagne pl-6">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">
            {copy.disclaimer}
          </p>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-graphite/70">
            {copy.disclaimerBody}
          </p>
        </div>
      </section>
    </>
  );
}
