import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage } from "@/lib/site";

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
    title: "1000+专业文章，形成高净值健康与长寿知识中心",
    jaTitle: "1000本以上の記事で健康・長寿ナレッジセンターを構築",
    enTitle: "A 1000+ article knowledge center for health and longevity",
    description:
      "覆盖长寿医学、干细胞、外泌体、企业家健康、再生医疗、全球医疗资源、预防医学、案例、媒体与研究内容。",
    jaDescription:
      "長寿医学、幹細胞、エクソソーム、経営者健康、再生医療、国際医療、予防医学、ケース、メディア、研究を扱います。",
    enDescription:
      "Longevity medicine, stem cells, exosomes, executive health, regenerative medicine, global medical access, preventive medicine, cases, media, and research.",
    sections: ["Longevity Medicine", "Stem Cell Research", "Exosome Research", "Executive Health"]
  },
  "membership-program": {
    eyebrow: "Membership",
    title: "Silver、Gold、Black 与 Family Office 会员体系",
    jaTitle: "Silver、Gold、Black、Family Office 会員制度",
    enTitle: "Silver, Gold, Black, and Family Office membership",
    description:
      "根据家庭复杂度、服务频率、跨境医疗需求与健康治理深度，提供不同层级的长期顾问服务。",
    jaDescription:
      "家族の複雑性、利用頻度、国際医療ニーズ、健康ガバナンスの深度に応じて設計します。",
    enDescription:
      "Membership is structured by family complexity, service frequency, global medical needs, and depth of health governance.",
    sections: ["Silver", "Gold", "Black", "Family Office"]
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

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={title}
        secondaryTitle="Private Health Intelligence for Global Families"
        description={description}
        secondaryDescription="风险管理、长期健康决策权与全球医疗资源配置。"
        cta="Private Inquiry"
      />
      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {page.sections.map((section, index) => (
            <article key={section} className="border border-mist bg-white p-7 shadow-sm">
              <p className="font-serif text-4xl text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-6 text-xl font-semibold text-ink">{section}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
