import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Second Opinion Case | Certainty Before Intervention",
  description:
    "A de-identified journey case showing how MWMWT helps families seek clearer medical judgment through Japan-based second opinion coordination, multidisciplinary review, and long-term follow-up."
};

const copy = {
  zh: {
    eyebrow: "Journey Case",
    title: "有时候，最有价值的医疗并非治疗本身。",
    subtitle: "而是获得一个准确、可靠且值得信赖的专业判断。",
    intro:
      "一位中国企业家在面临重大健康风险时，选择赴日寻求第二诊疗意见。这个故事展示的不是疗效宣传，而是一个家族如何在不确定性中建立更清晰的医学判断路径。",
    quote:
      "At times, the most valuable form of medical care is not a procedure, but certainty.",
    sections: [
      {
        title: "背景",
        body: [
          "客户长期处于高压工作状态，近期出现持续睡眠问题与健康焦虑。原有资料提示需要进一步判断，但不同意见之间存在不确定性。",
          "在进入任何重大医疗决定前，客户希望获得更完整、客观、可解释的专业意见。"
        ]
      },
      {
        title: "赴日评估",
        body: [
          "MWMWT 协助整理既往检查资料、关键问题清单和家族健康背景，并协调日本方向的进一步检查与专家意见。",
          "通过更全面的检查、多学科专家团队的综合评估以及必要的风险说明，客户获得了更加清晰、客观且科学的健康结论。"
        ]
      },
      {
        title: "决策价值",
        body: [
          "在这个过程中，最重要的价值不是增加更多医疗项目，而是帮助客户避免可能并无必要、或尚未充分确认适应性的医疗决策。",
          "清晰的判断让客户可以把注意力从焦虑转回到长期健康管理本身。"
        ]
      },
      {
        title: "长期管理",
        body: [
          "随后，客户开始系统性优化睡眠、运动、营养与工作节奏，并建立长期健康管理体系。",
          "在后续评估中，多项被持续追踪的健康指标朝更有利方向变化；这些变化被用于下一阶段健康计划，而不是作为任何治疗效果承诺。"
        ]
      }
    ],
    stepsTitle: "服务路径",
    steps: ["资料整理", "日本检查", "多学科评估", "专业判断", "长期随访"],
    closingTitle: "MWMWT 的意义",
    closing:
      "很多时候，人们真正需要的并非更多治疗，而是更准确的专业判断；并非更多信息，而是更具可信度的答案。这正是 MWMWT 存在的意义。",
    disclaimer:
      "本案例为去标识化服务路径示例，不构成医疗广告、诊断建议、治疗建议或疗效承诺。具体诊疗决定必须由持牌医生根据个人情况判断。",
    cta: "申请私密顾问沟通"
  },
  ja: {
    eyebrow: "Journey Case",
    title: "時に、最も価値のある医療は処置そのものではありません。",
    subtitle: "正確で信頼できる専門的判断です。",
    intro:
      "ある中国人経営者は、重大な健康リスクに直面した際、日本でセカンドオピニオンを求めました。このケースは効果を宣伝するものではなく、不確実性の中で医学的判断を整える過程を示します。",
    quote:
      "At times, the most valuable form of medical care is not a procedure, but certainty.",
    sections: [
      {
        title: "背景",
        body: [
          "長期的な高ストレス環境の中で、睡眠問題と健康不安が続いていました。既存資料から追加判断の必要性が見えた一方で、意見の間に不確実性がありました。",
          "重大な医療判断に入る前に、より完全で客観的、説明可能な専門意見を得ることが重要でした。"
        ]
      },
      {
        title: "日本での評価",
        body: [
          "MWMWTは既存検査資料、質問リスト、家族健康背景を整理し、日本での追加検査と専門家意見の調整を支援しました。",
          "より包括的な検査、多職種専門家による評価、必要なリスク説明を通じて、より明確で客観的な健康判断を得ることができました。"
        ]
      },
      {
        title: "意思決定の価値",
        body: [
          "この過程で最も重要だったのは、医療プログラムを増やすことではなく、不要または適応が十分確認されていない判断を避けることでした。",
          "明確な判断により、不安ではなく長期的な健康管理に意識を戻すことができました。"
        ]
      },
      {
        title: "長期管理",
        body: [
          "その後、睡眠、運動、栄養、仕事のリズムを体系的に見直し、長期健康管理の枠組みを構築しました。",
          "後続評価では、継続的に追跡された複数の指標がより望ましい方向へ変化しました。これらは治療効果の保証ではなく、次段階の計画に用いられます。"
        ]
      }
    ],
    stepsTitle: "サービス経路",
    steps: ["資料整理", "日本での検査", "多職種評価", "専門的判断", "長期フォロー"],
    closingTitle: "MWMWT の意味",
    closing:
      "多くの場合、人が本当に必要としているのは、より多くの治療ではなく、より正確な専門判断です。より多くの情報ではなく、信頼できる答えです。これが MWMWT の存在意義です。",
    disclaimer:
      "本ケースは匿名化したサービス経路例であり、医療広告、診断助言、治療助言、効果保証ではありません。具体的な診療判断は医師が個別状況に基づいて行う必要があります。",
    cta: "プライベート相談を申請"
  },
  en: {
    eyebrow: "Journey Case",
    title: "Sometimes the most valuable care is not a procedure.",
    subtitle: "It is an accurate, reliable, and trusted medical judgment.",
    intro:
      "A Chinese entrepreneur facing a major health risk chose to seek a second opinion in Japan. This story is not an outcome claim. It shows how a family can build a clearer medical decision pathway in a moment of uncertainty.",
    quote:
      "At times, the most valuable form of medical care is not a procedure, but certainty.",
    sections: [
      {
        title: "Context",
        body: [
          "The client had been operating under sustained pressure and was experiencing persistent sleep issues and health anxiety. Existing records suggested that further judgment was needed, but the available opinions were not fully aligned.",
          "Before making any major medical decision, the client wanted a more complete, objective, and explainable professional view."
        ]
      },
      {
        title: "Japan Evaluation",
        body: [
          "MWMWT helped organize prior records, a focused question list, and family health context, then coordinated further testing and specialist review in Japan.",
          "Through broader evaluation, multidisciplinary review, and risk explanation, the client received a clearer and more objective medical conclusion."
        ]
      },
      {
        title: "Decision Value",
        body: [
          "The central value was not adding more medical procedures. It was helping the client avoid a decision that may not have been necessary or sufficiently supported.",
          "Clearer judgment allowed the client to move attention away from anxiety and back toward long-term health governance."
        ]
      },
      {
        title: "Long-Term Management",
        body: [
          "The client then began to optimize sleep, exercise, nutrition, and work rhythm in a more systematic way.",
          "In follow-up reviews, several tracked health indicators moved in a more favorable direction. These changes were used for planning and should not be read as a treatment guarantee."
        ]
      }
    ],
    stepsTitle: "Service Pathway",
    steps: ["Record preparation", "Japan testing", "Multidisciplinary review", "Professional judgment", "Long-term follow-up"],
    closingTitle: "Why MWMWT Exists",
    closing:
      "Many times, people do not need more treatment. They need better judgment. They do not need more information. They need a more trusted answer. This is why MWMWT exists.",
    disclaimer:
      "This is a de-identified service pathway example. It does not constitute medical advertising, diagnosis, treatment advice, or outcome commitment. Specific care decisions must be made by licensed physicians based on individual circumstances.",
    cta: "Apply for Private Consultation"
  }
};

export default function SecondOpinionCertaintyPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];

  return (
    <>
      <section className="relative overflow-hidden bg-ink px-5 pb-16 pt-28 text-pearl md:min-h-[88vh] md:pb-20 md:pt-44 lg:px-8">
        <Image
          src="/hero-doctor-network.png"
          alt="Private medical second opinion review"
          fill
          priority
          className="hidden object-cover object-center opacity-56 md:block"
          sizes="100vw"
        />
        <div className="relative mb-10 aspect-[21/9] overflow-hidden border border-white/10 md:hidden">
          <Image
            src="/hero-doctor-network.png"
            alt="Private medical second opinion review"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/84 to-ink/20 md:block" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_bottom,rgba(18,20,18,0.08),rgba(18,20,18,0.8))] md:block" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end md:min-h-[calc(88vh-16rem)]">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            {text.eyebrow}
          </p>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl">
            {text.title}
          </h1>
          <p className="mt-6 max-w-4xl font-serif text-3xl leading-tight text-champagne md:text-5xl">
            {text.subtitle}
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-pearl/74">{text.intro}</p>
        </div>
      </section>

      <article className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <blockquote className="border-l border-champagne bg-white p-8 shadow-sm md:p-10">
            <p className="font-serif text-3xl leading-tight text-ink md:text-5xl">
              {text.quote}
            </p>
          </blockquote>

          <div className="mt-14 grid gap-8">
            {text.sections.map((section) => (
              <section key={section.title} className="grid gap-6 border-t border-mist pt-8 md:grid-cols-[0.32fr_0.68fr]">
                <h2 className="font-serif text-3xl leading-tight text-ink">{section.title}</h2>
                <div className="grid gap-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-9 text-graphite/76">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-16 border border-mist bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.stepsTitle}</p>
            <div className="mt-8 grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-5">
              {text.steps.map((step, index) => (
                <div key={step} className="bg-pearl p-5">
                  <p className="font-serif text-3xl text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-ink">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 bg-ink p-8 text-pearl md:p-10">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.closingTitle}
            </p>
            <p className="mt-6 font-serif text-3xl leading-tight md:text-5xl">{text.closing}</p>
            <p className="mt-8 border-l border-champagne/70 pl-5 text-sm leading-7 text-pearl/62">
              {text.disclaimer}
            </p>
            <Link
              href={withLanguage("/contact", lang)}
              className="mt-10 inline-flex bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              {text.cta} <span aria-hidden="true">→</span>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
