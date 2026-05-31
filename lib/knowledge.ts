import type { Language } from "@/lib/site";

export type KnowledgeArticle = {
  slug: string;
  category: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  sections: Record<Language, Array<{ heading: string; body: string; points?: string[] }>>;
};

const baseKnowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "japan-executive-health-checkup",
    category: "Executive Health",
    title: {
      zh: "什么是日本精密体检？",
      ja: "日本の精密健診とは",
      en: "What Is an Executive Health Checkup in Japan?"
    },
    description: {
      zh: "日本精密体检不是简单增加检查项目，而是围绕年龄、家族史、生活压力和重大疾病风险进行有重点的筛查。",
      ja: "日本の精密健診は項目を増やすだけでなく、年齢、家族歴、生活負荷、重大疾患リスクに基づき検査を設計する考え方です。",
      en: "An executive health checkup in Japan is not just more tests. It is a risk-based screening plan built around age, family history, stress, and major disease risk."
    },
    sections: {
      zh: [
        {
          heading: "精密体检的核心不是项目数量，而是风险识别",
          body: "高净值客户最需要的不是一份很厚的体检套餐，而是知道哪些风险最值得优先排查。日本精密体检通常会围绕肿瘤早筛、心脑血管、代谢健康、胃肠内镜、影像检查和生活方式风险进行组合。"
        },
        {
          heading: "适合哪些人",
          body: "企业家、长期高压管理者、有家族病史者、经常跨境出差者，以及希望建立年度健康档案的家庭成员，都适合做系统化体检规划。",
          points: ["肿瘤与消化道风险", "心脑血管风险", "糖代谢与脂代谢风险", "睡眠、压力与疲劳相关风险"]
        },
        {
          heading: "Medical Family Office 如何协助",
          body: "我们协助客户整理既往报告，明确检查目标，匹配合适机构，安排翻译与陪同，并在检查后把报告纳入长期健康档案。体检不是终点，后续复查和风险管理才是价值所在。"
        }
      ],
      ja: [
        {
          heading: "精密健診の価値は項目数ではなく、リスクの見極めです。",
          body: "富裕層や経営者に必要なのは、厚い検査メニューではなく、どのリスクを優先的に確認すべきかという判断です。腫瘍スクリーニング、心血管、代謝、内視鏡、画像検査、生活習慣リスクを組み合わせます。"
        },
        {
          heading: "対象となる方",
          body: "経営者、高ストレス環境にある方、家族歴がある方、海外移動が多い方、年次健康記録を作りたい家族に適しています。",
          points: ["腫瘍・消化器リスク", "心血管リスク", "糖代謝・脂質代謝", "睡眠、ストレス、疲労"]
        },
        {
          heading: "Medical Family Office の支援",
          body: "過去の検査資料を整理し、検査目的を明確にし、適切な医療機関、通訳、同行、検査後のフォローを調整します。健診は終点ではなく、長期管理の入口です。"
        }
      ],
      en: [
        {
          heading: "The value is not test volume. It is risk identification.",
          body: "Executives and families need more than a thick screening package. They need to know which risks deserve priority. Japan-based programs often combine cancer screening, cardiovascular review, metabolic testing, endoscopy, imaging, and lifestyle risk analysis."
        },
        {
          heading: "Who should consider it",
          body: "Entrepreneurs, high-pressure decision makers, people with family history, frequent international travelers, and families building annual health records may benefit from a structured checkup plan.",
          points: ["Cancer and digestive risk", "Cardiovascular risk", "Glucose and lipid metabolism", "Sleep, stress, and fatigue"]
        },
        {
          heading: "How Medical Family Office supports",
          body: "We organize prior reports, clarify screening goals, coordinate institutions and interpreters, and convert the result into a long-term health file. The checkup is not the end. Follow-up and risk management are where value compounds."
        }
      ]
    }
  },
  {
    slug: "stem-cell-legality-japan",
    category: "Regenerative Medicine",
    title: {
      zh: "日本干细胞合法吗？",
      ja: "日本の幹細胞医療は合法ですか",
      en: "Are Stem Cell Programs Legal in Japan?"
    },
    description: {
      zh: "日本干细胞相关服务必须看机构资质、医生执照、再生医疗计划、细胞加工与风险说明，不能简单理解为所有项目都合规或有效。",
      ja: "日本の幹細胞関連医療は、医療機関、医師資格、再生医療計画、細胞加工、リスク説明を確認する必要があります。",
      en: "Stem cell-related programs in Japan require review of the institution, physician license, regenerative medicine plan, cell processing, and risk disclosure."
    },
    sections: {
      zh: [
        {
          heading: "合法不等于适合，也不等于保证效果",
          body: "再生医疗属于高风险医学领域。客户首先应确认机构是否依法开展相关服务，医生是否具备执业资格，项目是否有明确的适应范围、风险说明和术后追踪。任何保证疗效、逆转衰老、永久年轻的表述都应谨慎对待。"
        },
        {
          heading: "尽调重点",
          body: "Medical Family Office 的价值在于帮助客户做医疗尽调，而不是只安排一次项目。",
          points: ["医疗机构资质", "医生执照与专业背景", "再生医疗计划与合规文件", "细胞来源与加工标准", "禁忌症、替代方案与随访机制"]
        },
        {
          heading: "客户应该如何判断",
          body: "不要只看价格、明星案例或宣传语。应先看医学评估是否充分，是否存在不必要治疗，是否有完整记录，是否能在出现不适或问题时获得后续管理。"
        }
      ],
      ja: [
        {
          heading: "合法性は適合性や効果保証を意味しません。",
          body: "再生医療は慎重な評価が必要な領域です。医療機関の体制、医師資格、計画、リスク説明、フォロー体制を確認する必要があります。効果保証や若返りを断定する表現には注意が必要です。"
        },
        {
          heading: "確認すべき点",
          body: "Medical Family Office は、単に予約を行うのではなく、医療デューデリジェンスを支援します。",
          points: ["医療機関の資格", "医師免許と専門背景", "再生医療計画と関連書類", "細胞由来と加工基準", "禁忌、代替案、フォロー体制"]
        },
        {
          heading: "判断の考え方",
          body: "価格や宣伝だけで判断せず、医学評価、必要性、記録、問題発生時の対応、長期フォローの有無を確認します。"
        }
      ],
      en: [
        {
          heading: "Legal does not mean suitable or guaranteed.",
          body: "Regenerative medicine requires careful review. Clients should check the institution, physician credentials, program documentation, risk disclosure, and follow-up process. Claims of guaranteed results or age reversal should be treated with caution."
        },
        {
          heading: "Due diligence focus",
          body: "The role of a Medical Family Office is medical due diligence, not simply arranging a procedure.",
          points: ["Institution credentials", "Physician license and background", "Program documentation", "Cell source and processing standards", "Contraindications, alternatives, and follow-up"]
        },
        {
          heading: "How clients should judge",
          body: "Do not rely on price, promotional cases, or broad claims. Review medical necessity, documentation, adverse event response, and long-term management."
        }
      ]
    }
  },
  {
    slug: "exosome-research",
    category: "Cellular Science",
    title: {
      zh: "外泌体是什么？",
      ja: "エクソソームとは何か",
      en: "What Are Exosomes?"
    },
    description: {
      zh: "外泌体是细胞释放的微小囊泡，参与细胞间信息传递。它是再生医学和健康管理中的热门研究方向，但不应被包装成万能治疗。",
      ja: "エクソソームは細胞が放出する小さな小胞で、細胞間情報伝達に関わります。万能治療として扱うべきではありません。",
      en: "Exosomes are small vesicles released by cells and involved in cell-to-cell communication. They are an active research area, not a universal treatment."
    },
    sections: {
      zh: [
        {
          heading: "外泌体的基本概念",
          body: "外泌体可以携带蛋白质、脂质和核酸等信息分子，参与细胞间沟通。它们常被放在组织修复、炎症调节和皮肤健康等研究语境中讨论。"
        },
        {
          heading: "外泌体与干细胞的区别",
          body: "干细胞是细胞，外泌体不是细胞。外泌体更像细胞之间传递信息的载体。两者风险、监管、制备方式和研究证据都不同，不能混为一谈。"
        },
        {
          heading: "高净值客户应关注什么",
          body: "重点不应是被营销词吸引，而应关注来源、制备、检测、适用范围、风险说明、合规性和医生评估。"
        }
      ],
      ja: [
        {
          heading: "基本概念",
          body: "エクソソームは、タンパク質、脂質、核酸などを含み、細胞間コミュニケーションに関与すると考えられています。組織修復、炎症制御、皮膚健康などの研究で注目されています。"
        },
        {
          heading: "幹細胞との違い",
          body: "幹細胞は細胞ですが、エクソソームは細胞ではありません。情報伝達に関わる小胞であり、リスク、規制、製造、証拠レベルは異なります。"
        },
        {
          heading: "確認すべき点",
          body: "マーケティング用語ではなく、由来、製造、検査、適用範囲、リスク説明、法令遵守、医師評価を確認することが重要です。"
        }
      ],
      en: [
        {
          heading: "Basic concept",
          body: "Exosomes can carry proteins, lipids, and nucleic acids and are involved in cell communication. They are discussed in research contexts such as tissue repair, inflammation modulation, and skin health."
        },
        {
          heading: "How they differ from stem cells",
          body: "Stem cells are cells. Exosomes are not cells. They are vesicles associated with information transfer. Their risk profile, regulation, preparation, and evidence base differ."
        },
        {
          heading: "What clients should review",
          body: "Focus on source, preparation, testing, appropriate use, risk disclosure, compliance, and physician assessment, rather than marketing language."
        }
      ]
    }
  },
  {
    slug: "japan-medical-system",
    category: "Global Medical Access",
    title: {
      zh: "日本医疗体系如何运作？",
      ja: "日本の医療制度はどのように機能するか",
      en: "How Does the Japanese Medical System Work?"
    },
    description: {
      zh: "理解日本医院分级、大学医院、专科诊疗、预约制度与转诊逻辑，是跨境就医前最重要的一步。",
      ja: "病院の役割、大学病院、専門診療、予約制度、紹介の流れを理解することは、渡日前に重要です。",
      en: "Understanding hospital roles, university hospitals, specialist care, appointment systems, and referral logic is essential before seeking care in Japan."
    },
    sections: {
      zh: [
        {
          heading: "日本医疗资源高度专业化",
          body: "日本拥有大学医院、综合医院、专科医院、体检中心和私立诊所等不同层级资源。不同机构适合不同问题，不是所有需求都应直接进入大学医院。"
        },
        {
          heading: "为什么需要医疗导航",
          body: "跨境客户常见问题是资料不完整、问题表达不清、语言不通、预约周期不确定、不了解转诊规则。医疗导航的核心是把客户问题转化为医生可以判断的医学资料。"
        },
        {
          heading: "Medical Family Office 的角色",
          body: "我们协助客户整理病历、翻译资料、明确问诊目标、匹配机构、安排预约，并在诊后管理下一步计划。"
        }
      ],
      ja: [
        {
          heading: "日本の医療資源は高度に専門化されています。",
          body: "大学病院、総合病院、専門病院、健診センター、クリニックなど役割が分かれています。すべての相談が大学病院に適しているわけではありません。"
        },
        {
          heading: "医療ナビゲーションが必要な理由",
          body: "海外クライアントは資料不足、相談目的の不明確さ、言語、予約期間、紹介ルールで困ることがあります。医学的に判断できる資料へ整理することが重要です。"
        },
        {
          heading: "Medical Family Office の役割",
          body: "病歴整理、資料翻訳、相談目的の明確化、医療機関選定、予約、診療後の次の計画を支援します。"
        }
      ],
      en: [
        {
          heading: "Japan's medical resources are highly specialized.",
          body: "University hospitals, general hospitals, specialty hospitals, screening centers, and private clinics play different roles. Not every request should go directly to a university hospital."
        },
        {
          heading: "Why medical navigation matters",
          body: "Cross-border clients often face incomplete documents, unclear questions, language barriers, uncertain appointment timing, and referral rules. Medical navigation turns concerns into physician-readable information."
        },
        {
          heading: "The role of Medical Family Office",
          body: "We organize records, translate documents, define consultation goals, match institutions, arrange appointments, and coordinate the next step after consultation."
        }
      ]
    }
  },
  {
    slug: "executive-health-management",
    category: "Executive Health",
    title: {
      zh: "什么是企业家健康管理？",
      ja: "エグゼクティブヘルスマネジメントとは",
      en: "What Is Executive Health Management?"
    },
    description: {
      zh: "企业家健康管理关注高压、睡眠、代谢、心脑血管风险、精力下降和长期决策能力，不是一次体检就结束。",
      ja: "経営者健康管理は、ストレス、睡眠、代謝、心血管リスク、活力、長期的な判断力を継続的に管理します。",
      en: "Executive health management addresses stress, sleep, metabolism, cardiovascular risk, energy, and long-term decision capacity."
    },
    sections: {
      zh: [
        {
          heading: "企业家的健康风险有特殊性",
          body: "企业家常见的问题不是单一疾病，而是长期高压、睡眠不足、应酬、飞行、饮食不规律和重大决策压力叠加。身体风险会逐渐影响精力、认知和经营判断。"
        },
        {
          heading: "管理重点",
          body: "企业家健康管理应当从年度体检升级为长期健康运营系统。",
          points: ["睡眠与恢复", "代谢和体重", "心脑血管风险", "炎症和免疫", "精力、认知与压力管理"]
        },
        {
          heading: "为什么要长期管理",
          body: "财富高峰往往出现在50岁以后，而身体风险也在同一阶段上升。真正重要的是让客户在未来10到30年保持高质量生活和稳定决策能力。"
        }
      ],
      ja: [
        {
          heading: "経営者の健康リスクには特徴があります。",
          body: "高ストレス、睡眠不足、会食、移動、不規則な食事、重要判断が重なり、体力、認知、経営判断に影響します。"
        },
        {
          heading: "管理領域",
          body: "年一回の健診ではなく、継続的な健康運営システムとして考える必要があります。",
          points: ["睡眠と回復", "代謝と体重", "心血管リスク", "炎症と免疫", "活力、認知、ストレス"]
        },
        {
          heading: "長期管理の理由",
          body: "50歳以降に事業と資産の重要局面を迎える一方で、健康リスクも上がります。10年から30年の生活の質と判断力を守ることが重要です。"
        }
      ],
      en: [
        {
          heading: "Executive health risk has a specific pattern.",
          body: "Long-term stress, poor sleep, business dining, travel, irregular nutrition, and decision pressure can compound over time and affect energy, cognition, and leadership judgment."
        },
        {
          heading: "Management priorities",
          body: "Executive health should move beyond an annual checkup into a long-term operating system.",
          points: ["Sleep and recovery", "Metabolism and weight", "Cardiovascular risk", "Inflammation and immunity", "Energy, cognition, and stress"]
        },
        {
          heading: "Why long-term management matters",
          body: "Many entrepreneurs reach peak influence after 50, while health risk rises in the same period. The goal is to preserve quality of life and decision capacity over the next 10 to 30 years."
        }
      ]
    }
  }
];

