import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/seo";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

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

type PlatformDetail = {
  title: string;
  body: string;
  points: string[];
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
  "service-process": {
    eyebrow: "Service Process",
    title: "从15分钟初步沟通到长期健康管理的清晰流程",
    jaTitle: "15分の初回相談から長期健康管理までの明確な流れ",
    enTitle: "A clear path from a 15-minute first call to long-term health management",
    description:
      "每一次合作都先确认目标、资料、风险边界和适配度，再进入医生资源匹配、行程协调、结果复盘与长期随访。",
    jaDescription:
      "目的、資料、リスク境界、適合性を確認したうえで、医師リソース、渡航調整、結果レビュー、長期フォローへ進みます。",
    enDescription:
      "Every engagement starts with goals, records, risk boundaries, and fit review before specialist matching, travel coordination, review, and follow-up.",
    sections: ["Fit Review", "Medical Records", "Specialist Matching", "Long-Term Follow-up"]
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
  "service-process": {
    src: "/one-on-one-medical-escort.png",
    alt: "One-on-one medical escort and service coordination process"
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
  "service-process": {
    zh: ["适配度确认", "资料整理", "专家匹配", "长期随访"],
    ja: ["適合性確認", "資料整理", "専門医マッチング", "長期フォロー"],
    en: ["Fit Review", "Medical Records", "Specialist Matching", "Long-Term Follow-up"]
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

const platformSectionDetails: Record<string, Record<"zh" | "ja" | "en", PlatformDetail[]>> = {
  "medical-family-office": {
    zh: [
      {
        title: "家族健康档案",
        body: "把体检、影像、用药、家族史、生物年龄、重大病史和跨境就医记录集中管理，避免每次看医生都从零开始。",
        points: ["跨语言资料整理", "年度指标追踪", "家庭成员分层"]
      },
      {
        title: "年度健康董事会",
        body: "像管理资产一样，每年复盘家庭健康风险、资源配置、优先检查项目和应急预案。",
        points: ["年度复盘", "风险排序", "下一年度行动清单"]
      },
      {
        title: "医疗风险地图",
        body: "围绕肿瘤、心脑血管、代谢、认知、睡眠和家族遗传风险，建立可解释的长期风险地图。",
        points: ["重大疾病风险", "慢病趋势", "功能衰退预警"]
      },
      {
        title: "重大疾病预案",
        body: "提前准备第二诊疗意见、海外转诊、专家会诊和资料翻译路径，让关键时刻不被混乱拖慢。",
        points: ["专家预案", "转诊路径", "资料清单"]
      }
    ],
    ja: [
      {
        title: "家族健康記録",
        body: "健診、画像、服薬、家族歴、生物学的年齢、国際受診記録を整理し、毎回ゼロから説明する負担を減らします。",
        points: ["多言語資料整理", "年次指標追跡", "家族メンバー分類"]
      },
      {
        title: "年次健康レビュー",
        body: "資産管理と同じように、健康リスク、医療資源、優先検査、緊急時対応を年次で見直します。",
        points: ["年次レビュー", "リスク順位付け", "次年度アクション"]
      },
      {
        title: "医療リスクマップ",
        body: "がん、心血管、代謝、認知、睡眠、家族歴を含め、長期的なリスクを可視化します。",
        points: ["重大疾患リスク", "慢性疾患傾向", "機能低下の兆候"]
      },
      {
        title: "重大疾患対応",
        body: "セカンドオピニオン、海外紹介、専門医相談、資料翻訳を事前に準備します。",
        points: ["専門医準備", "紹介ルート", "資料チェックリスト"]
      }
    ],
    en: [
      {
        title: "Family health archive",
        body: "Checkups, imaging, medication, family history, biological age, and cross-border medical records are organized in one long-term file.",
        points: ["Multilingual record organization", "Annual marker tracking", "Family member segmentation"]
      },
      {
        title: "Annual health board",
        body: "Like an investment review, the family reviews health risks, medical resources, priority screenings, and emergency readiness each year.",
        points: ["Annual review", "Risk ranking", "Next-year action list"]
      },
      {
        title: "Medical risk map",
        body: "Cancer, cardiovascular, metabolic, cognitive, sleep, and family-history risks are organized into an explainable long-term map.",
        points: ["Major disease risk", "Chronic trend", "Functional decline signals"]
      },
      {
        title: "Critical illness protocol",
        body: "Second opinions, overseas referrals, specialist review, and translated records are prepared before urgent moments arrive.",
        points: ["Specialist readiness", "Referral route", "Document checklist"]
      }
    ]
  },
  "executive-health": {
    zh: [
      {
        title: "企业家精密体检",
        body: "不做堆项目式体检，而是围绕企业家年龄、家族史、压力水平、应酬频率和飞行节奏设计检查重点。",
        points: ["肿瘤早筛", "心脑血管评估", "胃肠内镜与影像"]
      },
      {
        title: "睡眠与压力",
        body: "长期睡眠不足和高压会影响激素、炎症、血压、血糖和认知表现，需要被纳入正式健康管理。",
        points: ["睡眠质量", "压力恢复", "疲劳与专注力"]
      },
      {
        title: "代谢风险",
        body: "很多企业家在没有明显疾病时已经出现胰岛素抵抗、脂肪肝、内脏脂肪和慢性炎症。",
        points: ["血糖与胰岛素", "血脂与脂肪肝", "体重和肌肉质量"]
      },
      {
        title: "精力与表现",
        body: "真正的目标不是短期兴奋，而是让核心决策者长期保持稳定体能、清晰判断和高质量生活。",
        points: ["认知表现", "运动能力", "长期健康寿命"]
      }
    ],
    ja: [
      {
        title: "経営者精密健診",
        body: "検査項目を増やすのではなく、年齢、家族歴、ストレス、会食、移動頻度に基づき優先順位を設計します。",
        points: ["がんスクリーニング", "心血管評価", "内視鏡と画像検査"]
      },
      {
        title: "睡眠とストレス",
        body: "慢性的な睡眠不足と高ストレスは、ホルモン、炎症、血圧、血糖、認知パフォーマンスに影響します。",
        points: ["睡眠品質", "回復力", "疲労と集中"]
      },
      {
        title: "代謝リスク",
        body: "明確な病気がなくても、インスリン抵抗性、脂肪肝、内臓脂肪、慢性炎症が進むことがあります。",
        points: ["血糖とインスリン", "脂質と脂肪肝", "体重と筋肉量"]
      },
      {
        title: "活力とパフォーマンス",
        body: "短期的な刺激ではなく、長期的に安定した体力、判断力、生活の質を保つことを重視します。",
        points: ["認知機能", "運動能力", "健康寿命"]
      }
    ],
    en: [
      {
        title: "Executive checkups",
        body: "Not a pile of tests, but a risk-based plan built around age, family history, stress, business dining, and travel rhythm.",
        points: ["Cancer screening", "Cardiovascular review", "Endoscopy and imaging"]
      },
      {
        title: "Sleep and stress",
        body: "Chronic poor sleep and high stress influence hormones, inflammation, blood pressure, glucose, and cognitive performance.",
        points: ["Sleep quality", "Recovery", "Fatigue and focus"]
      },
      {
        title: "Metabolic risk",
        body: "Before obvious disease appears, insulin resistance, fatty liver, visceral fat, and chronic inflammation may already be present.",
        points: ["Glucose and insulin", "Lipids and fatty liver", "Weight and muscle quality"]
      },
      {
        title: "Energy and performance",
        body: "The goal is not short-term stimulation. It is stable energy, clear judgment, and quality of life over decades.",
        points: ["Cognition", "Physical capacity", "Healthspan"]
      }
    ]
  },
  "global-medical-access": {
    zh: [
      {
        title: "第二诊疗意见",
        body: "面对重大疾病或复杂方案时，客户需要独立专家视角，帮助理解诊断、替代方案、风险和下一步选择。",
        points: ["病历整理", "影像资料翻译", "专家问题清单"]
      },
      {
        title: "海外转诊",
        body: "根据疾病领域、时间紧迫度、语言需求和可预约性，协调日本、新加坡、瑞士、美国等资源。",
        points: ["专科匹配", "机构规则", "转诊路径"]
      },
      {
        title: "私密协调",
        body: "高净值家庭需要的不只是医院预约，还包括身份保护、行程动线、陪同翻译和资料交接。",
        points: ["VIP动线", "隐私保护", "双语协调"]
      },
      {
        title: "长期随访",
        body: "跨境医疗结束后，检查结果、治疗记录和复查计划应进入长期健康档案，而不是散落在各个邮箱里。",
        points: ["复查计划", "报告归档", "年度回顾"]
      }
    ],
    ja: [
      {
        title: "セカンドオピニオン",
        body: "重大疾患や複雑な治療方針では、診断、代替案、リスク、次の選択肢を独立した視点で確認します。",
        points: ["病歴整理", "画像資料翻訳", "専門医への質問リスト"]
      },
      {
        title: "海外紹介",
        body: "疾患領域、緊急性、言語、予約可能性に応じ、日本、シンガポール、スイス、米国の資源を調整します。",
        points: ["専門領域マッチング", "医療機関規定", "紹介ルート"]
      },
      {
        title: "プライベート調整",
        body: "予約だけでなく、身元保護、移動導線、同行通訳、資料受け渡しを含めて支援します。",
        points: ["VIP導線", "秘匿性", "バイリンガル調整"]
      },
      {
        title: "長期フォロー",
        body: "受診後の結果、治療記録、再検査計画を長期健康記録に統合します。",
        points: ["再検査計画", "報告書管理", "年次レビュー"]
      }
    ],
    en: [
      {
        title: "Second opinions",
        body: "For serious disease or complex plans, clients need independent specialist perspective on diagnosis, alternatives, risks, and next steps.",
        points: ["Record organization", "Imaging translation", "Question list"]
      },
      {
        title: "Overseas referral",
        body: "Resources across Japan, Singapore, Switzerland, and the United States are coordinated by specialty, urgency, language, and availability.",
        points: ["Specialty matching", "Institution rules", "Referral pathway"]
      },
      {
        title: "Private coordination",
        body: "UHNW families need more than appointments: privacy, itinerary flow, interpretation, and document handover all matter.",
        points: ["VIP flow", "Privacy", "Bilingual coordination"]
      },
      {
        title: "Long-term follow-up",
        body: "Reports, treatment records, and retesting plans should become part of a long-term health archive.",
        points: ["Review schedule", "Report archive", "Annual review"]
      }
    ]
  },
  "membership-program": {
    zh: [
      {
        title: "创始人会员",
        body: "为企业创始人建立年度健康策略、重大疾病预案和关键专家资源准备。",
        points: ["年度健康策略", "高压与睡眠管理", "第二意见预案"]
      },
      {
        title: "企业家会员",
        body: "把个人体检、异常指标复盘和跨境医疗协调变成可持续的长期节奏。",
        points: ["季度复盘", "指标追踪", "国际协调"]
      },
      {
        title: "家族会员",
        body: "为配偶、父母和下一代建立分层健康档案与家庭年度健康回顾。",
        points: ["家庭档案", "父母健康管理", "下一代风险意识"]
      },
      {
        title: "传承会员",
        body: "面向多代家族、家族办公室和私人银行客户，建立长期医疗治理体系。",
        points: ["医疗治理", "应急协议", "全球资源预案"]
      }
    ],
    ja: [
      {
        title: "創業者会員",
        body: "創業者の年次健康戦略、重大疾患対応、主要専門医リソースを準備します。",
        points: ["年次健康戦略", "睡眠とストレス", "セカンドオピニオン準備"]
      },
      {
        title: "経営者会員",
        body: "個人健診、異常指標レビュー、国際医療調整を継続的なリズムにします。",
        points: ["定期レビュー", "指標追跡", "国際調整"]
      },
      {
        title: "家族会員",
        body: "配偶者、両親、次世代の健康記録と年次家族レビューを整えます。",
        points: ["家族記録", "両親の健康管理", "次世代リスク教育"]
      },
      {
        title: "レガシー会員",
        body: "多世代家族、ファミリーオフィス、プライベートバンク顧客向けの医療ガバナンスです。",
        points: ["医療ガバナンス", "緊急対応", "国際リソース準備"]
      }
    ],
    en: [
      {
        title: "Founder Membership",
        body: "Annual health strategy, critical illness readiness, and specialist resource planning for founders.",
        points: ["Annual health strategy", "Stress and sleep", "Second-opinion readiness"]
      },
      {
        title: "Executive Membership",
        body: "Personal checkups, abnormal-marker review, and cross-border medical coordination in a sustainable rhythm.",
        points: ["Quarterly review", "Marker tracking", "International coordination"]
      },
      {
        title: "Family Membership",
        body: "Segmented health archives and annual family reviews for spouses, parents, and next generation.",
        points: ["Family archive", "Parent health", "Next-generation risk literacy"]
      },
      {
        title: "Legacy Membership",
        body: "Long-term medical governance for multi-generation families, family offices, and private banking clients.",
        points: ["Medical governance", "Emergency protocol", "Global resource readiness"]
      }
    ]
  }
};

function buildPlatformDetails(slug: string, lang: "zh" | "ja" | "en", sections: string[]) {
  return (
    platformSectionDetails[slug]?.[lang] ??
    sections.map((section) => ({
      title: section,
      body:
        lang === "en"
          ? "This module connects client goals, medical records, risk boundaries, and appropriate resources into a clearer decision path."
          : lang === "ja"
            ? "このモジュールは、目的、医療資料、リスク境界、適切な医療資源を整理し、判断しやすい流れにします。"
            : "该模块将客户目标、医学资料、风险边界与合适资源连接起来，形成更清晰的长期决策路径。",
      points:
        lang === "en"
          ? ["Goal clarification", "Risk review", "Follow-up plan"]
          : lang === "ja"
            ? ["目的確認", "リスク確認", "フォロー計画"]
            : ["目标确认", "风险复核", "随访计划"]
    }))
  );
}

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

const serviceProcessDetails = {
  zh: {
    label: "客户路径",
    cta: "预约15分钟初步沟通",
    steps: [
      {
        title: "15分钟初步沟通",
        body: "确认家庭当前最重要的健康议题、时间窗口、语言需求和隐私边界。"
      },
      {
        title: "适配度与风险边界确认",
        body: "判断需求是否适合进入医疗资源协调，明确本平台不提供诊断、治疗或医疗行为。"
      },
      {
        title: "资料整理与问题清单",
        body: "整理既往检查、影像、用药、家族史和希望向医生确认的问题。"
      },
      {
        title: "医生与机构资源匹配",
        body: "基于专科能力、机构规则、合规边界、可预约性和语言流程进行匹配。"
      },
      {
        title: "赴日或跨境医疗协调",
        body: "协调预约、翻译、陪同、商务车接送、包机动线和诊后资料交接。"
      },
      {
        title: "结果复盘与长期随访",
        body: "形成行动清单、复查计划、家庭健康档案和年度健康回顾节奏。"
      }
    ]
  },
  ja: {
    label: "クライアントプロセス",
    cta: "15分相談を予約",
    steps: [
      {
        title: "15分の初回相談",
        body: "最も重要な健康課題、時期、言語、秘匿性の境界を確認します。"
      },
      {
        title: "適合性とリスク境界確認",
        body: "医療資源調整に適しているかを確認し、本サービスが診断・治療・医療行為を提供しないことを明確にします。"
      },
      {
        title: "資料整理と質問リスト",
        body: "既往検査、画像、服薬、家族歴、医師に確認したい質問を整理します。"
      },
      {
        title: "医師・医療機関マッチング",
        body: "専門能力、医療機関規定、規制境界、予約可能性、言語フローに基づき調整します。"
      },
      {
        title: "訪日・国際医療調整",
        body: "予約、通訳、同行、専用車送迎、チャーター導線、診療後資料整理を支援します。"
      },
      {
        title: "結果レビューと長期フォロー",
        body: "行動リスト、再検査計画、家族健康記録、年次レビューのリズムを整えます。"
      }
    ]
  },
  en: {
    label: "Client Pathway",
    cta: "Book a 15-Minute Call",
    steps: [
      {
        title: "15-minute first call",
        body: "Clarify the family's most important health priority, timing, language needs, and privacy boundaries."
      },
      {
        title: "Fit and risk-boundary review",
        body: "Assess whether the request fits medical resource coordination and clarify that we do not provide diagnosis, treatment, or medical acts."
      },
      {
        title: "Records and question list",
        body: "Organize prior reports, imaging, medications, family history, and questions for physicians."
      },
      {
        title: "Specialist and institution matching",
        body: "Match resources based on specialty capability, institution rules, compliance boundaries, availability, and language process."
      },
      {
        title: "Japan or cross-border coordination",
        body: "Coordinate appointments, interpretation, escort, vehicle transfer, charter flow, and post-visit documents."
      },
      {
        title: "Review and long-term follow-up",
        body: "Create action lists, retesting plans, family health archives, and annual review rhythm."
      }
    ]
  }
};

const membershipProgramDetails = {
  zh: {
    label: "会员权益",
    cta: "申请会员咨询",
    cards: [
      {
        name: "Founder Member",
        result: "为创始人建立年度健康策略和重大风险预警。",
        scope: "年度健康策略、精密体检路径、专家第二意见预案、睡眠压力与代谢风险复盘。",
        entry: "申请制，适合企业创始人和核心决策者。"
      },
      {
        name: "Executive Member",
        result: "把个人体检、复盘和跨境医疗协调变成长期节奏。",
        scope: "季度复盘、异常指标跟进、国际医疗协调、企业家精力管理。",
        entry: "申请制，适合高压管理者和频繁跨境出行人群。"
      },
      {
        name: "Family Member",
        result: "为配偶、父母和下一代建立家庭健康档案与转诊预案。",
        scope: "家庭健康档案、成员分层、父母健康管理、年度家庭健康回顾。",
        entry: "申请制，按家庭成员与服务深度确认。"
      },
      {
        name: "Legacy Member",
        result: "建立传承型医疗家族办公室和全球医疗资源预案。",
        scope: "医疗治理框架、应急协议、全球专家资源预案、年度健康董事会。",
        entry: "邀请制，适合多代家庭、家族办公室与私人银行客户。"
      }
    ]
  },
  ja: {
    label: "会員内容",
    cta: "会員相談を申し込む",
    cards: [
      {
        name: "Founder Member",
        result: "創業者の年次健康戦略と重大リスク確認を設計します。",
        scope: "年次健康戦略、精密健診ルート、専門医相談準備、睡眠・代謝リスクレビュー。",
        entry: "申請制。創業者と主要意思決定者向け。"
      },
      {
        name: "Executive Member",
        result: "個人の健診、レビュー、国際医療調整を長期リズムにします。",
        scope: "定期レビュー、異常指標フォロー、国際医療調整、活力管理。",
        entry: "申請制。高ストレス経営者と国際移動が多い方へ。"
      },
      {
        name: "Family Member",
        result: "配偶者、両親、次世代の健康記録と紹介準備を整えます。",
        scope: "家族健康記録、メンバー分類、両親の健康管理、年次家族レビュー。",
        entry: "申請制。家族人数とサービス深度により確認。"
      },
      {
        name: "Legacy Member",
        result: "多世代家族の医療ファミリーオフィスと国際医療準備を設計します。",
        scope: "医療ガバナンス、緊急対応、国際専門医準備、年次健康ボード。",
        entry: "招待制。多世代家族、ファミリーオフィス、プライベートバンク顧客向け。"
      }
    ]
  },
  en: {
    label: "Membership Benefits",
    cta: "Apply for Membership Inquiry",
    cards: [
      {
        name: "Founder Member",
        result: "Annual health strategy and major-risk alert system for founders.",
        scope: "Health strategy board, Japan diagnostics pathway, second-opinion readiness, sleep and metabolic review.",
        entry: "Application-based. For founders and key decision makers."
      },
      {
        name: "Executive Member",
        result: "Personal checkups, reviews, and cross-border coordination in one long-term rhythm.",
        scope: "Quarterly review, abnormal-marker follow-up, international coordination, executive energy management.",
        entry: "Application-based. For high-pressure executives and frequent travelers."
      },
      {
        name: "Family Member",
        result: "Family health archives and referral readiness for spouses, parents, and the next generation.",
        scope: "Family archive, member segmentation, parent health planning, annual family review.",
        entry: "Application-based. Confirmed by family size and service depth."
      },
      {
        name: "Legacy Member",
        result: "A medical family office and global medical readiness plan for multi-generation families.",
        scope: "Medical governance, emergency protocols, global specialist readiness, annual health board.",
        entry: "Invitation-based. For multi-generation families, family offices, and private banking clients."
      }
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = platformPages[params.slug];

  if (!page) {
    return {};
  }

  return createPageMetadata({
    path: `/${params.slug}`,
    title: page.title,
    description: page.description,
    image: platformHeroImages[params.slug]?.src ?? serviceImages["medical-concierge"].src
  });
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
  const detailSections = buildPlatformDetails(params.slug, lang, visibleSections);
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
        ctaHref={withLanguage("/contact", lang)}
        image={platformHeroImages[params.slug] ?? serviceImages["medical-concierge"]}
      />
      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleSections.map((section, index) => (
            <Link
              key={section}
              href={`#detail-${index + 1}`}
              className="border border-mist bg-white p-7 shadow-sm transition hover:border-champagne hover:bg-pearl"
            >
              <p className="font-serif text-4xl text-champagne">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-6 text-xl font-semibold text-ink">{section}</h2>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite/50">
                {lang === "en" ? "Read more" : lang === "ja" ? "詳しく見る" : "查看延伸内容"}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {lang === "en" ? "Deeper Context" : lang === "ja" ? "詳細コンテキスト" : "延伸内容"}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
                {lang === "en"
                  ? "More than a headline: each module becomes a decision system."
                  : lang === "ja"
                    ? "見出しだけでなく、各モジュールを判断体系へ。"
                    : "不只是标题，每个模块都应成为可理解的决策系统。"}
              </h2>
            </div>
            <div className="grid gap-5">
              {detailSections.map((detail, index) => (
                <article
                  id={`detail-${index + 1}`}
                  key={detail.title}
                  className="scroll-mt-28 border border-mist bg-pearl p-7 md:p-8"
                >
                  <p className="font-serif text-4xl text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-ink">
                    {detail.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-graphite/74">
                    {detail.body}
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {detail.points.map((point) => (
                      <p key={point} className="border border-mist bg-white p-4 text-sm leading-7 text-ink">
                        {point}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {params.slug === "membership-program" ? (
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {membershipProgramDetails[lang].label}
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {membershipProgramDetails[lang].cards.map((card) => (
                <article key={card.name} className="border border-mist bg-pearl p-8">
                  <h2 className="font-serif text-4xl leading-tight text-champagne">
                    {card.name}
                  </h2>
                  <p className="mt-6 text-lg font-semibold leading-8 text-ink">{card.result}</p>
                  <p className="mt-5 text-sm leading-7 text-graphite/72">{card.scope}</p>
                  <p className="mt-5 border-l border-champagne pl-4 text-sm leading-7 text-graphite/72">
                    {card.entry}
                  </p>
                  <Link
                    href={withLanguage("/contact", lang)}
                    className="mt-8 inline-flex border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-pearl"
                  >
                    {membershipProgramDetails[lang].cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {params.slug === "service-process" ? (
        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {serviceProcessDetails[lang].label}
              </p>
              <Link
                href={withLanguage("/contact", lang)}
                className="inline-flex w-fit border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-pearl"
              >
                {serviceProcessDetails[lang].cta}
              </Link>
            </div>
            <div className="mt-10 divide-y divide-mist border-y border-mist">
              {serviceProcessDetails[lang].steps.map((step, index) => (
                <article key={step.title} className="grid gap-6 py-8 md:grid-cols-[5rem_1fr]">
                  <span className="font-serif text-4xl text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-ink">{step.title}</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-graphite/72">
                      {step.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
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
