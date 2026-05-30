export type NavItem = {
  href: string;
  label: string;
  ja: string;
};

export type PageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  jaTitle: string;
  description: string;
  jaDescription: string;
  pillars: Array<{
    title: string;
    ja: string;
    body: string;
  }>;
  proof: string[];
  process: string[];
  cta: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "首页", ja: "Home" },
  { href: "/about", label: "关于我们", ja: "About" },
  { href: "/services", label: "服务", ja: "Services" },
  { href: "/regenerative-medicine", label: "再生医疗", ja: "Regenerative" },
  { href: "/longevity-planning", label: "长寿规划", ja: "Longevity" },
  { href: "/medical-concierge", label: "医疗礼宾", ja: "Concierge" },
  { href: "/japan-hospital-network", label: "日本医院网络", ja: "Network" },
  { href: "/family-office-health-plan", label: "家庭健康计划", ja: "Family Plan" },
  { href: "/contact", label: "联系", ja: "Contact" }
];

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
  pages["family-office-health-plan"]
];
