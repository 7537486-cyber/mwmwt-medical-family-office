import Image from "next/image";
import Link from "next/link";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const homeCopy = {
  zh: {
    intro:
      "我们专注于为企业家、家族客户与高净值人群，建立长期、系统、全球化的健康管理体系。",
    risk: "不是一次治疗，而是一套长期健康资产管理系统。核心价值是风险管理、长期健康决策权与全球医疗资源配置能力。",
    promise: "我们不承诺永生。我们帮助您更长时间保持健康。",
    wealth: "财富管理的是资产，Medical Family Office 管理的是人生。",
    healthspan:
      "客户真正购买的不是一次治疗，而是尽可能多获得高质量人生：更长时间保持行动力、判断力、独立生活能力与家庭参与感。",
    inquiry: "预约私密咨询",
    learn: "了解会员体系",
    whatBody:
      "MWMWT 不做单一项目销售，而是以医疗版家族办公室的方式，把长寿医学、再生医疗、企业家健康管理和全球医疗资源整合为长期顾问关系。",
    whyBody:
      "客户选择我们的原因，是能在重大健康选择前获得更完整的信息、更安静的隐私保护和更长期的医学陪伴。",
    knowledgeBody:
      "知识中心用于帮助客户理解医学趋势、风险边界、检测逻辑和长期健康决策，而不是替代医生诊断或治疗建议。",
    boardBody:
      "医疗顾问资源以公开资料核验、专科能力、研究方向和适配场景进行整理，实际转诊前仍需确认医生接诊规则与机构准入要求。",
    membershipBody:
      "会员体系不是销售一次体检、一次医美或一次干细胞项目，而是为创始人、企业家和家族成员建立长期健康伙伴关系。"
  },
  ja: {
    intro:
      "起業家、家族、超富裕層クライアントのために、長期的な健康意思決定システムを構築します。高度健診、長寿医療、再生医療、国際紹介、家族健康ガバナンスを一つの顧問体制に統合します。",
    risk: "重要なのは単発受診ではなく、長期的な健康意思決定権、リスク管理、国際医療資源への管理されたアクセスです。",
    promise: "私たちは不老不死を約束しません。より長く健康でいられる状態を支援します。",
    wealth: "資産はウェルスマネジメントが管理し、Medical Family Office は人生を支える健康寿命を管理します。",
    healthspan:
      "クライアントが求めているのは単発の治療ではなく、行動力、判断力、自立した生活、家族との時間をできるだけ長く保つための高品質な人生時間です。",
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
      "会員制度は単発の健診や治療手配ではなく、創業者、経営者、家族のための長期的な健康パートナーシップとして設計します。"
  },
  en: {
    intro:
      "We build a long-term health decision system for entrepreneurs, families, and UHNW clients by integrating executive health, longevity medicine, regenerative medicine, global referrals, and family health governance.",
    risk:
      "The core value is not a single appointment. It is risk management, long-term health decision rights, and controlled access to global medical resources.",
    promise: "We do not promise immortality. We help you stay healthy longer.",
    wealth: "Wealth management protects assets. A Medical Family Office protects the healthspan behind a life.",
    healthspan:
      "Clients are not buying a single treatment. They are seeking more high-quality years: mobility, judgment, independence, family time, and the ability to keep making long-term decisions.",
    inquiry: "Book Private Inquiry",
    learn: "View Membership",
    whatBody:
      "Inspired by leading longevity and academic medical resource models, we integrate diagnostics, specialists, follow-up, and cross-border coordination into one continuous advisory relationship.",
    whyBody:
      "Clients choose us because major health decisions require better information, complete privacy, and a long-term medical team that stays with the family.",
    knowledgeBody:
      "The Knowledge Center helps clients understand medical trends, risk boundaries, testing logic, and long-term health decisions. It does not replace physician diagnosis or treatment advice.",
    boardBody:
      "Medical advisory resources are organized by public profile verification, specialty capability, research direction, and appropriate case scenarios. Actual referrals require current institution and physician confirmation.",
    membershipBody:
      "Membership is not built around a one-time checkup or procedure. It is a long-term health partnership for founders, executives, and family members."
  }
};

