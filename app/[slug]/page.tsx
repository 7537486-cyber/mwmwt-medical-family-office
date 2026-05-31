import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage, serviceImages } from "@/lib/site";

type PlatformPage = {
  eyebrow: string;
  title: string;
  jaTitle: string;
  enTitle: string;
  description: string;
  jaDescription: string;
  enDescription: string;
  sections: string[];
};

const platformPages: Record<string, PlatformPage> = {
  "medical-family-office": {
    eyebrow: "Medical Family Office",
    title: "医疗版家族办公室，为家族建立长期健康决策系统",
    jaTitle: "医療版ファミリーオフィスとして長期的な健康意思決定を支援",
    enTitle: "A medical family office for long-term health decisions",
    description:
      "围绕家族健康档案、年度健康董事会、重大疾病预案、全球医疗资源配置与隐私管理，形成长期健康资产管理体系。",
    jaDescription:
      "家族健康記録、年次レビュー、重大疾患対応、国際医療資源、秘匿性管理を統合します。",
    enDescription:
      "Family health archives, annual health boards, critical illness protocols, global medical access, and privacy governance are integrated into one system.",
    sections: ["Family health archive", "Annual health board", "Medical risk map", "Critical illness protocol"]
  },
  "executive-health": {
    eyebrow: "Executive Health",
    title: "企业家健康管理，服务核心决策者的精力与风险",
    jaTitle: "経営者の健康、集中力、リスクを管理",
    enTitle: "Executive health management for founders and decision makers",
    description:
      "针对高压、过劳、睡眠不足、代谢紊乱、心脑血管风险与精力下降，建立可复盘的长期管理方案。",
    jaDescription:
      "高ストレス、睡眠不足、代謝異常、心血管リスク、活力低下を長期的に管理します。",
    enDescription:
      "Stress, sleep, metabolic risk, cardiovascular risk, and energy decline are managed through a reviewable long-term program.",
    sections: ["Executive checkups", "Sleep and stress", "Metabolic risk", "Energy and performance"]
  },
  "global-medical-access": {
    eyebrow: "Global Medical Access",
    title: "连接日本、新加坡、瑞士、美国等全球医疗资源",
    jaTitle: "日本、シンガポール、スイス、米国の医療資源へ接続",
    enTitle: "Access to global medical resources across Japan, Singapore, Switzerland, and the United States",
    description:
      "提供专家会诊、海外转诊、第二诊疗意见、私密医疗安排与长期随访，以顾问方式降低跨境医疗决策成本。",
    jaDescription:
      "専門医相談、海外紹介、セカンドオピニオン、プライベート医療手配、長期フォローを支援します。",
    enDescription:
      "Specialist consultation, overseas referrals, second opinions, private medical arrangements, and follow-up are coordinated through one advisory desk.",
    sections: ["Second opinions", "Overseas referral", "Private coordination", "Long-term follow-up"]
  },
  "knowledge-center": {
    eyebrow: "Knowledge Center",
    title: "面向长期健康决策的知识中心",
    jaTitle: "長期的な健康判断のためのナレッジセンター",
    enTitle: "A knowledge center for long-term health decisions",
    description:
      "围绕长寿医学、细胞科学、外泌体、企业家健康、再生医疗、全球医疗资源、预防医学、案例、媒体与研究内容持续整理。",
    jaDescription:
      "長寿医学、細胞科学、エクソソーム、経営者健康、再生医療、国際医療、予防医学、ケース、メディア、研究を継続的に整理します。",
    enDescription:
      "Longevity medicine, stem cells, exosomes, executive health, regenerative medicine, global medical access, preventive medicine, cases, media, and research.",
    sections: ["Longevity Medicine", "Stem Cell Research", "Exosome Research", "Executive Health"]
  },
  "membership-program": {
    eyebrow: "Membership",
    title: "Founder、Executive、Family 与 Legacy 会员体系",
    jaTitle: "Founder、Executive、Family、Legacy 会員制度",
    enTitle: "Founder, Executive, Family, and Legacy membership",
    description:
      "会员体系根据家庭复杂度、服务频率、跨境医疗需求与健康治理深度，提供长期顾问服务。",
    jaDescription:
      "単発の健診や治療手配ではなく、家族の複雑性、利用頻度、国際医療ニーズ、健康ガバナンスの深度に応じた長期顧問サービスです。",
    enDescription:
      "Membership is not built around one-time checkups or procedures. It is structured by family complexity, service frequency, global medical needs, and health governance depth.",
    sections: ["Founder Membership", "Executive Membership", "Family Membership", "Legacy Membership"]
  },
  "medical-governance-framework": {
    eyebrow: "Medical Governance Framework",
    title: "医疗治理体系：从机构审核到长期随访的完整风控框架",
    jaTitle: "医療ガバナンス：医療機関審査から長期フォローまで",
    enTitle: "Medical governance from institution review to long-term follow-up",
    description:
      "我们不提供医疗服务。我们代表客户严格筛选全球优质医疗资源，建立机构审核、医生评估、治疗协调、质量控制与长期随访机制。",
    jaDescription:
      "当社は医療行為を提供するものではありません。顧客の代理として医療資源を精査し、医療機関審査、医師評価、治療調整、品質管理、長期フォローを設計します。",
    enDescription:
      "We do not provide medical services. We represent clients by screening medical resources and building institution review, physician assessment, treatment coordination, quality control, and follow-up systems.",
    sections: ["Medical Compliance", "Physician Excellence", "Quality Assurance", "Lifetime Follow-up"]
  },
  "research-center": {
    eyebrow: "Research Center",
    title: "研究中心：以证据、参考文献与医学趋势支持长期决策",
    jaTitle: "研究センター：根拠と医学トレンドで長期判断を支援",
    enTitle: "Research Center for evidence-led long-term decisions",
    description:
      "围绕 Longevity Research、Stem Cell Research、Exosome Research、Healthy Aging Research、Clinical Studies、Biomarker Research、Preventive Medicine 与 Precision Medicine 建立深度内容。",
    jaDescription:
      "長寿研究、幹細胞、エクソソーム、健康老化、臨床研究、バイオマーカー、予防医学、精密医療を扱います。",
    enDescription:
      "Deep research content across longevity, stem cells, exosomes, healthy aging, clinical studies, biomarkers, preventive medicine, and precision medicine.",
    sections: ["Longevity Research", "Stem Cell Research", "Clinical Studies", "Precision Medicine"]
  },
  "case-library": {
    eyebrow: "Case Library",
    title: "案例中心：展示健康管理旅程，而非宣传疗效",
    jaTitle: "ケースライブラリ：効果宣伝ではなく管理プロセスを示す",
    enTitle: "Journey cases that show process, not treatment claims",
    description:
      "以 Journey Case 方式展示企业家睡眠管理、体重管理、精力提升、海外转诊、专家会诊与长期随访流程。",
    jaDescription:
      "睡眠、体重、活力、海外紹介、専門医相談、長期フォローのプロセスを示します。",
    enDescription:
      "Journey cases show sleep management, weight management, energy improvement, overseas referral, specialist consultation, and follow-up workflows.",
    sections: ["Health assessment", "Specialist review", "International referral", "Long-term follow-up"]
  },
  "media-center": {
    eyebrow: "Media Center",
    title: "媒体中心：公司新闻、医学动态、行业观察与创始人观点",
    jaTitle: "メディアセンター：ニュース、医学動向、業界観察、創業者視点",
    enTitle: "Media Center for news, medical trends, industry observation, and founder insights",
    description:
      "持续更新日本、美国、瑞士、新加坡医学动态，覆盖长寿产业、再生医疗产业、抗衰产业与创始人观点。",
    jaDescription:
      "日本、米国、スイス、シンガポールの医学動向、長寿産業、再生医療、抗老化、創業者視点を扱います。",
    enDescription:
      "Updates across Japan, the United States, Switzerland, and Singapore, covering longevity, regenerative medicine, anti-aging, and founder insights.",
    sections: ["Company News", "Medical Trends", "Industry Observation", "Founder Insights"]
  },
  "private-aviation-concierge": {
    eyebrow: "Private Aviation & Concierge",
    title: "私人航空与医疗礼宾，服务高净值家庭的时间效率与隐私",
    jaTitle: "プライベート航空と医療コンシェルジュで時間効率と秘匿性を支援",
    enTitle: "Private aviation and concierge for time efficiency and privacy",
    description:
      "围绕 VIP 通道、独立接待、翻译团队、私密行程、包机协调与保密协议，支持高净值客户跨境医疗安排。",
    jaDescription:
      "VIP導線、独立対応、通訳、プライベート旅程、チャーター調整、秘密保持を支援します。",
    enDescription:
      "VIP access, private reception, interpreter teams, discreet itineraries, charter coordination, and confidentiality protocols support cross-border care.",
    sections: ["VIP Access", "Private Reception", "Interpreter Team", "Charter Coordination"]
  }
};

