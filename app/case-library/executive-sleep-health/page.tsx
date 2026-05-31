import type { Metadata } from "next";
import Link from "next/link";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Executive Health Case | Persistent Insomnia",
  description:
    "A de-identified executive health journey focused on persistent insomnia, sleep apnea screening, stress rhythm, and long-term health management."
};

const copy = {
  zh: {
    title: "连续失眠企业家健康管理路径",
    intro:
      "一位制造业企业家长期睡眠不足、白天疲劳、会议中注意力下降。案例重点不是治疗效果，而是如何把零散症状转化为结构化评估和长期管理。",
    sections: [
      ["核心问题", "连续失眠、频繁夜醒、长期高压工作，以及可能被忽视的睡眠呼吸暂停风险。"],
      ["评估路径", "整理作息、体检记录、代谢指标和睡眠表现，并协调日本方向的睡眠与心血管风险评估。"],
      ["决策价值", "客户不再只把问题理解为压力大，而是开始从呼吸、代谢、体重、工作节奏和心血管风险整体管理。"],
      ["长期管理", "建立 3 个月、6 个月、12 个月复盘节奏，持续追踪睡眠质量、精力、体重、血压和炎症相关指标。"]
    ],
    cta: "申请企业家健康咨询"
  },
  ja: {
    title: "不眠が続く経営者の健康管理",
    intro:
      "製造業経営者が長期的な睡眠不足、日中疲労、集中力低下に悩んでいました。焦点は効果宣伝ではなく、症状を構造的評価と長期管理へ変える過程です。",
    sections: [
      ["主な課題", "不眠、中途覚醒、長期ストレス、見落とされやすい睡眠時無呼吸リスク。"],
      ["評価経路", "生活リズム、健診記録、代謝指標、睡眠状況を整理し、日本での睡眠・心血管リスク評価を調整。"],
      ["意思決定価値", "単なるストレスではなく、呼吸、代謝、体重、仕事リズム、心血管リスクとして整理。"],
      ["長期管理", "3か月、6か月、12か月のレビューで睡眠、活力、体重、血圧、炎症関連指標を追跡。"]
    ],
    cta: "エグゼクティブヘルスを相談"
  },
  en: {
    title: "Persistent insomnia and founder health management",
    intro:
      "A manufacturing founder experienced persistent insomnia, daytime fatigue, and declining focus. The case focuses on turning scattered symptoms into structured evaluation and long-term management.",
    sections: [
      ["Core issue", "Persistent insomnia, night waking, long-term pressure, and possible sleep apnea risk."],
      ["Evaluation pathway", "Work rhythm, checkup records, metabolic markers, and sleep patterns were organized before Japan-based sleep and cardiovascular risk evaluation."],
      ["Decision value", "The issue moved from vague stress to a clearer view of breathing, metabolism, weight, rhythm, and cardiovascular risk."],
      ["Long-term management", "A 3-, 6-, and 12-month review rhythm tracked sleep quality, energy, weight, blood pressure, and inflammation-related markers."]
    ],
    cta: "Apply for Executive Health Advisory"
  }
};

export default function ExecutiveSleepCasePage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];

  return (
    <main className="bg-pearl px-5 py-28 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.34em] text-champagne">Executive Health Journey</p>
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
