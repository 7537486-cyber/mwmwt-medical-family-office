import Image from "next/image";
import Link from "next/link";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const copy = {
  zh: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging Is Not Destiny.",
    heroSubtitle: "衰老不是宿命。",
    heroLine: "日本长寿医学 × 再生医疗 × 企业家健康管理",
    heroBody:
      "MWMWT 为企业家、投资人及家族客户提供私人医疗顾问、长期健康风险管理与日本高端医疗资源协调。",
    heroCta: "申请私密顾问沟通",
    founderEyebrow: "Founder Letter",
    founderTitle: "为什么建立 MWMWT。",
    founderParagraphs: [
      "财富可以传承，健康风险同样需要被管理。",
      "当企业家拥有全球资产配置能力后，健康治理能力反而成为最稀缺的资源。重大健康选择不应该只靠临时搜索、熟人介绍或单一机构推荐。",
      "MWMWT 的存在，是帮助家族在进入医疗决策前，先获得更完整的信息、更审慎的资源路径、更清晰的风险边界和更长期的随访秩序。"
    ],
    founderSignature: "MWMWT Founder Office",
    whyJapanEyebrow: "Why Japan",
    whyJapanTitle: "为什么全球客户需要认真看日本。",
    whyJapanBody:
      "日本不是单一项目目的地，而是长期健康管理、精密检查、再生医疗监管与高隐私医疗服务可以同时成立的市场。",
    valueEyebrow: "What Clients Actually Buy",
    valueTitle: "客户购买的不是项目，而是健康决策权。",
    valueBody:
      "对高净值家庭来说，真正重要的是在关键健康选择前拥有判断力、时间效率、隐私保护和长期风险管理。",
    storyEyebrow: "Client Story",
    storyQuote:
      "At times, the most valuable form of medical care is not a procedure, but certainty.",
    storyTranslation:
      "有时候，最有价值的医疗并非治疗本身，而是获得一个准确、可靠且值得信赖的专业判断。",
    storyCta: "Read the Story",
    referenceEyebrow: "Medical Reference Network",
    referenceTitle: "公开医学专家资料库。",
    referenceBody:
      "Based on public academic and professional information. 医生资料用于医学资源研究、专科方向理解和转诊前准备，不代表医生为 MWMWT 团队成员，也不代表已确认合作或可接诊。",
    referenceCta: "查看公开专家资料库",
    contactEyebrow: "Apply for Private Consultation",
    contactTitle: "申请制、审核制、预约制。",
    contactBody:
      "MWMWT 每年仅接受有限数量的私人客户。提交信息后，我们会先判断适配度，再安排私密医疗顾问沟通。",
    contactCta: "申请私密顾问沟通"
  },
  ja: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging Is Not Destiny.",
    heroSubtitle: "老化は宿命ではありません。",
    heroLine: "日本の長寿医学 × 再生医療 × エグゼクティブ健康管理",
    heroBody:
      "MWMWTは経営者、投資家、ご家族のために、プライベート医療アドバイザリー、長期的な健康リスク管理、日本の高度医療資源へのアクセス調整を提供します。",
    heroCta: "プライベート相談を申請",
    founderEyebrow: "Founder Letter",
    founderTitle: "MWMWTを設立した理由。",
    founderParagraphs: [
      "資産は継承できます。健康リスクもまた、管理されるべきものです。",
      "経営者が世界規模で資産配分できる時代に、健康ガバナンスの力こそが最も希少な資源になっています。重要な医療判断を、偶然の紹介や単一機関の提案だけに委ねるべきではありません。",
      "MWMWTは、医療判断に入る前に、より完全な情報、慎重なアクセス経路、明確なリスク境界、長期フォローの秩序を家族に提供するために存在します。"
    ],
    founderSignature: "MWMWT Founder Office",
    whyJapanEyebrow: "Why Japan",
    whyJapanTitle: "なぜ日本なのか。",
    whyJapanBody:
      "日本は単一プログラムの目的地ではありません。精密健診、長期健康管理、再生医療の規制枠組み、高い秘匿性が同時に成立する医療市場です。",
    valueEyebrow: "What Clients Actually Buy",
    valueTitle: "お客様が求めるのは、プログラムではなく健康上の意思決定力です。",
    valueBody:
      "富裕層家族にとって重要なのは、重大な健康判断の前に、判断材料、時間効率、秘匿性、長期リスク管理を持つことです。",
    storyEyebrow: "Client Story",
    storyQuote:
      "At times, the most valuable form of medical care is not a procedure, but certainty.",
    storyTranslation:
      "時に、最も価値のある医療は処置そのものではなく、正確で信頼できる専門的判断です。",
    storyCta: "Read the Story",
    referenceEyebrow: "Medical Reference Network",
    referenceTitle: "公開医学専門家データベース。",
    referenceBody:
      "Based on public academic and professional information. 医師情報は医療資源調査、専門領域の理解、紹介前準備のためのものであり、MWMWTのチームメンバー、提携確定、受診可能性を意味しません。",
    referenceCta: "公開専門家資料を見る",
    contactEyebrow: "Apply for Private Consultation",
    contactTitle: "申請制、審査制、予約制。",
    contactBody:
      "MWMWTは年間で限られたプライベートクライアントのみ受け入れます。送信後、適合性を確認してからプライベート医療相談を調整します。",
    contactCta: "プライベート相談を申請"
  },
  en: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging Is Not Destiny.",
    heroSubtitle: "Private Health, Longevity & Japan Medical Access.",
    heroLine: "Japan Longevity Medicine × Regenerative Medicine × Executive Health",
    heroBody:
      "MWMWT provides private medical advisory, long-term health risk management, and Japan medical access coordination for entrepreneurs, investors, and families.",
    heroCta: "Apply for Private Consultation",
    founderEyebrow: "Founder Letter",
    founderTitle: "Why MWMWT exists.",
    founderParagraphs: [
      "Wealth can be transferred. Health risk also needs to be governed.",
      "As entrepreneurs gain the ability to allocate assets globally, health governance becomes one of the scarcest resources. Critical medical decisions should not depend only on search results, informal referrals, or a single provider's recommendation.",
      "MWMWT exists to give families clearer information, a more prudent access pathway, defined risk boundaries, and a long-term follow-up structure before major medical decisions are made."
    ],
    founderSignature: "MWMWT Founder Office",
    whyJapanEyebrow: "Why Japan",
    whyJapanTitle: "Why global clients should take Japan seriously.",
    whyJapanBody:
      "Japan is not just a destination for individual programs. It is a market where precision screening, long-term health management, regenerative medicine regulation, and high privacy standards can coexist.",
    valueEyebrow: "What Clients Actually Buy",
    valueTitle: "Clients are not buying projects. They are buying health decision power.",
    valueBody:
      "For high-net-worth families, the real value is better judgment, time efficiency, privacy protection, and long-term risk control before important health decisions.",
    storyEyebrow: "Client Story",
    storyQuote:
      "At times, the most valuable form of medical care is not a procedure, but certainty.",
    storyTranslation:
      "The right answer can be more valuable than more intervention.",
    storyCta: "Read the Story",
    referenceEyebrow: "Medical Reference Network",
    referenceTitle: "Public Medical Expert Database.",
    referenceBody:
      "Based on public academic and professional information. Physician profiles are used for medical resource research, specialty understanding, and pre-referral preparation. They do not imply employment by MWMWT, confirmed cooperation, endorsement, or availability.",
    referenceCta: "View Public Expert Database",
    contactEyebrow: "Apply for Private Consultation",
    contactTitle: "Application-based, reviewed, and appointment-only.",
    contactBody:
      "MWMWT accepts a limited number of private clients each year. After submission, we first assess fit, then arrange a confidential medical advisory conversation.",
    contactCta: "Apply for Private Consultation"
  }
};

