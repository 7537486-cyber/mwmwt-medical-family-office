import Image from "next/image";
import Link from "next/link";
import { CinematicSection } from "@/components/CinematicSection";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const copy = {
  zh: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging is inevitable. Decline is not.",
    heroSubtitle: "衰老不可避免，但衰退可以被管理。",
    heroBody: "Medical Family Office 帮助企业家与家族把健康作为长期资产进行管理。",
    heroCta: "申请私密顾问沟通",
    missionEyebrow: "Mission",
    missionTitle: "Extend Healthspan, Not Just Lifespan.",
    missionBody: "延长健康寿命，而不仅是生命长度。",
    visionEyebrow: "Vision",
    visionTitle: "A Medical Family Office for Every Successful Family.",
    visionBody: "让每一个成功家庭都拥有自己的医疗家族办公室。",
    philosophyEyebrow: "Philosophy",
    philosophyTitle: "Aging is inevitable. Decline is not.",
    philosophyBody: "时间无法停止，但健康可以被管理；风险可以被提前发现，未来可以被更好地规划。",
    assetEyebrow: "Ultimate Asset",
    assetTitle: "Health Is The Ultimate Asset.",
    assetBody: "财富可以配置，事业可以传承，但健康决策一旦失误，时间、行动力与家庭稳定性都会受到影响。",
    protectEyebrow: "What We Protect",
    protectTitle: "我们保护的不是项目，而是人生关键能力。",
    japanEyebrow: "Why Japan",
    japanTitle: "为什么全球家庭需要认真看日本。",
    japanBody: "日本的价值不在于单一项目，而在于稳定、克制、重视流程和隐私的医疗生态。",
    worksEyebrow: "How It Works",
    worksTitle: "一个清晰的私人医疗顾问流程。",
    founderEyebrow: "Founder Letter",
    founderTitle: "财富管理资产，健康管理人生。",
    founderBody:
      "我们见过太多企业家在事业成功后，才开始面对健康风险。Medical Family Office 的使命，是帮助客户更冷静地面对未来几十年的健康决策。",
    founderCta: "阅读创始人信",
    caseEyebrow: "Case Journey",
    caseTitle: "When Certainty Matters Most",
    caseBody:
      "一位中国企业家因重大健康风险赴日寻求第二诊疗意见。通过更全面的检查、多学科评估与长期健康跟踪，他获得了更准确的健康判断，并避免了可能并无必要的医疗决策。",
    caseQuote: "Sometimes the most valuable treatment is not a procedure. It is certainty.",
    caseCta: "Read The Story",
    journeyEyebrow: "Real Health Journeys",
    journeyTitle: "真实健康决策案例。",
    journeyBody: "案例中心展示的是服务路径与决策过程，不宣传疗效，也不承诺结果。",
    journeyCta: "进入案例中心",
    membershipEyebrow: "Apply For Membership",
    membershipTitle: "不是一次消费，而是一段长期关系。",
    membershipBody: "会员体系用于持续管理健康风险、医疗资源、家庭需求和跨境医疗安排。价格不公开，申请后进行适配度确认。",
    membershipCta: "了解会员体系",
    contactEyebrow: "Private Consultation",
    contactTitle: "申请制、审核制、预约制。",
    contactBody: "提交信息后，我们会先判断适配度，再安排私密医疗顾问沟通。",
    contactCta: "申请私密咨询"
  },
  ja: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging is inevitable. Decline is not.",
    heroSubtitle: "老化は避けられません。しかし衰退は管理できます。",
    heroBody: "Medical Family Office は、経営者と家族が健康を長期資産として管理するための医療助言体系です。",
    heroCta: "プライベート相談を申請",
    missionEyebrow: "Mission",
    missionTitle: "Extend Healthspan, Not Just Lifespan.",
    missionBody: "寿命だけでなく、健康寿命を延ばす。",
    visionEyebrow: "Vision",
    visionTitle: "A Medical Family Office for Every Successful Family.",
    visionBody: "すべての成功した家族に、自分たちの医療ファミリーオフィスを。",
    philosophyEyebrow: "Philosophy",
    philosophyTitle: "Aging is inevitable. Decline is not.",
    philosophyBody: "時間は止められません。しかし健康は管理でき、リスクは早期に見つけ、未来はより良く設計できます。",
    assetEyebrow: "Ultimate Asset",
    assetTitle: "Health Is The Ultimate Asset.",
    assetBody: "資産は配置でき、事業は継承できます。しかし健康判断を誤れば、時間、行動力、家族の安定性に影響します。",
    protectEyebrow: "What We Protect",
    protectTitle: "守るのはプログラムではなく、人生の重要な機能です。",
    japanEyebrow: "Why Japan",
    japanTitle: "なぜ日本を真剣に見るべきなのか。",
    japanBody: "日本の価値は単一プログラムではなく、安定し、抑制的で、手順と秘匿性を重視する医療環境にあります。",
    worksEyebrow: "How It Works",
    worksTitle: "明確なプライベート医療アドバイザリーの流れ。",
    founderEyebrow: "Founder Letter",
    founderTitle: "資産を管理するように、健康と人生を管理する。",
    founderBody:
      "事業で成功した後に、健康リスクと向き合い始める経営者を多く見てきました。Medical Family Office の使命は、今後数十年の健康判断をより冷静に支えることです。",
    founderCta: "創業者の手紙を読む",
    caseEyebrow: "Case Journey",
    caseTitle: "When Certainty Matters Most",
    caseBody:
      "ある中国人経営者は重大な健康リスクに直面し、日本でセカンドオピニオンを求めました。より包括的な検査、多職種評価、長期フォローにより、より明確な医学的判断を得ました。",
    caseQuote: "Sometimes the most valuable treatment is not a procedure. It is certainty.",
    caseCta: "Read The Story",
    journeyEyebrow: "Real Health Journeys",
    journeyTitle: "実際の健康意思決定ケース。",
    journeyBody: "ケースセンターはサービス経路と意思決定過程を示すもので、効果宣伝や結果保証ではありません。",
    journeyCta: "ケースセンターへ",
    membershipEyebrow: "Apply For Membership",
    membershipTitle: "一回の消費ではなく、長期的な関係です。",
    membershipBody: "会員制度は健康リスク、医療資源、家族ニーズ、国際医療手配を継続的に管理するための仕組みです。",
    membershipCta: "会員制度を見る",
    contactEyebrow: "Private Consultation",
    contactTitle: "申請制、審査制、予約制。",
    contactBody: "送信後、適合性を確認してからプライベート医療相談を調整します。",
    contactCta: "プライベート相談を申請"
  },
  en: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging is inevitable. Decline is not.",
    heroSubtitle: "Private Health, Longevity & Japan Medical Access.",
    heroBody: "Medical Family Office helps entrepreneurs and families manage health as a long-term asset.",
    heroCta: "Apply for Private Consultation",
    missionEyebrow: "Mission",
    missionTitle: "Extend Healthspan, Not Just Lifespan.",
    missionBody: "The goal is not simply to live longer, but to live longer with function, clarity, and dignity.",
    visionEyebrow: "Vision",
    visionTitle: "A Medical Family Office for Every Successful Family.",
    visionBody: "Every successful family should have a trusted system for long-term medical decisions.",
    philosophyEyebrow: "Philosophy",
    philosophyTitle: "Aging is inevitable. Decline is not.",
    philosophyBody: "Time moves forward. Health can be managed, risks can be identified earlier, and the future can be planned with more clarity.",
    assetEyebrow: "Ultimate Asset",
    assetTitle: "Health Is The Ultimate Asset.",
    assetBody: "Capital can be allocated and businesses can be transferred. A wrong health decision can affect time, mobility, judgment, and family stability.",
    protectEyebrow: "What We Protect",
    protectTitle: "We protect the capabilities that shape a life.",
    japanEyebrow: "Why Japan",
    japanTitle: "Why global families should take Japan seriously.",
    japanBody: "Japan's value is not a single program. It is a stable, process-oriented, privacy-conscious medical ecosystem.",
    worksEyebrow: "How It Works",
    worksTitle: "A clear private medical advisory process.",
    founderEyebrow: "Founder Letter",
    founderTitle: "Wealth manages assets. Health manages life.",
    founderBody:
      "We have seen too many entrepreneurs face health risk only after business success. The mission of Medical Family Office is to help clients make calmer health decisions for the decades ahead.",
    founderCta: "Read Founder Letter",
    caseEyebrow: "Case Journey",
    caseTitle: "When Certainty Matters Most",
    caseBody:
      "A Chinese entrepreneur sought a second opinion in Japan after facing a major health risk. Through broader testing, multidisciplinary review, and long-term follow-up, he gained a clearer medical judgment and avoided a potentially unnecessary decision.",
    caseQuote: "Sometimes the most valuable treatment is not a procedure. It is certainty.",
    caseCta: "Read The Story",
    journeyEyebrow: "Real Health Journeys",
    journeyTitle: "Real health decision journeys.",
    journeyBody: "The case library shows service pathways and decision-making logic. It does not advertise outcomes or promise results.",
    journeyCta: "Enter Case Library",
    membershipEyebrow: "Apply For Membership",
    membershipTitle: "Not a transaction. A long-term relationship.",
    membershipBody: "Membership is designed for ongoing health risk management, medical access, family needs, and cross-border coordination.",
    membershipCta: "Explore Membership",
    contactEyebrow: "Private Consultation",
    contactTitle: "Application-based, reviewed, and appointment-only.",
    contactBody: "After submission, we first assess fit, then arrange a confidential medical advisory conversation.",
    contactCta: "Apply for Private Consultation"
  }
};

