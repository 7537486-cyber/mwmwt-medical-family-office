import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import {
  doctorProfiles,
  medicalResources,
  programProfiles
} from "@/lib/databases";
import { normalizeLanguage, pages, serviceImages, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "医疗资源与专家资料管理体系",
  description: pages["medical-resource-database"].description
};

const copy = {
  zh: {
    databaseEyebrow: "资源管理层",
    resourceTitle: "医疗资源数据库",
    resourceIntro: "用于管理日本各地区可协调的医疗机构、专科能力、准入方式和尽调信息。",
    doctorTitle: "医生数据库",
    doctorIntro: "以可验证的专家画像管理匹配逻辑，真实医生资料须在授权与资质核验后展示。",
    programTitle: "服务路径数据库",
    programIntro: "将高净值客户常见需求梳理成清晰服务路径，明确交付物、风险控制和复盘机制。",
    coordinationTitle: "客户适配与服务流程",
    coordinationIntro: "从初步咨询到适配度确认、资料整理、专家沟通与长期随访，形成更清晰的服务路径。",
    segmentTitle: "适合服务人群",
    scoringTitle: "适配度确认重点",
    compliance:
      "合规边界：以下内容用于资源管理与服务介绍，不构成医疗诊断、治疗建议或疗效承诺；真实医生与机构接入前必须完成资质、授权、费用、等待周期和适应症确认。"
  },
  ja: {
    databaseEyebrow: "リソース管理層",
    resourceTitle: "医療資源データベース",
    resourceIntro: "日本各地域の医療機関、専門能力、アクセス方法、確認項目を管理します。",
    doctorTitle: "医師データベース",
    doctorIntro: "実名を仮作成せず、検証可能な専門医プロファイルでマッチングロジックを管理します。",
    programTitle: "プログラムデータベース",
    programIntro: "富裕層家族の主要ニーズをプログラム化し、成果物、リスク管理、フォローを明確にします。",
    coordinationTitle: "クライアント適合性とサービスプロセス",
    coordinationIntro: "初回相談、適合性確認、資料整理、専門医コミュニケーション、長期フォローまでを明確にします。",
    segmentTitle: "適したクライアント",
    scoringTitle: "適合性確認の重点",
    compliance:
      "コンプライアンス：本内容は資源管理とサービス紹介を目的とし、診断、治療助言、効果保証ではありません。実際の医師・機関連携前に資格、権限、費用、待機期間、適応を確認します。"
  },
  en: {
    databaseEyebrow: "Resource Management Layer",
    resourceTitle: "Medical Resource Database",
    resourceIntro: "Manage Japanese medical institutions, specialty capabilities, access models, and diligence fields by region.",
    doctorTitle: "Doctor Database",
    doctorIntro: "Instead of inventing doctor names, verified specialist profiles define matching logic until real credentials are attached.",
    programTitle: "Program Database",
    programIntro: "Package common HNW needs into programs with deliverables, risk controls, and follow-up mechanisms.",
    coordinationTitle: "Client Fit and Service Workflow",
    coordinationIntro: "A clear pathway from initial inquiry and fit review to document preparation, specialist communication, and long-term follow-up.",
    segmentTitle: "Suitable Clients",
    scoringTitle: "Fit Review Priorities",
    compliance:
      "Compliance boundary: this content is for resource management and service introduction only. It is not diagnosis, treatment advice, or an outcome guarantee. Real physicians and institutions require credential, authorization, cost, timing, and indication confirmation."
  }
};

const stageFieldLabels = {
  zh: {
    target: "目标",
    materials: "资料与说明",
    fitCriteria: "适配重点",
    nextAction: "下一步"
  },
  ja: {
    target: "目的",
    materials: "資料と説明",
    fitCriteria: "適合性の重点",
    nextAction: "次のステップ"
  },
  en: {
    target: "Goal",
    materials: "Materials",
    fitCriteria: "Fit Criteria",
    nextAction: "Next Step"
  }
};

const serviceFit = {
  zh: [
    "希望建立长期健康管理体系的企业家与家族客户",
    "需要跨境医疗资源、第二诊疗意见或专家会诊的人群",
    "关注隐私、时间效率、风险控制和长期随访的高净值客户"
  ],
  ja: [
    "長期的な健康管理体制を構築したい起業家と家族",
    "国際医療資源、セカンドオピニオン、専門医相談が必要な方",
    "秘匿性、時間効率、リスク管理、長期フォローを重視する富裕層クライアント"
  ],
  en: [
    "Entrepreneurs and families seeking a long-term health management system",
    "Clients who need cross-border resources, second opinions, or specialist consultation",
    "HNW clients who value privacy, time efficiency, risk control, and long-term follow-up"
  ]
};

const fitReview = {
  zh: [
    "当前健康目标与主要风险",
    "既往病史、用药与检查资料完整度",
    "是否需要跨境转诊、专家复核或长期随访",
    "隐私、时间、语言与陪同需求"
  ],
  ja: [
    "現在の健康目標と主なリスク",
    "既往歴、服薬、検査資料の整理状況",
    "国際紹介、専門医レビュー、長期フォローの必要性",
    "秘匿性、時間、言語、同行の要件"
  ],
  en: [
    "Current health goals and key risks",
    "Completeness of medical history, medication, and test records",
    "Need for cross-border referral, specialist review, or long-term follow-up",
    "Privacy, timing, language, and escort requirements"
  ]
};

