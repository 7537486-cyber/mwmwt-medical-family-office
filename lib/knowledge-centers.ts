import type { Language } from "@/lib/site";

export type KnowledgeCenter = {
  slug: string;
  image: {
    src: string;
    alt: string;
  };
  label: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  purpose: Record<Language, string>;
  literatureTopics: Record<Language, string[]>;
  featuredArticleSlugs: string[];
};

export const knowledgeCenters: KnowledgeCenter[] = [
  {
    slug: "longevity-medicine",
    image: {
      src: "/fuji-active-longevity.png",
      alt: "Healthy older couple walking near Mount Fuji"
    },
    label: "Longevity Medicine",
    title: {
      zh: "长寿医学中心",
      ja: "長寿医学センター",
      en: "Longevity Medicine"
    },
    description: {
      zh: "围绕健康寿命、生物年龄、炎症、代谢、睡眠、认知与肌肉质量，建立长期健康决策框架。",
      ja: "健康寿命、生物学的年齢、炎症、代謝、睡眠、認知、筋肉量を軸に長期的な健康判断を整理します。",
      en: "A long-term decision framework around healthspan, biological age, inflammation, metabolism, sleep, cognition, and muscle quality."
    },
    purpose: {
      zh: "帮助企业家家庭理解衰老不是单一疾病，而是多系统风险逐渐累积的过程。",
      ja: "老化を単一疾患ではなく、複数システムのリスクが蓄積する過程として理解します。",
      en: "Helping families understand aging as a multi-system risk trajectory, not a single disease."
    },
    literatureTopics: {
      zh: ["表观遗传年龄与生物年龄", "慢性炎症与衰老", "线粒体功能", "睡眠节律与健康寿命", "肌少症与功能衰退", "认知风险早期识别"],
      ja: ["エピジェネティック年齢", "慢性炎症と老化", "ミトコンドリア機能", "睡眠リズムと健康寿命", "サルコペニア", "認知リスクの早期把握"],
      en: ["Epigenetic age and biological age", "Inflammaging", "Mitochondrial function", "Sleep rhythm and healthspan", "Sarcopenia", "Early cognitive risk"]
    },
    featuredArticleSlugs: ["longevity-medicine", "biological-age-testing-for-entrepreneurs", "longevity-baseline-assessment-for-high-net-worth-families"]
  },
  {
    slug: "cellular-science",
    image: {
      src: "/regenerative-advisory.png",
      alt: "Premium regenerative medicine advisory setting"
    },
    label: "Cellular Science",
    title: {
      zh: "细胞科学中心",
      ja: "細胞科学センター",
      en: "Cellular Science"
    },
    description: {
      zh: "整理干细胞、细胞通讯、组织修复与免疫调节相关基础知识，强调证据等级与风险边界。",
      ja: "幹細胞、細胞間コミュニケーション、組織修復、免疫調整の基礎を、証拠レベルとリスク境界から整理します。",
      en: "Foundational knowledge on stem cells, cellular communication, tissue repair, and immune modulation, with evidence and risk boundaries."
    },
    purpose: {
      zh: "把容易被营销化的细胞科技，重新放回医学评估、合规文件和长期随访语境中。",
      ja: "マーケティング化されやすい細胞科学を、医学評価、法令遵守、長期フォローの文脈に戻します。",
      en: "Reframing cellular science around medical assessment, compliance documents, and long-term follow-up."
    },
    literatureTopics: {
      zh: ["间充质干细胞基础", "细胞来源与制备标准", "组织修复机制", "免疫调节研究", "细胞加工质量控制", "不良事件监测"],
      ja: ["間葉系幹細胞の基礎", "細胞由来と製造基準", "組織修復機序", "免疫調整研究", "細胞加工の品質管理", "有害事象モニタリング"],
      en: ["Mesenchymal stem cell biology", "Cell source and processing standards", "Tissue repair mechanisms", "Immune modulation", "Cell processing quality control", "Adverse event monitoring"]
    },
    featuredArticleSlugs: ["stem-cell-legality-japan", "regenerative-medicine-options-for-japan-medical-access", "japan-premium-checkup-for-planned-japan-medical-access"]
  },
  {
    slug: "exosome-research",
    image: {
      src: "/hero-knowledge-center.png",
      alt: "Medical research intelligence desk"
    },
    label: "Exosome Research",
    title: {
      zh: "外泌体研究中心",
      ja: "エクソソーム研究センター",
      en: "Exosome Research"
    },
    description: {
      zh: "聚焦外泌体与细胞外囊泡的基础概念、检测方法、制备标准、监管边界与临床证据。",
      ja: "エクソソームと細胞外小胞の概念、検査方法、製造基準、規制境界、臨床証拠を整理します。",
      en: "Concepts, testing methods, preparation standards, regulatory boundaries, and evidence around exosomes and extracellular vesicles."
    },
    purpose: {
      zh: "帮助客户区分研究进展、合规应用和过度承诺之间的差异。",
      ja: "研究進展、適法な応用、過度な約束を区別するための判断材料を提供します。",
      en: "Helping clients distinguish research progress, compliant use, and over-promising."
    },
    literatureTopics: {
      zh: ["细胞外囊泡分类", "外泌体分离与表征", "外泌体与干细胞差异", "外泌体与 PRP 差异", "安全性与质量标准", "监管趋势"],
      ja: ["細胞外小胞の分類", "分離と特性評価", "幹細胞との違い", "PRP との違い", "安全性と品質基準", "規制動向"],
      en: ["Extracellular vesicle classification", "Isolation and characterization", "Differences from stem cells", "Differences from PRP", "Safety and quality standards", "Regulatory trends"]
    },
    featuredArticleSlugs: ["exosome-research", "regenerative-medicine-options-for-family-office-clients", "biological-age-testing-for-planned-japan-medical-access"]
  },
  {
    slug: "executive-health",
    image: {
      src: "/hero-executive-health.png",
      alt: "Executive health strategy consultation"
    },
    label: "Executive Health",
    title: {
      zh: "企业家健康中心",
      ja: "経営者健康センター",
      en: "Executive Health"
    },
    description: {
      zh: "面向创始人、CEO 与核心决策者，关注睡眠、压力、代谢、心脑血管、精力与长期判断力。",
      ja: "創業者、CEO、主要意思決定者向けに、睡眠、ストレス、代謝、心血管、活力、判断力を扱います。",
      en: "For founders, CEOs, and decision makers, focusing on sleep, stress, metabolism, cardiovascular risk, energy, and judgment."
    },
    purpose: {
      zh: "把企业家的健康问题从一次体检，升级为年度风险管理与长期表现管理。",
      ja: "経営者の健康を単発健診ではなく、年次リスク管理と長期パフォーマンス管理として扱います。",
      en: "Turning executive health from a one-off checkup into annual risk and performance management."
    },
    literatureTopics: {
      zh: ["睡眠呼吸暂停", "慢性压力与心血管风险", "胰岛素抵抗", "飞行时差恢复", "疲劳与认知表现", "年度精密体检策略"],
      ja: ["睡眠時無呼吸", "慢性ストレスと心血管リスク", "インスリン抵抗性", "時差回復", "疲労と認知パフォーマンス", "年次精密健診戦略"],
      en: ["Sleep apnea", "Chronic stress and cardiovascular risk", "Insulin resistance", "Jet lag recovery", "Fatigue and cognition", "Annual executive screening strategy"]
    },
    featuredArticleSlugs: ["executive-health-management", "japan-executive-health-checkup", "executive-health-management-for-entrepreneurs"]
  },
  {
    slug: "regenerative-medicine",
    image: {
      src: "/regenerative-advisory.png",
      alt: "Regenerative medicine advisory room"
    },
    label: "Regenerative Medicine",
    title: {
      zh: "再生医疗中心",
      ja: "再生医療センター",
      en: "Regenerative Medicine"
    },
    description: {
      zh: "以日本再生医疗监管框架为基础，解释机构资质、医生评估、计划备案、风险说明与长期追踪。",
      ja: "日本の再生医療規制を踏まえ、医療機関、医師評価、計画、リスク説明、長期追跡を整理します。",
      en: "Explaining institutions, physician review, program documentation, risk disclosure, and follow-up within Japan's regenerative medicine framework."
    },
    purpose: {
      zh: "不把再生医疗包装成万能答案，而是作为需要审慎评估的医学资源。",
      ja: "再生医療を万能解ではなく、慎重な評価が必要な医療資源として扱います。",
      en: "Positioning regenerative medicine as a medical resource requiring careful evaluation, not a universal answer."
    },
    literatureTopics: {
      zh: ["日本再生医疗安全性确保法", "医疗机构资质审核", "适应症与禁忌症", "细胞加工与运输", "治疗记录完整性", "治疗后长期随访"],
      ja: ["再生医療等安全性確保法", "医療機関資格確認", "適応と禁忌", "細胞加工と輸送", "診療記録の完全性", "治療後長期フォロー"],
      en: ["Act on the Safety of Regenerative Medicine", "Institution qualification review", "Indications and contraindications", "Cell processing and transport", "Treatment record integrity", "Long-term follow-up"]
    },
    featuredArticleSlugs: ["stem-cell-legality-japan", "regenerative-medicine-options-for-entrepreneurs", "regenerative-medicine-options-for-high-net-worth-families"]
  },
  {
    slug: "global-medical-access",
    image: {
      src: "/hero-global-medical-access.png",
      alt: "Global medical access concierge planning"
    },
    label: "Global Medical Access",
    title: {
      zh: "全球医疗资源中心",
      ja: "国際医療アクセスセンター",
      en: "Global Medical Access"
    },
    description: {
      zh: "解释日本、新加坡、瑞士、美国医疗资源差异，以及第二诊疗意见、海外转诊与跨境资料准备。",
      ja: "日本、シンガポール、スイス、米国の医療資源の違い、セカンドオピニオン、海外紹介、資料準備を整理します。",
      en: "How Japan, Singapore, Switzerland, and the United States differ in medical access, second opinions, referrals, and record preparation."
    },
    purpose: {
      zh: "帮助家庭在跨境医疗中减少信息不对称，知道何时去哪里、找谁、准备什么。",
      ja: "国際医療での情報格差を減らし、どこへ、いつ、誰に、何を準備するかを明確にします。",
      en: "Reducing information asymmetry in cross-border care: where to go, when, whom to consult, and what to prepare."
    },
    literatureTopics: {
      zh: ["日本医疗体系", "大学医院与专科医院", "第二诊疗意见流程", "海外转诊资料", "跨境隐私保护", "国际患者协调"],
      ja: ["日本の医療制度", "大学病院と専門病院", "セカンドオピニオン手順", "海外紹介資料", "国際的な個人情報保護", "国際患者調整"],
      en: ["Japanese medical system", "University and specialty hospitals", "Second opinion workflow", "Referral documentation", "Cross-border privacy", "International patient coordination"]
    },
    featuredArticleSlugs: ["japan-medical-system", "japan-premium-checkup-for-planned-japan-medical-access", "second-opinion-for-entrepreneurs"]
  },
  {
    slug: "biomarker-research",
    image: {
      src: "/longevity-planning.png",
      alt: "Biomarker review for longevity planning"
    },
    label: "Biomarker Research",
    title: {
      zh: "生物标志物中心",
      ja: "バイオマーカー研究センター",
      en: "Biomarker Research"
    },
    description: {
      zh: "围绕炎症、代谢、心血管、激素、肌肉、认知与生物年龄指标，建立可追踪的健康档案。",
      ja: "炎症、代謝、心血管、ホルモン、筋肉、認知、生物学的年齢を追跡可能な健康記録にします。",
      en: "Inflammation, metabolism, cardiovascular, hormone, muscle, cognitive, and biological age markers for trackable health records."
    },
    purpose: {
      zh: "让体检报告从一次性结果变成长期趋势管理工具。",
      ja: "健診結果を一回限りの結果ではなく、長期トレンド管理の道具に変えます。",
      en: "Turning checkup results into a long-term trend management tool."
    },
    literatureTopics: {
      zh: ["炎症指标", "代谢与胰岛素抵抗", "心血管风险标志物", "激素老化", "肌肉质量指标", "认知与神经退行风险"],
      ja: ["炎症指標", "代謝とインスリン抵抗性", "心血管リスク指標", "ホルモン老化", "筋肉量指標", "認知と神経変性リスク"],
      en: ["Inflammation markers", "Metabolism and insulin resistance", "Cardiovascular biomarkers", "Hormonal aging", "Muscle quality indicators", "Cognitive and neurodegenerative risk"]
    },
    featuredArticleSlugs: ["biological-age-testing-for-entrepreneurs", "biological-age-testing-for-private-banking-clients", "annual-health-management-for-founders-over-50"]
  },
  {
    slug: "preventive-medicine",
    image: {
      src: "/executive-checkup-consultation.png",
      alt: "Preventive medicine consultation in Japan"
    },
    label: "Preventive Medicine",
    title: {
      zh: "预防医学中心",
      ja: "予防医学センター",
      en: "Preventive Medicine"
    },
    description: {
      zh: "从癌症早筛、心脑血管预防、糖尿病前期、骨质疏松到生活方式医学，提前管理重大风险。",
      ja: "がん検診、心血管予防、糖尿病予備群、骨粗鬆症、生活習慣医学から重大リスクを管理します。",
      en: "Cancer screening, cardiovascular prevention, prediabetes, osteoporosis, and lifestyle medicine for earlier risk management."
    },
    purpose: {
      zh: "把“没有病”升级为“未来风险是否可控”。",
      ja: "「病気がない」から「将来リスクを管理できるか」へ視点を移します。",
      en: "Shifting from 'no disease today' to 'is future risk being managed?'"
    },
    literatureTopics: {
      zh: ["癌症早筛策略", "心脑血管预防", "糖尿病前期管理", "骨密度与肌肉量", "生活方式医学", "年度复查路径"],
      ja: ["がんスクリーニング", "心血管予防", "糖尿病予備群管理", "骨密度と筋肉量", "生活習慣医学", "年次フォロー手順"],
      en: ["Cancer screening strategy", "Cardiovascular prevention", "Prediabetes management", "Bone density and muscle mass", "Lifestyle medicine", "Annual follow-up pathway"]
    },
    featuredArticleSlugs: ["japan-executive-health-checkup", "japan-premium-checkup-for-high-net-worth-families", "annual-health-management-for-family-office-clients"]
  },
  {
    slug: "case-library",
    image: {
      src: "/family-health-planning.png",
      alt: "Private family health planning journey"
    },
    label: "Case Library",
    title: {
      zh: "案例中心",
      ja: "ケースライブラリ",
      en: "Case Library"
    },
    description: {
      zh: "用去标识化 Journey Case 展示健康决策路径，强调服务流程、判断依据与长期管理，不宣传疗效。",
      ja: "匿名化された Journey Case で、サービス手順、判断根拠、長期管理を示し、効果宣伝は行いません。",
      en: "De-identified journey cases showing service pathways, decision logic, and follow-up without outcome advertising."
    },
    purpose: {
      zh: "让客户看到真实问题如何被拆解、资料如何准备、医生如何评估、后续如何管理。",
      ja: "実際の課題がどう整理され、資料がどう準備され、医師評価とフォローにつながるかを示します。",
      en: "Showing how real concerns are clarified, documented, medically reviewed, and followed over time."
    },
    literatureTopics: {
      zh: ["第二诊疗意见路径", "睡眠风险管理", "家庭生育力规划", "癌症风险筛查", "长期随访记录", "服务流程合规表达"],
      ja: ["セカンドオピニオン経路", "睡眠リスク管理", "家族の妊孕性計画", "がんリスク検査", "長期フォロー記録", "適法なケース表現"],
      en: ["Second opinion pathway", "Sleep risk management", "Family fertility planning", "Cancer risk screening", "Long-term follow-up records", "Compliant case storytelling"]
    },
    featuredArticleSlugs: ["executive-health-management", "japan-medical-system", "japan-executive-health-checkup"]
  },
  {
    slug: "founder-insights",
    image: {
      src: "/hero-medical-family-office.png",
      alt: "Founder letter and private health governance"
    },
    label: "Founder Insights",
    title: {
      zh: "创始人观点",
      ja: "創業者インサイト",
      en: "Founder Insights"
    },
    description: {
      zh: "从家族办公室、私人银行、长期健康治理与跨境医疗决策角度，持续输出品牌观点。",
      ja: "ファミリーオフィス、プライベートバンク、長期健康管理、国際医療判断の視点から発信します。",
      en: "Perspectives on family office thinking, private banking service logic, long-term health governance, and cross-border medical decisions."
    },
    purpose: {
      zh: "让客户理解 Medical Family Office 为什么存在，以及健康风险为什么需要像资产一样被管理。",
      ja: "Medical Family Office がなぜ必要か、健康リスクを資産のように管理する理由を伝えます。",
      en: "Explaining why a Medical Family Office exists and why health risk deserves asset-level governance."
    },
    literatureTopics: {
      zh: ["健康作为终极资产", "医疗决策权", "家庭健康治理", "隐私与风险控制", "企业家长期表现", "跨境医疗伦理边界"],
      ja: ["究極の資産としての健康", "医療意思決定権", "家族健康ガバナンス", "秘匿性とリスク管理", "経営者の長期パフォーマンス", "国際医療の倫理境界"],
      en: ["Health as the ultimate asset", "Medical decision-making authority", "Family health governance", "Privacy and risk control", "Long-term executive performance", "Ethical boundaries in cross-border care"]
    },
    featuredArticleSlugs: ["annual-health-management-for-family-office-clients", "second-opinion-for-family-office-clients", "longevity-baseline-assessment-for-family-office-clients"]
  }
];

export function getKnowledgeCenter(slug: string) {
  return knowledgeCenters.find((center) => center.slug === slug);
}
