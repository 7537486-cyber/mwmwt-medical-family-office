import Image from "next/image";
import Link from "next/link";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, withLanguage } from "@/lib/site";

const homeCopy = {
  zh: {
    heroTitle: "Medical Family Office",
    heroAudience: "为企业家家庭提供长期医疗资源管理、长寿规划与日本高端医疗通道",
    intro:
      "我们专注于为企业家、家族客户与高净值人群，建立长期、系统、全球化的健康管理体系。",
    risk: "不是一次治疗，而是一套长期健康资产管理系统。核心价值是风险管理、长期健康决策权与全球医疗资源配置能力。",
    promise: "我们不承诺永生。我们帮助您更长时间保持健康。",
    wealth: "财富管理的是资产，Medical Family Office 管理的是人生。",
    healthspan:
      "客户真正购买的不是一次治疗，而是尽可能多获得高质量人生：更长时间保持行动力、判断力、独立生活能力与家庭参与感。",
    inquiry: "预约私密咨询",
    learn: "了解会员体系",
    whatBody:
      "MWMWT 以医疗家族办公室的方式，把长寿医学、再生医疗、企业家健康管理和全球医疗资源整合为长期顾问关系。",
    whyBody:
      "客户选择我们的原因，是能在重大健康选择前获得更完整的信息、更安静的隐私保护和更长期的医学陪伴。",
    knowledgeBody:
      "知识中心用于帮助客户理解医学趋势、风险边界、检测逻辑和长期健康决策，而不是替代医生诊断或治疗建议。",
    boardBody:
      "医疗顾问资源以公开资料核验、专科能力、研究方向和适配场景进行整理，实际转诊前仍需确认医生接诊规则与机构准入要求。",
    membershipBody:
      "会员体系围绕年度健康策略、专家资源协调、风险预案与家族健康档案，为创始人、企业家和家族成员建立长期健康伙伴关系。",
    whatTitle: "四大核心板块构成长期健康资产管理系统。",
    whyTitle: "为家族最重要的资产建立健康风险管理。",
    governanceTitle: "我们不提供医疗服务，我们代表客户做医疗尽调与长期治理。",
    governanceIntro:
      "我们代表客户，严格筛选全球优质医疗资源，建立从机构审核、医生评估、治疗协调到长期随访的完整医疗治理体系。",
    governanceMission:
      "Medical Family Office 的使命，不是安排一次治疗，而是守护客户及其家庭未来数十年的健康寿命。",
    platformTitle: "从医疗治理、医生资源到知识研究，建立长期健康决策基础。",
    platformBody:
      "我们以医疗家族办公室的方式整合专业资源、风险评估、知识研究与长期随访，帮助家族更冷静地面对未来健康选择。",
    advisoryTitle: "跨境医疗资源进入前，需要先建立专家判断。",
    doctorSpecialtyLabel: "专家资料",
    membershipNote:
      "年度健康策略、专家资源、风险预案、跨境协调与家族健康档案共同构成会员价值。"
  },
  ja: {
    heroTitle: "Medical Family Office",
    heroAudience: "起業家ファミリーのための長期医療資源管理、長寿設計、日本高度医療アクセス",
    intro:
      "起業家、家族、超富裕層クライアントのために、長期的な健康意思決定システムを構築します。高度健診、長寿医療、再生医療、国際紹介、家族健康ガバナンスを一つの顧問体制に統合します。",
    risk: "重要なのは単発受診ではなく、長期的な健康意思決定権、リスク管理、国際医療資源への管理されたアクセスです。",
    promise: "私たちは不老不死を約束しません。より長く健康でいられる状態を支援します。",
    wealth: "資産はウェルスマネジメントが管理し、Medical Family Office は人生を支える健康寿命を管理します。",
    healthspan:
      "クライアントが求めているのは単発の治療ではなく、行動力、判断力、自立した生活、家族との時間をできるだけ長く保つための高品質な人生時間です。",
    inquiry: "プライベート相談",
    learn: "会員制度を見る",
    whatBody:
      "国際的な高度医療・長寿医療機関の資源統合モデルを参考に、検査、専門医、長期フォロー、国際調整を継続的な関係として設計します。",
    whyBody:
      "重大な健康判断の前に、より完全な情報、静かな秘匿性、長期的な医療伴走を得られることが選ばれる理由です。",
    knowledgeBody:
      "ナレッジセンターでは、起業家とファミリーオフィス向けに医療リスク管理、長寿設計、訪日医療、卵子凍結、再生医療の記事を継続的に公開します。",
    boardBody:
      "医療顧問リソースは公開資料、専門性、研究領域、適応シーンを基に整理し、実際の紹介前には接診条件と医療機関規定を確認します。",
    membershipBody:
      "会員制度は単発の健診や治療手配ではなく、創業者、経営者、家族のための長期的な健康パートナーシップとして設計します。",
    whatTitle: "四つの中核領域が、長期的な健康資産管理を構成します。",
    whyTitle: "家族にとって最も重要な資産である健康を、リスク管理の視点で支えます。",
    governanceTitle: "当社は医療行為を提供せず、顧客の立場で医療デューデリジェンスと長期管理を行います。",
    governanceIntro:
      "顧客の代理として世界の優れた医療資源を慎重に確認し、医療機関審査、医師評価、治療調整、長期フォローまでの医療ガバナンスを設計します。",
    governanceMission:
      "Medical Family Office の使命は単発の治療手配ではなく、顧客と家族の今後数十年の健康寿命を守ることです。",
    platformTitle: "医療ガバナンス、医師資源、知識研究を長期判断の基盤にします。",
    platformBody:
      "医療ファミリーオフィスとして、専門資源、リスク評価、知識研究、長期フォローを統合し、家族が将来の健康判断に落ち着いて向き合えるよう支援します。",
    advisoryTitle: "国際医療資源に進む前に、専門家の判断基盤を整えます。",
    doctorSpecialtyLabel: "専門医プロフィール",
    membershipNote:
      "年次健康戦略、専門医資源、リスク対応、国際調整、家族健康記録が会員価値を構成します。"
  },
  en: {
    heroTitle: "Medical Family Office",
    heroAudience: "Long-term medical resource management, longevity planning, and Japan premium medical access for entrepreneurial families",
    intro:
      "We build a long-term health decision system for entrepreneurs, families, and UHNW clients by integrating executive health, longevity medicine, regenerative medicine, global referrals, and family health governance.",
    risk:
      "The core value is not a single appointment. It is risk management, long-term health decision rights, and controlled access to global medical resources.",
    promise: "We do not promise immortality. We help you stay healthy longer.",
    wealth: "Wealth management protects assets. A Medical Family Office protects the healthspan behind a life.",
    healthspan:
      "Clients are not buying a single treatment. They are seeking more high-quality years: mobility, judgment, independence, family time, and the ability to keep making long-term decisions.",
    inquiry: "Book Private Inquiry",
    learn: "View Membership",
    whatBody:
      "Inspired by leading longevity and academic medical resource models, we integrate diagnostics, specialists, follow-up, and cross-border coordination into one continuous advisory relationship.",
    whyBody:
      "Clients choose us because major health decisions require better information, complete privacy, and a long-term medical team that stays with the family.",
    knowledgeBody:
      "The Knowledge Center helps clients understand medical trends, risk boundaries, testing logic, and long-term health decisions. It does not replace physician diagnosis or treatment advice.",
    boardBody:
      "Medical advisory resources are organized by public profile verification, specialty capability, research direction, and appropriate case scenarios. Actual referrals require current institution and physician confirmation.",
    membershipBody:
      "Membership is not built around a one-time checkup or procedure. It is a long-term health partnership for founders, executives, and family members.",
    whatTitle: "Four core pillars form a long-term health asset management system.",
    whyTitle: "Risk management for the family's most important asset: health.",
    governanceTitle: "We do not provide medical services. We represent clients through medical due diligence and long-term governance.",
    governanceIntro:
      "We screen global medical resources on behalf of clients and build a governance system from institution review and physician assessment to treatment coordination and long-term follow-up.",
    governanceMission:
      "The mission of a Medical Family Office is not to arrange a single procedure. It is to protect the healthspan of clients and families for decades ahead.",
    platformTitle: "Medical governance, physician resources, and research intelligence form the foundation for long-term health decisions.",
    platformBody:
      "As a Medical Family Office, we integrate professional resources, risk review, research intelligence, and follow-up so families can approach future health choices with clarity.",
    advisoryTitle: "Specialist intelligence before cross-border medical access.",
    doctorSpecialtyLabel: "Specialist Profile",
    membershipNote:
      "Annual health strategy, specialist resources, risk protocols, cross-border coordination, and family health records form the value of membership."
  }
};

