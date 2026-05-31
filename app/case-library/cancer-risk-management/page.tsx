import type { Metadata } from "next";
import Link from "next/link";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Risk Management Case | Cancer Screening",
  description:
    "A de-identified cancer risk management journey focused on family history, screening strategy, second opinion preparation, and long-term follow-up."
};

const copy = {
  zh: {
    title: "癌症风险筛查与长期管理路径",
    intro:
      "客户因家族史和既往检查异常而焦虑。服务重点不是制造恐惧，而是帮助家庭用更有秩序的方式理解风险、筛查路径和下一步选择。",
    sections: [
      ["核心问题", "家族史、影像结果、肿瘤标志物、检查间隔和是否需要第二意见之间存在不确定性。"],
      ["评估路径", "整理既往报告、影像资料和问题清单，确认日本方向可行的筛查与专科意见路径。"],
      ["决策价值", "客户获得更清楚的风险分层和复查节奏，避免在信息不完整时做过度或不足的决策。"],
      ["长期管理", "建立年度筛查、指标复盘、生活方式风险管理和必要时专家复核机制。"]
    ],
    cta: "咨询风险管理"
  },
  ja: {
    title: "がんリスク検査と長期管理",
    intro:
      "家族歴と過去の検査異常により不安を抱えていたケースです。恐怖を煽るのではなく、リスク、検査経路、次の選択肢を秩序立てて整理します。",
    sections: [
      ["主な課題", "家族歴、画像結果、腫瘍マーカー、検査間隔、セカンドオピニオンの必要性に不確実性。"],
      ["評価経路", "既存報告、画像資料、質問リストを整理し、日本で可能な検査と専門意見の経路を確認。"],
      ["意思決定価値", "情報不足のまま過剰または不足した判断を避け、リスク分類と再検査リズムを明確化。"],
      ["長期管理", "年次検査、指標レビュー、生活リスク管理、必要時の専門家再確認を設計。"]
    ],
    cta: "リスク管理を相談"
  },
  en: {
    title: "Cancer risk screening and long-term planning",
    intro:
      "A family history and prior abnormal findings created anxiety. The work focused on organizing risk, screening pathways, and next steps without creating fear.",
    sections: [
      ["Core issue", "Uncertainty around family history, imaging, tumor markers, screening intervals, and whether a second opinion was needed."],
      ["Evaluation pathway", "Prior reports, imaging, and a question list were organized before reviewing Japan-based screening and specialty opinion pathways."],
      ["Decision value", "The client gained clearer risk stratification and review timing, avoiding decisions based on incomplete information."],
      ["Long-term management", "Annual screening, indicator review, lifestyle risk management, and specialist re-review when needed."]
    ],
    cta: "Apply for Risk Management Advisory"
  }
};

export default function CancerRiskManagementPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];

  return (
    <main className="bg-pearl px-5 py-28 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.34em] text-champagne">Risk Management Journey</p>
        <h1 className="mt-6 font-serif text-5xl leading-tight text-ink md:text-7xl">{text.title}</h1>
        <p className="mt-8 text-xl leading-10 text-graphite/74">{text.intro}</p>
        <div className="mt-12 grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
          {text.sections.map(([title, body]) => (
            <section key={title} className="bg-white p-8">
              <h2 className="text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-5 text-sm leading-7 text-graphite/70">{body}</p>
            </section>
          ))}
        </div>
        <p className="mt-8 text-sm leading-7 text-graphite/58">
          This case is a de-identified service pathway example and does not constitute medical advice or outcome commitment.
        </p>
        <Link href={withLanguage("/contact", lang)} className="mt-10 inline-flex bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl">
          {text.cta} →
        </Link>
      </article>
    </main>
  );
}