const protectItems = {
  zh: [
    ["Decision Making Ability", "判断力"],
    ["Mobility", "行动能力"],
    ["Cognitive Health", "认知能力"],
    ["Family Stability", "家庭稳定性"],
    ["Time", "人生时间"]
  ],
  ja: [
    ["Decision Making Ability", "判断力"],
    ["Mobility", "行動能力"],
    ["Cognitive Health", "認知機能"],
    ["Family Stability", "家族の安定"],
    ["Time", "人生の時間"]
  ],
  en: [
    ["Decision Making Ability", "Clarity before major decisions"],
    ["Mobility", "The freedom to keep moving"],
    ["Cognitive Health", "Judgment, memory, and focus"],
    ["Family Stability", "Less uncertainty for the family"],
    ["Time", "More high-quality years"]
  ]
};

const japanFacts = {
  zh: ["世界最长寿国家之一", "医疗体系稳定", "医疗资源密度高", "检查体系完善", "隐私性强", "医患关系克制"],
  ja: ["世界有数の長寿国", "安定した医療制度", "医療資源の密度", "精密な検査体制", "高い秘匿性", "抑制的な医患関係"],
  en: ["Long-living society", "Stable healthcare system", "Dense medical resources", "Mature screening culture", "High privacy standards", "Measured physician-patient culture"]
};