const sectionCopy = {
  zh: {
    what: "核心服务",
    healthspan: "健康寿命价值观",
    why: "客户为什么选择我们",
    governance: "医疗治理体系",
    knowledge: "知识中心",
    knowledgeTitle: "用于长期健康决策的医学知识体系。",
    knowledgeCta: "进入知识中心",
    platform: "平台架构",
    advisory: "医学顾问资源",
    membership: "会员体系",
    membershipTitle: "为家族长期运行的私人健康办公室。"
  },
  ja: {
    what: "中核サービス",
    healthspan: "健康寿命の価値観",
    why: "選ばれる理由",
    governance: "医療ガバナンス",
    knowledge: "ナレッジセンター",
    knowledgeTitle: "長期的な健康判断を支える医療知識体系。",
    knowledgeCta: "ナレッジセンターを見る",
    platform: "プラットフォーム構造",
    advisory: "医療アドバイザリー",
    membership: "会員制度",
    membershipTitle: "家族のために長期稼働するプライベート健康オフィス。"
  },
  en: {
    what: "What We Do",
    healthspan: "Healthspan Philosophy",
    why: "Why Clients Choose Us",
    governance: "Medical Governance Framework",
    knowledge: "Knowledge Center",
    knowledgeTitle: "Medical intelligence for better long-term health decisions.",
    knowledgeCta: "Explore Knowledge Center",
    platform: "Platform Architecture",
    advisory: "Medical Advisory Board",
    membership: "Membership",
    membershipTitle: "Membership is the long-term health office behind the family."
  }
};

