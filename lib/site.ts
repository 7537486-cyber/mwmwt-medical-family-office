export type NavItem = {
  href: string;
  label: string;
  ja: string;
  en: string;
};

export type PageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  jaTitle: string;
  enTitle?: string;
  description: string;
  jaDescription: string;
  enDescription?: string;
  pillars: Array<{
    title: string;
    ja: string;
    jaBody?: string;
    en?: string;
    body: string;
    enBody?: string;
  }>;
  proof: string[];
  jaProof?: string[];
  enProof?: string[];
  process: string[];
  jaProcess?: string[];
  enProcess?: string[];
  cta: string;
  jaCta?: string;
  enCta?: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "首页", ja: "ホーム", en: "Home" },
  { href: "/about", label: "关于我们", ja: "私たちについて", en: "About" },
  { href: "/services", label: "服务", ja: "サービス", en: "Services" },
  { href: "/regenerative-medicine", label: "再生医疗", ja: "再生医療", en: "Regenerative" },
  { href: "/longevity-planning", label: "长寿规划", ja: "長寿計画", en: "Longevity" },
  { href: "/medical-concierge", label: "医疗礼宾", ja: "医療コンシェルジュ", en: "Concierge" },
  { href: "/japan-hospital-network", label: "日本医院网络", ja: "医療機関ネットワーク", en: "Network" },
  { href: "/fertility-preservation", label: "生育力保存", ja: "妊孕性温存", en: "Fertility" },
  { href: "/doctor-network", label: "医生网络", ja: "医師ネットワーク", en: "Doctors" },
  { href: "/medical-resource-database", label: "资源数据库", ja: "リソースDB", en: "Database" },
  { href: "/family-office-health-plan", label: "家庭健康计划", ja: "家族健康計画", en: "Family Plan" },
  { href: "/contact", label: "联系", ja: "お問い合わせ", en: "Contact" }
];

export type Language = "zh" | "ja" | "en";

export function normalizeLanguage(lang?: string): Language {
  return lang === "ja" || lang === "en" ? lang : "zh";
}

export function withLanguage(href: string, lang: Language) {
  return lang === "zh" ? href : `${href}?lang=${lang}`;
}

export function navLabel(item: NavItem, lang: Language) {
  if (lang === "ja") return item.ja;
  if (lang === "en") return item.en;
  return item.label;
}