const platformHeroImages: Record<string, { src: string; alt: string }> = {
  "medical-family-office": {
    src: "/hero-medical-family-office.png",
    alt: "Luxury private medical family office advisory meeting in Tokyo"
  },
  "executive-health": {
    src: "/hero-executive-health.png",
    alt: "Executive health management consultation with discreet health data"
  },
  "global-medical-access": {
    src: "/hero-global-medical-access.png",
    alt: "Private aviation medical concierge for global medical access"
  },
  "knowledge-center": {
    src: "/hero-knowledge-center.png",
    alt: "Premium medical knowledge and research intelligence library"
  },
  "membership-program": {
    src: "/hero-membership-program.png",
    alt: "Exclusive medical family office membership portfolio"
  },
  "medical-governance-framework": serviceImages["medical-resource-database"],
  "research-center": serviceImages["longevity-planning"],
  "case-library": serviceImages["medical-concierge"],
  "media-center": serviceImages["japan-hospital-network"],
  "private-aviation-concierge": {
    src: "/private-jet-medical-concierge.png",
    alt: "Private jet medical concierge coordination"
  }
};

const localizedPlatformSections: Record<string, Record<"zh" | "ja" | "en", string[]>> = {
  "medical-family-office": {
    zh: ["家族健康档案", "年度健康董事会", "医疗风险地图", "重大疾病预案"],
    ja: ["家族健康記録", "年次健康レビュー", "医療リスクマップ", "重大疾患対応"],
    en: ["Family health archive", "Annual health board", "Medical risk map", "Critical illness protocol"]
  },
  "executive-health": {
    zh: ["企业家精密体检", "睡眠与压力", "代谢风险", "精力与表现"],
    ja: ["経営者精密健診", "睡眠とストレス", "代謝リスク", "活力とパフォーマンス"],
    en: ["Executive checkups", "Sleep and stress", "Metabolic risk", "Energy and performance"]
  },
  "global-medical-access": {
    zh: ["第二诊疗意见", "海外转诊", "私密协调", "长期随访"],
    ja: ["セカンドオピニオン", "海外紹介", "プライベート調整", "長期フォロー"],
    en: ["Second opinions", "Overseas referral", "Private coordination", "Long-term follow-up"]
  },
  "knowledge-center": {
    zh: ["长寿医学", "细胞科学", "外泌体研究", "企业家健康"],
    ja: ["長寿医学", "細胞科学", "エクソソーム研究", "経営者健康"],
    en: ["Longevity Medicine", "Cellular Science", "Exosome Research", "Executive Health"]
  },
  "membership-program": {
    zh: ["创始人会员", "企业家会员", "家族会员", "传承会员"],
    ja: ["創業者会員", "経営者会員", "家族会員", "レガシー会員"],
    en: ["Founder Membership", "Executive Membership", "Family Membership", "Legacy Membership"]
  },
  "medical-governance-framework": {
    zh: ["医疗合规", "医生评估", "质量控制", "长期随访"],
    ja: ["医療コンプライアンス", "医師評価", "品質管理", "長期フォロー"],
    en: ["Medical Compliance", "Physician Excellence", "Quality Assurance", "Lifetime Follow-up"]
  },
  "research-center": {
    zh: ["长寿研究", "细胞科学", "临床研究", "精准医学"],
    ja: ["長寿研究", "細胞科学", "臨床研究", "精密医療"],
    en: ["Longevity Research", "Cellular Science", "Clinical Studies", "Precision Medicine"]
  },
  "case-library": {
    zh: ["健康评估", "专家复核", "国际转诊", "长期随访"],
    ja: ["健康評価", "専門医レビュー", "国際紹介", "長期フォロー"],
    en: ["Health assessment", "Specialist review", "International referral", "Long-term follow-up"]
  },
  "media-center": {
    zh: ["公司新闻", "医学动态", "行业观察", "创始人观点"],
    ja: ["会社ニュース", "医学動向", "業界観察", "創業者視点"],
    en: ["Company News", "Medical Trends", "Industry Observation", "Founder Insights"]
  },
  "private-aviation-concierge": {
    zh: ["VIP 通道", "独立接待", "翻译团队", "包机协调"],
    ja: ["VIP導線", "独立対応", "通訳チーム", "チャーター調整"],
    en: ["VIP Access", "Private Reception", "Interpreter Team", "Charter Coordination"]
  }
};