const healthspanPoints = {
  zh: ["延缓功能衰退", "降低重大疾病风险", "延长健康寿命 Healthspan", "长期健康决策权"],
  ja: ["機能低下を遅らせる", "重大疾患リスクを下げる", "健康寿命 Healthspan を延ばす", "長期的な健康意思決定権"],
  en: [
    "Slow functional decline",
    "Reduce major disease risk",
    "Extend healthspan",
    "Long-term health decision rights"
  ]
};

const whatWeDo = {
  zh: [
    {
      title: "Longevity Medicine",
      label: "长寿医学",
      body: "以健康寿命为目标，围绕生物年龄、慢病风险、睡眠、代谢、炎症、认知功能与衰老速度，建立长期健康规划。",
      href: "/longevity-planning"
    },
    {
      title: "Regenerative Medicine",
      label: "再生医疗",
      body: "整合日本及全球合规再生医疗资源，包括干细胞、外泌体、免疫调节与组织修复相关方案，强调安全性、合规性与医学评估。",
      href: "/regenerative-medicine"
    },
    {
      title: "Executive Health",
      label: "企业家健康管理",
      body: "专为企业家与核心决策者设计，关注高压、过劳、睡眠不足、代谢紊乱、心脑血管风险与精力下降等问题。",
      href: "/executive-health"
    },
    {
      title: "Global Medical Access",
      label: "全球医疗资源",
      body: "连接日本、新加坡、瑞士、美国等优质医疗资源，提供专家会诊、海外转诊、第二诊疗意见、私密医疗安排与长期随访。",
      href: "/global-medical-access"
    }
  ],
  ja: [
    {
      title: "Longevity Medicine",
      label: "長寿医学",
      body: "健康寿命を目標に、生物学的年齢、慢性疾患リスク、睡眠、代謝、炎症、認知機能、老化速度を長期的に把握します。",
      href: "/longevity-planning"
    },
    {
      title: "Regenerative Medicine",
      label: "再生医療",
      body: "日本および海外の規制に沿った再生医療資源を確認し、安全性、適応、医学的評価を重視します。",
      href: "/regenerative-medicine"
    },
    {
      title: "Executive Health",
      label: "経営者健康管理",
      body: "高ストレス、過労、睡眠不足、代謝異常、心血管リスク、活力低下を抱える経営者のために設計します。",
      href: "/executive-health"
    },
    {
      title: "Global Medical Access",
      label: "グローバル医療アクセス",
      body: "日本、シンガポール、スイス、米国などの医療資源へ、専門医相談、紹介、セカンドオピニオン、長期フォローを調整します。",
      href: "/global-medical-access"
    }
  ],
  en: [
    {
      title: "Longevity Medicine",
      label: "Healthspan planning",
      body: "Long-term planning around biological age, chronic disease risk, sleep, metabolism, inflammation, cognition, and pace of aging.",
      href: "/longevity-planning"
    },
    {
      title: "Regenerative Medicine",
      label: "Regulated access",
      body: "Access to compliant regenerative medicine resources in Japan and globally, with attention to safety, eligibility, and medical review.",
      href: "/regenerative-medicine"
    },
    {
      title: "Executive Health",
      label: "Founder and decision-maker health",
      body: "Designed for high-pressure executives facing fatigue, sleep debt, metabolic disruption, cardiovascular risk, and declining energy.",
      href: "/executive-health"
    },
    {
      title: "Global Medical Access",
      label: "Cross-border medical resources",
      body: "Specialist consultations, referrals, second opinions, private medical arrangements, and follow-up across Japan, Singapore, Switzerland, and the United States.",
      href: "/global-medical-access"
    }
  ]
};

const whyClientsChooseUs = {
  zh: ["医疗资源获取", "医疗决策顾问", "隐私保护", "时间效率", "风险控制"],
  ja: ["医療資源へのアクセス", "医療判断の支援", "プライバシー保護", "時間効率", "リスク管理"],
  en: ["Resource Access", "Medical Navigation", "Privacy", "Time Efficiency", "Risk Control"]
};