export const pages: Record<string, PageContent> = {
  about: {
    slug: "about",
    eyebrow: "Private Medical Advisory",
    title: "以家族办公室方式管理跨境医疗决策",
    jaTitle: "ファミリーオフィス型の医療意思決定支援",
    description:
      "我们将日本优质医疗资源、长期健康治理与高净值家庭的隐私需求整合为一个持续陪伴的顾问体系。",
    jaDescription:
      "日本の高度医療資源、長期的な健康管理、富裕層家族に求められる秘匿性を統合し、継続的な医療アドバイザリーを提供します。",
    pillars: [
      {
        title: "独立顾问视角",
        ja: "Independent Advisory",
        body: "不以单一医院或单次项目为中心，而以家庭长期利益、风险边界和可解释决策为核心。"
      },
      {
        title: "中日双语协调",
        ja: "Bilingual Coordination",
        body: "覆盖资料整理、医生沟通、预约安排、陪诊翻译、报告解读与回国后的连续跟进。"
      },
      {
        title: "隐私与秩序",
        ja: "Discretion",
        body: "以私行式服务节奏处理敏感健康信息，让医疗过程更安静、更清晰、更可控。"
      }
    ],
    proof: ["日本本地医疗协调", "中文家庭顾问沟通", "跨境病历资料管理"],
    process: ["建立家庭健康档案", "明确医疗目标与限制", "匹配日本专家与机构", "形成长期追踪机制"],
    cta: "预约私密介绍"
  },
  services: {
    slug: "services",
    eyebrow: "Integrated Services",
    title: "从一次赴日就医到长期家庭健康治理",
    jaTitle: "単発受診から長期的な家族健康管理まで",
    description:
      "服务覆盖高端体检、第二诊疗意见、再生医疗咨询、抗衰项目、海外转诊、术后康复与家庭成员年度健康计划。",
    jaDescription:
      "エグゼクティブ健診、セカンドオピニオン、再生医療相談、アンチエイジング、海外紹介、術後回復、家族年次計画まで対応します。",
    pillars: [
      {
        title: "精密体检与筛查",
        ja: "Executive Screening",
        body: "根据年龄、家族史、商业压力与既往病史设计检查组合，避免低效重复。"
      },
      {
        title: "第二诊疗意见",
        ja: "Second Opinion",
        body: "协助整理病历、影像与问题清单，匹配日本专科医生进行独立意见评估。"
      },
      {
        title: "就医全流程礼宾",
        ja: "Medical Concierge",
        body: "预约、签证辅助、行程节奏、现场陪同、翻译、支付与后续复诊统一协调。"
      }
    ],
    proof: ["按需匹配专科", "一对一行前说明", "诊后中文总结"],
    process: ["需求访谈", "资料初审", "方案与报价", "赴日执行", "后续管理"],
    cta: "查看服务路径"
  },
  "regenerative-medicine": {
    slug: "regenerative-medicine",
    eyebrow: "Regenerative Medicine",
    title: "审慎连接日本再生医疗与抗衰项目",
    jaTitle: "日本の再生医療とアンチエイジングを慎重に接続",
    description:
      "围绕干细胞、免疫细胞、外泌体与组织修复等领域，帮助家庭理解适应症、合规边界、预期收益与潜在风险。",
    jaDescription:
      "幹細胞、免疫細胞、エクソソーム、組織修復などについて、適応、規制、期待値、リスクを整理します。",
    pillars: [
      {
        title: "项目筛选",
        ja: "Program Screening",
        body: "优先评估合规性、医生资质、适应症匹配度与术前术后管理能力。"
      },
      {
        title: "风险说明",
        ja: "Risk Framing",
        body: "用家族可理解的语言说明证据等级、禁忌、替代路径和合理预期。"
      },
      {
        title: "长期追踪",
        ja: "Long-term Follow-up",
        body: "将治疗记录、指标变化与生活方式管理纳入长期健康档案。"
      }
    ],
    proof: ["合规项目尽调", "术前资料审核", "诊后指标追踪"],
    process: ["目标确认", "医学资料评估", "机构与医生匹配", "治疗前说明", "疗效跟踪"],
    cta: "咨询再生医疗"
  },
  "longevity-planning": {
    slug: "longevity-planning",
    eyebrow: "Longevity Planning",
    title: "把长寿管理变成家族资产配置的一部分",
    jaTitle: "長寿管理を家族資産設計の一部へ",
    description:
      "围绕代谢、心脑血管、肿瘤风险、睡眠压力、认知能力与功能医学指标，建立长期、可复盘的健康策略。",
    jaDescription:
      "代謝、心血管、腫瘍リスク、睡眠、ストレス、認知、機能医学指標を継続的に管理します。",
    pillars: [
      {
        title: "年度健康董事会",
        ja: "Annual Health Board",
        body: "每年复盘指标、家族风险、生活变化和下一阶段优先级。"
      },
      {
        title: "抗衰路径设计",
        ja: "Longevity Roadmap",
        body: "将体检、营养、运动、睡眠、压力管理与医学干预整合为分阶段计划。"
      },
      {
        title: "家庭成员分层",
        ja: "Family Segmentation",
        body: "为创始人、配偶、父母与下一代设计不同关注重点与服务节奏。"
      }
    ],
    proof: ["年度指标看板", "长期风险地图", "生活方式顾问协同"],
    process: ["基线评估", "风险排序", "年度计划", "季度复盘", "必要时赴日升级检查"],
    cta: "制定长寿计划"
  },
  "medical-concierge": {
    slug: "medical-concierge",
    eyebrow: "Medical Concierge",
    title: "让赴日就医保持私密、准时与有序",
    jaTitle: "訪日医療を静かに、正確に、秩序立てて",
    description:
      "从行前评估到日本现场陪同，再到回国后的复诊与报告管理，我们为复杂医疗旅程提供单一协调窗口。",
    jaDescription:
      "渡航前評価、現地同行、帰国後の再診・報告管理まで、複雑な医療行程を一元的に調整します。",
    pillars: [
      {
        title: "行前准备",
        ja: "Pre-arrival",
        body: "整理中文病史、翻译关键资料、明确问诊目标并安排合适时间窗口。"
      },
      {
        title: "现场陪同",
        ja: "On-site Support",
        body: "提供医院接待、医疗翻译、检查动线管理与重要沟通记录。"
      },
      {
        title: "诊后管理",
        ja: "Aftercare",
        body: "将日本医生意见转化为中文行动清单，并协调后续复诊或转诊。"
      }
    ],
    proof: ["单一协调窗口", "双语病历摘要", "私密行程安排"],
    process: ["初步问诊", "病历整理", "预约确认", "现场执行", "回访与复盘"],
    cta: "安排赴日就医"
  },
  "japan-hospital-network": {
    slug: "japan-hospital-network",
    eyebrow: "Japan Hospital Network",
    title: "连接日本顶级专科能力与可信赖医疗机构",
    jaTitle: "日本の専門医療力と信頼できる医療機関へ接続",
    description:
      "基于具体病种、语言需求、就医时效与家庭隐私偏好，协助匹配大学医院、专科中心、私立高端体检机构与再生医疗机构。",
    jaDescription:
      "疾患、言語、受診時期、秘匿性に応じて、大学病院、専門センター、健診施設、再生医療機関を調整します。",
    pillars: [
      {
        title: "专科匹配",
        ja: "Specialty Matching",
        body: "覆盖肿瘤、心脑血管、消化、骨科、妇科、神经、免疫与康复等方向。"
      },
      {
        title: "机构尽调",
        ja: "Institution Review",
        body: "关注医生背景、设备能力、国际患者经验、沟通效率与后续管理能力。"
      },
      {
        title: "转诊协调",
        ja: "Referral Coordination",
        body: "当需要更高层级诊疗时，协助准备资料并衔接合适专家路径。"
      }
    ],
    proof: ["专科路径建议", "预约节奏管理", "检查与治疗衔接"],
    process: ["病情分类", "机构筛选", "预约申请", "资料预审", "诊疗反馈"],
    cta: "了解医院网络"
  },
  "family-office-health-plan": {
    slug: "family-office-health-plan",
    eyebrow: "Family Office Health Plan",
    title: "为家庭建立可继承的健康治理体系",
    jaTitle: "家族に継承できる健康ガバナンスを構築",
    description:
      "像管理资产一样管理健康风险：建立家族健康档案、年度预算、应急预案、成员分层与重大疾病决策机制。",
    jaDescription:
      "資産管理と同じように健康リスクを管理し、家族記録、年次予算、緊急対応、意思決定体制を整えます。",
    pillars: [
      {
        title: "家族健康档案",
        ja: "Family Health Archive",
        body: "集中管理体检、影像、用药、过敏史、手术史、遗传风险与医生建议。"
      },
      {
        title: "重大疾病预案",
        ja: "Critical Care Protocol",
        body: "提前设计第二意见、海外转诊、紧急联系人和关键资料清单。"
      },
      {
        title: "下一代健康教育",
        ja: "Next Generation",
        body: "帮助年轻成员建立体检意识、生活方式管理与心理压力支持框架。"
      }
    ],
    proof: ["家庭健康台账", "年度预算建议", "重大事件响应机制"],
    process: ["家庭访谈", "成员分层", "档案建立", "年度路线图", "例行复盘"],
    cta: "建立家庭计划"
  },
  "fertility-preservation": {
    slug: "fertility-preservation",
    eyebrow: "Fertility Preservation",
    title: "生育力保存与跨境生殖医疗咨询",
    jaTitle: "妊孕性温存と国際生殖医療相談",
    description:
      "围绕卵子冷冻、精子或胚胎保存、备孕体检、遗传咨询与跨境生殖医疗路径，提供审慎的医学资料整理、机构匹配与合规风险说明。",
    jaDescription:
      "卵子凍結、精子・胚保存、妊娠準備検査、遺伝カウンセリング、国際生殖医療の選択肢について、医療情報整理、医療機関調整、法務・倫理リスクの確認を行います。",
    pillars: [
      {
        title: "冻卵与生育力评估",
        ja: "卵子凍結と妊孕性評価",
        jaBody: "年齢、卵巣機能、既往歴、家族計画、医師への質問事項を整理し、日本または国際的な相談ルートを検討します。",
        body: "协助整理年龄、卵巢功能、既往病史、家族计划与医生问题清单，再匹配适合的日本或跨境咨询路径。"
      },
      {
        title: "跨境路径尽调",
        ja: "国際医療ルート確認",
        jaBody: "医療機関の資格、医師とのコミュニケーション、費用、周期、必要資料、現地ルールを事前に確認します。",
        body: "对机构资质、医生沟通、费用结构、周期安排、资料要求和当地规则进行事前确认。"
      },
      {
        title: "代孕相关风险说明",
        ja: "代理懐胎に関するリスク確認",
        jaBody: "代理懐胎については医学・倫理・法律上のリスク説明に限定し、斡旋、法規回避、結果保証は行いません。",
        body: "代孕议题仅提供医学、伦理与法律风险说明；不提供代孕撮合、规避当地法律或结果承诺。"
      }
    ],
    proof: ["生育力资料清单", "机构合规边界确认", "医学与法律风险说明"],
    jaProof: ["妊孕性資料チェックリスト", "医療機関と規制境界の確認", "医学・法務リスク説明"],
    process: ["初步需求访谈", "资料与指标整理", "医生问题清单", "机构路径建议", "风险确认与后续安排"],
    jaProcess: ["初回ヒアリング", "資料と指標の整理", "医師への質問リスト", "医療機関ルート提案", "リスク確認と次の手配"],
    cta: "咨询生育力保存",
    jaCta: "妊孕性温存を相談"
  },
  "medical-resource-database": {
    slug: "medical-resource-database",
    eyebrow: "Medical Resource Database",
    title: "医疗资源、医生、项目与高净值客户获客系统",
    jaTitle: "医療資源・医師・プログラム・富裕層獲得システム",
    description:
      "建立可持续扩展的结构化数据库，覆盖日本医疗资源、专家画像、项目产品化与中国高净值客户转化路径。",
    jaDescription:
      "日本の医療資源、医師プロファイル、プログラム設計、中国富裕層向け顧客獲得導線を構造化します。",
    pillars: [
      {
        title: "资源库",
        ja: "Resource Database",
        body: "按地区、机构类型、专科能力、准入方式、尽调标准和所需资料管理医疗资源。"
      },
      {
        title: "医生库",
        ja: "Doctor Database",
        body: "以医生画像、专科能力、适配病例、语言流程和验证清单支持精准匹配。"
      },
      {
        title: "获客系统",
        ja: "Acquisition System",
        body: "围绕内容触达、线索评分、适配度电话、方案转化和长期复购建立增长闭环。"
      }
    ],
    proof: ["结构化字段", "非空种子数据", "合规尽调边界"],
    process: ["资源录入", "医生画像验证", "项目产品化", "线索评分", "转化与复购管理"],
    cta: "咨询数据库系统"
  },
  "doctor-network": {
    slug: "doctor-network",
    eyebrow: "Doctor Network",
    title: "日本顶级医生简历与专科协作网络",
    jaTitle: "日本トップドクターの専門家ネットワーク",
    description:
      "覆盖再生医疗、肿瘤、心血管、神经科、内分泌与运动医学，建立可核验、可转诊沟通的专家档案。",
    jaDescription:
      "再生医療、腫瘍、心血管、神経内科、内分泌、スポーツ医学の専門医プロフィールを整理します。",
    pillars: [
      {
        title: "医生简历",
        ja: "Doctor Profiles",
        body: "按学历、学会资格、研究方向、论文与适配案例整理核心专家资料。"
      },
      {
        title: "专科分层",
        ja: "Specialty Mapping",
        body: "根据病种、阶段、资料完整度与赴日时效匹配不同层级的专家路径。"
      },
      {
        title: "转诊准备",
        ja: "Referral Readiness",
        body: "在预约前完成公开资料核验、病历摘要、问题清单和沟通边界确认。"
      }
    ],
    proof: ["6 大专科方向", "公开资料核验", "去标识化案例场景"],
    process: ["确认需求", "筛选医生", "核验履历", "准备资料", "预约沟通"],
    cta: "查看医生网络"
  },
  contact: {
    slug: "contact",
    eyebrow: "Private Inquiry",
    title: "以私密方式开启第一次沟通",
    jaTitle: "初回相談はプライベートに",
    description:
      "请留下希望讨论的方向。我们会先确认适配度，再安排一场保密的中日双语介绍会议。",
    jaDescription:
      "ご相談内容をお知らせください。適合性を確認したうえで、秘密保持を前提とした初回面談を設定します。",
    pillars: [
      {
        title: "适合对象",
        ja: "For Whom",
        body: "企业家家庭、家族办公室、私人银行客户经理、跨境医疗需求家庭。"
      },
      {
        title: "沟通内容",
        ja: "Scope",
        body: "可讨论体检、再生医疗、重大疾病第二意见、长期健康规划或日本医院预约。"
      },
      {
        title: "保密原则",
        ja: "Confidentiality",
        body: "首次沟通仅收集必要信息，敏感病历资料将在确认服务范围后再安全传递。"
      }
    ],
    proof: ["24 小时内初步回复", "中日双语顾问", "私密会议安排"],
    process: ["提交需求", "适配度确认", "预约介绍会议", "形成下一步建议"],
    cta: "提交咨询"
  }
};