type SeoArticlePillar = {
  key: string;
  category: string;
  zh: string;
  ja: string;
  en: string;
  zhDescription: string;
  jaDescription: string;
  enDescription: string;
  zhFocus: string;
  jaFocus: string;
  enFocus: string;
  zhQuestions: string[];
  jaQuestions: string[];
  enQuestions: string[];
};

type SeoArticleAudience = {
  key: string;
  zh: string;
  ja: string;
  en: string;
  zhScenario: string;
  jaScenario: string;
  enScenario: string;
};

const seoArticlePillars: SeoArticlePillar[] = [
  {
    key: "annual-health-strategy",
    category: "Health Management",
    zh: "年度健康管理策略",
    ja: "年次健康管理戦略",
    en: "annual health management strategy",
    zhDescription: "从年度体检升级为可复盘的健康管理节奏，帮助家庭把检查、复查、生活方式和风险预案连接起来。",
    jaDescription: "年一回の健診を、検査、再確認、生活習慣、リスク対応まで含む継続的な健康管理へ発展させる考え方です。",
    enDescription: "A reviewable rhythm that connects checkups, follow-up, lifestyle work, and risk protocols beyond a one-time annual exam.",
    zhFocus: "重点不是一次性检查，而是年度目标、关键指标、异常追踪和家庭成员之间的优先级排序。",
    jaFocus: "重要なのは単発検査ではなく、年次目標、重要指標、異常値フォロー、家族内の優先順位です。",
    enFocus: "The priority is not one test package, but annual goals, key markers, abnormal result follow-up, and family-level prioritization.",
    zhQuestions: ["今年最需要排查的重大风险是什么", "哪些指标需要三到六个月复查", "家庭成员之间如何分层管理"],
    jaQuestions: ["今年確認すべき重大リスクは何か", "3か月から6か月で再確認すべき指標は何か", "家族メンバーをどう分類するか"],
    enQuestions: ["Which major risks deserve attention this year", "Which markers need review in three to six months", "How should family members be segmented"]
  },
  {
    key: "executive-stress-sleep",
    category: "Health Management",
    zh: "企业家压力与睡眠管理",
    ja: "経営者のストレスと睡眠管理",
    en: "executive stress and sleep management",
    zhDescription: "面向高压管理者，把睡眠、恢复、压力负荷、代谢和心血管风险放在同一个长期管理框架内。",
    jaDescription: "高ストレス環境の経営者に向けて、睡眠、回復、ストレス負荷、代謝、心血管リスクを一つの枠組みで捉えます。",
    enDescription: "A framework for high-pressure leaders that links sleep, recovery, stress load, metabolism, and cardiovascular risk.",
    zhFocus: "睡眠问题常常不是单一习惯问题，而是工作节奏、飞行、应酬、压力激素和恢复能力共同作用的结果。",
    jaFocus: "睡眠課題は単なる習慣ではなく、仕事リズム、移動、会食、ストレス反応、回復力が重なった結果です。",
    enFocus: "Sleep issues are often shaped by work rhythm, travel, business dining, stress response, and recovery capacity together.",
    zhQuestions: ["长期睡眠不足是否已经影响代谢和血压", "如何区分疲劳、焦虑和睡眠节律问题", "什么时候需要进一步医学评估"],
    jaQuestions: ["睡眠不足は代謝や血圧に影響しているか", "疲労、不安、睡眠リズム問題をどう分けるか", "いつ医学的評価が必要か"],
    enQuestions: ["Is poor sleep affecting metabolism or blood pressure", "How should fatigue, anxiety, and rhythm issues be separated", "When is medical review appropriate"]
  },
  {
    key: "metabolic-risk",
    category: "Health Management",
    zh: "代谢风险与体重管理",
    ja: "代謝リスクと体重管理",
    en: "metabolic risk and weight management",
    zhDescription: "围绕血糖、血脂、脂肪肝、体脂、肌肉量和生活方式，建立更适合企业家家庭的代谢管理路径。",
    jaDescription: "血糖、脂質、脂肪肝、体脂肪、筋肉量、生活習慣を軸に、経営者家族に合う代謝管理を考えます。",
    enDescription: "A practical pathway for glucose, lipids, fatty liver, body composition, muscle mass, and lifestyle management.",
    zhFocus: "代谢管理不能只看体重数字，也要看内脏脂肪、肌肉质量、炎症、用餐节奏和长期可执行性。",
    jaFocus: "代謝管理は体重だけでなく、内臓脂肪、筋肉量、炎症、食事リズム、継続可能性を見る必要があります。",
    enFocus: "Metabolic management should review visceral fat, muscle quality, inflammation, meal rhythm, and long-term feasibility, not only body weight.",
    zhQuestions: ["体重正常但代谢异常怎么办", "脂肪肝和血糖波动如何一起管理", "是否需要把营养、运动和医学复查放进同一计划"],
    jaQuestions: ["体重が正常でも代謝異常がある場合はどうするか", "脂肪肝と血糖変動をどう一緒に見るか", "栄養、運動、再検査を同じ計画に入れるべきか"],
    enQuestions: ["What if weight is normal but metabolic risk is rising", "How should fatty liver and glucose fluctuation be reviewed together", "Should nutrition, exercise, and medical review sit in one plan"]
  },
  {
    key: "cardiovascular-prevention",
    category: "Health Management",
    zh: "心脑血管风险预防",
    ja: "心血管・脳血管リスク予防",
    en: "cardiovascular and cerebrovascular prevention",
    zhDescription: "将血压、血脂、血糖、炎症、影像检查、家族史和生活压力整合进企业家长期风险管理。",
    jaDescription: "血圧、脂質、血糖、炎症、画像検査、家族歴、生活ストレスを長期リスク管理に統合します。",
    enDescription: "Integrating blood pressure, lipids, glucose, inflammation, imaging, family history, and stress into long-term risk management.",
    zhFocus: "高净值客户常常不是缺少检查，而是缺少对多个风险信号的整合判断和后续行动清单。",
    jaFocus: "富裕層クライアントに不足しがちなのは検査ではなく、複数のリスク信号を統合した判断と行動計画です。",
    enFocus: "The gap is often not lack of testing, but lack of integrated interpretation and a clear action list.",
    zhQuestions: ["哪些指标提示未来十年风险上升", "影像检查和血液指标如何互相印证", "异常结果需要怎样跟进"],
    jaQuestions: ["今後10年のリスク上昇を示す指標は何か", "画像検査と血液指標をどう照合するか", "異常結果をどうフォローするか"],
    enQuestions: ["Which markers suggest rising ten-year risk", "How should imaging and blood markers be read together", "How should abnormal findings be followed"]
  },
  {
    key: "cancer-screening-plan",
    category: "Health Management",
    zh: "肿瘤早筛与复查计划",
    ja: "がんスクリーニングと再検査計画",
    en: "cancer screening and follow-up planning",
    zhDescription: "从家族史、年龄、生活方式、既往检查和影像结果出发，建立更有重点的肿瘤筛查与复查节奏。",
    jaDescription: "家族歴、年齢、生活習慣、過去検査、画像結果から、重点を置いたがんスクリーニングと再確認を設計します。",
    enDescription: "A focused screening and follow-up rhythm based on family history, age, lifestyle, prior testing, and imaging results.",
    zhFocus: "肿瘤早筛不是项目越多越好，而是要避免漏掉高风险，也避免不必要的焦虑和重复检查。",
    jaFocus: "がんスクリーニングは項目数ではなく、高リスクを見落とさず、不要な不安や重複検査を避けることが重要です。",
    enFocus: "Cancer screening is not about adding more tests; it is about prioritizing risk while avoiding unnecessary anxiety and duplication.",
    zhQuestions: ["哪些筛查项目真正适合当前年龄和家族史", "检查发现小结节后如何安排复查", "如何保存影像资料用于长期比较"],
    jaQuestions: ["年齢と家族歴に合う検査は何か", "小結節が見つかった後どう再確認するか", "画像資料を長期比較にどう保存するか"],
    enQuestions: ["Which screenings fit age and family history", "How should small findings be followed", "How should imaging be stored for long-term comparison"]
  },
  {
    key: "premium-checkup-japan",
    category: "Premium Medical Access",
    zh: "日本高端精密体检",
    ja: "日本の高付加価値精密健診",
    en: "premium executive checkups in Japan",
    zhDescription: "理解日本高端体检的适配逻辑、预约流程、语言支持、报告解读和后续健康管理价值。",
    jaDescription: "日本の高付加価値健診について、適合性、予約、言語支援、結果理解、長期管理の価値を整理します。",
    enDescription: "Understanding fit, scheduling, language support, report interpretation, and long-term value in premium Japan checkups.",
    zhFocus: "真正重要的是检查目标是否清晰、机构是否适合、报告能否转化为长期行动，而不是套餐价格本身。",
    jaFocus: "重要なのは価格ではなく、検査目的、医療機関との適合性、結果を長期行動に変えることです。",
    enFocus: "The key is clarity of goals, institutional fit, and converting reports into long-term action, not package price alone.",
    zhQuestions: ["应该选择综合体检还是专科筛查", "报告异常项如何翻译和复盘", "赴日前需要准备哪些资料"],
    jaQuestions: ["総合健診か専門検査か", "異常項目をどう翻訳しレビューするか", "渡日前に何を準備するか"],
    enQuestions: ["Should the client choose a comprehensive or specialty checkup", "How should abnormal items be translated and reviewed", "What should be prepared before traveling"]
  },
  {
    key: "second-opinion",
    category: "Premium Medical Access",
    zh: "日本专家第二诊疗意见",
    ja: "日本専門医のセカンドオピニオン",
    en: "second opinions from Japanese specialists",
    zhDescription: "说明跨境第二诊疗意见适合哪些情况，以及如何整理资料、提出问题并理解医生意见边界。",
    jaDescription: "国際的なセカンドオピニオンが適する場面、資料整理、質問設計、医師意見の境界を説明します。",
    enDescription: "When cross-border second opinions fit, how to organize records, design questions, and understand the limits of specialist advice.",
    zhFocus: "第二意见的价值在于帮助客户理解选择，而不是替代主治医生或承诺某一种治疗结果。",
    jaFocus: "セカンドオピニオンの価値は選択肢を理解することであり、主治医の代替や結果保証ではありません。",
    enFocus: "A second opinion helps clarify options; it does not replace the treating physician or guarantee outcomes.",
    zhQuestions: ["哪些病历和影像必须提前准备", "如何把担忧转化为医生可判断的问题", "意见不一致时如何决策"],
    jaQuestions: ["どの資料と画像が必要か", "不安を医師が判断できる質問にどう変えるか", "意見が異なる時どう判断するか"],
    enQuestions: ["Which records and imaging are required", "How can concerns become physician-readable questions", "How should conflicting opinions be handled"]
  },
  {
    key: "private-medical-concierge",
    category: "Premium Medical Access",
    zh: "私人医疗礼宾服务",
    ja: "プライベート医療コンシェルジュ",
    en: "private medical concierge service",
    zhDescription: "围绕预约、翻译、陪同、接送、隐私和诊后资料管理，梳理高端医疗礼宾的真实价值。",
    jaDescription: "予約、通訳、同行、送迎、秘匿性、診療後資料管理を軸に、医療コンシェルジュの価値を整理します。",
    enDescription: "The value of medical concierge work across scheduling, interpretation, escort, transfer, privacy, and post-visit records.",
    zhFocus: "高端医疗礼宾不是豪华包装，而是让复杂医疗旅程更准时、更安静、更可记录和可追踪。",
    jaFocus: "医療コンシェルジュは豪華さではなく、複雑な医療行程を正確で静かに、記録可能にすることです。",
    enFocus: "Medical concierge is not luxury packaging; it makes complex medical journeys punctual, discreet, documented, and traceable.",
    zhQuestions: ["谁负责现场沟通和时间管理", "隐私资料如何传递和保存", "诊后报告如何进入长期档案"],
    jaQuestions: ["現地コミュニケーションと時間管理は誰が担うか", "秘匿資料をどう扱うか", "診療後資料をどう長期記録に入れるか"],
    enQuestions: ["Who manages on-site communication and timing", "How are private records handled", "How do post-visit reports enter long-term files"]
  },
  {
    key: "global-referral",
    category: "Premium Medical Access",
    zh: "全球医疗转诊路径",
    ja: "国際医療紹介ルート",
    en: "global medical referral pathways",
    zhDescription: "帮助家庭理解日本、新加坡、瑞士、美国等不同医疗资源如何按病种、时效和风险边界进行匹配。",
    jaDescription: "日本、シンガポール、スイス、米国などの医療資源を疾患、時期、リスク境界に応じて理解します。",
    enDescription: "How medical resources in Japan, Singapore, Switzerland, and the United States can be matched by condition, timing, and risk boundaries.",
    zhFocus: "跨境医疗的难点不是国家越多越好，而是把具体问题放到最合适的专科、机构和时间窗口。",
    jaFocus: "国際医療の重要点は国数ではなく、具体的課題を適切な専門領域、機関、時期に置くことです。",
    enFocus: "Global access is not about more countries; it is about matching the right specialty, institution, and timing.",
    zhQuestions: ["当前问题是否适合跨境转诊", "日本与其他国家资源如何分工", "转诊前资料如何标准化"],
    jaQuestions: ["現在の課題は国際紹介に適しているか", "日本と他国の資源をどう分けるか", "紹介前資料をどう標準化するか"],
    enQuestions: ["Is the request suitable for cross-border referral", "How should Japan and other markets be differentiated", "How should records be standardized before referral"]
  },
  {
    key: "medical-privacy",
    category: "Premium Medical Access",
    zh: "高净值医疗隐私管理",
    ja: "富裕層の医療プライバシー管理",
    en: "medical privacy management for high-net-worth families",
    zhDescription: "围绕敏感病历、家庭成员授权、跨境资料传输、现场陪同和长期档案，建立更稳妥的隐私流程。",
    jaDescription: "機微な医療記録、家族同意、国際資料共有、現地同行、長期記録を含む秘匿性管理を扱います。",
    enDescription: "Privacy workflows for sensitive records, family authorization, cross-border document transfer, on-site escort, and long-term archives.",
    zhFocus: "医疗隐私需要流程设计，而不是只靠口头保密；资料最小化、授权边界和访问记录都很重要。",
    jaFocus: "医療プライバシーは口頭の秘密保持だけでなく、資料最小化、同意範囲、アクセス記録が重要です。",
    enFocus: "Medical privacy requires process design, including data minimization, authorization boundaries, and access records.",
    zhQuestions: ["谁可以查看家庭成员病历", "跨境发送资料前如何脱敏", "长期健康档案如何分级管理"],
    jaQuestions: ["誰が家族の医療記録を見られるか", "国際共有前にどう情報を最小化するか", "長期記録をどう分類管理するか"],
    enQuestions: ["Who can access family medical records", "How should information be minimized before transfer", "How should long-term archives be segmented"]
  },
  {
    key: "longevity-baseline",
    category: "Longevity Management",
    zh: "长寿管理基线评估",
    ja: "長寿管理のベースライン評価",
    en: "longevity baseline assessment",
    zhDescription: "从生物年龄、代谢、炎症、体能、睡眠、认知和家族史建立长寿管理的第一张基线图。",
    jaDescription: "生物学的年齢、代謝、炎症、体力、睡眠、認知、家族歴から長寿管理の基準線を作ります。",
    enDescription: "Building the first longevity baseline across biological age, metabolism, inflammation, fitness, sleep, cognition, and family history.",
    zhFocus: "基线评估不是为了追求单一数字，而是为了知道未来一年最值得优化和复查的方向。",
    jaFocus: "ベースライン評価は一つの数値を追うためではなく、次の一年で優先すべき改善と再確認を知るためです。",
    enFocus: "A baseline is not about chasing one number; it identifies the most useful priorities for the next year.",
    zhQuestions: ["哪些指标能代表当前健康寿命状态", "如何避免过度解读生物年龄", "基线之后何时复查"],
    jaQuestions: ["健康寿命の状態を示す指標は何か", "生物学的年齢を過度に解釈しないには", "基準線後いつ再確認するか"],
    enQuestions: ["Which markers reflect current healthspan", "How can biological age be interpreted cautiously", "When should the baseline be reviewed"]
  },
  {
    key: "biological-age",
    category: "Longevity Management",
    zh: "生物年龄检测解读",
    ja: "生物学的年齢検査の理解",
    en: "biological age testing interpretation",
    zhDescription: "解释生物年龄检测能提供什么参考、不能说明什么，以及如何与传统体检和生活方式管理结合。",
    jaDescription: "生物学的年齢検査が示す参考情報、限界、一般健診や生活習慣管理との組み合わせを整理します。",
    enDescription: "What biological age testing can and cannot indicate, and how it connects with conventional checkups and lifestyle management.",
    zhFocus: "生物年龄适合作为趋势参考，不适合被包装成单次判断健康好坏或治疗效果的绝对指标。",
    jaFocus: "生物学的年齢は傾向を見る参考であり、単発で健康状態や治療効果を断定する指標ではありません。",
    enFocus: "Biological age is best treated as a trend reference, not an absolute judgment of health or treatment effect.",
    zhQuestions: ["不同检测方法为什么结果不同", "检测结果如何和体检指标一起看", "改善后多久复测更合理"],
    jaQuestions: ["検査方法により結果が違う理由は何か", "健診指標とどう一緒に見るか", "改善後いつ再検査するか"],
    enQuestions: ["Why do methods produce different results", "How should results be read with checkup markers", "When does retesting make sense"]
  },
  {
    key: "healthy-aging-plan",
    category: "Longevity Management",
    zh: "健康老龄化规划",
    ja: "健康的な加齢計画",
    en: "healthy aging planning",
    zhDescription: "围绕行动力、肌肉量、认知、社交、慢病风险和生活质量，让长寿管理回到可执行的家庭计划。",
    jaDescription: "移動能力、筋肉量、認知、社会性、慢性疾患リスク、生活の質を中心に実行可能な家族計画へ落とし込みます。",
    enDescription: "A practical family plan around mobility, muscle mass, cognition, social life, chronic risk, and quality of life.",
    zhFocus: "健康老龄化的目标不是只延长年龄，而是尽量延长能独立生活、参与家庭和保持判断力的时间。",
    jaFocus: "健康的な加齢の目標は年齢だけでなく、自立、家族参加、判断力を保つ時間を延ばすことです。",
    enFocus: "Healthy aging is about preserving independence, family participation, and judgment, not only adding years.",
    zhQuestions: ["哪些能力最早影响生活质量", "肌肉和认知如何同步管理", "家庭如何设置年度支持计划"],
    jaQuestions: ["生活の質に最初に影響する能力は何か", "筋肉と認知をどう一緒に管理するか", "家族は年次支援をどう設計するか"],
    enQuestions: ["Which abilities affect quality of life first", "How should muscle and cognition be managed together", "How can families design annual support"]
  },
  {
    key: "regenerative-due-diligence",
    category: "Longevity Management",
    zh: "再生医疗项目尽调",
    ja: "再生医療プログラムの確認",
    en: "regenerative medicine due diligence",
    zhDescription: "从机构资质、医生背景、合规文件、适应范围、风险说明和随访机制审慎理解再生医疗项目。",
    jaDescription: "医療機関、医師背景、法令関連文書、適応範囲、リスク説明、フォロー体制から再生医療を確認します。",
    enDescription: "Reviewing regenerative medicine through institution credentials, physician background, documentation, scope, risk disclosure, and follow-up.",
    zhFocus: "再生医疗相关内容必须避免效果承诺，重点应放在合规性、适配度、风险披露和长期记录。",
    jaFocus: "再生医療では効果保証を避け、法令遵守、適合性、リスク説明、長期記録を重視します。",
    enFocus: "Regenerative medicine content should avoid outcome promises and focus on compliance, fit, risk disclosure, and records.",
    zhQuestions: ["项目是否有明确适应范围", "医生和机构资料如何核验", "术后不适或异常如何处理"],
    jaQuestions: ["プログラムの適応範囲は明確か", "医師と機関情報をどう確認するか", "実施後の不調や異常にどう対応するか"],
    enQuestions: ["Does the program have a clear scope", "How are physician and institution credentials checked", "How are post-program concerns handled"]
  },
  {
    key: "family-health-governance",
    category: "Longevity Management",
    zh: "家族健康治理体系",
    ja: "家族健康ガバナンス",
    en: "family health governance",
    zhDescription: "像管理资产一样管理家庭健康风险：档案、预算、授权、重大疾病预案和年度健康董事会共同构成治理系统。",
    jaDescription: "資産管理のように、記録、予算、同意、重大疾患対応、年次レビューで家族の健康リスクを管理します。",
    enDescription: "Managing family health risk like an asset system: archives, budgets, authorization, critical illness protocols, and annual reviews.",
    zhFocus: "家族健康治理让健康决策不再临时化，尤其适合多代家庭、企业家家庭和跨境生活家庭。",
    jaFocus: "家族健康ガバナンスは健康判断を場当たり的にせず、多世代家族、経営者家族、国際生活者に適しています。",
    enFocus: "Family health governance turns reactive decisions into a system, especially for multi-generation and cross-border families.",
    zhQuestions: ["家庭健康档案应包含哪些资料", "重大疾病发生前如何做预案", "谁负责年度复盘和行动追踪"],
    jaQuestions: ["家族健康記録に何を含めるか", "重大疾患前にどう準備するか", "年次レビューと行動追跡を誰が担うか"],
    enQuestions: ["What belongs in a family health archive", "How should critical illness readiness be planned", "Who owns annual review and follow-up"]
  }
];

