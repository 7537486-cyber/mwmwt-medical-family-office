import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import {
  acquisitionSegments,
  acquisitionStages,
  doctorProfiles,
  leadScoringRules,
  medicalResources,
  programProfiles
} from "@/lib/databases";
import { normalizeLanguage, pages, serviceImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "医疗资源数据库与获客系统",
  description: pages["medical-resource-database"].description
};

const copy = {
  zh: {
    resourceTitle: "医疗资源数据库",
    resourceIntro: "用于管理日本各地区可协调的医疗机构、专科能力、准入方式和尽调信息。",
    doctorTitle: "医生数据库",
    doctorIntro: "不虚构真实医生姓名，先用可验证的专家画像管理匹配逻辑，后续可接入真实医生资质文件。",
    programTitle: "项目数据库",
    programIntro: "将高净值客户常见需求产品化，明确交付物、风险控制和复盘机制。",
    acquisitionTitle: "中国高净值客户获客系统",
    acquisitionIntro: "从内容触达到方案转化，形成可追踪、可分级、可复购的私域增长流程。",
    segmentTitle: "核心客群分层",
    scoringTitle: "线索评分规则",
    compliance:
      "合规边界：以下内容用于资源管理与服务介绍，不构成医疗诊断、治疗建议或疗效承诺；真实医生与机构接入前必须完成资质、授权、费用、等待周期和适应症确认。"
  },
  ja: {
    resourceTitle: "医療資源データベース",
    resourceIntro: "日本各地域の医療機関、専門能力、アクセス方法、確認項目を管理します。",
    doctorTitle: "医師データベース",
    doctorIntro: "実名を仮作成せず、検証可能な専門医プロファイルでマッチングロジックを管理します。",
    programTitle: "プログラムデータベース",
    programIntro: "富裕層家族の主要ニーズをプログラム化し、成果物、リスク管理、フォローを明確にします。",
    acquisitionTitle: "中国富裕層顧客獲得システム",
    acquisitionIntro: "コンテンツ接点から提案転換まで、追跡可能な成長導線を構築します。",
    segmentTitle: "主要顧客セグメント",
    scoringTitle: "リードスコアリング",
    compliance:
      "コンプライアンス：本内容は資源管理とサービス紹介を目的とし、診断、治療助言、効果保証ではありません。実際の医師・機関連携前に資格、権限、費用、待機期間、適応を確認します。"
  },
  en: {
    resourceTitle: "Medical Resource Database",
    resourceIntro: "Manage Japanese medical institutions, specialty capabilities, access models, and diligence fields by region.",
    doctorTitle: "Doctor Database",
    doctorIntro: "Instead of inventing doctor names, verified specialist profiles define matching logic until real credentials are attached.",
    programTitle: "Program Database",
    programIntro: "Package common HNW needs into programs with deliverables, risk controls, and follow-up mechanisms.",
    acquisitionTitle: "China HNW Client Acquisition System",
    acquisitionIntro: "A traceable growth workflow from content reach to proposal conversion, retention, and referral.",
    segmentTitle: "Core Client Segments",
    scoringTitle: "Lead Scoring Rules",
    compliance:
      "Compliance boundary: this content is for resource management and service introduction only. It is not diagnosis, treatment advice, or an outcome guarantee. Real physicians and institutions require credential, authorization, cost, timing, and indication confirmation."
  }
};

