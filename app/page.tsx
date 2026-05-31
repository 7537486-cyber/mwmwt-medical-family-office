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
      "Private Medical Advisory for Individuals, Families and Global Executives. MWMWT 为高净值家庭、企业家与跨境客户建立长期医疗资源管理、健康寿命规划与私人医疗协调体系。",
    heroCta: "Book a Private Consultation",
    assetEyebrow: "Protect Your Most Valuable Asset",
    assetTitle: "Your Health.",
    assetBody:
      "高净值客户购买的不是医疗项目，而是健康寿命、风险控制、顶级资源、时间效率与家庭保障。",
    processEyebrow: "MWMWT Process",
    processTitle: "我们不是卖体检，我们管理长期健康。",
    governanceEyebrow: "Long-Term Health Governance",
    governanceTitle: "Health Is Not A Project. It Is A Lifelong System.",
    governanceBody:
      "很多机构在卖治疗；MWMWT 关注治理。我们将体检、医生意见、医疗资源、风险预案、家族健康档案与长期随访整合为可持续的健康决策系统。",
    accessEyebrow: "Global Medical Access",
    accessTitle: "日本、新加坡、瑞士、美国的医疗资源进入路径。",
    advisoryEyebrow: "Medical Advisory",
    advisoryTitle: "Building a 100+ Medical Specialist Network",
    advisoryBody:
      "医生网络不只是头像列表。我们按专科能力、公开履历、研究方向、机构规则和适配场景整理医生资源，实际转诊前仍需再次确认接诊条件。",
    executiveEyebrow: "Executive Health",
    executiveTitle: "For Founders, CEOs and Family Offices",
    familyEyebrow: "Family Health Office",
    familyTitle: "为父母、配偶、儿童与下一代建立家庭健康办公室。",
    knowledgeEyebrow: "Knowledge Center",
    knowledgeTitle: "持续建立可被 Google 与 AI 理解的医学内容资产。",
    knowledgeBody:
      "围绕日本长寿医学、生物年龄、睡眠与寿命、企业家健康、癌症早筛、再生医疗基础和日本医疗体系持续发布专业内容。",
    contactTitle: "Private Consultation",
    contactBody:
      "MWMWT accepts a limited number of private clients each year. 预约制、信息保密、中日英协调，适合高净值家庭、企业家与全球客户。",
    contactCta: "提交私密咨询"
  },
  ja: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging Is Not Destiny.",
    heroSubtitle: "老化は宿命ではありません。",
    heroLine: "日本の長寿医学 × 再生医療 × エグゼクティブ健康管理",
    heroBody:
      "Private Medical Advisory for Individuals, Families and Global Executives. MWMWTは富裕層家族、経営者、国際医療ニーズを持つお客様のために、長期医療資源管理、健康寿命計画、プライベート医療調整を提供します。",
    heroCta: "Book a Private Consultation",
    assetEyebrow: "Protect Your Most Valuable Asset",
    assetTitle: "Your Health.",
    assetBody:
      "お客様が求めるのは単一プログラムではなく、健康寿命、リスク管理、高度医療資源、時間効率、家族の安心です。",
    processEyebrow: "MWMWT Process",
    processTitle: "健診を売るのではなく、長期健康を管理します。",
    governanceEyebrow: "Long-Term Health Governance",
    governanceTitle: "Health Is Not A Project. It Is A Lifelong System.",
    governanceBody:
      "多くの機関は治療を販売します。MWMWTはガバナンスを重視します。健診、医師意見、医療資源、リスク対応、家族健康記録、長期フォローを一つの継続システムにします。",
    accessEyebrow: "Global Medical Access",
    accessTitle: "日本、シンガポール、スイス、米国への医療アクセス。",
    advisoryEyebrow: "Medical Advisory",
    advisoryTitle: "Building a 100+ Medical Specialist Network",
    advisoryBody:
      "医師ネットワークは顔写真の一覧ではありません。専門性、公開履歴、研究領域、医療機関ルール、適合シーンを整理し、紹介前に受診条件を確認します。",
    executiveEyebrow: "Executive Health",
    executiveTitle: "For Founders, CEOs and Family Offices",
    familyEyebrow: "Family Health Office",
    familyTitle: "両親、配偶者、子ども、次世代のための家族健康オフィス。",
    knowledgeEyebrow: "Knowledge Center",
    knowledgeTitle: "GoogleとAIが理解できる医療コンテンツ資産を継続構築します。",
    knowledgeBody:
      "日本の長寿医学、生物学的年齢、睡眠と寿命、経営者健康、がん早期発見、再生医療基礎、日本医療制度について継続的に発信します。",
    contactTitle: "Private Consultation",
    contactBody:
      "MWMWTは年間で限られたプライベートクライアントのみ受け入れます。予約制、秘密保持、中日英対応で、富裕層家族、経営者、グローバル顧客に対応します。",
    contactCta: "プライベート相談を送信"
  },
  en: {
    heroEyebrow: "Medical Family Office",
    heroTitle: "Aging Is Not Destiny.",
    heroSubtitle: "Japan longevity medicine, regenerative medicine, and executive health management.",
    heroLine: "Japan Longevity Medicine × Regenerative Medicine × Executive Health",
    heroBody:
      "Private Medical Advisory for Individuals, Families and Global Executives. MWMWT builds long-term medical resource management, healthspan planning, and private medical coordination systems for UHNW families and cross-border clients.",
    heroCta: "Book a Private Consultation",
    assetEyebrow: "Protect Your Most Valuable Asset",
    assetTitle: "Your Health.",
    assetBody:
      "Clients are not buying medical projects. They are buying healthspan, risk control, top-tier resources, time efficiency, and family protection.",
    processEyebrow: "MWMWT Process",
    processTitle: "We do not sell checkups. We manage long-term health.",
    governanceEyebrow: "Long-Term Health Governance",
    governanceTitle: "Health Is Not A Project. It Is A Lifelong System.",
    governanceBody:
      "Many providers sell treatment. MWMWT builds governance. We integrate diagnostics, physician opinions, medical access, risk protocols, family health archives, and long-term follow-up into a sustainable decision system.",
    accessEyebrow: "Global Medical Access",
    accessTitle: "Medical access across Japan, Singapore, Switzerland, and the United States.",
    advisoryEyebrow: "Medical Advisory",
    advisoryTitle: "Building a 100+ Medical Specialist Network",
    advisoryBody:
      "A doctor network is not a wall of headshots. We organize specialist capability, public credentials, research focus, institution rules, and case fit before referral conditions are confirmed.",
    executiveEyebrow: "Executive Health",
    executiveTitle: "For Founders, CEOs and Family Offices",
    familyEyebrow: "Family Health Office",
    familyTitle: "A family health office for parents, spouses, children, and the next generation.",
    knowledgeEyebrow: "Knowledge Center",
    knowledgeTitle: "Medical content assets that Google and AI can understand.",
    knowledgeBody:
      "We continue publishing on Japan longevity medicine, biological age, sleep and lifespan, executive health, cancer screening, regenerative medicine basics, and Japan's medical system.",
    contactTitle: "Private Consultation",
    contactBody:
      "MWMWT accepts a limited number of private clients each year. Appointment-only, confidential, and coordinated in Chinese, Japanese, and English for UHNW families, entrepreneurs, and global clients.",
    contactCta: "Submit Private Inquiry"
  }
};