const valueItems = {
  zh: [
    ["Healthspan", "把关注点从寿命延长，转向更长时间保持功能、精力与生活质量。"],
    ["Risk Control", "在重大健康选择前，先确认资料、风险、替代路径和合理边界。"],
    ["Medical Access", "帮助客户更有秩序地进入日本及全球合规医疗资源。"],
    ["Time Efficiency", "减少家庭自行筛选医生、医院、语言和流程的时间成本。"],
    ["Family Governance", "为父母、配偶、子女和核心决策者建立长期健康管理秩序。"]
  ],
  ja: [
    ["Healthspan", "寿命そのものではなく、機能、活力、生活の質をより長く保つことを重視します。"],
    ["Risk Control", "重要な健康判断の前に、資料、リスク、代替経路、合理的な境界を確認します。"],
    ["Medical Access", "日本および世界の適切な医療資源へ、秩序あるアクセスを支援します。"],
    ["Time Efficiency", "医師、医療機関、言語、手続きの選定にかかる時間負担を減らします。"],
    ["Family Governance", "両親、配偶者、子ども、主要意思決定者の長期健康管理を整えます。"]
  ],
  en: [
    ["Healthspan", "Focus on preserving function, energy, and quality of life for longer."],
    ["Risk Control", "Clarify documents, risks, alternatives, and boundaries before major decisions."],
    ["Medical Access", "Create a more orderly path into compliant Japan and global medical resources."],
    ["Time Efficiency", "Reduce the burden of screening physicians, institutions, languages, and workflows."],
    ["Family Governance", "Build long-term health order for parents, spouses, children, and key decision makers."]
  ]
};