const aviationCopy = {
  zh: {
    label: "高端空地礼宾",
    title: "包机、阿尔法接送与一对一陪同共同构成私密医疗出行。",
    body: "对高净值家庭来说，跨境医疗不只是预约医生，也包括抵达方式、现场动线、隐私保护、翻译陪同与诊后资料交接。",
    scenes: [
      {
        title: "私人航空",
        body: "包机协调、抵达动线、医疗资料与当地接驳统一管理。",
        image: "/private-jet-medical-concierge.png",
        alt: "私人包机医疗礼宾协调"
      },
      {
        title: "阿尔法商务车接送",
        body: "高端商务车、司机与双语协调人员，覆盖机场、酒店与医院之间接送。",
        image: "/alphard-medical-transfer.png",
        alt: "阿尔法商务车医疗接送"
      },
      {
        title: "一对一医疗陪同",
        body: "预约签到、检查动线、翻译沟通与诊后资料整理由专人陪同。",
        image: "/one-on-one-medical-escort.png",
        alt: "一对一医疗陪同"
      }
    ]
  },
  ja: {
    label: "プレミアム移動コンシェルジュ",
    title: "チャーター、アルファード送迎、一対一同行で秘匿性の高い医療渡航を支えます。",
    body: "国際医療では医師予約だけでなく、到着導線、現地移動、プライバシー、通訳同行、診療後資料の整理が重要です。",
    scenes: [
      {
        title: "プライベート航空",
        body: "チャーター調整、到着導線、医療資料、現地接続を一体で管理します。",
        image: "/private-jet-medical-concierge.png",
        alt: "プライベート航空と医療コンシェルジュ"
      },
      {
        title: "アルファード送迎",
        body: "高級車、ドライバー、バイリンガル調整担当が空港、ホテル、病院間を支援します。",
        image: "/alphard-medical-transfer.png",
        alt: "アルファードによる医療送迎"
      },
      {
        title: "一対一医療同行",
        body: "受付、検査動線、通訳、診療後資料整理まで専任担当が同行します。",
        image: "/one-on-one-medical-escort.png",
        alt: "一対一の医療同行"
      }
    ]
  },
  en: {
    label: "Premium Ground & Air Logistics",
    title: "Private aviation, Alphard-style transfer, and one-on-one escort create a discreet medical journey.",
    body: "For high-net-worth families, cross-border medical access includes arrival logistics, on-site flow, privacy, interpretation, and post-visit document handover.",
    scenes: [
      {
        title: "Private aviation",
        body: "Charter coordination, arrival flow, medical documents, and local transfers managed as one discreet journey.",
        image: "/private-jet-medical-concierge.png",
        alt: "Private jet medical concierge coordination"
      },
      {
        title: "Alphard-style transfer",
        body: "Premium vehicle, driver, and bilingual coordinator for airport, hotel, and hospital transfers.",
        image: "/alphard-medical-transfer.png",
        alt: "Luxury medical transfer by Alphard-style vehicle"
      },
      {
        title: "One-on-one escort",
        body: "Appointment check-in, examination flow, interpretation, and post-visit document organization with dedicated support.",
        image: "/one-on-one-medical-escort.png",
        alt: "One-on-one medical escort"
      }
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = platformPages[params.slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description
  };
}

export default function PlatformPage({
  params,
  searchParams
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const page = platformPages[params.slug];

  if (!page) {
    notFound();
  }

  const lang = normalizeLanguage(searchParams?.lang);
  const title = lang === "en" ? page.enTitle : lang === "ja" ? page.jaTitle : page.title;
  const description =
    lang === "en" ? page.enDescription : lang === "ja" ? page.jaDescription : page.description;
  const heroCta = lang === "en" ? "Private Inquiry" : lang === "ja" ? "プライベート相談" : "私密咨询";
  const secondaryTitle =
    lang === "en"
      ? "Private Health Intelligence for Global Families"
      : lang === "ja"
        ? "グローバルファミリーのためのプライベート健康インテリジェンス"
        : "为全球家族提供私人健康智慧系统";
  const visibleSections = localizedPlatformSections[params.slug]?.[lang] ?? page.sections;
  const aviation = aviationCopy[lang];
  const secondaryDescription =
    lang === "en"
      ? "Risk management, long-term health decision rights, and global medical resource allocation."
      : lang === "ja"
        ? "リスク管理、長期的な健康判断、国際医療資源の配置。"
        : "风险管理、长期健康决策权与全球医疗资源配置。";

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={title}
        secondaryTitle={secondaryTitle}
        description={description}
        secondaryDescription={secondaryDescription}
        cta={heroCta}
        image={platformHeroImages[params.slug] ?? serviceImages["medical-concierge"]}
      />
      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleSections.map((section, index) => (
            <article key={section} className="border border-mist bg-white p-7 shadow-sm">
              <p className="font-serif text-4xl text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-6 text-xl font-semibold text-ink">{section}</h2>
            </article>
          ))}
        </div>
      </section>
      {params.slug === "private-aviation-concierge" ? (
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                  {aviation.label}
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
                  {aviation.title}
                </h2>
              </div>
              <p className="text-lg leading-9 text-graphite/72">
                {aviation.body}
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {aviation.scenes.map((scene) => (
                <article key={scene.title} className="border border-mist bg-pearl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={scene.image}
                      alt={scene.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-ink">{scene.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-graphite/72">{scene.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