const assetItems = {
  zh: ["Healthspan 健康寿命", "Risk Control 风险控制", "Medical Access 顶级资源", "Family Planning 家庭保障", "Longevity Strategy 长寿策略"],
  ja: ["Healthspan 健康寿命", "Risk Control リスク管理", "Medical Access 高度医療資源", "Family Planning 家族保障", "Longevity Strategy 長寿戦略"],
  en: ["Healthspan", "Risk Control", "Medical Access", "Family Planning", "Longevity Strategy"]
};

const processItems = {
  zh: [
    ["01", "Assessment", "健康评估"],
    ["02", "Strategy", "制定长期方案"],
    ["03", "Access", "匹配医疗资源"],
    ["04", "Follow-up", "长期追踪"]
  ],
  ja: [
    ["01", "Assessment", "健康評価"],
    ["02", "Strategy", "長期戦略設計"],
    ["03", "Access", "医療資源マッチング"],
    ["04", "Follow-up", "長期フォロー"]
  ],
  en: [
    ["01", "Assessment", "Health assessment"],
    ["02", "Strategy", "Long-term planning"],
    ["03", "Access", "Medical resource matching"],
    ["04", "Follow-up", "Long-term tracking"]
  ]
};

const globalRegions = {
  zh: [
    ["Japan", "长寿医学、再生医疗、精密体检、癌症筛查"],
    ["Singapore", "国际医疗中心、家族办公室客户、高端保险资源"],
    ["Switzerland", "长寿医学、健康度假、顶级私立诊所"],
    ["United States", "Longevity Medicine、Precision Medicine、Clinical Research"]
  ],
  ja: [
    ["Japan", "長寿医学、再生医療、精密健診、がんスクリーニング"],
    ["Singapore", "国際医療センター、ファミリーオフィス顧客、保険資源"],
    ["Switzerland", "長寿医学、ウェルネス滞在、私立クリニック"],
    ["United States", "Longevity Medicine、Precision Medicine、Clinical Research"]
  ],
  en: [
    ["Japan", "Longevity medicine, regenerative medicine, executive checkups, cancer screening"],
    ["Singapore", "International medical centers, family office clients, premium insurance resources"],
    ["Switzerland", "Longevity medicine, wellness retreats, leading private clinics"],
    ["United States", "Longevity medicine, precision medicine, clinical research"]
  ]
};

