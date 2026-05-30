import Image from "next/image";
import Link from "next/link";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const homeCopy = {
  zh: {
    intro:
      "为企业家、家族与超高净值客户建立长期健康决策系统。我们把高端体检、长寿医学、再生医疗、全球转诊与家庭健康治理放在同一个顾问框架内。",
    risk: "核心不是一次就医，而是长期健康决策权、风险管理与跨境医疗资源的可控访问。",
    inquiry: "预约私密咨询",
    learn: "了解会员体系",
    whatBody:
      "参考国际高端医疗与长寿机构的资源整合逻辑，将检测、专家、长期追踪和跨境协调整合为一个持续服务关系。",
    whyBody:
      "客户选择我们的原因，是能在重大健康选择前获得更完整的信息、更安静的隐私保护和更长期的医学陪伴。",
    knowledgeBody:
      "知识中心将持续发布面向企业家与家庭办公室的医疗风险管理、长寿规划、赴日就医、冻卵与再生医疗文章。",
    boardBody:
      "医疗顾问资源以公开资料核验、专科能力、研究方向和适配场景进行整理，实际转诊前仍需确认医生接诊规则与机构准入要求。",
    membershipBody:
      "会员体系按家庭复杂度、服务频率、跨境需求和健康治理深度分层。"
  },
  ja: {
    intro:
      "起業家、家族、超富裕層クライアントのために、長期的な健康意思決定システムを構築します。高度健診、長寿医療、再生医療、国際紹介、家族健康ガバナンスを一つの顧問体制に統合します。",
    risk: "重要なのは単発受診ではなく、長期的な健康意思決定権、リスク管理、国際医療資源への管理されたアクセスです。",
    inquiry: "プライベート相談",
    learn: "会員制度を見る",
    whatBody:
      "国際的な高度医療・長寿医療機関の資源統合モデルを参考に、検査、専門医、長期フォロー、国際調整を継続的な関係として設計します。",
    whyBody:
      "重大な健康判断の前に、より完全な情報、静かな秘匿性、長期的な医療伴走を得られることが選ばれる理由です。",
    knowledgeBody:
      "ナレッジセンターでは、起業家とファミリーオフィス向けに医療リスク管理、長寿設計、訪日医療、卵子凍結、再生医療の記事を継続的に公開します。",
    boardBody:
      "医療顧問リソースは公開資料、専門性、研究領域、適応シーンを基に整理し、実際の紹介前には接診条件と医療機関規定を確認します。",
    membershipBody:
      "会員制度は家族の複雑性、サービス頻度、国際医療ニーズ、健康ガバナンスの深度に応じて設計します。"
  },
  en: {
    intro:
      "We build a long-term health decision system for entrepreneurs, families, and UHNW clients by integrating executive health, longevity medicine, regenerative medicine, global referrals, and family health governance.",
    risk:
      "The core value is not a single appointment. It is risk management, long-term health decision rights, and controlled access to global medical resources.",
    inquiry: "Book Private Inquiry",
    learn: "View Membership",
    whatBody:
      "Inspired by leading longevity and academic medical resource models, we integrate diagnostics, specialists, follow-up, and cross-border coordination into one continuous advisory relationship.",
    whyBody:
      "Clients choose us because major health decisions require better information, complete privacy, and a long-term medical team that stays with the family.",
    knowledgeBody:
      "The Knowledge Center will publish SEO articles for entrepreneurs and family offices on medical risk management, longevity planning, Japan access, egg freezing, and regenerative medicine.",
    boardBody:
      "Medical advisory resources are organized by public profile verification, specialty capability, research direction, and appropriate case scenarios. Actual referrals require current institution and physician confirmation.",
    membershipBody:
      "Membership is structured by family complexity, service frequency, cross-border needs, and the depth of health governance required."
  }
};

const whatWeDo = [
  "Executive Health Management",
  "Longevity Programs",
  "Regenerative Medicine Access",
  "Global Medical Concierge",
  "Family Health Planning"
];

const whyClientsChooseUs = [
  "Medical Network",
  "Long-Term Health Management",
  "Complete Privacy",
  "Cross-Border Medical Access",
  "Dedicated Health Team"
];

