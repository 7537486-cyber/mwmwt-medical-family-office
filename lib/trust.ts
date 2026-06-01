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
        title: "为什么成功家庭需要 Medical Family Office？",
        description:
          "当医疗信息越来越复杂，真正稀缺的不是更多项目，而是能帮助家庭判断风险、选择资源、整理资料并持续跟进的长期顾问体系。",
        secondaryTitle: "传统医疗是生病后找医院；Medical Family Office 是健康时就开始管理。",
        secondaryDescription:
          "AETERA 不替代医生诊断，也不承诺疗效。我们的价值是代表客户进行医疗资源筛选、医生沟通、资料整理、风险说明和长期随访管理。",
        sections: [
          {
            title: "我们的定位",
            body: [
              "我们以 Medical Family Office 的方式工作：像家族办公室管理财富风险一样，帮助客户管理未来数十年的健康风险和重大医疗决策。",
              "我们不直接提供诊断、治疗或疗效承诺。具体医疗服务由持牌医生和合规医疗机构依法提供。"
            ]
          },
          {
            title: "我们解决的真实问题",
            body: [
              "高净值客户往往不缺预算，真正困难的是：我40岁以后如何判断自己老得快不快？一年体检几十万到底该信谁？日本干细胞到底靠不靠谱？父母遇到癌症风险时，应该找谁做第二诊疗意见？企业家如何避免长期高压带来的猝发风险？家庭健康档案应该怎么建立？",
              "Medical Family Office 将医疗资源获取、医学资料整理、跨语言沟通、预约协调、长期健康档案和家庭健康规划整合为一个清晰的服务体系，让客户不再只靠广告、熟人介绍或碎片信息做重大健康决策。"
            ]
          },
          {
            title: "我们的工作方式",
            body: [
              "第一步不是推荐项目，而是理解客户的目标、既往资料、家族史、时间安排、隐私需求和风险承受能力。",
              "随后，我们把问题转化为医生可以判断的医学资料，协助匹配合适的公开专家资源、医院方向、检查路径、第二意见或长期健康管理方案。"
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
          { title: "判断医生与医院", body: "帮助客户核对公开资质、专科方向、资料要求、合规边界与适合场景。" },
          { title: "减少信息不对称", body: "把复杂医学信息、跨语言资料和碎片建议整理为可讨论、可复盘的判断材料。" },
          { title: "建立长期健康档案", body: "把体检、第二意见、治疗记录、指标变化和家庭健康计划纳入持续管理。" }
        ]
      },
      ja: {
        eyebrow: "About Medical Family Office",
        title: "なぜ成功した家族に Medical Family Office が必要なのか。",
        description:
          "医療情報が複雑になるほど、必要なのはより多くのプログラムではなく、リスク、資源、資料整理、継続フォローを支える長期的な助言体系です。",
        secondaryTitle: "従来の医療は病気になってから病院へ行く。Medical Family Office は健康な時から管理を始めます。",
        secondaryDescription:
          "AETERA は診断や治療を代替せず、効果を保証しません。医療資源確認、医師調整、資料整理、リスク説明、長期フォローをお客様側に立って支援します。",
        sections: [
          {
            title: "私たちの位置づけ",
            body: [
              "私たちは Medical Family Office として、資産リスクを管理するファミリーオフィスのように、健康リスクと重要な医療意思決定を支援します。",
              "当社は診断、治療、効果保証を直接提供しません。具体的な医療行為は、資格を持つ医師と適法な医療機関により提供されます。"
            ]
          },
          {
            title: "解決する実際の課題",
            body: [
              "富裕層のお客様にとって難しいのは費用ではありません。40代以降の老化速度をどう見るか、高額な健診をどう判断するか、日本の再生医療をどう確認するか、親世代のがんリスクで誰に相談するか、経営者の高ストレスリスクをどう管理するかが課題です。",
              "Medical Family Office は医療資源アクセス、資料整理、多言語調整、予約、長期健康記録、家族健康計画を一つの体系にまとめ、広告や断片的な紹介だけに頼らない判断を支えます。"
            ]
          },
          {
            title: "私たちの進め方",
            body: [
              "最初に行うのはプログラム提案ではなく、目的、既往資料、家族歴、時間軸、秘匿性、リスク許容度の理解です。",
              "そのうえで、医師が判断しやすい医学資料へ整理し、公開専門家情報、病院方向、検査経路、セカンドオピニオン、長期健康管理の選択肢を調整します。"
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
          { title: "医師と病院の判断", body: "公開資格、専門領域、資料要件、適法性、適した相談場面を確認します。" },
          { title: "情報の非対称性を減らす", body: "複雑な医学情報、多言語資料、断片的な助言を、議論可能な材料へ整理します。" },
          { title: "長期健康記録", body: "健診、セカンドオピニオン、治療記録、指標変化、家族健康計画を継続管理します。" }
        ]
      },
      en: {
        eyebrow: "About Medical Family Office",
        title: "Why successful families need a Medical Family Office.",
        description:
          "As medical information becomes more complex, families do not need more programs. They need a long-term advisory system for risk, resources, records, and follow-up.",
        secondaryTitle: "Traditional healthcare begins after illness. A Medical Family Office begins while health can still be managed.",
        secondaryDescription:
          "AETERA does not replace physicians or promise outcomes. Our role is to help clients evaluate resources, organize records, coordinate physicians, understand risk boundaries, and manage follow-up over time.",
        sections: [
          {
            title: "Our Position",
            body: [
              "We work with the discipline of a family office: helping families manage health risk and major medical decisions with the same care used for wealth, legal, and succession planning.",
              "We do not directly provide diagnosis, treatment, or outcome guarantees. Medical services are provided by licensed physicians and compliant institutions."
            ]
          },
          {
            title: "The Real Problems We Solve",
            body: [
              "For UHNW clients, the hardest question is rarely cost. It is whether aging risk is being tracked, which expensive checkup is worth trusting, whether stem cell-related programs in Japan are compliant, how to seek a cancer second opinion for parents, how founders should manage high-pressure health risk, and how a family health archive should be built.",
              "Medical Family Office integrates medical access, document preparation, multilingual coordination, appointment management, long-term health records, and family health planning so clients do not rely only on advertising, personal introductions, or fragmented information."
            ]
          },
          {
            title: "How We Work",
            body: [
              "The first step is not recommending a program. It is understanding goals, prior records, family history, timing, privacy needs, and risk tolerance.",
              "We then convert concerns into physician-readable medical information and coordinate suitable public expert references, hospital directions, screening pathways, second opinions, or long-term health management options."
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
          { title: "Judge Doctors and Hospitals", body: "Review public credentials, specialty direction, document requirements, compliance boundaries, and suitable use cases." },
          { title: "Reduce Information Asymmetry", body: "Turn complex medical information, multilingual records, and fragmented opinions into reviewable decision material." },
          { title: "Build Long-Term Health Archives", body: "Integrate checkups, second opinions, treatment records, indicators, and family health planning into one system." }
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
        title: "Why I Created AETERA",
        description:
          "40岁以后，我越来越清楚地意识到：很多企业家会用极强的系统能力管理公司、资金和风险，却很少用同样的方式管理健康。",
        secondaryTitle: "我希望建立的，不是一家诊所，而是一套长期陪伴家庭做健康决策的系统。",
        secondaryDescription:
          "日本拥有非常好的医疗资源，但对跨境客户来说，信息、语言、流程、医生选择和风险判断并不透明。AETERA 正是为了解决这种不确定性而存在。",
        sections: [
          {
            title: "从40岁以后开始重新理解时间",
            body: [
              "当一个人进入40岁以后，健康不再只是体检报告上的数字，而会逐渐影响精力、判断力、家庭责任和人生安排。很多企业家最怕的不是花钱，而是在关键时刻不知道该相信谁、该去哪里、该如何判断风险。",
              "对于企业家、高净值家庭和长期承担责任的人来说，真正稀缺的资源从来不是财富，而是时间。更准确地说，是健康的时间。"
            ]
          },
          {
            title: "健康也需要系统思维",
            body: [
              "我接触到越来越多优秀的企业家。他们拥有成功的事业、幸福的家庭和丰富的人生经历。但我也发现一个共同现象：很多人对公司的经营投入巨大精力，却很少用同样的系统思维去管理自己的身体。",
              "事实上，健康和企业一样。需要长期规划，需要风险管理，需要专业顾问，需要持续监测，更需要提前行动。"
            ]
          },
          {
            title: "为什么是日本",
            body: [
              "日本医疗体系稳定、流程克制、检查文化成熟，并且在长寿社会、精密体检、专科诊疗和再生医疗监管方面形成了独特基础。",
              "但好资源并不等于容易获得。跨境客户往往面对语言障碍、资料准备、预约规则、医生匹配、风险说明和隐私安排。AETERA 希望把这些复杂环节变成更清晰、更可管理的路径。"
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
              "AETERA 的诞生，正是基于这样的理念。我们不是一家诊所，也不是一家销售医疗项目的公司。我们的角色更像一个长期医疗顾问团队。",
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