const sectionCopy = {
  zh: {
    what: "核心服务",
    healthspan: "健康寿命价值观",
    why: "客户为什么选择我们",
    governance: "医疗治理体系",
    valueModel: "麦肯锡 + 私人银行 + 医疗礼宾",
    network: "全球医疗资源网络",
    knowledge: "知识中心",
    knowledgeTitle: "用于长期健康决策的医学知识体系。",
    knowledgeCta: "进入知识中心",
    platform: "平台架构",
    advisory: "医学顾问资源",
    membership: "会员体系",
    membershipTitle: "为家族长期运行的私人健康办公室。"
  },
  ja: {
    what: "中核サービス",
    healthspan: "健康寿命の価値観",
    why: "選ばれる理由",
    governance: "医療ガバナンス",
    valueModel: "マッキンゼー + プライベートバンク + 医療コンシェルジュ",
    network: "グローバル医療ネットワーク",
    knowledge: "ナレッジセンター",
    knowledgeTitle: "長期的な健康判断を支える医療知識体系。",
    knowledgeCta: "ナレッジセンターを見る",
    platform: "プラットフォーム構造",
    advisory: "医療アドバイザリー",
    membership: "会員制度",
    membershipTitle: "家族のために長期稼働するプライベート健康オフィス。"
  },
  en: {
    what: "What We Do",
    healthspan: "Healthspan Philosophy",
    why: "Why Clients Choose Us",
    governance: "Medical Governance Framework",
    valueModel: "McKinsey + Private Bank + Medical Concierge",
    network: "Global Medical Network",
    knowledge: "Knowledge Center",
    knowledgeTitle: "Medical intelligence for better long-term health decisions.",
    knowledgeCta: "Explore Knowledge Center",
    platform: "Platform Architecture",
    advisory: "Medical Advisory Board",
    membership: "Membership",
    membershipTitle: "Membership is the long-term health office behind the family."
  }
};

const healthspanPoints = {
  zh: ["延缓功能衰退", "降低重大疾病风险", "延长健康寿命 Healthspan", "长期健康决策权"],
  ja: ["機能低下を遅らせる", "重大疾患リスクを下げる", "健康寿命 Healthspan を延ばす", "長期的な健康意思決定権"],
  en: [
    "Slow functional decline",
    "Reduce major disease risk",
    "Extend healthspan",
    "Long-term health decision rights"
  ]
};

const whatWeDo = [
  {
    title: "Longevity Medicine",
    label: "长寿医学",
    body: "以健康寿命为目标，围绕生物年龄、慢病风险、睡眠、代谢、炎症、认知功能与衰老速度，建立长期健康规划。"
  },
  {
    title: "Regenerative Medicine",
    label: "再生医疗",
    body: "整合日本及全球合规再生医疗资源，包括干细胞、外泌体、免疫调节与组织修复相关方案，强调安全性、合规性与医学评估。"
  },
  {
    title: "Executive Health",
    label: "企业家健康管理",
    body: "专为企业家与核心决策者设计，关注高压、过劳、睡眠不足、代谢紊乱、心脑血管风险与精力下降等问题。"
  },
  {
    title: "Global Medical Access",
    label: "全球医疗资源",
    body: "连接日本、新加坡、瑞士、美国等顶级医疗资源，提供专家会诊、海外转诊、第二诊疗意见、私密医疗安排与长期随访。"
  }
];

const whyClientsChooseUs = [
  "Resource Access",
  "Medical Navigation",
  "Privacy",
  "Time Efficiency",
  "Risk Control"
];

const coreValues = [
  {
    title: "Resource Access",
    label: "医疗资源获取",
    body: "普通客户很难判断医生、医院和项目真假；会员直接进入经审查的顶级资源网络。"
  },
  {
    title: "Medical Navigation",
    label: "医疗决策顾问",
    body: "客户最大的痛点不是没有预算，而是不知道选谁。我们帮助比较路径、医生与方案。"
  },
  {
    title: "Privacy",
    label: "隐私保护",
    body: "围绕 VIP 通道、独立接待、翻译团队、私密行程和保密协议，降低暴露与混乱。"
  },
  {
    title: "Time Efficiency",
    label: "时间效率",
    body: "企业家不需要研究每一家医院和每一位医生，只需要知道当前最稳妥的选择是什么。"
  },
  {
    title: "Risk Control",
    label: "风险控制",
    body: "通过医疗尽调体系评估资质、背景、案例、学术成果、合规性和安全记录。"
  }
];