const governanceLayers = {
  zh: [
    {
      title: "Medical Compliance",
      label: "严格监管",
      body: "坚持只合作合法合规机构，并围绕日本厚生劳动省相关监管框架与机构规则进行审慎确认。",
      items: ["医疗机构资质", "医师执照", "学会认证资格", "再生医疗备案情况", "医疗责任保险"]
    },
    {
      title: "Physician Excellence Program",
      label: "医生筛选体系",
      body: "优先筛选有明确专业声誉、临床经验和学术背景的医生，并持续确认当前接诊规则。",
      items: ["大学教授", "主任医师", "学会专家", "国际医学会议", "临床研究项目"]
    },
    {
      title: "Quality Assurance Framework",
      label: "医疗质量控制",
      body: "我们关注整个过程，避免不必要治疗，并尽量形成可追踪、可复盘的记录闭环。",
      items: ["机构审核", "方案审核", "执行监督", "结果追踪"]
    },
    {
      title: "Lifetime Follow-up Program",
      label: "长期随访机制",
      body: "医疗不是一次消费，而是长期管理。治疗结束后，真正重要的是持续复盘与健康决策。",
      items: ["个人健康档案", "3/6/12个月回顾", "专属健康顾问", "长寿管理计划"]
    }
  ],
  ja: [
    {
      title: "Medical Compliance",
      label: "医療コンプライアンス",
      body: "合法かつ規制に沿った医療機関との連携を重視し、医療機関ルールを慎重に確認します。",
      items: ["医療機関資格", "医師免許", "学会資格", "再生医療届出状況", "医療責任保険"]
    },
    {
      title: "Physician Excellence Program",
      label: "医師確認体制",
      body: "専門的評価、臨床経験、学術背景を確認し、現在の受診条件も個別に確認します。",
      items: ["大学教授", "主任医師", "学会専門家", "国際医学会議", "臨床研究"]
    },
    {
      title: "Quality Assurance Framework",
      label: "医療品質管理",
      body: "不要な医療介入を避け、プロセス全体を確認し、記録とフォローの流れを整えます。",
      items: ["医療機関確認", "方案確認", "実施プロセス確認", "結果フォロー"]
    },
    {
      title: "Lifetime Follow-up Program",
      label: "長期フォロー",
      body: "医療は一回の消費ではなく長期管理です。終了後のレビューと継続判断が重要です。",
      items: ["個人健康記録", "3/6/12か月レビュー", "専属健康アドバイザー", "長寿管理計画"]
    }
  ],
  en: [
    {
      title: "Medical Compliance",
      label: "Medical compliance",
      body: "We prioritize legally compliant institutions and review relevant institutional rules and regulatory boundaries.",
      items: ["Institution credentials", "Physician license", "Society qualifications", "Regenerative medicine filings", "Medical liability coverage"]
    },
    {
      title: "Physician Excellence Program",
      label: "Physician screening",
      body: "We prioritize physicians with clear professional standing, clinical experience, and academic background, then confirm current access rules.",
      items: ["University professors", "Department chiefs", "Society specialists", "International conferences", "Clinical research"]
    },
    {
      title: "Quality Assurance Framework",
      label: "Quality control",
      body: "We look at the full process, help avoid unnecessary interventions, and support reviewable records and follow-up.",
      items: ["Institution review", "Plan review", "Process monitoring", "Outcome follow-up"]
    },
    {
      title: "Lifetime Follow-up Program",
      label: "Long-term follow-up",
      body: "Medical care is not a one-time purchase. The follow-up, review, and next decisions matter most.",
      items: ["Personal health archive", "3/6/12-month reviews", "Dedicated health advisor", "Longevity management plan"]
    }
  ]
};