const specialties = ["Oncology", "Cardiology", "Neurology", "Regenerative Medicine", "Endocrinology", "Sports Medicine"];

const executiveItems = {
  zh: ["企业家体检", "健康风险管理", "海外医疗协调", "第二诊疗意见", "长寿规划"],
  ja: ["経営者健診", "健康リスク管理", "海外医療調整", "セカンドオピニオン", "長寿計画"],
  en: ["Executive checkups", "Health risk management", "Overseas medical coordination", "Second opinions", "Longevity planning"]
};

const familyItems = {
  zh: ["父母", "配偶", "儿童", "生育力保存", "海外医疗资源"],
  ja: ["両親", "配偶者", "子ども", "妊孕性温存", "海外医療資源"],
  en: ["Parents", "Spouses", "Children", "Fertility preservation", "Overseas medical resources"]
};

const knowledgeTopics = {
  zh: ["日本长寿医学", "生物年龄", "睡眠与寿命", "企业家健康", "癌症早筛", "再生医疗基础", "日本医疗体系"],
  ja: ["日本の長寿医学", "生物学的年齢", "睡眠と寿命", "経営者健康", "がん早期発見", "再生医療基礎", "日本医療制度"],
  en: ["Japan longevity medicine", "Biological age", "Sleep and lifespan", "Executive health", "Cancer screening", "Regenerative medicine basics", "Japan medical system"]
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
      <section className="relative min-h-[94vh] overflow-hidden bg-ink text-pearl">
        <Image
          src="/hero-longevity-concierge.png"
          alt="Private medical advisory environment"
          fill
          priority
          className="object-cover object-center opacity-58"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/86 to-ink/25" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.08),rgba(18,20,18,0.82))]" />
        <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-40 lg:px-8">
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
          <p className="mt-6 max-w-4xl text-lg leading-9 text-pearl/76">{text.heroBody}</p>
          <Link
            href={withLanguage("/contact", lang)}
            className="mt-10 inline-flex w-fit items-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
          >
            {text.heroCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.assetEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight text-ink md:text-7xl">
              {text.assetTitle}
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-graphite/76">{text.assetBody}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {assetItems[lang].map((item) => (
                <div key={item} className="border-l border-champagne/70 bg-white px-5 py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.processEyebrow}</p>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-ink md:text-6xl">
            {text.processTitle}
          </h2>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {processItems[lang].map(([number, title, label]) => (
              <article key={title} className="border border-mist bg-pearl p-7">
                <p className="font-serif text-5xl text-champagne">{number}</p>
                <h3 className="mt-8 text-2xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite/70">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.governanceEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">
              {text.governanceTitle}
            </h2>
          </div>
          <p className="text-xl leading-10 text-pearl/72">{text.governanceBody}</p>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.accessEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.accessTitle}
            </h2>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden border border-mist bg-ink">
              <Image src="/hero-global-medical-access.png" alt="Global medical access map" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {globalRegions[lang].map(([region, body]) => (
              <article key={region} className="border border-mist bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">Global Medical Access</p>
                <h3 className="mt-6 text-3xl font-semibold text-ink">{region}</h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {text.advisoryEyebrow}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.advisoryTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.advisoryBody}</p>
            <Link
              href={withLanguage("/medical-advisory", lang)}
              className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              Medical Advisory <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map((item) => (
              <div key={item} className="border-l border-champagne/70 bg-pearl px-6 py-5">
                <p className="text-lg font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <article className="border border-white/12 p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.executiveEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{text.executiveTitle}</h2>
            <div className="mt-10 grid gap-3">
              {executiveItems[lang].map((item) => (
                <p key={item} className="border-t border-white/12 py-4 text-lg text-pearl/76">{item}</p>
              ))}
            </div>
          </article>
          <article className="border border-white/12 p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.familyEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{text.familyTitle}</h2>
            <div className="mt-10 grid gap-3">
              {familyItems[lang].map((item) => (
                <p key={item} className="border-t border-white/12 py-4 text-lg text-pearl/76">{item}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.knowledgeEyebrow}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {text.knowledgeTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{text.knowledgeBody}</p>
            <Link
              href={withLanguage("/knowledge-center", lang)}
              className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              Knowledge Center <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {knowledgeTopics[lang].map((item) => (
              <div key={item} className="border border-mist bg-white px-6 py-5 shadow-sm">
                <p className="text-sm font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl border border-mist bg-pearl p-8 text-center shadow-quiet md:p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">{text.contactTitle}</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
            {text.contactTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-graphite/72">{text.contactBody}</p>
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
