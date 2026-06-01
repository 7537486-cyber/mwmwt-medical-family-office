import Image from "next/image";
import Link from "next/link";
import { ExpandableText } from "@/components/ExpandableText";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const copy = {
  zh: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging is inevitable. Decline is not.",
    heroSubtitle: "衰老不可避免，但衰退可以被管理。",
    heroBody: "我们帮助成功家庭做出更好的长期健康决策。Medical Family Office for Longevity, Executive Health and Global Medical Access.",
    heroCta: "申请私密顾问沟通",
    problemEyebrow: "Client Questions",
    problemTitle: "客户真正需要回答的，不是项目名称，而是关键判断。",
    problemBody: "AETERA 的价值，是在医疗信息不对称、跨境资源复杂、重大健康决策难以判断时，帮助家庭建立更清晰的路径。",
    missionEyebrow: "Mission",
    missionTitle: "Extend Healthspan, Not Just Lifespan.",
    missionBody:
      "Our Mission\n\nTo help families extend not only lifespan, but healthspan — ensuring more years lived with vitality, dignity, and purpose.\n\n帮助家庭延长的不仅是寿命（Lifespan），更是健康寿命（Healthspan）。让更多岁月充满活力、尊严与意义。\n\nAETERA 的愿景，是成为亚洲领先的医疗家族办公室。我们相信，健康不应该等到疾病发生后才被重视，而应该像财富、企业与家族资产一样，被长期规划、专业管理、持续追踪。\n\nAETERA 希望为企业家家庭建立一套长期的健康管理系统，整合日本及全球优质医疗资源，帮助客户管理衰老相关风险、降低重大疾病风险、提升生命质量，并在关键医疗决策中获得更清晰、更可信赖的答案。\n\n我们的目标不是提供一次性的医疗项目，而是长期陪伴一个家庭管理最重要的资产：生命本身。",
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
    heroBody: "成功したご家族が、長期的な健康判断をより良く行うための Medical Family Office です。Longevity, Executive Health, Global Medical Access.",
    heroCta: "プライベート相談を申請",
    problemEyebrow: "Client Questions",
    problemTitle: "必要なのは、プログラム名ではなく重要な判断です。",
    problemBody: "AETERA は、医療情報の非対称性、国際医療資源の複雑さ、重大な健康判断に直面するご家族へ、より明確な道筋を提供します。",
    missionEyebrow: "Mission",
    missionTitle: "Extend Healthspan, Not Just Lifespan.",
    missionBody:
      "Our Mission\n\nTo help families extend not only lifespan, but healthspan — ensuring more years lived with vitality, dignity, and purpose.\n\n家族が延ばすべきものは寿命だけではなく、健康寿命です。より多くの時間を、活力、尊厳、目的とともに生きるために。\n\nAETERA のビジョンは、アジアを代表する Medical Family Office になることです。健康は病気が起きてから重視されるものではなく、資産、事業、家族資産と同じように、長期的に計画され、専門的に管理され、継続的に見直されるべきものです。\n\nAETERA は、経営者家族のために長期的な健康管理システムを構築し、日本および世界の質の高い医療資源を統合します。老化に関連するリスク、重大疾患リスク、生活の質、そして重要な医療判断における信頼できる答えを支援します。\n\n私たちの目的は一回限りの医療プログラムではなく、家族にとって最も重要な資産である生命そのものを長期的に支えることです。",
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
    heroBody: "We help successful families make better long-term health decisions. Medical Family Office for Longevity, Executive Health and Global Medical Access.",
    heroCta: "Apply for Private Consultation",
    problemEyebrow: "Client Questions",
    problemTitle: "Clients do not need more medical noise. They need better judgment.",
    problemBody: "AETERA exists for moments when medical information is fragmented, global resources are hard to evaluate, and a family needs a clearer decision path.",
    missionEyebrow: "Mission",
    missionTitle: "Extend Healthspan, Not Just Lifespan.",
    missionBody:
      "Our Mission\n\nTo help families extend not only lifespan, but healthspan — ensuring more years lived with vitality, dignity, and purpose.\n\nAETERA's vision is to become Asia's leading Medical Family Office. We believe health should not wait until illness appears. It should be planned, professionally managed, and continuously reviewed like wealth, enterprise value, and family assets.\n\nAETERA helps entrepreneurial families build a long-term health management system, integrating Japan and global medical resources to manage age-related risk, reduce major disease risk, improve quality of life, and obtain clearer, more trustworthy answers at critical medical decision points.\n\nOur goal is not to provide a one-time medical program. It is to accompany a family over time in managing its most important asset: life itself.",
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

const japanFacts = {
  zh: ["世界最长寿国家之一", "医疗体系稳定", "医疗资源密度高", "检查体系完善", "隐私性强", "医患关系克制"],
  ja: ["世界有数の長寿国", "安定した医療制度", "医療資源の密度", "精密な検査体制", "高い秘匿性", "抑制的な医患関係"],
  en: ["Long-living society", "Stable healthcare system", "Dense medical resources", "Mature screening culture", "High privacy standards", "Measured physician-patient culture"]
};

const problemLinks = {
  zh: [
    ["我40岁以后，如何判断自己老得快不快？", "/knowledge-center/longevity-medicine"],
    ["日本干细胞到底合法吗、安全吗？", "/knowledge-center/stem-cell-legality-japan"],
    ["一年体检几十万，怎么知道该信谁？", "/knowledge-center/japan-executive-health-checkup"],
    ["父母遇到癌症风险，如何获取第二诊疗意见？", "/knowledge-center/japan-cancer-second-opinion"],
    ["企业家如何避免长期高压带来的健康风险？", "/knowledge-center/executive-health-management"],
    ["怎样建立一个家庭长期健康档案？", "/knowledge-center/family-health-governance-for-high-net-worth-families"]
  ],
  ja: [
    ["40代以降、自分の老化速度をどう理解するか。", "/knowledge-center/longevity-medicine"],
    ["日本の幹細胞医療は合法で安全なのか。", "/knowledge-center/stem-cell-legality-japan"],
    ["高額な健診をどう判断すべきか。", "/knowledge-center/japan-executive-health-checkup"],
    ["親世代のがんリスクで、セカンドオピニオンをどう準備するか。", "/knowledge-center/japan-cancer-second-opinion"],
    ["経営者の高ストレス健康リスクをどう管理するか。", "/knowledge-center/executive-health-management"],
    ["家族の長期健康記録をどう作るか。", "/knowledge-center/family-health-governance-for-high-net-worth-families"]
  ],
  en: [
    ["How do I know if I am aging faster after 40?", "/knowledge-center/longevity-medicine"],
    ["Are stem cell programs in Japan legal and safe?", "/knowledge-center/stem-cell-legality-japan"],
    ["How do I judge an expensive executive checkup?", "/knowledge-center/japan-executive-health-checkup"],
    ["How should a family prepare a cancer second opinion in Japan?", "/knowledge-center/japan-cancer-second-opinion"],
    ["How should founders manage high-pressure health risk?", "/knowledge-center/executive-health-management"],
    ["How do we build a long-term family health archive?", "/knowledge-center/family-health-governance-for-high-net-worth-families"]
  ]
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.problemEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.problemTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.problemBody}</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
            {problemLinks[lang].map(([label, href]) => (
              <Link
                key={label}
                href={withLanguage(href, lang)}
                className="group bg-pearl p-6 transition hover:bg-ink"
              >
                <p className="text-lg font-semibold leading-8 text-ink transition group-hover:text-pearl">
                  {label}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                  {lang === "ja" ? "詳しく読む" : lang === "en" ? "Read More" : "阅读答案"} →
                </p>
              </Link>
            ))}
          </div>
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
              <ExpandableText
                text={body}
                lang={lang}
                className="mt-6 text-base leading-8 text-pearl/68"
                buttonClassName="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-champagne transition hover:text-pearl"
              />
            </article>
          ))}
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
            <Link
              href={withLanguage("/global-medical-access", lang)}
              className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              {lang === "ja" ? "詳しく見る" : lang === "en" ? "Explore Japan Access" : "了解日本医疗入口"} <span aria-hidden="true">→</span>
            </Link>
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
