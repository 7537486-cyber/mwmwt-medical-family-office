import type { Language } from "@/lib/site";

export type TrustPageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  copies: Record<
    Language,
    {
      eyebrow: string;
      title: string;
      description: string;
      secondaryTitle: string;
      secondaryDescription: string;
      sections: Array<{
        title: string;
        body: string[];
      }>;
      cards: Array<{
        title: string;
        body: string;
      }>;
    }
  >;
};

export const trustPages: Record<string, TrustPageContent> = {
  "about-mwmwt": {
    slug: "about-mwmwt",
    metaTitle: "About MWMWT",
    metaDescription: "MWMWT 的定位、服务边界、医疗治理理念与跨境医疗资源协调方式。",
    image: "/hero-medical-family-office.png",
    copies: {
      zh: {
        eyebrow: "About MWMWT",
        title: "MWMWT 是面向全球家族的医疗家族办公室。",
        description:
          "我们为企业家、高净值家庭与跨境客户提供日本医疗资源协调、长期健康治理、长寿医学规划和私人医疗礼宾支持。",
        secondaryTitle: "不是医院，也不是单一项目中介。",
        secondaryDescription:
          "MWMWT 的核心价值，是代表客户进行医疗资源筛选、医生沟通、资料整理、风险说明和长期随访管理。",
        sections: [
          {
            title: "我们的定位",
            body: [
              "MWMWT 以 Medical Family Office 的方式工作：像家族办公室管理财富风险一样，帮助客户管理未来数十年的健康风险和重大医疗决策。",
              "我们不直接提供诊断、治疗或疗效承诺。具体医疗服务由持牌医生和合规医疗机构依法提供。"
            ]
          },
          {
            title: "我们解决的问题",
            body: [
              "高净值客户往往不缺预算，真正困难的是判断医生是否可靠、医院是否合规、项目是否适合、风险是否充分说明，以及治疗或体检之后是否有人持续跟进。",
              "MWMWT 将医疗资源获取、医学资料整理、跨语言沟通、预约协调、长期健康档案和家庭健康规划整合为一个清晰的服务体系。"
            ]
          },
          {
            title: "长期健康决策权",
            body: [
              "我们关注的不是一次体检或一次治疗，而是客户在未来 10 至 30 年内是否拥有更清晰、更稳健的健康决策能力。",
              "对于企业家和家族客户而言，健康寿命是一项基础资产。没有健康决策权，财富、事业和家族安排都会失去稳定基础。"
            ]
          }
        ],
        cards: [
          { title: "医疗资源协调", body: "连接日本及全球合规医疗机构、医生网络与专科资源。" },
          { title: "风险管理", body: "围绕合规、医生资质、资料完整性和预期边界进行审慎说明。" },
          { title: "长期随访", body: "把体检、治疗、指标变化和家庭健康计划纳入持续管理。" }
        ]
      },
      ja: {
        eyebrow: "About MWMWT",
        title: "MWMWTはグローバル家族のための医療ファミリーオフィスです。",
        description:
          "経営者、富裕層家族、国際医療ニーズを持つお客様に、日本医療資源の調整、長期健康管理、長寿医学計画、プライベート医療コンシェルジュを提供します。",
        secondaryTitle: "病院でも単一プログラムの仲介でもありません。",
        secondaryDescription:
          "MWMWTの役割は、医療資源の確認、医師との調整、資料整理、リスク説明、長期フォローをお客様側に立って支援することです。",
        sections: [
          {
            title: "私たちの位置づけ",
            body: [
              "MWMWTは Medical Family Office として、資産リスクを管理する家族オフィスのように、健康リスクと重要な医療意思決定を支援します。",
              "当社は診断、治療、効果保証を直接提供しません。具体的な医療行為は、資格を持つ医師と適法な医療機関により提供されます。"
            ]
          },
          {
            title: "解決する課題",
            body: [
              "富裕層のお客様にとって難しいのは費用ではなく、医師の信頼性、医療機関の適法性、プログラムの適合性、リスク説明、受診後の継続管理です。",
              "MWMWTは医療資源アクセス、資料整理、多言語調整、予約、長期健康記録、家族健康計画を一つの体系にまとめます。"
            ]
          },
          {
            title: "長期的な健康意思決定",
            body: [
              "私たちが重視するのは一回の検査や治療ではなく、今後10年から30年にわたる健康意思決定の質です。",
              "経営者と家族にとって、健康寿命は基盤となる資産です。健康判断が不安定であれば、事業、資産、家族設計も不安定になります。"
            ]
          }
        ],
        cards: [
          { title: "医療資源調整", body: "日本および海外の適法な医療機関、医師ネットワーク、専門資源へ接続します。" },
          { title: "リスク管理", body: "コンプライアンス、医師資格、資料の完全性、期待値の境界を慎重に整理します。" },
          { title: "長期フォロー", body: "健診、治療、指標変化、家族健康計画を継続的に管理します。" }
        ]
      },
      en: {
        eyebrow: "About MWMWT",
        title: "MWMWT is a Medical Family Office for global families.",
        description:
          "We support entrepreneurs, high-net-worth families, and cross-border clients with Japan medical access, long-term health governance, longevity planning, and private medical concierge coordination.",
        secondaryTitle: "We are not a hospital or a single-treatment broker.",
        secondaryDescription:
          "Our role is to help clients evaluate resources, organize records, coordinate physicians, understand risk boundaries, and manage follow-up over time.",
        sections: [
          {
            title: "Our Position",
            body: [
              "MWMWT works as a Medical Family Office: we help families manage health risk and major medical decisions with the same discipline used for wealth, legal, and succession planning.",
              "We do not directly provide diagnosis, treatment, or outcome guarantees. Medical services are provided by licensed physicians and compliant institutions."
            ]
          },
          {
            title: "The Problem We Solve",
            body: [
              "For UHNW clients, the hardest question is rarely cost. It is whether the doctor is reliable, the institution is compliant, the program is appropriate, risks are explained, and follow-up is managed.",
              "MWMWT integrates medical access, document preparation, multilingual coordination, appointment management, long-term health records, and family health planning."
            ]
          },
          {
            title: "Long-Term Health Decision-Making",
            body: [
              "We focus not on a single checkup or treatment, but on helping clients make clearer health decisions over the next 10 to 30 years.",
              "For entrepreneurs and families, healthspan is a foundational asset. Without health decision-making capacity, wealth, business, and family planning lose stability."
            ]
          }
        ],
        cards: [
          { title: "Medical Access", body: "Connect with compliant institutions, physician networks, and specialty resources in Japan and globally." },
          { title: "Risk Governance", body: "Review compliance, physician background, document readiness, and realistic expectations." },
          { title: "Long-Term Follow-Up", body: "Integrate checkups, treatment records, indicators, and family health planning into one system." }
        ]
      }
    }
  },
  founder: {
    slug: "founder",
    metaTitle: "Founder",
    metaDescription: "MWMWT 创始人理念：以医疗家族办公室方式服务企业家、投资人与全球家族。",
    image: "/hero-private-inquiry.png",
    copies: {
      zh: {
        eyebrow: "Founder",
        title: "创始人理念：把健康寿命纳入家族长期决策。",
        description:
          "MWMWT 的建立，是为了回应企业家和家族客户在跨境医疗、长寿管理和重大健康决策中的真实不确定性。",
        secondaryTitle: "客户需要的不是更多项目，而是更可靠的判断。",
        secondaryDescription:
          "创始团队坚持以合规、隐私、风险控制和长期陪伴为核心，而不是把医疗资源包装成一次性消费。",
        sections: [
          {
            title: "为什么建立 MWMWT",
            body: [
              "很多企业家在事业进入成熟期后，才发现健康风险开始成为最不可控的变量。财富可以配置，税务可以规划，法律风险可以管理，但健康寿命常常缺少专属顾问。",
              "MWMWT 希望填补这个空白：帮助客户在复杂医疗信息中获得清晰判断，知道该找谁、该问什么、该如何评估风险。"
            ]
          },
          {
            title: "服务原则",
            body: [
              "我们不承诺永生、不承诺逆转衰老，也不承诺任何医学结果。我们帮助客户更早识别风险、更谨慎选择资源、更长期地管理健康轨迹。",
              "在每一次推荐之前，我们更重视医生背景、机构合规、资料完整性、适应症匹配、禁忌和替代路径。"
            ]
          },
          {
            title: "面向未来",
            body: [
              "未来的高净值健康管理，不应停留在体检套餐或医疗旅游，而应成为家族治理的一部分。",
              "MWMWT 将持续建设医生网络、知识中心、研究资料库和长期会员体系，为全球家族提供更稳定的私人健康决策支持。"
            ]
          }
        ],
        cards: [
          { title: "长期主义", body: "关注未来 10 至 30 年的健康轨迹，而非一次性消费。" },
          { title: "独立判断", body: "帮助客户理解资源、风险和选择逻辑。" },
          { title: "私密陪伴", body: "以高净值客户习惯的节奏处理敏感健康议题。" }
        ]
      },
      ja: {
        eyebrow: "Founder",
        title: "創業理念：健康寿命を家族の長期意思決定へ。",
        description:
          "MWMWTは、経営者と家族が国際医療、長寿管理、重大な健康判断に直面する不確実性に応えるために生まれました。",
        secondaryTitle: "必要なのは、より多くのプログラムではなく、より信頼できる判断です。",
        secondaryDescription:
          "創業チームは、単発消費ではなく、コンプライアンス、秘匿性、リスク管理、長期伴走を重視します。",
        sections: [
          {
            title: "MWMWTを設立した理由",
            body: [
              "多くの経営者は事業が成熟した後、健康リスクが最も制御しにくい変数であることに気づきます。資産、税務、法務は管理されても、健康寿命には専属の助言者が不足しています。",
              "MWMWTは、複雑な医療情報の中で、誰に相談すべきか、何を確認すべきか、どうリスクを評価するかを明確にするために存在します。"
            ]
          },
          {
            title: "サービス原則",
            body: [
              "永生、老化の逆転、医学的結果を約束しません。私たちは、より早いリスク認識、慎重な資源選択、長期的な健康管理を支援します。",
              "推薦の前に、医師背景、医療機関の適法性、資料の完全性、適応、禁忌、代替選択肢を重視します。"
            ]
          },
          {
            title: "これから",
            body: [
              "未来の富裕層健康管理は、健診パッケージや医療旅行にとどまらず、家族ガバナンスの一部になるべきです。",
              "MWMWTは医師ネットワーク、ナレッジセンター、研究資料、長期会員制度を継続的に構築します。"
            ]
          }
        ],
        cards: [
          { title: "長期志向", body: "一回の消費ではなく、10年から30年の健康軌跡を重視します。" },
          { title: "独立した判断", body: "医療資源、リスク、選択理由を理解できるよう支援します。" },
          { title: "秘匿性ある伴走", body: "富裕層のお客様に求められる静かな進行で健康課題を扱います。" }
        ]
      },
      en: {
        eyebrow: "Founder",
        title: "Founder Perspective: healthspan belongs in long-term family decision-making.",
        description:
          "MWMWT was created to address the uncertainty entrepreneurs and families face in cross-border medicine, longevity management, and major health decisions.",
        secondaryTitle: "Clients do not need more programs. They need better judgment.",
        secondaryDescription:
          "Our founding principle is compliance, privacy, risk control, and long-term partnership rather than packaging medical access as a one-off transaction.",
        sections: [
          {
            title: "Why MWMWT Exists",
            body: [
              "Many entrepreneurs discover that health risk becomes the least controllable variable precisely when their business and family responsibilities are greatest.",
              "MWMWT helps clients navigate complex medical information, understand who to consult, what to ask, and how to evaluate risk."
            ]
          },
          {
            title: "Service Principles",
            body: [
              "We do not promise immortality, age reversal, or medical outcomes. We help clients identify risks earlier, choose resources more carefully, and manage health trajectories over time.",
              "Before any recommendation, we prioritize physician background, institutional compliance, document readiness, indication fit, contraindications, and alternative pathways."
            ]
          },
          {
            title: "Looking Forward",
            body: [
              "The future of UHNW health management should move beyond checkup packages or medical tourism and become part of family governance.",
              "MWMWT will continue building physician networks, knowledge centers, research resources, and long-term membership systems."
            ]
          }
        ],
        cards: [
          { title: "Long-Term View", body: "Focused on the next 10 to 30 years of health trajectory, not one-off consumption." },
          { title: "Independent Judgment", body: "Helping clients understand resources, risk, and decision logic." },
          { title: "Private Partnership", body: "Handling sensitive health topics with the rhythm expected by UHNW clients." }
        ]
      }
    }
  },
  "medical-advisory": {
    slug: "medical-advisory",
    metaTitle: "Medical Advisory",
    metaDescription: "MWMWT 医疗顾问体系：医生网络、医疗尽调、质量控制与长期随访机制。",
    image: "/hero-doctor-network.png",
    copies: {
      zh: {
        eyebrow: "Medical Advisory",
        title: "建立医疗顾问体系，而不是销售单一医疗项目。",
        description:
          "MWMWT 的医疗顾问体系围绕医生网络、机构合规、项目审查、资料整理、第二意见和长期随访建立。",
        secondaryTitle: "核心目标：降低重大健康决策的不确定性。",
        secondaryDescription:
          "我们帮助客户在进入具体医疗安排前，先完成医学资料、风险边界、医生背景和机构能力的基础判断。",
        sections: [
          {
            title: "医生与机构筛选",
            body: [
              "我们关注医生学历、临床经验、学会资格、研究方向、公开论文、医院背景和适合的客户场景。",
              "合作或转诊前会优先确认机构资质、服务边界、沟通效率、资料要求和后续跟进能力。"
            ]
          },
          {
            title: "医疗尽调与风险说明",
            body: [
              "对于再生医疗、长寿医学、重大疾病第二意见、跨境转诊等场景，我们先整理既往病史、用药情况、检查资料、客户目标和禁忌因素。",
              "我们以客户能理解的语言说明证据等级、合规边界、替代路径、合理预期和不确定性。"
            ]
          },
          {
            title: "长期随访",
            body: [
              "医疗安排结束后，真正重要的是指标变化、复查计划、生活方式管理和下一阶段健康优先级。",
              "MWMWT 将检查结果、诊疗记录、医生建议和家庭健康目标纳入长期档案，帮助客户持续复盘。"
            ]
          }
        ],
        cards: [
          { title: "Medical Due Diligence", body: "从医生、机构、资料、流程和风险边界进行基础核验。" },
          { title: "Second Opinion", body: "协助整理病历、影像、问题清单，并匹配合适专家路径。" },
          { title: "Follow-up Governance", body: "将诊后反馈纳入长期健康管理，而不是服务结束即中断。" }
        ]
      },
      ja: {
        eyebrow: "Medical Advisory",
        title: "単一プログラム販売ではなく、医療アドバイザリー体系を構築します。",
        description:
          "MWMWTの医療アドバイザリーは、医師ネットワーク、医療機関の適法性、プログラム審査、資料整理、セカンドオピニオン、長期フォローに基づきます。",
        secondaryTitle: "目的は、重要な健康意思決定の不確実性を下げることです。",
        secondaryDescription:
          "具体的な手配に入る前に、医療資料、リスク境界、医師背景、医療機関能力を整理します。",
        sections: [
          {
            title: "医師と医療機関の確認",
            body: [
              "医師の学歴、臨床経験、学会資格、研究領域、公開論文、病院背景、適した相談場面を確認します。",
              "連携や紹介の前に、医療機関の資格、サービス範囲、コミュニケーション効率、必要資料、フォロー体制を確認します。"
            ]
          },
          {
            title: "医療デューデリジェンスとリスク説明",
            body: [
              "再生医療、長寿医学、重大疾患のセカンドオピニオン、国際紹介では、既往歴、服薬、検査資料、目的、禁忌を先に整理します。",
              "証拠レベル、規制境界、代替経路、合理的期待値、不確実性を分かりやすく説明します。"
            ]
          },
          {
            title: "長期フォロー",
            body: [
              "医療手配後に重要なのは、指標変化、再検査計画、生活管理、次の健康優先順位です。",
              "MWMWTは検査結果、診療記録、医師助言、家族目標を長期記録に統合します。"
            ]
          }
        ],
        cards: [
          { title: "Medical Due Diligence", body: "医師、機関、資料、流れ、リスク境界を確認します。" },
          { title: "Second Opinion", body: "病歴、画像、質問リストを整理し、適切な専門医経路を準備します。" },
          { title: "Follow-up Governance", body: "受診後の内容を長期健康管理に統合します。" }
        ]
      },
      en: {
        eyebrow: "Medical Advisory",
        title: "A medical advisory framework, not single-program selling.",
        description:
          "MWMWT's advisory framework is built around physician networks, institutional compliance, program review, document preparation, second opinions, and long-term follow-up.",
        secondaryTitle: "The goal is to reduce uncertainty in major health decisions.",
        secondaryDescription:
          "Before specific arrangements begin, we help clients review medical records, risk boundaries, physician background, and institutional capability.",
        sections: [
          {
            title: "Physician and Institution Review",
            body: [
              "We consider education, clinical experience, society credentials, research focus, publications, hospital background, and suitable client scenarios.",
              "Before collaboration or referral, we review institutional credentials, service boundaries, communication efficiency, document requirements, and follow-up capacity."
            ]
          },
          {
            title: "Medical Due Diligence and Risk Framing",
            body: [
              "For regenerative medicine, longevity medicine, second opinions, and cross-border referrals, we first organize history, medication, test records, client goals, and contraindications.",
              "We explain evidence levels, compliance boundaries, alternatives, realistic expectations, and uncertainty in language families can use."
            ]
          },
          {
            title: "Long-Term Follow-Up",
            body: [
              "After any medical arrangement, what matters is indicator change, review timing, lifestyle management, and next-stage health priorities.",
              "MWMWT integrates reports, clinical records, physician advice, and family health goals into a long-term archive."
            ]
          }
        ],
        cards: [
          { title: "Medical Due Diligence", body: "Basic review across physicians, institutions, documents, workflow, and risk boundaries." },
          { title: "Second Opinion", body: "Organize records, imaging, question lists, and appropriate specialist pathways." },
          { title: "Follow-up Governance", body: "Integrate post-visit feedback into long-term health management." }
        ]
      }
    }
  }
};