const serviceStages = {
  zh: [
    {
      stage: "初步咨询",
      target: "确认需求方向、家庭成员情况与时间安排",
      materials: "咨询摘要与资料清单",
      fitCriteria: "目标清晰、资料完整、愿意遵守合规流程",
      nextAction: "进入适配度确认"
    },
    {
      stage: "适配度确认",
      target: "评估是否适合进入医生匹配、机构咨询或长期管理",
      materials: "风险边界与服务范围说明",
      fitCriteria: "了解服务边界，不要求结果承诺",
      nextAction: "准备医疗资料"
    },
    {
      stage: "资料整理",
      target: "整理既往报告、影像、用药、家族史与核心问题",
      materials: "医生沟通资料包",
      fitCriteria: "可提供必要医学资料",
      nextAction: "专家或机构沟通"
    },
    {
      stage: "长期跟进",
      target: "建立复盘节奏、复查计划与家庭健康档案",
      materials: "随访计划与健康档案",
      fitCriteria: "需要持续管理而非一次性安排",
      nextAction: "年度健康回顾"
    }
  ],
  ja: [
    {
      stage: "初回相談",
      target: "相談内容、家族状況、日程を確認します。",
      materials: "相談サマリーと資料リスト",
      fitCriteria: "目的が明確で、資料整理と規定遵守が可能",
      nextAction: "適合性確認へ"
    },
    {
      stage: "適合性確認",
      target: "医師マッチング、医療機関相談、長期管理に適しているかを確認します。",
      materials: "リスク境界とサービス範囲の説明",
      fitCriteria: "サービス境界を理解し、結果保証を求めない",
      nextAction: "医療資料準備"
    },
    {
      stage: "資料整理",
      target: "既往レポート、画像、服薬、家族歴、質問を整理します。",
      materials: "医師コミュニケーション資料",
      fitCriteria: "必要な医学資料を提出できる",
      nextAction: "専門医・医療機関との確認"
    },
    {
      stage: "長期フォロー",
      target: "レビュー頻度、再検査計画、家族健康記録を整えます。",
      materials: "フォロー計画と健康記録",
      fitCriteria: "単発手配ではなく継続管理を希望",
      nextAction: "年次健康レビュー"
    }
  ],
  en: [
    {
      stage: "Initial inquiry",
      target: "Clarify goals, family context, and timing.",
      materials: "Inquiry summary and document checklist",
      fitCriteria: "Clear goals, organized information, and willingness to follow compliant process",
      nextAction: "Fit review"
    },
    {
      stage: "Fit review",
      target: "Assess whether physician matching, institution consultation, or long-term management is appropriate.",
      materials: "Risk boundaries and service scope",
      fitCriteria: "Understands service boundaries and does not expect outcome guarantees",
      nextAction: "Medical document preparation"
    },
    {
      stage: "Document preparation",
      target: "Organize prior reports, imaging, medication, family history, and key questions.",
      materials: "Physician communication package",
      fitCriteria: "Able to provide necessary medical information",
      nextAction: "Specialist or institution communication"
    },
    {
      stage: "Long-term follow-up",
      target: "Set review rhythm, retesting plan, and family health records.",
      materials: "Follow-up plan and health archive",
      fitCriteria: "Needs continuing management rather than a one-time arrangement",
      nextAction: "Annual health review"
    }
  ]
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
        title={
          lang === "en"
            ? "Medical resources, doctors, programs, and client-fit workflow"
            : lang === "ja"
              ? page.jaTitle
              : page.title
        }
        secondaryTitle={
          lang === "en"
            ? "Structured resource intelligence"
            : lang === "ja"
              ? "構造化された医療資源インテリジェンス"
              : "结构化医疗资源管理"
        }
        description={
          lang === "en"
            ? "A practical operating layer for Japan medical resources, doctor matching, program structure, and long-term client follow-up."
            : lang === "ja"
              ? page.jaDescription
              : page.description
        }
        secondaryDescription={text.compliance}
        cta={lang === "en" ? "Discuss the system" : lang === "ja" ? "相談する" : "咨询数据库系统"}
        ctaHref={withLanguage("/contact", lang)}
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
          <DatabaseIntro
            eyebrow={text.databaseEyebrow}
            title={text.resourceTitle}
            intro={text.resourceIntro}
          />
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
          <DatabaseIntro
            eyebrow={text.databaseEyebrow}
            title={text.doctorTitle}
            intro={text.doctorIntro}
          />
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
          <DatabaseIntro
            eyebrow={text.databaseEyebrow}
            title={text.programTitle}
            intro={text.programIntro}
            inverted
          />
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
            <DatabaseIntro
              eyebrow={text.databaseEyebrow}
              title={text.coordinationTitle}
              intro={text.coordinationIntro}
            />
            <div className="mt-10 border-y border-mist py-7">
              <h2 className="text-xl font-semibold text-ink">{text.segmentTitle}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-graphite/74">
                {serviceFit[lang].map((segment) => (
                  <li key={segment}>{segment}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-ink">{text.scoringTitle}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-graphite/74">
                {fitReview[lang].map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="divide-y divide-mist border-y border-mist">
            {serviceStages[lang].map((stage, index) => (
              <article key={stage.stage} className="grid gap-5 py-7 md:grid-cols-[5rem_1fr]">
                <span className="font-serif text-4xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{stage.stage}</h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Field label={stageFieldLabels[lang].target} value={stage.target} />
                    <Field
                      label={stageFieldLabels[lang].materials}
                      value={stage.materials}
                    />
                    <Field
                      label={stageFieldLabels[lang].fitCriteria}
                      value={stage.fitCriteria}
                    />
                    <Field label={stageFieldLabels[lang].nextAction} value={stage.nextAction} />
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
  eyebrow,
  title,
  intro,
  inverted = false
}: {
  eyebrow: string;
  title: string;
  intro: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs uppercase tracking-[0.3em] ${inverted ? "text-champagne" : "text-champagne"}`}>
        {eyebrow}
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