const researchDirections = {
  zh: [
    {
      title: "Regenerative Medicine",
      label: "再生医学",
      body: "探索人体自我修复、组织再生与功能维持的前沿科学，关注安全性、合规性与医学评估。"
    },
    {
      title: "Cellular Science",
      label: "细胞科技",
      body: "以细胞再生、细胞通讯、组织修复和健康寿命管理为核心，建立更审慎的科学认知框架。"
    },
    {
      title: "Longevity Science",
      label: "长寿科学",
      body: "结合全球长寿研究、基因科学、健康数据与风险评估，支持个性化健康寿命管理。"
    },
    {
      title: "Healthy Aging",
      label: "健康老龄化",
      body: "帮助客户关注身体活力、认知能力、肌肉质量与生活品质，实现更长期的功能保持。"
    }
  ],
  ja: [
    {
      title: "Regenerative Medicine",
      label: "再生医学",
      body: "自己修復、組織再生、機能維持に関する先端科学を、安全性、規制、医学的評価の観点から整理します。"
    },
    {
      title: "Cellular Science",
      label: "細胞科学",
      body: "細胞再生、細胞間コミュニケーション、組織修復、健康寿命管理を慎重な科学理解へつなげます。"
    },
    {
      title: "Longevity Science",
      label: "長寿科学",
      body: "長寿研究、遺伝子科学、健康データ、リスク評価を組み合わせ、個別化された健康寿命管理を支援します。"
    },
    {
      title: "Healthy Aging",
      label: "健康老化",
      body: "活力、認知機能、筋肉量、生活品質に注目し、より長期的な機能維持を目指します。"
    }
  ],
  en: [
    {
      title: "Regenerative Medicine",
      label: "Regenerative medicine",
      body: "Frontier science around self-repair, tissue regeneration, and functional maintenance, viewed through safety, compliance, and medical review."
    },
    {
      title: "Cellular Science",
      label: "Cellular science",
      body: "A careful framework for cellular regeneration, cellular communication, tissue repair, and healthspan management."
    },
    {
      title: "Longevity Science",
      label: "Longevity science",
      body: "Global longevity research, genetic science, health data, and risk assessment to support personalized healthspan planning."
    },
    {
      title: "Healthy Aging",
      label: "Healthy aging",
      body: "A focus on vitality, cognition, muscle quality, and quality of life so clients can preserve function longer."
    }
  ]
};

const platformSections = {
  zh: [
    {
      title: "Medical Governance",
      label: "医疗治理体系",
      href: "/medical-governance-framework",
      body: "建立从机构审核、医生评估、方案审查、执行监督到长期随访的完整医疗风控框架。"
    },
    {
      title: "Doctor Network",
      label: "专家资源档案",
      href: "/doctor-network",
      body: "按公开履历、专科方向、研究资料、适配场景与转诊前准备，整理可用于决策的医生资料。"
    },
    {
      title: "Journey Case",
      label: "健康管理旅程",
      href: "/case-library",
      body: "不宣传疗效，只展示服务流程：健康评估、检测、专家会诊、国际转诊、长期跟踪与持续健康管理方案。"
    },
    {
      title: "Media Center",
      label: "媒体中心",
      href: "/media-center",
      body: "持续发布公司新闻、医学动态、行业观察和创始人观点，建立长期可信的品牌声音。"
    },
    {
      title: "Research Center",
      label: "研究中心",
      href: "/research-center",
      body: "围绕长寿研究、细胞科学、外泌体研究、临床研究与精准医学建立深度研究内容。"
    }
  ],
  ja: [
    {
      title: "Medical Governance",
      label: "医療ガバナンス",
      href: "/medical-governance-framework",
      body: "医療機関審査、医師評価、方案確認、実施確認、長期フォローまでのリスク管理を設計します。"
    },
    {
      title: "Doctor Network",
      label: "専門医資源ファイル",
      href: "/doctor-network",
      body: "公開履歴、専門領域、研究資料、適した相談シーン、紹介前準備を整理します。"
    },
    {
      title: "Journey Case",
      label: "健康管理ジャーニー",
      href: "/case-library",
      body: "効果宣伝ではなく、健康評価、検査、専門医相談、国際紹介、長期フォローの流れを示します。"
    },
    {
      title: "Media Center",
      label: "メディアセンター",
      href: "/media-center",
      body: "ニュース、医学動向、業界観察、創業者の視点を継続的に発信します。"
    },
    {
      title: "Research Center",
      label: "研究センター",
      href: "/research-center",
      body: "長寿研究、細胞科学、エクソソーム、臨床研究、精密医療に関する深い内容を整理します。"
    }
  ],
  en: [
    {
      title: "Medical Governance",
      label: "Medical governance",
      href: "/medical-governance-framework",
      body: "A risk-control framework from institution review and physician assessment to plan review, process oversight, and follow-up."
    },
    {
      title: "Doctor Network",
      label: "Specialist resource archive",
      href: "/doctor-network",
      body: "Decision-ready physician information organized by public background, specialty focus, research, case fit, and referral preparation."
    },
    {
      title: "Journey Case",
      label: "Health management journeys",
      href: "/case-library",
      body: "Process-focused journeys across assessment, testing, specialist review, international referral, and long-term follow-up."
    },
    {
      title: "Media Center",
      label: "Media center",
      href: "/media-center",
      body: "Company news, medical trends, industry observation, and founder perspectives for long-term trust."
    },
    {
      title: "Research Center",
      label: "Research center",
      href: "/research-center",
      body: "Research intelligence across longevity, cellular science, exosomes, clinical studies, and precision medicine."
    }
  ]
};

