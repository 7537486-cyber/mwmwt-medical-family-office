import type { Language } from "@/lib/site";

export type KnowledgeArticle = {
  slug: string;
  category: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  sections: Record<Language, Array<{ heading: string; body: string; points?: string[] }>>;
};

export const knowledgeArticles: KnowledgeArticle[] = [
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

export function getKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}