const whyJapanItems = {
  zh: ["世界最长寿国家之一", "稳定的医疗体系", "深厚的医学研究能力", "再生医疗监管框架", "高度重视安全与流程", "适合高隐私医疗安排"],
  ja: ["世界有数の長寿国", "安定した医療制度", "高度な医学研究力", "再生医療の規制枠組み", "安全性と手順の重視", "高い秘匿性の医療手配"],
  en: ["One of the world's longest-living societies", "Stable healthcare system", "Strong medical research base", "Regenerative medicine regulatory framework", "Safety-oriented process culture", "High-privacy medical arrangements"]
};

const referenceSpecialties = ["Oncology", "Cardiology", "Neurology", "Regenerative Medicine", "Endocrinology", "Sports Medicine"];

const consultationRules = {
  zh: ["申请制", "适配度审核", "预约制沟通", "信息保密"],
  ja: ["申請制", "適合性確認", "予約制相談", "情報の秘匿性"],
  en: ["Application-based", "Fit review", "Appointment-only", "Confidential handling"]
};

export default function Home({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-pearl">
        <Image
          src="/hero-longevity-concierge.png"
          alt="Private longevity medical advisory setting"
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.02),rgba(18,20,18,0.88))]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            {text.heroEyebrow}
          </p>
          <h1 className="mt-8 max-w-6xl font-serif text-6xl leading-[0.95] text-balance md:text-8xl">
            {text.heroTitle}
          </h1>
          <p className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-champagne md:text-6xl">
            {text.heroSubtitle}
          </p>
          <p className="mt-8 max-w-4xl text-sm font-semibold uppercase tracking-[0.2em] text-pearl/78">
            {text.heroLine}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-pearl/76">{text.heroBody}</p>
          <Link
            href={withLanguage("/contact", lang)}
            className="mt-10 inline-flex w-fit items-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
          >
            {text.heroCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.founderEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-ink md:text-7xl">
              {text.founderTitle}
            </h2>
          </div>
          <div className="border-l border-champagne/60 pl-6 md:pl-10">
            {text.founderParagraphs.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-xl leading-10 text-graphite/76">
                {paragraph}
              </p>
            ))}
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-champagne">
              {text.founderSignature}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[16/11] overflow-hidden border border-mist bg-ink">
            <Image
              src="/fuji-active-longevity.png"
              alt="Active longevity near Mount Fuji"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.whyJapanEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.whyJapanTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.whyJapanBody}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {whyJapanItems[lang].map((item) => (
                <div key={item} className="border-l border-champagne/60 bg-white px-5 py-4">
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {text.valueEyebrow}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {text.valueTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">{text.valueBody}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-mist bg-mist lg:grid-cols-5">
            {valueItems[lang].map(([title, body]) => (
              <article key={title} className="bg-pearl p-6">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-graphite/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-5 py-24 text-pearl lg:px-8">
        <Image
          src="/hero-global-medical-access.png"
          alt="Private medical decision pathway"
          fill
          className="object-cover object-center opacity-28"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">
            {text.storyEyebrow}
          </p>
          <blockquote className="mt-8 font-serif text-4xl leading-tight md:text-6xl">
            {text.storyQuote}
          </blockquote>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-pearl/78">
            {text.storyTranslation}
          </p>
          <Link
            href={withLanguage("/case-library/second-opinion-certainty", lang)}
            className="mt-10 inline-flex bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
          >
            {text.storyCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.referenceEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.referenceTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.referenceBody}</p>
            <Link
              href={withLanguage("/doctor-network", lang)}
              className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              {text.referenceCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {referenceSpecialties.map((item) => (
              <div key={item} className="border-l border-champagne/70 bg-white px-6 py-5">
                <p className="text-lg font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl border border-mist bg-pearl p-8 text-center shadow-quiet md:p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">
            {text.contactEyebrow}
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
            {text.contactTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-graphite/72">
            {text.contactBody}
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-4">
            {consultationRules[lang].map((item) => (
              <div key={item} className="border border-mist bg-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">{item}</p>
              </div>
            ))}
          </div>
          <Link
            href={withLanguage("/contact", lang)}
            className="mt-10 inline-flex bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
          >
            {text.contactCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