const memberships = {
  zh: [
    {
      name: "Founder Membership",
      focus: "创始会员，适合早期核心客户与企业创始人。",
      outcome: "获得一套可复盘的年度健康策略和重大风险预警机制。",
      benefits: ["年度健康策略会议", "日本精密体检路径", "专家第二意见预案", "睡眠压力与代谢风险复盘"],
      threshold: "创始人、核心决策者、长期高压管理者",
      fee: "申请制，按年度服务范围确认",
      boundary: "不替代医生诊断，不承诺医学结果"
    },
    {
      name: "Executive Membership",
      focus: "企业家个人健康管理，围绕时间效率、精力和慢病风险。",
      outcome: "把体检、专科复核、季度复盘和跨境协调纳入一个长期管理节奏。",
      benefits: ["季度健康复盘", "异常指标跟进", "国际医疗资源协调", "企业家精力与睡眠管理"],
      threshold: "频繁出差、高压决策、希望系统管理健康的人群",
      fee: "申请制，按服务频率确认",
      boundary: "医疗行为由持牌医生和机构依法提供"
    },
    {
      name: "Family Membership",
      focus: "家族长期健康管理，覆盖配偶、父母与下一代。",
      outcome: "建立家庭健康档案、成员分层、转诊预案与长期随访机制。",
      benefits: ["家庭健康档案", "成员风险分层", "父母健康与重大疾病预案", "年度家庭健康回顾"],
      threshold: "多成员家庭、父母健康管理、家族办公室客户",
      fee: "申请制，按家庭成员与服务深度确认",
      boundary: "不公开处理完整病历，敏感资料需安全授权"
    },
    {
      name: "Legacy Membership",
      focus: "传承型医疗家族办公室，面向多代家庭与家族办公室。",
      outcome: "建立医疗治理、应急协议、全球资源配置和年度健康董事会。",
      benefits: ["家族健康治理框架", "全球专家资源预案", "重大疾病应急流程", "年度健康董事会"],
      threshold: "多代家庭、跨境资产家庭、私人银行及家办客户",
      fee: "邀请制，按家族治理范围定制",
      boundary: "法律、税务、保险事项由对应专业顾问确认"
    }
  ],
  ja: [
    {
      name: "Founder Membership",
      focus: "創業者と主要意思決定者のための初期中核メンバーシップ。",
      outcome: "年次健康戦略と重大リスク確認の仕組みを得られます。",
      benefits: ["年次健康戦略会議", "日本精密健診ルート", "専門医セカンドオピニオン準備", "睡眠・ストレス・代謝リスクレビュー"],
      threshold: "創業者、主要意思決定者、高ストレス管理者",
      fee: "申請制、年次サービス範囲により確認",
      boundary: "医師診断の代替や医学的結果保証ではありません"
    },
    {
      name: "Executive Membership",
      focus: "経営者個人の健康管理。時間効率、活力、慢性リスクに焦点を当てます。",
      outcome: "健診、専門医レビュー、定期復盤、国際調整を一つの長期管理リズムにします。",
      benefits: ["定期健康レビュー", "異常指標フォロー", "国際医療資源調整", "経営者の活力・睡眠管理"],
      threshold: "出張が多い方、高圧判断を担う方、健康を体系管理したい方",
      fee: "申請制、利用頻度により確認",
      boundary: "医療行為は医師・医療機関が法令に基づき提供します"
    },
    {
      name: "Family Membership",
      focus: "配偶者、両親、次世代を含む家族長期健康管理。",
      outcome: "家族健康記録、メンバー分類、紹介準備、長期フォロー体制を構築します。",
      benefits: ["家族健康記録", "メンバー別リスク分類", "両親の健康・重大疾患対応", "年次家族健康レビュー"],
      threshold: "複数メンバーの家族、両親の健康管理、ファミリーオフィス顧客",
      fee: "申請制、家族人数とサービス深度により確認",
      boundary: "機微資料は安全な権限確認後に取り扱います"
    },
    {
      name: "Legacy Membership",
      focus: "多世代家族とファミリーオフィス向けの医療ファミリーオフィス。",
      outcome: "医療ガバナンス、緊急対応、国際資源配置、年次健康ボードを設計します。",
      benefits: ["家族医療ガバナンス", "国際専門医リソース準備", "重大疾患緊急プロトコル", "年次健康ボード"],
      threshold: "多世代家族、国際資産家族、プライベートバンク・ファミリーオフィス顧客",
      fee: "招待制、家族ガバナンス範囲により設計",
      boundary: "法律、税務、保険は各専門家が確認します"
    }
  ],
  en: [
    {
      name: "Founder Membership",
      focus: "Founding membership for early core clients and business founders.",
      outcome: "A reviewable annual health strategy and major-risk alert system.",
      benefits: ["Annual health strategy board", "Japan executive diagnostics pathway", "Specialist second-opinion readiness", "Sleep, stress, and metabolic review"],
      threshold: "Best for founders, key decision makers, and high-pressure leaders",
      fee: "application-based, confirmed by annual service scope",
      boundary: "not a substitute for physician diagnosis or outcome guarantees"
    },
    {
      name: "Executive Membership",
      focus: "Personal executive health management for time efficiency, energy, and chronic-risk control.",
      outcome: "Checkups, specialist reviews, quarterly follow-up, and global coordination in one rhythm.",
      benefits: ["Quarterly health review", "Abnormal marker follow-up", "International medical coordination", "Executive energy and sleep management"],
      threshold: "Best for frequent travelers, high-pressure executives, and clients seeking structured health management",
      fee: "application-based, confirmed by service frequency",
      boundary: "medical acts are provided by licensed physicians and institutions"
    },
    {
      name: "Family Membership",
      focus: "Long-term family health management for spouses, parents, and the next generation.",
      outcome: "Family health archives, member segmentation, referral readiness, and long-term follow-up.",
      benefits: ["Family health archive", "Member risk segmentation", "Parent health and critical illness planning", "Annual family health review"],
      threshold: "Best for multi-member families, parent health management, and family office clients",
      fee: "application-based, confirmed by family size and service depth",
      boundary: "sensitive records are handled only through secure authorization"
    },
    {
      name: "Legacy Membership",
      focus: "A medical family office for multi-generation families and family offices.",
      outcome: "Medical governance, emergency protocols, global resource allocation, and annual health boards.",
      benefits: ["Family medical governance", "Global specialist readiness", "Critical illness emergency protocol", "Annual health board"],
      threshold: "Best for multi-generation families, cross-border families, private banks, and family offices",
      fee: "invitation-based, customized by family governance scope",
      boundary: "legal, tax, and insurance matters remain with relevant advisors"
    }
  ]
};

