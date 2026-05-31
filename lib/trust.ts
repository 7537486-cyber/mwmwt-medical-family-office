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
    metaTitle: "About Medical Family Office",
    metaDescription: "Medical Family Office 的定位、服务边界、医疗治理理念与跨境医疗资源协调方式。",
    image: "/hero-medical-family-office.png",
    copies: {
      zh: {
        eyebrow: "About Medical Family Office",
        title: "Medical Family Office 是面向全球家族的医疗家族办公室。",
        description:
          "我们为企业家、高净值家庭与跨境客户提供日本医疗资源协调、长期健康治理、长寿医学规划和私人医疗礼宾支持。",
        secondaryTitle: "不是医院，也不是单一项目中介。",
        secondaryDescription:
          "Medical Family Office 的核心价值，是代表客户进行医疗资源筛选、医生沟通、资料整理、风险说明和长期随访管理。",
        sections: [
          {
            title: "我们的定位",
            body: [
              "我们以 Medical Family Office 的方式工作：像家族办公室管理财富风险一样，帮助客户管理未来数十年的健康风险和重大医疗决策。",
              "我们不直接提供诊断、治疗或疗效承诺。具体医疗服务由持牌医生和合规医疗机构依法提供。"
            ]
          },
          {
            title: "我们解决的问题",
            body: [
              "高净值客户往往不缺预算，真正困难的是判断医生是否可靠、医院是否合规、项目是否适合、风险是否充分说明，以及治疗或体检之后是否有人持续跟进。",
              "Medical Family Office 将医疗资源获取、医学资料整理、跨语言沟通、预约协调、长期健康档案和家庭健康规划整合为一个清晰的服务体系。"
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
          { title: "医疗资源协调", body: "连接日本及全球合规医疗机构、公开医学专家资料与专科资源。" },
          { title: "风险管理", body: "围绕合规、医生资质、资料完整性和预期边界进行审慎说明。" },
          { title: "长期随访", body: "把体检、治疗、指标变化和家庭健康计划纳入持续管理。" }
        ]
      },
      ja: {
        eyebrow: "About Medical Family Office",
        title: "Medical Family Officeはグローバル家族のための医療ファミリーオフィスです。",
        description:
          "経営者、富裕層家族、国際医療ニーズを持つお客様に、日本医療資源の調整、長期健康管理、長寿医学計画、プライベート医療コンシェルジュを提供します。",
        secondaryTitle: "病院でも単一プログラムの仲介でもありません。",
        secondaryDescription:
          "Medical Family Officeの役割は、医療資源の確認、医師との調整、資料整理、リスク説明、長期フォローをお客様側に立って支援することです。",
        sections: [
          {
            title: "私たちの位置づけ",
            body: [
              "私たちは Medical Family Office として、資産リスクを管理するファミリーオフィスのように、健康リスクと重要な医療意思決定を支援します。",
              "当社は診断、治療、効果保証を直接提供しません。具体的な医療行為は、資格を持つ医師と適法な医療機関により提供されます。"
            ]
          },
          {
            title: "解決する課題",
            body: [
              "富裕層のお客様にとって難しいのは費用ではなく、医師の信頼性、医療機関の適法性、プログラムの適合性、リスク説明、受診後の継続管理です。",
              "Medical Family Officeは医療資源アクセス、資料整理、多言語調整、予約、長期健康記録、家族健康計画を一つの体系にまとめます。"
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
          { title: "医療資源調整", body: "日本および海外の適法な医療機関、公開医学専門家情報、専門資源へ接続します。" },
          { title: "リスク管理", body: "コンプライアンス、医師資格、資料の完全性、期待値の境界を慎重に整理します。" },
          { title: "長期フォロー", body: "健診、治療、指標変化、家族健康計画を継続的に管理します。" }
        ]
      },
      en: {
        eyebrow: "About Medical Family Office",
        title: "Medical Family Office is a private medical advisory platform for global families.",
        description:
          "We support entrepreneurs, high-net-worth families, and cross-border clients with Japan medical access, long-term health governance, longevity planning, and private medical concierge coordination.",
        secondaryTitle: "We are not a hospital or a single-treatment broker.",
        secondaryDescription:
          "Our role is to help clients evaluate resources, organize records, coordinate physicians, understand risk boundaries, and manage follow-up over time.",
        sections: [
          {
            title: "Our Position",
            body: [
              "We work with the discipline of a family office: helping families manage health risk and major medical decisions with the same care used for wealth, legal, and succession planning.",
              "We do not directly provide diagnosis, treatment, or outcome guarantees. Medical services are provided by licensed physicians and compliant institutions."
            ]
          },
          {
            title: "The Problem We Solve",
            body: [
              "For UHNW clients, the hardest question is rarely cost. It is whether the doctor is reliable, the institution is compliant, the program is appropriate, risks are explained, and follow-up is managed.",
              "Medical Family Office integrates medical access, document preparation, multilingual coordination, appointment management, long-term health records, and family health planning."
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
          { title: "Medical Access", body: "Connect with compliant institutions, public medical expert references, and specialty resources in Japan and globally." },
          { title: "Risk Governance", body: "Review compliance, physician background, document readiness, and realistic expectations." },
          { title: "Long-Term Follow-Up", body: "Integrate checkups, treatment records, indicators, and family health planning into one system." }
        ]
      }
    }
  },
  founder: {
    slug: "founder",
    metaTitle: "Founder",
    metaDescription: "Medical Family Office 创始人理念：以医疗家族办公室方式服务企业家、投资人与全球家族。",
    image: "/hero-private-inquiry.png",
    copies: {
      zh: {
        eyebrow: "Founder",
        title: "Why We Created Medical Family Office",
        description:
          "过去很多年，我都在思考一个问题：我们花了一生管理事业、资金、风险与未来，却常常以最被动的方式面对健康。",
        secondaryTitle: "Aging is inevitable. Decline is not.",
        secondaryDescription:
          "时间无法停止。但健康可以被管理，风险可以被提前发现，未来可以被更好地规划。",
        sections: [
          {
            title: "健康的时间",
            body: [
              "我们花了一生的时间经营事业，学习如何管理公司、团队、资金、风险与未来。但当涉及健康时，大多数人却仍然采用最被动的方式：等到出现症状才去检查，等到疾病发生才开始治疗，等到身体发出警报才意识到健康的重要性。",
              "对于企业家、高净值家庭和长期承担责任的人来说，真正稀缺的资源从来不是财富，而是时间。更准确地说，是健康的时间。"
            ]
          },
          {
            title: "健康也需要系统思维",
            body: [
              "随着年龄增长，我开始接触越来越多优秀的企业家。他们拥有成功的事业、幸福的家庭和丰富的人生经历。但我也发现一个共同现象：很多人对公司的经营投入巨大精力，却很少用同样的系统思维去管理自己的身体。",
              "事实上，健康和企业一样。需要长期规划，需要风险管理，需要专业顾问，需要持续监测，更需要提前行动。"
            ]
          },
          {
            title: "在疾病发生之前管理风险",
            body: [
              "人终究会衰老，这是自然规律。但衰老的速度、疾病发生的风险以及生命后半程的生活质量，却并非完全无法改变。",
              "现代医学的发展让我们第一次有机会在疾病发生之前发现风险，在症状出现之前进行干预，在身体明显衰退之前开始管理。这也是长寿医学、预防医学和健康管理正在改变世界的原因。"
            ]
          },
          {
            title: "Medical Family Office 的角色",
            body: [
              "Medical Family Office 的诞生，正是基于这样的理念。我们不是一家诊所，也不是一家销售医疗项目的公司。我们的角色更像一个长期医疗顾问团队。",
              "我们帮助客户整合全球医疗资源，建立个人与家庭的健康档案，制定长期健康规划，在关键医疗决策时提供专业支持，并陪伴客户走过未来数十年的健康旅程。"
            ]
          },
          {
            title: "最有价值的是可靠答案",
            body: [
              "我们相信，最好的医疗并不是最昂贵的治疗，而是在正确的时间做出正确的决定。",
              "很多时候，最有价值的不是一次手术，不是一种药物，甚至不是某项先进技术，而是获得一个准确且值得信赖的答案。"
            ]
          },
          {
            title: "Our Philosophy",
            body: [
              "我们的目标并非追求长寿本身，而是帮助更多人在未来的岁月里依然拥有活力、独立与尊严。因为真正值得追求的，从来不只是生命的长度，而是生命的质量。",
              "Aging is inevitable. Decline is not. 时间无法停止。但健康可以被管理，风险可以被提前发现，未来可以被更好地规划。",
              "如果财富需要家族办公室，那么健康，同样值得拥有属于自己的 Family Office。",
              "— Yumi Hamasaki / Founder / Medical Family Office"
            ]
          }
        ],
        cards: [
          { title: "Mission", body: "Extend Healthspan, Not Just Lifespan. 延长健康寿命，而不仅是生命长度。" },
          { title: "Vision", body: "A Medical Family Office for Every Successful Family. 让每一个成功家庭都拥有自己的医疗家族办公室。" },
          { title: "Philosophy", body: "Aging is inevitable. Decline is not. 衰老不可避免，但衰退可以被管理。" }
        ]
      },
      ja: {
        eyebrow: "Founder",
        title: "創業理念：健康寿命を家族の長期意思決定へ。",
        description:
          "Medical Family Officeは、経営者と家族が国際医療、長寿管理、重大な健康判断に直面する不確実性に応えるために生まれました。",
        secondaryTitle: "必要なのは、より多くのプログラムではなく、より信頼できる判断です。",
        secondaryDescription:
          "創業チームは、単発消費ではなく、コンプライアンス、秘匿性、リスク管理、長期伴走を重視します。",
        sections: [
          {
            title: "Medical Family Officeを設立した理由",
            body: [
              "多くの経営者は事業が成熟した後、健康リスクが最も制御しにくい変数であることに気づきます。資産、税務、法務は管理されても、健康寿命には専属の助言者が不足しています。",
              "Medical Family Officeは、複雑な医療情報の中で、誰に相談すべきか、何を確認すべきか、どうリスクを評価するかを明確にするために存在します。"
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
              "Medical Family Officeは公開医学専門家情報、ナレッジセンター、研究資料、長期会員制度を継続的に構築します。"
            ]
          }
        ],
        cards: [
          { title: "Mission", body: "Extend Healthspan, Not Just Lifespan. 単なる寿命ではなく、健康寿命を延ばすこと。" },
          { title: "Vision", body: "A Medical Family Office for Every Successful Family. すべての成功した家族に医療ファミリーオフィスを。" },
          { title: "Philosophy", body: "Aging is inevitable. Decline is not. 老化は避けられなくても、衰えは管理できます。" }
        ]
      },
      en: {
        eyebrow: "Founder",
        title: "Founder Perspective: healthspan belongs in long-term family decision-making.",
        description:
          "Medical Family Office was created to address the uncertainty entrepreneurs and families face in cross-border medicine, longevity management, and major health decisions.",
        secondaryTitle: "Clients do not need more programs. They need better judgment.",
        secondaryDescription:
          "Our founding principle is compliance, privacy, risk control, and long-term partnership rather than packaging medical access as a one-off transaction.",
        sections: [
          {
            title: "Why Medical Family Office Exists",
            body: [
              "Many entrepreneurs discover that health risk becomes the least controllable variable precisely when their business and family responsibilities are greatest.",
              "Medical Family Office helps clients navigate complex medical information, understand who to consult, what to ask, and how to evaluate risk."
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
              "Medical Family Office will continue building public medical expert references, knowledge centers, research resources, and long-term membership systems."
            ]
          }
        ],
        cards: [
          { title: "Mission", body: "Extend Healthspan, Not Just Lifespan." },
          { title: "Vision", body: "A Medical Family Office for Every Successful Family." },
          { title: "Philosophy", body: "Aging is inevitable. Decline is not." }
        ]
      }
    }
  },
  "medical-advisory": {
    slug: "medical-advisory",
    metaTitle: "Medical Advisory",
    metaDescription: "Medical Family Office 医疗顾问体系：公开医学专家资料、医疗尽调、质量控制与长期随访机制。",
    image: "/hero-doctor-network.png",
    copies: {
      zh: {
        eyebrow: "Medical Advisory",
        title: "建立医疗顾问体系，而不是销售单一医疗项目。",
        description:
          "Medical Family Office 的医疗顾问体系围绕公开医学专家资料、机构合规、项目审查、资料整理、第二意见和长期随访建立。",
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
              "Medical Family Office 将检查结果、诊疗记录、医生建议和家庭健康目标纳入长期档案，帮助客户持续复盘。"
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
          "Medical Family Officeの医療アドバイザリーは、公開医学専門家情報、医療機関の適法性、プログラム審査、資料整理、セカンドオピニオン、長期フォローに基づきます。",
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
              "Medical Family Officeは検査結果、診療記録、医師助言、家族目標を長期記録に統合します。"
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
          "Medical Family Office's advisory framework is built around public medical expert references, institutional compliance, program review, document preparation, second opinions, and long-term follow-up.",
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
              "Medical Family Office integrates reports, clinical records, physician advice, and family health goals into a long-term archive."
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