export default function MedicalResourceDatabasePage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];
  const page = pages["medical-resource-database"];
  const image = serviceImages["medical-resource-database"];

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={lang === "en" ? "Medical resources, doctors, programs, and HNW acquisition" : lang === "ja" ? page.jaTitle : page.title}
        secondaryTitle={lang === "en" ? "Structured operating system" : page.jaTitle}
        description={lang === "en" ? "A practical operating layer for Japan medical resources, doctor matching, program packaging, and China high-net-worth client acquisition." : lang === "ja" ? page.jaDescription : page.description}
        secondaryDescription={text.compliance}
        cta={lang === "en" ? "Discuss the system" : lang === "ja" ? "相談する" : "咨询数据库系统"}
      />

      <section className="bg-pearl px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="border-l border-champagne/50 pl-6">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Operating Intelligence
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {lang === "en"
                ? "Medical resources become useful when they are structured, verified, and ready for decisions."
                : lang === "ja"
                  ? "医療資源は、構造化され、検証され、判断に使える状態で初めて価値を持ちます。"
                  : "医疗资源只有被结构化、验证并可用于决策，才真正有价值。"}
            </h2>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-mist bg-ink shadow-quiet">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DatabaseIntro title={text.resourceTitle} intro={text.resourceIntro} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {medicalResources.map((resource) => (
              <article key={resource.id} className="border border-mist bg-white p-7 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-ink px-3 py-1 text-xs font-semibold text-pearl">{resource.id}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-champagne">{resource.region}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-ink">{resource.resourceType}</h2>
                <p className="mt-3 text-sm leading-7 text-graphite/72">{resource.specialty}</p>
                <Field label="适合客户" value={resource.suitableFor} />
                <Field label="准入方式" value={resource.accessModel} />
                <Checklist label="尽调重点" items={resource.dueDiligence} />
                <Checklist label="所需资料" items={resource.documents} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DatabaseIntro title={text.doctorTitle} intro={text.doctorIntro} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {doctorProfiles.map((doctor) => (
              <article key={doctor.id} className="border border-mist bg-pearl/55 p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{doctor.id}</p>
                <h2 className="mt-4 text-xl font-semibold text-ink">{doctor.specialty}</h2>
                <p className="mt-3 text-sm font-semibold text-jade">{doctor.role}</p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">{doctor.caseFit}</p>
                <Field label="语言流程" value={doctor.languageWorkflow} />
                <Checklist label="验证清单" items={doctor.verification} />
                <Checklist label="匹配问题" items={doctor.matchingQuestions} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DatabaseIntro title={text.programTitle} intro={text.programIntro} inverted />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {programProfiles.map((program) => (
              <article key={program.id} className="border border-white/12 bg-white/5 p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-champagne px-3 py-1 text-xs font-semibold text-ink">{program.id}</span>
                  <span className="text-xs uppercase tracking-[0.22em] text-pearl/56">{program.category}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{program.program}</h2>
                <p className="mt-4 text-sm leading-7 text-pearl/68">{program.clientFit}</p>
                <Checklist label="交付物" items={program.deliverables} inverted />
                <Checklist label="风险控制" items={program.riskControls} inverted />
                <Field label="复盘机制" value={program.followUp} inverted />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <DatabaseIntro title={text.acquisitionTitle} intro={text.acquisitionIntro} />
            <div className="mt-10 border-y border-mist py-7">
              <h2 className="text-xl font-semibold text-ink">{text.segmentTitle}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-graphite/74">
                {acquisitionSegments.map((segment) => (
                  <li key={segment}>{segment}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-ink">{text.scoringTitle}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-graphite/74">
                {leadScoringRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="divide-y divide-mist border-y border-mist">
            {acquisitionStages.map((stage, index) => (
              <article key={stage.stage} className="grid gap-5 py-7 md:grid-cols-[5rem_1fr]">
                <span className="font-serif text-4xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{stage.stage}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label="目标对象" value={stage.target} />
                    <Field label="内容资产" value={stage.contentAsset} />
                    <Field label="资格信号" value={stage.qualificationSignal} />
                    <Field label="下一动作" value={stage.nextAction} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DatabaseIntro({
  title,
  intro,
  inverted = false
}: {
  title: string;
  intro: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs uppercase tracking-[0.3em] ${inverted ? "text-champagne" : "text-champagne"}`}>
        Database Layer
      </p>
      <h2 className={`mt-5 font-serif text-4xl leading-tight md:text-5xl ${inverted ? "text-pearl" : "text-ink"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 ${inverted ? "text-pearl/68" : "text-graphite/72"}`}>
        {intro}
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  inverted = false
}: {
  label: string;
  value: string;
  inverted?: boolean;
}) {
  return (
    <div className="mt-5">
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${inverted ? "text-champagne" : "text-champagne"}`}>
        {label}
      </p>
      <p className={`mt-2 text-sm leading-7 ${inverted ? "text-pearl/68" : "text-graphite/72"}`}>
        {value}
      </p>
    </div>
  );
}

function Checklist({
  label,
  items,
  inverted = false
}: {
  label: string;
  items: string[];
  inverted?: boolean;
}) {
  return (
    <div className="mt-5">
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${inverted ? "text-champagne" : "text-champagne"}`}>
        {label}
      </p>
      <ul className={`mt-3 space-y-2 text-sm leading-7 ${inverted ? "text-pearl/68" : "text-graphite/72"}`}>
        {items.map((item) => (
          <li key={item} className="border-l border-champagne/45 pl-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