export const homeServices = [
  pages.services,
  pages["regenerative-medicine"],
  pages["longevity-planning"],
  pages["medical-concierge"],
  pages["japan-hospital-network"],
  pages["doctor-network"],
  pages["fertility-preservation"],
  pages["family-office-health-plan"]
];

export const serviceImages: Record<string, { src: string; alt: string }> = {
  services: {
    src: "/executive-checkup-consultation.png",
    alt: "Executive health checkup consultation in Japan"
  },
  "regenerative-medicine": {
    src: "/regenerative-advisory.png",
    alt: "Luxury regenerative medicine advisory room"
  },
  "longevity-planning": {
    src: "/fuji-active-longevity.png",
    alt: "Healthy older couple walking near Mount Fuji"
  },
  "medical-concierge": {
    src: "/japan-wellness-concierge.png",
    alt: "Discreet Japan wellness concierge consultation"
  },
  "japan-hospital-network": {
    src: "/hospital-network.png",
    alt: "Refined Japan hospital network corridor"
  },
  "doctor-network": {
    src: "/medical-concierge.png",
    alt: "Trusted Japanese specialist network setting"
  },
  "fertility-preservation": {
    src: "/fertility-preservation.png",
    alt: "Private fertility preservation consultation in Japan"
  },
  "medical-resource-database": {
    src: "/longevity-planning.png",
    alt: "Structured medical resource intelligence desk"
  },
  "family-office-health-plan": {
    src: "/family-health-planning.png",
    alt: "Multi-generation family health planning meeting"
  },
  contact: {
    src: "/medical-concierge.png",
    alt: "Private inquiry and concierge coordination setting"
  }
};

