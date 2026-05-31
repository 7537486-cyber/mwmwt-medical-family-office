import type { Metadata } from "next";
import Link from "next/link";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Family Medical Planning Case | Fertility Preservation",
  description:
    "A de-identified family medical planning journey for fertility preservation consultation in Japan."
};

const copy = {
  zh: {
    title: "企业家夫妻赴日冻卵与家庭规划",
    intro:
      "一对企业家夫妻希望在事业扩张期保留更多家庭选择。我们协助把生育力保存从单一项目，转化为医学评估、时间安排、隐私动线和家庭健康规划。",
    sections: [
      ["核心问题", "客户希望了解冻卵适合性、时间窗口、检查要求、隐私安排和未来家庭计划之间的关系。"],
      ["评估路径", "先进行基础健康资料整理，再协调日本医疗机构规则、检查流程、语言沟通和行程节奏。"],
      ["决策价值", "客户获得的是更清楚的选择边界，而不是被推动立刻做决定。"],
      ["长期管理", "将生育力保存与夫妻年度体检、父母健康、未来子女医疗资源一起纳入家庭健康档案。"]
    ],
    cta: "咨询生育力保存"
  },
  ja: {
    title: "日本での卵子凍結と家族計画",
    intro:
      "事業拡大期の夫婦が将来の家族選択肢を残したいと考えました。卵子凍結を単一プログラムではなく、医学評価、時間設計、秘匿性ある動線、家族健康計画として整理しました。",
    sections: [
      ["主な課題", "適合性、時間軸、検査要件、秘匿性、将来の家族計画を整理。"],
      ["評価経路", "健康資料を整理し、日本の医療機関規定、検査手順、言語対応、行程を確認。"],
      ["意思決定価値", "すぐ決めることではなく、選択肢と境界を明確にすることが価値でした。"],
      ["長期管理", "夫婦健診、両親の健康、将来の子どもの医療資源とともに家族健康記録へ統合。"]
    ],
    cta: "生殖医療相談を申請"
  },
  en: {
    title: "Fertility preservation and family planning in Japan",
    intro:
      "An entrepreneur couple wanted to preserve family options during a period of business expansion. The work converted fertility preservation from a single program into medical assessment, timing, privacy-sensitive logistics, and family health planning.",
    sections: [
      ["Core issue", "Suitability, timing, testing requirements, privacy arrangements, and future family planning."],
      ["Evaluation pathway", "Health records were organized before reviewing Japan institution rules, testing workflow, language needs, and travel rhythm."],
      ["Decision value", "The value was not pressure to decide quickly, but clearer options and boundaries."],
      ["Long-term management", "Fertility planning was integrated with annual checkups, parental health, and future family medical resources."]
    ],
    cta: "Apply for Fertility Planning Advisory"
  }
};

export default function FamilyFertilityPlanningPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];

  return (
    <main className="bg-pearl px-5 py-28 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.34em] text-champagne">Family Medical Planning</p>
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
