import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { knowledgeCenters } from "@/lib/knowledge-centers";
import { knowledgeArticles } from "@/lib/knowledge";
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
    read: "阅读文章",
    downloads: "PDF 资料下载",
    downloadTitle: "Medical Family Office 常见问题",
    downloadBody: "系统说明医疗家族办公室、健康管理、第二诊疗意见、全球医疗资源、长寿医学、再生医学、干细胞、外泌体与会员服务的基础问题。",
    downloadCta: "下载 PDF",
    faq: "FAQ 杂志",
    faqTitle: "每天更新的高净值健康管理 FAQ",
    faqBody: "上千条短问答按知识中心收纳，答案默认收起。像翻杂志一样扫标题，感兴趣再点开。",
    faqCta: "进入 FAQ",
    centers: "10大知识中心",
    centersBody: "每个中心都可以进入独立页面，查看主题大图、专业文献方向、延伸文章与行业知识下载。"
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
    read: "記事を読む",
    downloads: "PDF資料",
    downloadTitle: "Medical Family Office FAQ",
    downloadBody: "医療ファミリーオフィス、健康管理、セカンドオピニオン、国際医療アクセス、長寿医学、再生医療、幹細胞、エクソソーム、会員サービスの基本を整理した資料です。",
    downloadCta: "PDFをダウンロード",
    faq: "FAQマガジン",
    faqTitle: "毎日更新する富裕層向け健康管理 FAQ",
    faqBody: "多数の短いFAQをナレッジセンター別に整理。回答は閉じた状態で、読みたい質問だけ開けます。",
    faqCta: "FAQを見る",
    centers: "10のナレッジセンター",
    centersBody: "各センターから、テーマ画像、専門文献テーマ、関連記事、業界資料ダウンロードへ進めます。"
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
    read: "Read Article",
    downloads: "PDF Resource",
    downloadTitle: "Medical Family Office Frequently Asked Questions",
    downloadBody: "A structured FAQ covering Medical Family Office, health management, second opinions, global medical access, longevity medicine, regenerative medicine, stem cells, exosomes, and membership.",
    downloadCta: "Download PDF",
    faq: "FAQ Magazine",
    faqTitle: "A daily FAQ library for private health management",
    faqBody: "Thousands of compact questions are organized by knowledge center. Answers stay closed by default; readers open only what matters.",
    faqCta: "Open FAQ",
    centers: "10 Knowledge Centers",
    centersBody: "Each center opens into a dedicated page with a theme image, professional literature map, related articles, and downloadable industry knowledge."
  }
};

const featuredArticles = [
  {
    href: "/knowledge-center/longevity-medicine",
    category: "Longevity Medicine",
    title: {
      zh: "什么是长寿医学？",
      ja: "長寿医学とは何か",
      en: "What Is Longevity Medicine?"
    },
    description: {
      zh: "长寿医学不是简单地活得更久，而是以延长健康寿命为目标，提前发现衰老速度、慢病风险与功能下降趋势。",
      ja: "長寿医学は単に長く生きることではなく、健康寿命を延ばし、老化速度や慢性疾患リスクを早期に捉える考え方です。",
      en: "Longevity medicine focuses on extending healthspan by identifying aging speed, chronic disease risk, and functional decline earlier."
    }
  },
  ...knowledgeArticles.map((article) => ({
    href: `/knowledge-center/${article.slug}`,
    category: article.category,
    title: article.title,
    description: article.description
  }))
];

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
          <div className="grid gap-4">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={withLanguage(article.href, lang)}
                className="border border-mist bg-pearl p-6 transition hover:border-champagne hover:bg-white"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-champagne">
                  {article.category}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-ink">
                  {article.title[lang]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-graphite/70">
                  {article.description[lang]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 lg:grid-cols-2">
            <div className="border border-champagne/40 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                {copy.faq}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
                {copy.faqTitle}
              </h2>
              <p className="mt-6 text-sm leading-7 text-graphite/72">
                {copy.faqBody}
              </p>
              <Link
                href={withLanguage("/knowledge-center/faq", lang)}
                className="mt-7 inline-flex bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
              >
                {copy.faqCta} →
              </Link>
            </div>
            <div className="border border-champagne/40 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-champagne">
                {copy.downloads}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-ink md:text-4xl">
                {copy.downloadTitle}
              </h2>
              <p className="mt-6 text-sm leading-7 text-graphite/72">
                {copy.downloadBody}
              </p>
              <a
                href="/medical-family-office-faq.pdf"
                download
                className="mt-7 inline-flex bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
              >
                {copy.downloadCta}
              </a>
            </div>
          </div>
          <div className="mb-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {copy.centers}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.centers}
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">
              {copy.centersBody}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2 lg:grid-cols-5">
            {knowledgeCenters.map((center) => (
              <Link
                key={center.slug}
                href={withLanguage(`/knowledge-center/centers/${center.slug}`, lang)}
                className="group bg-white p-6 transition hover:bg-ink"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                  {center.label}
                </p>
                <p className="mt-5 text-lg font-semibold leading-7 text-ink transition group-hover:text-pearl">
                  {center.title[lang]}
                </p>
                <p className="mt-4 text-sm leading-7 text-graphite/70 transition group-hover:text-pearl/70">
                  {center.description[lang]}
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                  {lang === "ja" ? "詳しく見る" : lang === "en" ? "Explore" : "进入中心"} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