type EnglishPage = {
  title: string;
  description: string;
  proof: string[];
  process: string[];
  cta: string;
  pillars: Array<{
    title: string;
    body: string;
  }>;
};

const englishPages: Record<string, EnglishPage> = {
  about: {
    title: "Medical decision-making managed like a family office",
    description:
      "We integrate Japan's premium medical resources, long-term health governance, and the privacy expectations of high-net-worth families into one continuous advisory relationship.",
    proof: ["Japan-based medical coordination", "Chinese-speaking family advisor", "Cross-border medical record management"],
    process: ["Build the family health archive", "Define goals and constraints", "Match Japanese specialists and institutions", "Create a long-term follow-up system"],
    cta: "Request a private introduction",
    pillars: [
      { title: "Independent advisory", body: "We do not center the process on a single hospital or one-off program. Decisions are framed around long-term family interests, risk boundaries, and clarity." },
      { title: "Trilingual coordination", body: "We support record preparation, doctor communication, appointments, interpretation, report review, and post-visit follow-up in Chinese, Japanese, and English." },
      { title: "Privacy and order", body: "Sensitive health information is handled with a private-banking service rhythm, making complex care quieter and more controlled." }
    ]
  },
  services: {
    title: "From one visit to long-term family health governance",
    description:
      "Our services include executive checkups, second opinions, regenerative medicine consultation, anti-aging programs, overseas referrals, recovery support, and annual health plans for family members.",
    proof: ["Specialty-based matching", "One-to-one pre-travel briefing", "Post-visit English and Chinese summary"],
    process: ["Needs interview", "Medical record review", "Plan and quotation", "Japan-based execution", "Follow-up management"],
    cta: "Explore the service pathway",
    pillars: [
      { title: "Executive screening", body: "We design checkup programs around age, family history, business pressure, and existing medical history to avoid inefficient repetition." },
      { title: "Second opinion", body: "We organize medical records, imaging, and question lists, then match independent Japanese specialists for review." },
      { title: "End-to-end concierge", body: "Appointments, visa support, travel rhythm, on-site assistance, interpretation, payment coordination, and follow-up visits are managed through one desk." }
    ]
  },
  "regenerative-medicine": {
    title: "A prudent bridge to Japan's regenerative and anti-aging programs",
    description:
      "We help families understand indications, compliance boundaries, expected outcomes, and risks around stem cells, immune cells, exosomes, tissue repair, and related fields.",
    proof: ["Compliance-oriented program review", "Pre-treatment document assessment", "Post-treatment metric tracking"],
    process: ["Clarify goals", "Assess medical information", "Match institutions and physicians", "Pre-treatment briefing", "Track outcomes"],
    cta: "Discuss regenerative medicine",
    pillars: [
      { title: "Program screening", body: "We prioritize compliance, physician credentials, indication fit, and pre- and post-treatment management capacity." },
      { title: "Risk framing", body: "Evidence level, contraindications, alternatives, and realistic expectations are explained in language the family can use." },
      { title: "Long-term follow-up", body: "Treatment records, indicator changes, and lifestyle management are integrated into the long-term health archive." }
    ]
  },
  "longevity-planning": {
    title: "Longevity management as part of family asset strategy",
    description:
      "We build a long-term, reviewable health strategy across metabolism, cardiovascular risk, cancer screening, sleep, stress, cognition, and functional medicine indicators.",
    proof: ["Annual indicator dashboard", "Long-term risk map", "Lifestyle advisor coordination"],
    process: ["Baseline assessment", "Risk prioritization", "Annual plan", "Quarterly review", "Upgrade testing in Japan when needed"],
    cta: "Design a longevity plan",
    pillars: [
      { title: "Annual health board", body: "Each year, we review indicators, family risks, lifestyle changes, and priorities for the next stage." },
      { title: "Longevity roadmap", body: "Checkups, nutrition, movement, sleep, stress management, and medical interventions are organized into a phased plan." },
      { title: "Family segmentation", body: "Founders, spouses, parents, and next-generation members receive different priorities and service rhythms." }
    ]
  },
  "medical-concierge": {
    title: "Private, punctual, and orderly medical travel to Japan",
    description:
      "From pre-arrival assessment to on-site support in Japan and post-return follow-up, we provide one coordination window for complex medical journeys.",
    proof: ["Single coordination window", "Trilingual medical summary", "Private itinerary management"],
    process: ["Initial consultation", "Medical record preparation", "Appointment confirmation", "On-site execution", "Review and follow-up"],
    cta: "Arrange medical travel",
    pillars: [
      { title: "Pre-arrival preparation", body: "We organize medical history, translate key files, clarify consultation goals, and arrange the right time window." },
      { title: "On-site support", body: "Hospital reception, medical interpretation, examination flow, and key communication records are managed on-site." },
      { title: "Aftercare", body: "Japanese doctors' opinions are translated into actionable family checklists, with follow-up visits or referrals coordinated as needed." }
    ]
  },
  "japan-hospital-network": {
    title: "Access to trusted Japanese hospitals and specialist capabilities",
    description:
      "Based on condition, language needs, timing, and privacy preferences, we help match university hospitals, specialty centers, premium checkup institutions, and regenerative medicine clinics.",
    proof: ["Specialty pathway recommendations", "Appointment timeline management", "Testing and treatment coordination"],
    process: ["Classify the condition", "Screen institutions", "Submit appointment requests", "Pre-review documents", "Collect clinical feedback"],
    cta: "Learn about the network",
    pillars: [
      { title: "Specialty matching", body: "We cover oncology, cardiovascular and cerebrovascular care, gastroenterology, orthopedics, gynecology, neurology, immunology, and rehabilitation." },
      { title: "Institution review", body: "We consider physician background, equipment capability, international patient experience, communication efficiency, and follow-up capacity." },
      { title: "Referral coordination", body: "When higher-level care is needed, we prepare the documents and connect the family to an appropriate specialist pathway." }
    ]
  },
  "family-office-health-plan": {
    title: "A family health governance system that can be inherited",
    description:
      "We manage health risk like family assets: family health archives, annual budgets, emergency protocols, member segmentation, and major illness decision frameworks.",
    proof: ["Family health ledger", "Annual budget guidance", "Critical-event response protocol"],
    process: ["Family interview", "Member segmentation", "Archive setup", "Annual roadmap", "Routine review"],
    cta: "Build a family plan",
    pillars: [
      { title: "Family health archive", body: "Checkups, imaging, medication, allergies, surgeries, genetic risks, and physician recommendations are organized in one place." },
      { title: "Critical illness protocol", body: "Second opinions, overseas referrals, emergency contacts, and key document lists are prepared before a crisis." },
      { title: "Next-generation health education", body: "Younger family members build checkup awareness, lifestyle management habits, and psychological stress support frameworks." }
    ]
  },
  "fertility-preservation": {
    title: "Fertility preservation and cross-border reproductive medicine advisory",
    description:
      "We provide discreet advisory support around egg freezing, sperm or embryo preservation, preconception checkups, genetic counseling, and cross-border reproductive medicine pathways, with clear medical, ethical, and legal risk framing.",
    proof: ["Fertility document checklist", "Institution and compliance boundary review", "Medical and legal risk briefing"],
    process: ["Initial needs interview", "Organize records and indicators", "Prepare physician questions", "Recommend institution pathways", "Confirm risks and next steps"],
    cta: "Discuss fertility preservation",
    pillars: [
      { title: "Egg freezing and fertility assessment", body: "Age, ovarian reserve, medical history, family planning goals, and physician questions are organized before matching a Japanese or cross-border consultation pathway." },
      { title: "Cross-border pathway diligence", body: "Institution credentials, physician communication, cost structure, cycle timing, document requirements, and local rules are reviewed before decisions are made." },
      { title: "Surrogacy risk briefing", body: "Surrogacy-related questions are handled only as medical, ethical, and legal risk discussions. We do not arrange surrogacy, bypass local law, or guarantee outcomes." }
    ]
  },
  "medical-resource-database": {
    title: "Medical resources, physician profiles, programs, and HNW acquisition system",
    description:
      "A structured database for Japanese medical resources, specialist profiles, program packaging, and a China high-net-worth client acquisition workflow.",
    proof: ["Structured fields", "Non-empty seed data", "Compliance-oriented diligence boundaries"],
    process: ["Resource entry", "Physician profile verification", "Program packaging", "Lead scoring", "Conversion and retention management"],
    cta: "Discuss the database system",
    pillars: [
      { title: "Resource database", body: "Medical resources are managed by region, institution type, specialty capability, access model, diligence standards, and required documents." },
      { title: "Doctor database", body: "Specialist matching is supported by physician profiles, case fit, language workflow, and verification checklists." },
      { title: "Acquisition system", body: "Growth is organized around content reach, lead scoring, fit calls, proposal conversion, and long-term retention." }
    ]
  },
  "doctor-network": {
    title: "Japan top doctor profiles and specialist collaboration network",
    description:
      "A verified specialist profile network across regenerative medicine, oncology, cardiovascular care, neurology, endocrinology, and sports medicine.",
    proof: ["Six specialty areas", "Public profile verification", "De-identified case scenarios"],
    process: ["Clarify need", "Screen physicians", "Verify profile", "Prepare records", "Coordinate consultation"],
    cta: "Explore doctor network",
    pillars: [
      { title: "Doctor profiles", body: "Key specialist profiles are organized by education, society activity, research direction, publications, and suitable scenarios." },
      { title: "Specialty mapping", body: "Physician pathways are matched by condition, disease stage, document readiness, and Japan access timeline." },
      { title: "Referral readiness", body: "Public profile checks, medical summaries, question lists, and communication boundaries are prepared before appointment requests." }
    ]
  },
  contact: {
    title: "Begin the first conversation privately",
    description:
      "Share the area you would like to discuss. We will first confirm fit, then arrange a confidential introductory meeting in Chinese, Japanese, or English.",
    proof: ["Initial reply within 24 hours", "Chinese, Japanese, and English advisors", "Private meeting arrangement"],
    process: ["Submit inquiry", "Confirm fit", "Schedule introductory meeting", "Define next-step recommendations"],
    cta: "Submit inquiry",
    pillars: [
      { title: "Who we serve", body: "Entrepreneur families, family offices, private banking relationship managers, and families with cross-border medical needs." },
      { title: "What we discuss", body: "Executive checkups, regenerative medicine, major illness second opinions, long-term health planning, and Japan hospital appointments." },
      { title: "Confidentiality", body: "The first conversation collects only necessary information. Sensitive records are transferred securely after scope confirmation." }
    ]
  }
};