const knowledgeArticles = [
  "Executive Health Checkups in Japan for Entrepreneurs",
  "How UHNW Families Manage Medical Risk Across Borders",
  "Longevity Programs: Biomarkers, Imaging and Annual Review",
  "Regenerative Medicine Access in Japan: What Families Should Verify",
  "Second Opinions for Cancer, Cardiology and Neurology",
  "Egg Freezing and Fertility Preservation for Global Families",
  "Japan Medical Concierge: From Records to Specialist Access",
  "Family Health Governance for Founders and Next Generation",
  "Privacy Protocols for Sensitive Medical Records",
  "Medical Travel Planning for Complex Diagnoses",
  "Preventive Cardiology and Metabolic Risk Management",
  "How to Build a Long-Term Family Health Archive"
];

const memberships = [
  {
    name: "Silver",
    focus: "Annual review, executive health planning, and basic concierge coordination."
  },
  {
    name: "Gold",
    focus: "Quarterly health management, Japan specialist access, and priority second opinions."
  },
  {
    name: "Black",
    focus: "Dedicated health team, regenerative medicine diligence, and global medical access."
  },
  {
    name: "Family Office",
    focus: "Multi-generation governance, emergency protocol, archive management, and board-level reporting."
  }
];

export default function Home({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = homeCopy[lang];
  const featuredDoctors = doctorProfiles.slice(0, 4);

  return (
    <>
      <section className="relative min-h-[94vh] overflow-hidden bg-ink text-pearl">
        <Image
          src="/hero-longevity-concierge.png"
          alt="Private medical family office interior"
          fill
          priority
          className="object-cover object-center opacity-58"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-ink/25" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.1),rgba(18,20,18,0.82))]" />
        <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-44 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            Medical Family Office
          </p>
          <h1 className="mt-7 max-w-6xl font-serif text-5xl leading-[0.98] text-balance md:text-7xl lg:text-8xl">
            Private Health, Longevity & Global Medical Access
          </h1>
          <div className="mt-8 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xl font-semibold text-pearl">
                For Entrepreneurs, Families and UHNW Clients
              </p>
              <p className="mt-4 text-base uppercase tracking-[0.22em] text-champagne">
                Japan • Singapore • Switzerland • United States
              </p>
            </div>
            <p className="border-l border-champagne/50 pl-6 text-base leading-8 text-pearl/72">
              {copy.risk}
            </p>
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-pearl/76">
            {copy.intro}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={withLanguage("/contact", lang)}
              className="inline-flex items-center justify-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              {copy.inquiry} <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#membership"
              className="inline-flex items-center justify-center border border-pearl/45 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:border-champagne hover:text-champagne"
            >
              {copy.learn}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">What We Do</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              Integrated health management, not fragmented medical projects.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.whatBody}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <div key={item} className="border-t border-champagne/55 pt-5">
                <p className="font-serif text-4xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-xl font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative aspect-[16/10] overflow-hidden border border-mist bg-ink shadow-quiet">
            <Image
              src="/fuji-active-longevity.png"
              alt="Healthy active aging near Mount Fuji"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Why Clients Choose Us
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              Risk management for the family&apos;s most important asset: health.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.whyBody}</p>
            <div className="mt-10 divide-y divide-mist border-y border-mist">
              {whyClientsChooseUs.map((item) => (
                <div key={item} className="grid grid-cols-[1fr_auto] gap-6 py-5">
                  <p className="text-lg font-semibold text-ink">{item}</p>
                  <span className="text-champagne">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                Knowledge Center
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Search-ready medical intelligence for long-term decisions.
              </h2>
            </div>
            <p className="text-lg leading-9 text-pearl/72">{copy.knowledgeBody}</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {knowledgeArticles.map((article) => (
              <article key={article} className="bg-ink p-7 transition hover:bg-pearl/5">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  Medical Insight
                </p>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-pearl">
                  {article}
                </h3>
                <p className="mt-5 text-sm leading-7 text-pearl/60">
                  Designed for SEO expansion, client education, and pre-consultation trust building.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                Medical Advisory Board
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                Specialist intelligence before cross-border medical access.
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">{copy.boardBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredDoctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={withLanguage(`/doctor-network/${doctor.slug}`, lang)}
                className="border border-mist bg-white p-7 transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {doctor.specialty}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {doctor.name}
                </h3>
                <p className="mt-2 text-sm text-graphite/62">{doctor.jaName}</p>
                <p className="mt-5 text-sm leading-7 text-graphite/72">
                  {doctor.institution}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">Membership</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              A private health office scaled to the family.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.membershipBody}</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
            {memberships.map((membership) => (
              <article key={membership.name} className="bg-pearl p-8">
                <p className="font-serif text-4xl text-champagne">{membership.name}</p>
                <p className="mt-6 text-sm leading-7 text-graphite/72">{membership.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