const governanceLayers = [
  {
    title: "Medical Compliance",
    label: "严格监管",
    body: "坚持只合作合法合规机构，并围绕日本厚生劳动省相关监管框架与机构规则进行审慎确认。",
    items: ["医疗机构资质", "医师执照", "学会认证资格", "再生医疗备案情况", "医疗责任保险"]
  },
  {
    title: "Physician Excellence Program",
    label: "医生培训体系",
    body: "优秀医疗结果来自优秀医生。我们优先筛选有明确专业声誉、临床经验和学术背景的医生。",
    items: ["大学教授", "主任医师", "学会专家", "国际医学会议", "临床研究项目"]
  },
  {
    title: "Quality Assurance Framework",
    label: "医疗质量控制",
    body: "很多机构只销售项目，我们管理整个过程，避免不必要治疗并形成完整记录闭环。",
    items: ["Layer 1 机构审核", "Layer 2 方案审核", "Layer 3 执行监督", "Layer 4 结果追踪"]
  },
  {
    title: "Lifetime Follow-up Program",
    label: "长期随访机制",
    body: "医疗不是一次消费，而是长期管理。治疗结束后，真正重要的是持续复盘与健康决策。",
    items: ["个人健康档案", "3/6/12个月回顾", "专属健康顾问", "长寿管理计划"]
  }
];

const globalNetwork = [
  {
    region: "Japan",
    cities: "Tokyo / Osaka / Nagoya",
    focus: "再生医疗、癌症筛查、精密体检、专科医院、企业家健康管理"
  },
  {
    region: "Singapore",
    cities: "Asia medical hub",
    focus: "国际医疗中心、家族办公室客户、高端保险资源"
  },
  {
    region: "Switzerland",
    cities: "European longevity network",
    focus: "长寿医学、健康度假、顶级私立诊所"
  },
  {
    region: "United States",
    cities: "North America",
    focus: "Longevity Medicine、Precision Medicine、Clinical Research"
  }
];

const researchDirections = [
  {
    title: "Regenerative Medicine",
    label: "再生医学",
    body: "探索人体自我修复、组织再生与功能维持的前沿科学，关注安全性、合规性与医学评估。"
  },
  {
    title: "Cellular Science",
    label: "细胞科技",
    body: "以细胞再生、细胞通讯、组织修复和健康寿命管理为核心，建立更审慎的科学认知框架。"
  },
  {
    title: "Longevity Science",
    label: "长寿科学",
    body: "结合全球长寿研究、基因科学、健康数据与风险评估，支持个性化健康寿命管理。"
  },
  {
    title: "Healthy Aging",
    label: "健康老龄化",
    body: "帮助客户关注身体活力、认知能力、肌肉质量与生活品质，实现更长期的功能保持。"
  }
];

const platformSections = [
  {
    title: "Medical Governance",
    label: "医疗治理体系",
    href: "/medical-governance-framework",
    body: "建立从机构审核、医生评估、方案审查、执行监督到长期随访的完整医疗风控框架。"
  },
  {
    title: "Doctor Network",
    label: "100位医生数据库",
    href: "/doctor-network",
    body: "每位医生建立独立页面，覆盖简介、照片、学历、经历、研究方向、专业资格、学会职位、论文、国际会议、研究项目与媒体采访。"
  },
  {
    title: "Journey Case",
    label: "客户健康管理案例",
    href: "/case-library",
    body: "不宣传疗效，只展示服务流程：健康评估、检测、专家会诊、国际转诊、长期跟踪与持续健康管理方案。"
  },
  {
    title: "Media Center",
    label: "媒体中心",
    href: "/media-center",
    body: "持续发布公司新闻、医学动态、行业观察和 Founder Insights，建立长期可信的品牌声音。"
  },
  {
    title: "Research Center",
    label: "研究中心",
    href: "/research-center",
    body: "围绕 Longevity Research、Stem Cell Research、Exosome Research、Clinical Studies、Precision Medicine 建立深度研究内容。"
  }
];

const memberships = [
  {
    name: "Founder Membership",
    focus: "为创始人和核心决策者建立年度健康策略、精密体检、睡眠压力管理和重大风险预警。"
  },
  {
    name: "Executive Membership",
    focus: "面向高压管理者，提供季度复盘、专家第二意见、国际医疗协调和长期精力管理。"
  },
  {
    name: "Family Membership",
    focus: "覆盖配偶、父母与下一代，建立家庭健康档案、成员分层、转诊预案与长期随访。"
  },
  {
    name: "Legacy Membership",
    focus: "为家族办公室和多代家庭建立医疗治理、应急协议、全球资源配置和年度健康董事会。"
  }
];