const seoArticleAudiences: SeoArticleAudience[] = [
  {
    key: "entrepreneurs",
    zh: "企业家",
    ja: "経営者",
    en: "entrepreneurs",
    zhScenario: "长期高压、频繁出差、重大决策密集，是最需要把健康管理系统化的人群。",
    jaScenario: "高ストレス、頻繁な移動、重要判断が多く、健康管理を仕組み化する必要があります。",
    enScenario: "High pressure, frequent travel, and repeated major decisions make systematic health management especially important."
  },
  {
    key: "founders-over-50",
    zh: "50岁以上创始人",
    ja: "50歳以上の創業者",
    en: "founders over 50",
    zhScenario: "事业和财富进入关键阶段时，心脑血管、代谢、肿瘤筛查和精力管理都需要更清晰的节奏。",
    jaScenario: "事業と資産が重要局面に入る時期には、心血管、代謝、がん検査、活力管理の設計が重要です。",
    enScenario: "As business and wealth decisions intensify, cardiovascular, metabolic, cancer screening, and energy planning need a clearer rhythm."
  },
  {
    key: "high-net-worth-families",
    zh: "高净值家庭",
    ja: "富裕層ファミリー",
    en: "high-net-worth families",
    zhScenario: "家庭成员年龄、疾病风险和隐私需求不同，适合用分层方式建立长期健康档案。",
    jaScenario: "家族メンバーの年齢、疾患リスク、秘匿性ニーズが異なるため、分類された長期記録が役立ちます。",
    enScenario: "Different ages, risks, and privacy needs make segmented long-term health archives valuable."
  },
  {
    key: "family-office-clients",
    zh: "家族办公室客户",
    ja: "ファミリーオフィスクライアント",
    en: "family office clients",
    zhScenario: "健康风险会影响传承、时间安排和重大事务连续性，应进入家族治理框架。",
    jaScenario: "健康リスクは承継、時間配分、重要事項の継続性に影響するため、家族ガバナンスに入れるべきです。",
    enScenario: "Health risk affects succession, time allocation, and continuity, so it belongs inside family governance."
  },
  {
    key: "frequent-travelers",
    zh: "频繁跨境出行人群",
    ja: "海外移動が多い方",
    en: "frequent cross-border travelers",
    zhScenario: "跨时区、饮食变化和医疗体系差异，会让体检、复查和资料管理更容易断档。",
    jaScenario: "時差、食事変化、医療制度の違いにより、検査、再確認、資料管理が途切れやすくなります。",
    enScenario: "Time zones, diet changes, and different medical systems can interrupt testing, follow-up, and record management."
  },
  {
    key: "private-bank-clients",
    zh: "私人银行客户",
    ja: "プライベートバンク顧客",
    en: "private banking clients",
    zhScenario: "资产管理之外，健康寿命、隐私和重大疾病预案也逐渐成为家庭长期规划的一部分。",
    jaScenario: "資産管理に加え、健康寿命、秘匿性、重大疾患対応も長期計画の一部になります。",
    enScenario: "Beyond asset management, healthspan, privacy, and critical illness readiness become part of long-term planning."
  },
  {
    key: "parents-and-elders",
    zh: "父母与长辈",
    ja: "親世代・シニア家族",
    en: "parents and elder family members",
    zhScenario: "慢病、行动力、认知、用药和复查安排，需要从子女临时协调升级为家庭健康系统。",
    jaScenario: "慢性疾患、移動能力、認知、服薬、再検査を、子世代の一時対応から家族システムへ移す必要があります。",
    enScenario: "Chronic disease, mobility, cognition, medication, and follow-up should move from ad hoc support to a family system."
  },
  {
    key: "next-generation",
    zh: "下一代家庭成员",
    ja: "次世代メンバー",
    en: "next-generation family members",
    zhScenario: "年轻成员需要建立健康意识、心理压力管理、运动营养习惯和基础体检档案。",
    jaScenario: "若い世代には健康意識、ストレス管理、運動栄養習慣、基本的な健康記録が必要です。",
    enScenario: "Younger members benefit from health literacy, stress management, exercise and nutrition habits, and baseline records."
  },
  {
    key: "japan-care-seekers",
    zh: "计划赴日医疗客户",
    ja: "訪日医療を検討する方",
    en: "clients considering medical care in Japan",
    zhScenario: "在赴日前先明确目标、资料、语言、预算、隐私和后续复查安排，能显著降低决策混乱。",
    jaScenario: "渡日前に目的、資料、言語、予算、秘匿性、再確認を整理することで混乱を減らせます。",
    enScenario: "Clarifying goals, records, language, budget, privacy, and follow-up before travel reduces confusion."
  },
  {
    key: "longevity-members",
    zh: "长寿管理会员",
    ja: "長寿管理会員",
    en: "longevity membership clients",
    zhScenario: "长寿管理需要持续复盘，不适合只靠单次项目或单一检测来判断长期健康状态。",
    jaScenario: "長寿管理には継続レビューが必要で、単発プログラムや単一検査だけでは不十分です。",
    enScenario: "Longevity management requires ongoing review, not one-off programs or a single test result."
  }
];

