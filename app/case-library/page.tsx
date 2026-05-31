import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Health Journeys | Case Library",
  description:
    "De-identified health decision journeys showing private medical advisory pathways, second opinions, executive health management, fertility planning, and risk governance."
};

const copy = {
  zh: {
    eyebrow: "Real Health Journeys",
    title: "真实健康决策案例。",
    description:
      "这里展示的是去标识化服务路径，不宣传疗效，不承诺结果。重点是客户如何从不确定性进入更清晰的医学判断、资源选择与长期健康管理。",
    read: "查看路径",
    disclaimer:
      "所有案例均为去标识化服务路径示例，不构成医疗广告、诊断建议、治疗建议或疗效承诺。"
  },
  ja: {
    eyebrow: "Real Health Journeys",
    title: "実際の健康意思決定ケース。",
    description:
      "匿名化したサービス経路を紹介します。効果宣伝や結果保証ではなく、不確実性から医学的判断、資源選択、長期健康管理へ進む過程を示します。",
    read: "経路を見る",
    disclaimer:
      "すべてのケースは匿名化したサービス経路例であり、医療広告、診断助言、治療助言、効果保証ではありません。"
  },
  en: {
    eyebrow: "Real Health Journeys",
    title: "Real health decision journeys.",
    description:
      "These de-identified journeys focus on how clients move from uncertainty to clearer judgment, resource selection, and long-term health management. They are not outcome claims.",
    read: "Read journey",
    disclaimer:
      "All cases are de-identified service pathway examples and do not constitute medical advertising, diagnosis, treatment advice, or outcome commitment."
  }
};

const cases = {
  zh: [
    ["Second Opinion", "浙江企业家重大健康风险第二意见", "通过赴日评估、多学科意见与长期跟踪，获得更清晰的专业判断。", "/case-library/second-opinion-certainty"],
    ["Executive Health", "连续失眠企业家健康管理路径", "从睡眠、压力、代谢和工作节奏切入，建立 12 个月健康管理结构。", "/case-library/executive-sleep-health"],
    ["Family Medical Planning", "企业家夫妻赴日冻卵与家庭规划", "在家庭时间表、医学评估和隐私安排之间建立更稳妥的决策路径。", "/case-library/family-fertility-planning"],
    ["Risk Management", "癌症风险筛查与长期管理路径", "围绕家族史、筛查策略、第二意见和年度复盘建立风险管理框架。", "/case-library/cancer-risk-management"]
  ],
  ja: [
    ["Second Opinion", "中国人経営者の重大リスクとセカンドオピニオン", "日本での評価、多職種意見、長期フォローにより判断を整理。", "/case-library/second-opinion-certainty"],
    ["Executive Health", "不眠が続く経営者の健康管理", "睡眠、ストレス、代謝、仕事のリズムから 12 か月の管理構造を構築。", "/case-library/executive-sleep-health"],
    ["Family Medical Planning", "日本での卵子凍結と家族計画", "家族の時間軸、医学評価、秘匿性ある手配の間で判断経路を整備。", "/case-library/family-fertility-planning"],
    ["Risk Management", "がんリスク検査と長期管理", "家族歴、検査戦略、セカンドオピニオン、年次レビューを整理。", "/case-library/cancer-risk-management"]
  ],
  en: [
    ["Second Opinion", "Zhejiang entrepreneur second-opinion journey", "Japan evaluation, multidisciplinary review, and long-term follow-up created clearer judgment.", "/case-library/second-opinion-certainty"],
    ["Executive Health", "Persistent insomnia and founder health management", "A 12-month structure built around sleep, stress, metabolism, and work rhythm.", "/case-library/executive-sleep-health"],
    ["Family Medical Planning", "Fertility preservation and family planning in Japan", "A decision pathway across family timing, medical assessment, and privacy-sensitive coordination.", "/case-library/family-fertility-planning"],
    ["Risk Management", "Cancer risk screening and long-term planning", "A risk governance pathway across family history, screening strategy, second opinion, and annual review.", "/case-library/cancer-risk-management"]
  ]
};

export default function CaseLibraryPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];

  return (
    <>
      <section className="relative overflow-hidden bg-ink px-5 pb-16 pt-28 text-pearl md:min-h-[86vh] md:pb-20 md:pt-44 lg:px-8">
        <Image
          src="/hero-doctor-network.png"
          alt="Private medical case review"
          fill
          priority
          className="hidden object-cover object-center opacity-46 md:block"
          sizes="100vw"
        />
        <div className="absolute inset-0 hidden bg-ink/68 md:block" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.eyebrow}</p>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-tight md:text-7xl">
            {text.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-pearl/76">{text.description}</p>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
          {cases[lang].map(([label, title, body, href]) => (
            <Link key={href} href={withLanguage(href, lang)} className="group bg-white p-8 transition hover:bg-ink">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">{label}</p>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-ink transition group-hover:text-pearl">
                {title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-graphite/70 transition group-hover:text-pearl/72">
                {body}
              </p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition group-hover:text-champagne">
                {text.read} →
              </p>
            </Link>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-graphite/60">
          {text.disclaimer}
        </p>
      </section>
    </>
  );
}
