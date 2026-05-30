import Image from "next/image";
import Link from "next/link";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const homeCopy = {
  zh: {
    intro:
      "我们专注于为企业家、家族客户与高净值人群，建立长期、系统、全球化的健康管理体系。",
    risk: "不是一次治疗，而是一套长期健康资产管理系统。核心价值是风险管理、长期健康决策权与全球医疗资源配置能力。",
    inquiry: "预约私密咨询",
    learn: "了解会员体系",
    whatBody:
      "MWMWT 不做单一项目销售，而是以医疗版家族办公室的方式，把长寿医学、再生医疗、企业家健康管理和全球医疗资源整合为长期顾问关系。",
    whyBody:
      "客户选择我们的原因，是能在重大健康选择前获得更完整的信息、更安静的隐私保护和更长期的医学陪伴。",
    knowledgeBody:
      "知识中心规划 1000+ 篇专业文章，覆盖 10 大医学与健康资产管理主题，形成可持续的 SEO 内容资产。",
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
  "Medical Network",
  "Long-Term Health Management",
  "Complete Privacy",
  "Cross-Border Medical Access",
  "Dedicated Health Team"
];

const knowledgeCenters = [
  {
    title: "Longevity Medicine",
    label: "长寿医学中心",
    target: "100篇+",
    topics: ["什么是长寿医学", "生物年龄是什么", "炎症与衰老", "NAD+研究"]
  },
  {
    title: "Stem Cell Research",
    label: "干细胞中心",
    target: "100篇+",
    topics: ["干细胞是什么", "日本干细胞合法吗", "干细胞安全性", "常见误区"]
  },
  {
    title: "Exosome Research",
    label: "外泌体中心",
    target: "80篇+",
    topics: ["什么是Exosome", "Exosome工作原理", "Exosome与PRP区别", "日本外泌体监管"]
  },
  {
    title: "Executive Health",
    label: "企业家健康中心",
    target: "100篇+",
    topics: ["CEO为何衰老更快", "企业家睡眠管理", "飞行时差恢复", "高净值人士体检体系"]
  },
  {
    title: "Regenerative Medicine",
    label: "再生医疗中心",
    target: "100篇+",
    topics: ["再生医疗是什么", "日本再生医疗体系", "再生医疗法介绍", "未来趋势"]
  },
  {
    title: "Global Medical Access",
    label: "医疗资源中心",
    target: "150篇+",
    topics: ["日本医疗体系", "东京顶级医院", "新加坡医疗体系", "瑞士医疗体系"]
  },
  {
    title: "Biomarker Research",
    label: "生物标志物中心",
    target: "80篇+",
    topics: ["炎症指标", "代谢指标", "认知筛查", "影像评估"]
  },
  {
    title: "Preventive Medicine",
    label: "预防医学中心",
    target: "100篇+",
    topics: ["肿瘤筛查", "心血管预防", "慢病管理", "家庭风险地图"]
  },
  {
    title: "Case Library",
    label: "案例中心",
    target: "80篇+",
    topics: ["企业家睡眠管理", "海外转诊旅程", "长期随访", "家庭健康治理"]
  },
  {
    title: "Founder Insights",
    label: "创始人观点",
    target: "80篇+",
    topics: ["长寿产业", "再生医疗产业", "高净值健康需求", "医疗家族办公室"]
  }
];

const platformSections = [
  {
    title: "Doctor Network",
    label: "100位医生数据库",
    body: "每位医生建立独立页面，覆盖简介、照片、学历、经历、研究方向、专业资格、学会职位、论文、国际会议、研究项目与媒体采访。"
  },
  {
    title: "Journey Case",
    label: "客户健康管理案例",
    body: "不宣传疗效，只展示服务流程：健康评估、检测、专家会诊、国际转诊、长期跟踪与持续健康管理方案。"
  },
  {
    title: "Media Center",
    label: "媒体中心",
    body: "持续发布公司新闻、医学动态、行业观察和 Founder Insights，建立长期可信的品牌声音。"
  },
  {
    title: "Research Center",
    label: "研究中心",
    body: "围绕 Longevity Research、Stem Cell Research、Exosome Research、Clinical Studies、Precision Medicine 建立深度研究内容。"
  }
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
            打造亚洲领先的高净值健康与长寿管理平台
          </h1>
          <p className="mt-7 max-w-4xl text-2xl font-semibold leading-tight text-pearl md:text-4xl">
            Private Health Intelligence for Global Families
          </p>
          <p className="mt-4 text-lg leading-8 text-pearl/72">
            为全球家族提供私人健康智慧系统
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

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">What We Do</p>
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
                1000+专业文章，分成10大知识中心。
              </h2>
            </div>
            <p className="text-lg leading-9 text-pearl/72">{copy.knowledgeBody}</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {knowledgeCenters.map((center) => (
              <article key={center.title} className="bg-ink p-7 transition hover:bg-pearl/5">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {center.target}
                </p>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-pearl">
                  {center.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-champagne">{center.label}</p>
                <p className="mt-5 text-sm leading-7 text-pearl/60">
                  {center.topics.join(" / ")}
                </p>
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
                Platform Architecture
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                从医生数据库到研究中心，建立真正的平台资产。
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">
              网站不应像医美诊所、干细胞中介或医疗旅游公司，而应像医疗版麦肯锡、医疗版家族办公室和亚洲顶级长寿资源整合平台。
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformSections.map((section) => (
              <article key={section.title} className="border border-mist bg-pearl p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {section.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {section.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{section.body}</p>
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