const membershipLabels = {
  zh: {
    outcome: "买到什么结果",
    benefits: "核心权益",
    threshold: "申请门槛",
    fee: "费用",
    boundary: "服务边界",
    apply: "申请私人咨询"
  },
  ja: {
    outcome: "得られる結果",
    benefits: "主な内容",
    threshold: "対象条件",
    fee: "費用",
    boundary: "サービス境界",
    apply: "相談を申し込む"
  },
  en: {
    outcome: "Outcome",
    benefits: "Benefits",
    threshold: "Entry Criteria",
    fee: "Fee",
    boundary: "Service Boundary",
    apply: "Apply for Private Inquiry"
  }
};

export default function Home({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const copy = homeCopy[lang];
  const sections = sectionCopy[lang];
  const healthspan = healthspanPoints[lang];
  const whatItems = whatWeDo[lang];
  const whyItems = whyClientsChooseUs[lang];
  const governanceItems = governanceLayers[lang];
  const researchItems = researchDirections[lang];
  const platformItems = platformSections[lang];
  const membershipItems = memberships[lang];
  const membershipText = membershipLabels[lang];
  const featuredDoctors = doctorProfiles.slice(0, 4);
  const whyLinks = [
    "/global-medical-access",
    "/medical-family-office",
    "/contact",
    "/service-process",
    "/medical-governance-framework"
  ];

  return (
    <>
      <section className="relative min-h-[94vh] overflow-hidden bg-ink text-pearl">
        <Image
          src="/hero-longevity-concierge.png"
          alt="Private medical family office interior"
          fill
          priority
          className="object-contain object-top opacity-72 md:object-cover md:object-center md:opacity-58"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/84 to-ink/25" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.1),rgba(18,20,18,0.82))]" />
        <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-44 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            Medical Family Office
          </p>
          <h1 className="mt-7 max-w-6xl font-serif text-5xl leading-[0.98] text-balance md:text-7xl lg:text-8xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-7 max-w-4xl text-2xl font-semibold leading-tight text-pearl md:text-4xl">
            Private Health Intelligence for Global Families
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-pearl/76">
            {copy.promise}
          </p>
          <div className="mt-8 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xl font-semibold text-pearl">
                {copy.heroAudience}
              </p>
              <p className="mt-4 text-base uppercase tracking-[0.22em] text-champagne">
                Japan • Singapore • Switzerland • United States
              </p>
            </div>
            <p className="border-l border-champagne/50 pl-6 text-base leading-8 text-pearl/72">
              {copy.risk}
            </p>
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-pearl/76">
            {copy.intro}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={withLanguage("/contact", lang)}
              className="inline-flex items-center justify-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              {copy.inquiry} <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#membership"
              className="inline-flex items-center justify-center border border-pearl/45 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:border-champagne hover:text-champagne"
            >
              {copy.learn}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {sections.healthspan}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              {copy.wealth}
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-9 text-pearl/72">
            <p>{copy.healthspan}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {healthspan.map((item) => (
                <div key={item} className="border-l border-champagne/70 pl-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-champagne">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{sections.what}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {copy.whatTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.whatBody}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {whatItems.map((item, index) => (
              <Link
                key={item.title}
                href={withLanguage(item.href, lang)}
                className="group border-t border-champagne/55 pt-5 transition hover:-translate-y-1"
              >
                <p className="font-serif text-4xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-xl font-semibold text-ink transition group-hover:text-champagne">
                  {item.title}
                </p>
                <p className="mt-2 text-sm font-semibold text-champagne">{item.label}</p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative aspect-[16/10] overflow-hidden border border-mist bg-ink shadow-quiet">
            <Image
              src="/fuji-active-longevity.png"
              alt="Healthy active aging near Mount Fuji"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {sections.why}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {copy.whyTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.whyBody}</p>
            <div className="mt-10 divide-y divide-mist border-y border-mist">
              {whyItems.map((item, index) => (
                <Link
                  key={item}
                  href={withLanguage(whyLinks[index], lang)}
                  className="group grid grid-cols-[1fr_auto] gap-6 py-5"
                >
                  <p className="text-lg font-semibold text-ink transition group-hover:text-champagne">
                    {item}
                  </p>
                  <span className="text-champagne">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.governance}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.governanceTitle}
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-9 text-graphite/72">
              <p>
                {copy.governanceIntro}
              </p>
              <p>
                {copy.governanceMission}
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {governanceItems.map((layer) => (
              <article key={layer.title} className="border border-mist bg-white p-7 shadow-sm">
                <p className="text-xs uppercase tracking-[0.26em] text-champagne">
                  {layer.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {layer.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{layer.body}</p>
                <ul className="mt-6 space-y-3 border-t border-mist pt-6">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-graphite/78">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-champagne" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link
            href={withLanguage("/medical-governance-framework", lang)}
            className="mt-12 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
          >
            {sections.governance} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.knowledge}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                {sections.knowledgeTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-pearl/72">{copy.knowledgeBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {researchItems.map((direction) => (
              <article key={direction.title} className="border border-white/12 bg-pearl/[0.03] p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {direction.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-pearl">
                  {direction.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-pearl/62">{direction.body}</p>
              </article>
            ))}
          </div>
          <Link
            href={withLanguage("/knowledge-center", lang)}
            className="mt-12 inline-flex border border-pearl/45 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:border-champagne hover:text-champagne"
          >
            {sections.knowledgeCta} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.platform}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.platformTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">
              {copy.platformBody}
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {platformItems.map((section) => (
              <Link
                key={section.title}
                href={withLanguage(section.href, lang)}
                className="border border-mist bg-pearl p-7 transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {section.title}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {section.label}
                </h3>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{section.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                {sections.advisory}
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
                {copy.advisoryTitle}
              </h2>
            </div>
            <p className="text-lg leading-9 text-graphite/72">{copy.boardBody}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredDoctors.map((doctor) => (
              <Link
                key={doctor.slug}
                href={withLanguage(`/doctor-network/${doctor.slug}`, lang)}
                className="border border-mist bg-white p-7 transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {lang === "zh" ? doctor.specialty : copy.doctorSpecialtyLabel}
                </p>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {doctor.name}
                </h3>
                {lang !== "en" ? (
                  <p className="mt-2 text-sm text-graphite/62">{doctor.jaName}</p>
                ) : null}
                <p className="mt-5 text-sm leading-7 text-graphite/72">
                  {doctor.institution}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">{sections.membership}</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {sections.membershipTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite/72">{copy.membershipBody}</p>
            <p className="mt-6 border-l border-champagne pl-5 text-base leading-8 text-graphite/72">
              {copy.membershipNote}
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
            {membershipItems.map((membership) => (
              <article key={membership.name} className="bg-pearl p-8">
                <p className="font-serif text-4xl leading-tight text-champagne">{membership.name}</p>
                <p className="mt-5 text-sm leading-7 text-graphite/72">{membership.focus}</p>
                <div className="mt-7 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                      {membershipText.outcome}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-ink">{membership.outcome}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
                      {membershipText.benefits}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-graphite/72">
                      {membership.benefits.map((item) => (
                        <li key={item} className="border-l border-champagne/45 pl-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm leading-7 text-graphite/72">
                    <span className="font-semibold text-ink">{membershipText.threshold}: </span>
                    {membership.threshold}
                  </p>
                  <p className="text-sm leading-7 text-graphite/72">
                    <span className="font-semibold text-ink">{membershipText.fee}: </span>
                    {membership.fee}
                  </p>
                  <p className="text-sm leading-7 text-graphite/72">
                    <span className="font-semibold text-ink">{membershipText.boundary}: </span>
                    {membership.boundary}
                  </p>
                </div>
                <Link
                  href={withLanguage("/contact", lang)}
                  className="mt-8 inline-flex border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-ink hover:text-pearl"
                >
                  {membershipText.apply}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