function createSeoArticle(pillar: SeoArticlePillar, audience: SeoArticleAudience): KnowledgeArticle {
  const zhTitle = `${audience.zh}${pillar.zh}指南`;
  const jaTitle = `${audience.ja}向け${pillar.ja}ガイド`;
  const enTitle = `${pillar.en.charAt(0).toUpperCase()}${pillar.en.slice(1)} for ${audience.en}`;

  return {
    slug: `${pillar.key}-for-${audience.key}`,
    category: pillar.category,
    title: {
      zh: zhTitle,
      ja: jaTitle,
      en: enTitle
    },
    description: {
      zh: `${pillar.zhDescription}${audience.zh}的典型场景是：${audience.zhScenario}`,
      ja: `${pillar.jaDescription}${audience.ja}の場合、${audience.jaScenario}`,
      en: `${pillar.enDescription} For ${audience.en}, ${audience.enScenario.charAt(0).toLowerCase()}${audience.enScenario.slice(1)}`
    },
    sections: {
      zh: [
        {
          heading: `${audience.zh}为什么需要关注${pillar.zh}`,
          body: `${audience.zhScenario}${pillar.zhFocus} 对高净值家庭而言，医疗与健康管理的价值在于把零散检查、医生意见和生活方式调整变成可以持续复盘的决策系统。`
        },
        {
          heading: "决策前应先问清楚的问题",
          body: "在进入具体检查、医生沟通或跨境安排前，先把问题定义清楚，能减少重复检查、无效奔波和不必要的焦虑。",
          points: pillar.zhQuestions
        },
        {
          heading: "Medical Family Office 如何协助",
          body: "我们会先整理既往资料、确认目标和风险边界，再协助匹配合适的检查、专家资源、语言支持、赴日或跨境协调，并把结果纳入长期家庭健康档案。"
        },
        {
          heading: "合规与医学边界",
          body: "本文仅用于健康管理教育和决策参考，不构成诊断、治疗建议或效果承诺。涉及具体疾病、用药、治疗或检查安排时，应以持证医生的面对面评估和医疗机构规则为准。"
        }
      ],
      ja: [
        {
          heading: `${audience.ja}が${pillar.ja}を考える理由`,
          body: `${audience.jaScenario}${pillar.jaFocus} 富裕層ファミリーにとって重要なのは、検査、医師意見、生活改善を継続的に見直せる意思決定システムへ変えることです。`
        },
        {
          heading: "判断前に確認すべき質問",
          body: "検査、医師相談、国際医療調整に進む前に課題を明確にすると、重複検査や不要な不安を減らせます。",
          points: pillar.jaQuestions
        },
        {
          heading: "Medical Family Office の支援",
          body: "既往資料の整理、目的とリスク境界の確認、検査・専門医資源・言語支援・訪日または国際調整を行い、結果を長期的な家族健康記録へつなげます。"
        },
        {
          heading: "医療上の境界",
          body: "本記事は健康管理に関する教育と判断材料であり、診断、治療助言、効果保証ではありません。具体的な疾患、薬剤、治療、検査は医師評価と医療機関の規定に従う必要があります。"
        }
      ],
      en: [
        {
          heading: `Why ${audience.en} should review ${pillar.en}`,
          body: `${audience.enScenario} ${pillar.enFocus} For high-net-worth families, the value is turning scattered tests, physician comments, and lifestyle work into a reviewable decision system.`
        },
        {
          heading: "Questions before making decisions",
          body: "Before moving into tests, specialist conversations, or cross-border coordination, clear questions reduce duplicated work, avoidable travel, and unnecessary anxiety.",
          points: pillar.enQuestions
        },
        {
          heading: "How Medical Family Office supports",
          body: "We organize prior records, clarify goals and risk boundaries, coordinate appropriate testing, specialist resources, language support, Japan or cross-border logistics, and convert results into long-term family health archives."
        },
        {
          heading: "Medical and compliance boundary",
          body: "This article is for health management education and decision support only. It does not provide diagnosis, treatment advice, or outcome guarantees. Specific diseases, medications, treatments, or tests require physician assessment and institution rules."
        }
      ]
    }
  };
}

const activeSeoArticlePillarKeys = [
  "annual-health-strategy",
  "executive-stress-sleep",
  "metabolic-risk",
  "cardiovascular-prevention",
  "premium-checkup-japan",
  "second-opinion",
  "private-medical-concierge",
  "longevity-baseline",
  "biological-age",
  "family-health-governance"
];

const activeSeoArticlePillars = seoArticlePillars.filter((pillar) =>
  activeSeoArticlePillarKeys.includes(pillar.key)
);

export const seoKnowledgeArticles: KnowledgeArticle[] = activeSeoArticlePillars.flatMap((pillar) =>
  seoArticleAudiences.map((audience) => createSeoArticle(pillar, audience))
);

export const knowledgeArticles: KnowledgeArticle[] = [
  ...baseKnowledgeArticles,
  ...seoKnowledgeArticles
];

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}
