import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowledge Center | 长寿医学与再生医学知识库",
  description:
    "面向企业家、家族客户与高净值人群的长寿医学、再生医学、细胞科技与健康老龄化知识库。"
};

const researchDirections = [
  {
    title: "Regenerative Medicine",
    label: "再生医学",
    jaLabel: "再生医療",
    enLabel: "Regenerative Medicine",
    body: "探索人体自我修复与组织再生的前沿科学，关注组织修复、功能维持与健康寿命延长。",
    jaBody: "自己修復、組織再生、機能維持、健康寿命の延伸に関わる先端科学を整理します。",
    enBody: "A field focused on self-repair, tissue regeneration, function maintenance, and the extension of healthy life."
  },
  {
    title: "Cellular Science",
    label: "细胞科技",
    jaLabel: "細胞科学",
    enLabel: "Cellular Science",
    body: "覆盖干细胞研究、外泌体研究、细胞间通讯与组织修复机制，帮助客户建立科学判断框架。",
    jaBody: "幹細胞、エクソソーム、細胞間コミュニケーション、組織修復の仕組みを理解するための領域です。",
    enBody: "Stem cell research, exosome research, cellular communication, and tissue-repair mechanisms organized for clearer judgment."
  },
  {
    title: "Longevity Science",
    label: "长寿科学",
    jaLabel: "長寿科学",
    enLabel: "Longevity Science",
    body: "整合长寿医学、基因科学、健康数据、营养学与运动科学，支持个性化长寿规划。",
    jaBody: "長寿医学、遺伝学、健康データ、栄養、運動科学を統合し、個別の健康寿命設計を支えます。",
    enBody: "Longevity medicine, genetics, health data, nutrition, and exercise science integrated into personalized healthspan planning."
  },
  {
    title: "Healthy Aging",
    label: "健康老龄化",
    jaLabel: "健康的な加齢",
    enLabel: "Healthy Aging",
    body: "关注身体活力、认知能力、肌肉质量与生活品质，让长寿不只是年龄数字。",
    jaBody: "活力、認知機能、筋肉量、生活の質を保ち、年齢だけではない長寿を目指します。",
    enBody: "Vitality, cognition, muscle quality, and quality of life, so longevity is not just a number."
  }
];

const centers = {
  zh: [
    "长寿医学中心",
    "细胞科学中心",
    "外泌体研究中心",
    "企业家健康中心",
    "再生医疗中心",
    "全球医疗资源中心",
    "生物标志物中心",
    "预防医学中心",
    "案例中心",
    "创始人观点"
  ],
  ja: [
    "長寿医学センター",
    "細胞科学センター",
    "エクソソーム研究センター",
    "経営者健康センター",
    "再生医療センター",
    "国際医療資源センター",
    "バイオマーカー研究センター",
    "予防医学センター",
    "ケースライブラリ",
    "創業者インサイト"
  ],
  en: [
    "Longevity Medicine",
    "Cellular Science",
    "Exosome Research",
    "Executive Health",
    "Regenerative Medicine",
    "Global Medical Access",
    "Biomarker Research",
    "Preventive Medicine",
    "Case Library",
    "Founder Insights"
  ]
};

const pageCopy = {
  zh: {
    eyebrow: "知识中心",
    title: "长寿医学与高净值健康管理知识库",
    secondary: "用于长期健康决策的医学知识体系",
    description: "我们将长寿医学、再生医学、细胞科技、健康老龄化和全球医疗资源整理为面向企业家家庭的知识体系。",
    secondaryDescription: "知识库不提供诊断或治疗建议，而是帮助客户理解医学趋势、风险边界、检测逻辑和长期健康决策。",
    cta: "私密咨询",
    directions: "四大核心研究方向",
    directionsBody: "高净值客户需要的不是单一研究名词，而是更清晰的医学判断、更稳妥的风险边界和更长期的健康决策依据。因此知识库以更高级、更可信的方向组织内容。",
    featured: "精选文章",
    articleTitle: "什么是长寿医学？",
    articleBody: "长寿医学不是简单地活得更久，而是以延长健康寿命为目标，提前发现衰老速度、慢病风险与功能下降趋势。",
    read: "阅读文章"
  },
  ja: {
    eyebrow: "ナレッジセンター",
    title: "長寿医学と富裕層向け健康管理の知識体系",
    secondary: "長期的な健康判断を支える医療知識",
    description: "長寿医学、再生医療、細胞科学、健康的な加齢、国際医療資源を、起業家家族向けの知識体系として整理します。",
    secondaryDescription: "診断や治療助言ではなく、医学トレンド、リスク境界、検査ロジック、長期的な健康判断を理解するための内容です。",
    cta: "プライベート相談",
    directions: "4つの中核研究領域",
    directionsBody: "富裕層クライアントが求めるのは研究用語そのものではなく、より健康で、より長く、より質の高い人生のための判断材料です。",
    featured: "注目記事",
    articleTitle: "長寿医学とは何か",
    articleBody: "長寿医学は単に長く生きることではなく、健康寿命を延ばし、老化速度や慢性疾患リスク、機能低下の兆候を早期に捉える考え方です。",
    read: "記事を読む"
  },
  en: {
    eyebrow: "Knowledge Center",
    title: "Knowledge for longevity medicine and private health management",
    secondary: "Medical intelligence for long-term decisions",
    description: "Longevity medicine, regenerative medicine, cellular science, healthy aging, and global medical resources organized for entrepreneur families.",
    secondaryDescription: "The Knowledge Center does not replace diagnosis or treatment advice. It helps clients understand medical trends, risk boundaries, testing logic, and long-term health decisions.",
    cta: "Private Inquiry",
    directions: "Four Research Directions",
    directionsBody: "Clients are not buying research terminology. They need clearer judgment for a healthier, longer, higher-quality life.",
    featured: "Featured Article",
    articleTitle: "What Is Longevity Medicine?",
    articleBody: "Longevity medicine is not simply about living longer. It focuses on extending healthspan by identifying aging speed, chronic disease risk, and functional decline earlier.",
    read: "Read Article"
  }
};

export default function KnowledgeCenterPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = pageCopy[lang];
  const image = {
    src: "/hero-knowledge-center.png",
    alt: "Premium medical knowledge and research intelligence library"
  };

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        secondaryTitle={copy.secondary}
        description={copy.description}
        secondaryDescription={copy.secondaryDescription}
        cta={copy.cta}
        ctaHref={withLanguage("/contact", lang)}
        image={image}
      />

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {copy.directions}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.directions}
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">
              {copy.directionsBody}
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {researchDirections.map((direction) => (
              <article key={direction.title} className="border border-mist bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {direction.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {lang === "en" ? direction.enLabel : lang === "ja" ? direction.jaLabel : direction.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">
                  {lang === "en" ? direction.enBody : lang === "ja" ? direction.jaBody : direction.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {copy.featured}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {copy.articleTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">
              {copy.articleBody}
            </p>
            <Link
              href={withLanguage("/knowledge-center/longevity-medicine", lang)}
              className="mt-8 inline-flex bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
            >
              {copy.read} →
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
            {centers[lang].map((center) => (
              <div key={center} className="bg-pearl p-6">
                <p className="text-sm font-semibold leading-7 text-ink">{center}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