const processSteps = {
  zh: [
    ["01", "Assessment", "健康目标、家族背景、既往资料与风险议题。"],
    ["02", "Strategy", "明确优先级、边界、可选路径和时间安排。"],
    ["03", "Access", "匹配日本及全球合规医疗资源与专家路径。"],
    ["04", "Follow-up", "建立长期档案、复盘指标和下一阶段计划。"]
  ],
  ja: [
    ["01", "Assessment", "健康目標、家族背景、既存資料、リスク課題を確認。"],
    ["02", "Strategy", "優先順位、境界、選択肢、時間軸を整理。"],
    ["03", "Access", "日本および海外の適切な医療資源と専門家経路を調整。"],
    ["04", "Follow-up", "長期記録、指標レビュー、次段階計画を構築。"]
  ],
  en: [
    ["01", "Assessment", "Health goals, family context, records, and risk concerns."],
    ["02", "Strategy", "Priorities, boundaries, options, and timing."],
    ["03", "Access", "Japan and global medical resources with appropriate specialist pathways."],
    ["04", "Follow-up", "Long-term records, indicator reviews, and next-stage plans."]
  ]
};

const journeyCards = {
  zh: [
    ["Second Opinion", "浙江企业家重大健康风险第二意见", "/case-library/second-opinion-certainty"],
    ["Executive Health", "连续失眠企业家健康管理路径", "/case-library/executive-sleep-health"],
    ["Family Medical Planning", "企业家夫妻赴日冻卵与家庭规划", "/case-library/family-fertility-planning"],
    ["Risk Management", "癌症风险筛查与长期管理路径", "/case-library/cancer-risk-management"]
  ],
  ja: [
    ["Second Opinion", "中国人経営者の重大リスクとセカンドオピニオン", "/case-library/second-opinion-certainty"],
    ["Executive Health", "不眠が続く経営者の健康管理", "/case-library/executive-sleep-health"],
    ["Family Medical Planning", "日本での卵子凍結と家族計画", "/case-library/family-fertility-planning"],
    ["Risk Management", "がんリスク検査と長期管理", "/case-library/cancer-risk-management"]
  ],
  en: [
    ["Second Opinion", "Zhejiang entrepreneur second-opinion journey", "/case-library/second-opinion-certainty"],
    ["Executive Health", "Persistent insomnia and founder health management", "/case-library/executive-sleep-health"],
    ["Family Medical Planning", "Fertility preservation and family planning in Japan", "/case-library/family-fertility-planning"],
    ["Risk Management", "Cancer risk screening and long-term planning", "/case-library/cancer-risk-management"]
  ]
};