export default function Home({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = homeCopy[lang];
  const sections = sectionCopy[lang];
  const healthspan = healthspanPoints[lang];
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
            打造亚洲领先的高净值健康与长寿管理平台
          </h1>
          <p className="mt-7 max-w-4xl text-2xl font-semibold leading-tight text-pearl md:text-4xl">
            Private Health Intelligence for Global Families
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-pearl/76">
            {copy.promise}
          </p>
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

      <section className="bg-ink px-5 py-20 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {sections.healthspan}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              {copy.wealth}
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-pearl/72">
            <p>{copy.healthspan}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {healthspan.map((item) => (
                <div key={item} className="border-l border-champagne/70 pl-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-champagne">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{sections.what}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              四大核心板块构成长期健康资产管理系统。
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.whatBody}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <div key={item.title} className="border-t border-champagne/55 pt-5">
                <p className="font-serif text-4xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-xl font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm font-semibold text-champagne">{item.label}</p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">{item.body}</p>
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
              {sections.why}
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

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.governance}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                我们不提供医疗服务，我们代表客户做医疗尽调与长期治理。
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-9 text-graphite/72">
              <p>
                我们代表客户，严格筛选全球优质医疗资源，建立从机构审核、医生评估、治疗协调到长期随访的完整医疗治理体系。
              </p>
              <p>
                Medical Family Office 的使命，不是安排一次治疗，而是守护客户及其家庭未来数十年的健康寿命。
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {governanceLayers.map((layer) => (
              <article key={layer.title} className="border border-mist bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.26em] text-champagne">
                  {layer.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {layer.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{layer.body}</p>
                <ul className="mt-6 space-y-3 border-t border-mist pt-6">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-graphite/78">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.valueModel}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Global Medical Family Office for Entrepreneurs, Investors & Families.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-9 text-pearl/72">
              <p>
                我们的核心价值不是“卖项目”，而是帮助家族获得资源、完成判断、保护隐私、节省时间，并在看不懂医疗信息时建立风险控制机制。
              </p>
              <p className="text-champagne">
                Medical Due Diligence System：医院资质、医生背景、真实案例、学术成果、合规性与安全记录。
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value) => (
              <article key={value.title} className="bg-ink p-7 transition hover:bg-pearl/5">
                <p className="text-xs uppercase tracking-[0.26em] text-champagne">
                  {value.title}
                </p>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-pearl">
                  {value.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-pearl/62">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.network}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                We Help Families Access The World&apos;s Best Medical Resources
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">
              帮助企业家家庭链接全球顶级医疗资源，以医疗尽调体系评估医院资质、医生背景、真实案例、学术成果、合规性与安全记录。
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {globalNetwork.map((network) => (
              <article key={network.region} className="border-t border-champagne/55 pt-6">
                <p className="font-serif text-4xl text-champagne">{network.region}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                  {network.cities}
                </p>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{network.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.knowledge}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                {sections.knowledgeTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-pearl/72">{copy.knowledgeBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {researchDirections.map((direction) => (
              <article key={direction.title} className="border border-white/12 bg-pearl/[0.03] p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {direction.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-pearl">
                  {direction.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-pearl/62">{direction.body}</p>
              </article>
            ))}
          </div>
          <Link
            href={withLanguage("/knowledge-center", lang)}
            className="mt-12 inline-flex border border-pearl/45 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:border-champagne hover:text-champagne"
          >
            {sections.knowledgeCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.platform}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                从医生数据库到研究中心，建立真正的平台资产。
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">
              网站不应像医美诊所、干细胞中介或医疗旅游公司，而应像医疗版麦肯锡、医疗版家族办公室和亚洲顶级长寿资源整合平台。
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {platformSections.map((section) => (
              <Link
                key={section.title}
                href={withLanguage(section.href, lang)}
                className="border border-mist bg-pearl p-7 transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {section.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {section.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{section.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.advisory}
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
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{sections.membership}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {sections.membershipTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.membershipBody}</p>
            <p className="mt-6 border-l border-champagne pl-5 text-base leading-8 text-graphite/72">
              从一次性获客转向持续关系：年度健康策略、专家资源、风险预案、跨境协调与家族健康档案共同构成会员价值。
            </p>
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