export function pageText(page: PageContent, lang: Language) {
  const english = englishPages[page.slug];

  if (lang === "en" && english) {
    return {
      eyebrow: page.eyebrow,
      title: english.title,
      secondaryTitle: "Private medical coordination for Japan access",
      description: english.description,
      secondaryDescription:
        "Designed for discreet cross-border care, specialist access, and long-term family health governance.",
      proof: english.proof,
      process: english.process,
      cta: english.cta,
      pillars: page.pillars.map((pillar, index) => ({
        title: english.pillars[index]?.title ?? pillar.ja,
        label: pillar.ja,
        body: english.pillars[index]?.body ?? pillar.body
      }))
    };
  }

  if (lang === "ja") {
    return {
      eyebrow: page.eyebrow,
      title: page.jaTitle,
      secondaryTitle: page.title,
      description: page.jaDescription,
      secondaryDescription: page.description,
      proof: page.jaProof ?? page.proof,
      process: page.jaProcess ?? page.process,
      cta: page.jaCta ?? page.cta,
      pillars: page.pillars.map((pillar) => ({
        title: pillar.ja,
        label: pillar.title,
        body: pillar.jaBody ?? pillar.body
      }))
    };
  }

  return {
    eyebrow: page.eyebrow,
    title: page.title,
    secondaryTitle: page.jaTitle,
    description: page.description,
    secondaryDescription: page.jaDescription,
    proof: page.proof,
    process: page.process,
    cta: page.cta,
    pillars: page.pillars.map((pillar) => ({
      title: pillar.title,
      label: pillar.ja,
      body: pillar.body
    }))
  };
}