const membershipTiers = ["Silver", "Gold", "Black", "Family Office"];

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
          src="/fuji-active-longevity.png"
          alt="Private longevity medical advisory setting"
          fill
          priority
          className="object-cover object-center opacity-58"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-ink/20" />
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
          <p className="mt-8 max-w-3xl text-lg leading-9 text-pearl/76">{text.heroBody}</p>
          <Link
            href={withLanguage("/contact", lang)}
            className="mt-10 inline-flex w-fit items-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
          >
            {text.heroCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {[
            [text.missionEyebrow, text.missionTitle, text.missionBody],
            [text.visionEyebrow, text.visionTitle, text.visionBody],
            [text.philosophyEyebrow, text.philosophyTitle, text.philosophyBody]
          ].map(([eyebrow, title, body]) => (
            <article key={eyebrow} className="bg-ink p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">{eyebrow}</p>
              <h2 className="mt-7 font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
              <p className="mt-6 text-base leading-8 text-pearl/68">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.assetEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-ink md:text-7xl">
              {text.assetTitle}
            </h2>
          </div>
          <p className="text-xl leading-10 text-graphite/74">{text.assetBody}</p>
        </div>
      </section>

      <CinematicSection
        eyebrow="Healthspan Strategy"
        title="Your health deserves a long-term strategy."
        body={
          lang === "ja"
            ? "単発の検査や治療ではなく、健康寿命、リスク管理、医療資源、家族の意思決定を一つの長期戦略として扱います。"
            : lang === "en"
              ? "Not a single checkup or procedure, but a long-term strategy across healthspan, risk control, medical access, and family decision-making."
              : "不是一次体检或一个项目，而是把健康寿命、风险控制、医疗资源和家庭决策放进同一套长期战略。"
        }
        image={{ src: "/hero-medical-family-office.png", alt: "Private medical family office strategy" }}
      />

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.protectEyebrow}</p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-ink md:text-6xl">
            {text.protectTitle}
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-5">
            {protectItems[lang].map(([title, body]) => (
              <article key={title} className="bg-white p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{title}</p>
                <h3 className="mt-5 text-xl font-semibold leading-7 text-ink">{body}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
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
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.japanEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.japanTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.japanBody}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {japanFacts[lang].map((item) => (
                <div key={item} className="border-l border-champagne/60 bg-pearl px-5 py-4">
                  <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.worksEyebrow}</p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            {text.worksTitle}
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {processSteps[lang].map(([number, title, body]) => (
              <article key={number} className="bg-ink p-7">
                <p className="font-serif text-5xl text-champagne">{number}</p>
                <h3 className="mt-8 text-xl font-semibold text-pearl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-pearl/68">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.founderEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.founderTitle}
            </h2>
          </div>
          <div className="border-l border-champagne/60 pl-6 md:pl-10">
            <p className="text-xl leading-10 text-graphite/76">{text.founderBody}</p>
            <Link
              href={withLanguage("/founder", lang)}
              className="mt-8 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              {text.founderCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-5 py-24 text-pearl lg:px-8">
        <Image
          src="/hero-doctor-network.png"
          alt="Private medical second opinion review"
          fill
          className="object-cover object-center opacity-28"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/74" />
        <div className="relative mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.caseEyebrow}</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{text.caseTitle}</h2>
          <p className="mt-7 max-w-4xl text-xl leading-10 text-pearl/78">{text.caseBody}</p>
          <blockquote className="mt-10 border-l border-champagne pl-6 font-serif text-3xl leading-tight text-champagne md:text-5xl">
            {text.caseQuote}
          </blockquote>
          <Link
            href={withLanguage("/case-library/second-opinion-certainty", lang)}
            className="mt-10 inline-flex bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
          >
            {text.caseCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.journeyEyebrow}</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {text.journeyTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">{text.journeyBody}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-4">
            {journeyCards[lang].map(([label, title, href]) => (
              <Link
                key={href}
                href={withLanguage(href, lang)}
                className="group bg-white p-6 transition hover:bg-ink"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{label}</p>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-ink transition group-hover:text-pearl">
                  {title}
                </h3>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-graphite/48 transition group-hover:text-champagne">
                  Read →
                </p>
              </Link>
            ))}
          </div>
          <Link
            href={withLanguage("/case-library", lang)}
            className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
          >
            {text.journeyCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.membershipEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.membershipTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.membershipBody}</p>
            <Link
              href={withLanguage("/membership-program", lang)}
              className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              {text.membershipCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {membershipTiers.map((tier, index) => (
              <div key={tier} className="border border-mist bg-pearl p-7">
                <p className="font-serif text-4xl text-champagne">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-semibold text-ink">{tier}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.contactEyebrow}</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{text.contactTitle}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-pearl/72">{text.contactBody}</p>
          <Link
            href={withLanguage("/contact", lang)}
            className="mt-10 inline-flex bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
          >
            {text.contactCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
