import type { Language } from "@/lib/site";

export type LegalSection = {
  title: string;
  body: string[];
};

export type LegalPageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  copies: Record<
    Language,
    {
      eyebrow: string;
      title: string;
      description: string;
      updated: string;
      note: string;
      sections: LegalSection[];
    }
  >;
};

export const legalPages: Record<string, LegalPageContent> = {
  "privacy-policy": {
    slug: "privacy-policy",
    metaTitle: "隐私政策",
    metaDescription: "隐私政策，说明咨询信息、健康资料与跨境医疗协调过程中的资料处理原则。",
    copies: {
      zh: {
        eyebrow: "Privacy Policy",
        title: "隐私政策",
        description:
          "我们理解健康资料、家族信息与跨境医疗需求具有高度敏感性。本政策说明我们在网站咨询、初步沟通与服务协调中如何处理个人信息。",
        updated: "最后更新：2026年5月31日",
        note: "正式服务开始前，具体资料传输、授权范围与保密安排将以双方确认的服务文件为准。",
        sections: [
          {
            title: "我们可能收集的信息",
            body: [
              "称呼、联系方式、咨询方向、家庭成员情况、时间安排、既往体检或医疗资料摘要。",
              "您主动提供的健康目标、既往病史、用药情况、影像或检查报告等资料。",
              "网站访问过程中产生的基础技术信息，例如访问时间、设备类型和浏览器信息。"
            ]
          },
          {
            title: "信息使用目的",
            body: [
              "用于确认咨询适配度、整理问题清单、沟通服务范围和安排后续介绍会议。",
              "在获得授权后，用于医疗资料整理、翻译、预约协调、专家沟通或长期健康档案管理。",
              "我们不会出售个人信息，也不会将健康资料用于与服务无关的营销用途。"
            ]
          },
          {
            title: "健康资料与跨境协调",
            body: [
              "首次公开表单不要求上传完整病历或高度敏感文件。",
              "如后续需要传输病历、影像或基因检测等资料，将先确认服务范围、授权方式和安全传输路径。",
              "在您授权后，我们可能与医生、医疗机构、翻译、出行协调人员或相关专业顾问共享必要资料。"
            ]
          },
          {
            title: "您的权利",
            body: [
              "您可以要求查看、更正、限制使用或删除您提供的个人信息。",
              "您可以撤回对后续资料处理的授权，但这可能影响相关服务继续推进。",
              "如需处理隐私相关请求，可通过网站联系页面与我们取得联系。"
            ]
          }
        ]
      },
      ja: {
        eyebrow: "Privacy Policy",
        title: "プライバシーポリシー",
        description:
          "健康情報、家族情報、国際医療に関する相談内容は高度に機微な情報です。本方針では個人情報の取扱いを説明します。",
        updated: "最終更新：2026年5月31日",
        note: "正式なサービス開始前には、資料共有、権限範囲、秘密保持の詳細を個別に確認します。",
        sections: [
          {
            title: "取得する可能性のある情報",
            body: [
              "お名前、ご連絡先、ご相談内容、ご家族の状況、希望時期、医療資料の概要。",
              "お客様が任意で提供する健康目標、既往歴、服薬情報、画像、検査報告など。",
              "アクセス日時、端末種類、ブラウザ情報などの基本的な技術情報。"
            ]
          },
          {
            title: "利用目的",
            body: [
              "相談内容の適合性確認、質問リスト作成、サービス範囲の説明、初回面談の調整。",
              "許可を得たうえでの医療資料整理、翻訳、予約調整、専門医との連絡、長期健康記録の管理。",
              "個人情報を販売することはなく、健康情報をサービスと無関係なマーケティングに使用しません。"
            ]
          },
          {
            title: "健康情報と国際調整",
            body: [
              "初回の公開フォームでは、完全な病歴や高度に機微な資料の提出を求めません。",
              "病歴、画像、遺伝子検査などを扱う必要がある場合は、先にサービス範囲、権限、安全な送付方法を確認します。",
              "お客様の許可を得た場合に限り、医師、医療機関、通訳、移動調整担当者と必要情報を共有することがあります。"
            ]
          },
          {
            title: "お客様の権利",
            body: [
              "提供した個人情報について、確認、訂正、利用制限、削除を求めることができます。",
              "資料取扱いの許可を撤回できますが、関連サービスの継続に影響する場合があります。",
              "プライバシーに関するご依頼は、お問い合わせページよりご連絡ください。"
            ]
          }
        ]
      },
      en: {
        eyebrow: "Privacy Policy",
        title: "Privacy Policy",
        description:
          "Health records, family information, and cross-border medical needs are highly sensitive. This policy explains how we handle personal information.",
        updated: "Last updated: May 31, 2026",
        note: "Before formal service begins, document transfer, authorization scope, and confidentiality arrangements will be confirmed separately.",
        sections: [
          {
            title: "Information We May Collect",
            body: [
              "Name, contact details, inquiry type, family context, timing, and summaries of existing health or medical records.",
              "Health goals, medical history, medication information, imaging, test reports, or other information voluntarily provided by you.",
              "Basic technical information such as access time, device type, and browser information."
            ]
          },
          {
            title: "How We Use Information",
            body: [
              "To review inquiry fit, prepare question lists, explain service scope, and arrange an introductory meeting.",
              "With authorization, to organize medical records, translate documents, coordinate appointments, communicate with specialists, or manage long-term health records.",
              "We do not sell personal information or use health records for unrelated marketing."
            ]
          },
          {
            title: "Health and Cross-Border Coordination",
            body: [
              "We do not ask for complete medical records or highly sensitive files in the initial public form.",
              "If medical records, imaging, genetic tests, or similar materials are needed later, we first confirm service scope, authorization, and secure transfer method.",
              "With authorization, we may share necessary information with physicians, medical institutions, interpreters, travel coordinators, or advisors."
            ]
          },
          {
            title: "Your Rights",
            body: [
              "You may request access, correction, restriction, or deletion of personal information you provide.",
              "You may withdraw authorization for further processing, which may affect the continuation of related services.",
              "Privacy requests can be submitted through the contact page."
            ]
          }
        ]
      }
    }
  },
  "medical-disclaimer": {
    slug: "medical-disclaimer",
    metaTitle: "医疗免责声明",
    metaDescription: "医疗免责声明，说明本网站内容不构成诊断、治疗建议或疗效承诺。",
    copies: {
      zh: {
        eyebrow: "Medical Disclaimer",
        title: "医疗免责声明",
        description: "本网站提供医疗资源协调、健康管理和医学知识介绍，不提供诊断、治疗或任何疗效承诺。",
        updated: "最后更新：2026年5月31日",
        note: "如您存在急症、重症或需要立即处理的医疗情况，请直接联系当地急救系统或持牌医疗机构。",
        sections: [
          {
            title: "不是医疗诊断或治疗建议",
            body: [
              "本网站内容仅用于服务介绍、医学知识教育和资源协调说明。",
              "任何页面、文章、医生资料或案例说明均不应被理解为个人诊断、治疗建议或替代医生面诊。",
              "具体诊疗方案必须由持牌医生结合个人情况、检查结果和机构规则作出判断。"
            ]
          },
          {
            title: "我们不是医院或诊所",
            body: [
              "Japan Medical Family Office 不是医院、诊所或直接医疗服务提供者。",
              "我们的角色是代表客户进行医疗资源筛选、资料整理、预约协调、翻译沟通和长期健康管理支持。",
              "医生、医院、检查机构和治疗机构的医疗行为由其自身依法负责。"
            ]
          },
          {
            title: "不作疗效承诺",
            body: [
              "我们不承诺治愈、逆转疾病、逆转衰老、延长寿命或保证任何医学结果。",
              "再生医疗、长寿医学、干细胞、外泌体、生物年龄检测等内容均需结合证据等级、适应症、禁忌和个体差异进行判断。",
              "任何医疗选择均存在不确定性和风险。"
            ]
          }
        ]
      },
      ja: {
        eyebrow: "Medical Disclaimer",
        title: "医療免責事項",
        description: "本サイトは医療資源調整、健康管理、医療知識の紹介を目的としており、診断、治療、効果保証を提供するものではありません。",
        updated: "最終更新：2026年5月31日",
        note: "緊急、重症、直ちに対応が必要な医療状況では、地域の救急機関または医療機関へ直接ご連絡ください。",
        sections: [
          {
            title: "診断や治療助言ではありません",
            body: [
              "本サイトの内容はサービス紹介、医療知識の教育、資源調整の説明を目的としています。",
              "ページ、記事、医師情報、ケース説明は、個別診断、治療助言、医師診察の代替として解釈されるべきではありません。",
              "具体的な診療方針は、医師が個別状況、検査結果、医療機関規定に基づいて判断します。"
            ]
          },
          {
            title: "当社は病院・診療所ではありません",
            body: [
              "Japan Medical Family Office は病院、診療所、直接の医療提供者ではありません。",
              "当社の役割は、医療資源の確認、資料整理、予約調整、翻訳、長期健康管理支援です。",
              "医師、病院、検査機関、治療機関の医療行為は、それぞれの機関と医師が責任を負います。"
            ]
          },
          {
            title: "効果を保証しません",
            body: [
              "治癒、疾患の改善、老化の逆転、寿命延伸、医学的結果を保証するものではありません。",
              "再生医療、長寿医学、幹細胞、エクソソーム、生物学的年齢検査などは、根拠レベル、適応、禁忌、個人差を踏まえて判断されます。",
              "すべての医療選択には不確実性とリスクがあります。"
            ]
          }
        ]
      },
      en: {
        eyebrow: "Medical Disclaimer",
        title: "Medical Disclaimer",
        description: "This website introduces medical resource coordination, health management, and educational medical information. It does not provide diagnosis, treatment, or outcome guarantees.",
        updated: "Last updated: May 31, 2026",
        note: "If you have an emergency, severe symptoms, or a condition requiring immediate care, contact local emergency services or a licensed medical institution directly.",
        sections: [
          {
            title: "Not Medical Diagnosis or Treatment Advice",
            body: [
              "Website content is for service introduction, medical education, and resource coordination explanation only.",
              "Pages, articles, physician profiles, or case descriptions should not be understood as personal diagnosis, treatment advice, or a substitute for physician consultation.",
              "Specific medical decisions must be made by licensed physicians based on individual circumstances, test results, and institution rules."
            ]
          },
          {
            title: "We Are Not a Hospital or Clinic",
            body: [
              "Japan Medical Family Office is not a hospital, clinic, or direct medical provider.",
              "Our role is to support medical resource review, document preparation, appointment coordination, interpretation, and long-term health management.",
              "Medical acts by physicians, hospitals, testing institutions, or treatment providers remain the responsibility of those licensed parties."
            ]
          },
          {
            title: "No Outcome Guarantee",
            body: [
              "We do not promise cure, disease reversal, aging reversal, lifespan extension, or any medical result.",
              "Regenerative medicine, longevity medicine, stem cells, exosomes, biological age testing, and related topics must be assessed through evidence level, indication, contraindication, and individual differences.",
              "All medical choices involve uncertainty and risk."
            ]
          }
        ]
      }
    }
  },
  "terms-of-service": {
    slug: "terms-of-service",
    metaTitle: "服务条款",
    metaDescription: "服务条款，说明网站使用、咨询范围、服务边界与客户责任。",
    copies: {
      zh: {
        eyebrow: "Terms of Service",
        title: "服务条款",
        description: "本条款说明您使用本网站、提交咨询和接受后续服务协调时的一般规则与服务边界。",
        updated: "最后更新：2026年5月31日",
        note: "具体付费服务、费用、交付物、取消规则和保密安排，将以双方确认的服务文件或协议为准。",
        sections: [
          {
            title: "咨询与适配度确认",
            body: [
              "提交咨询不代表我们已接受委托或承诺能够安排特定医生、医院、检查或治疗。",
              "我们会先根据需求、资料完整度、时间安排、合规边界和医学风险确认是否适合进入下一步。",
              "如需求超出服务范围、涉及不合规要求或存在重大风险，我们可能拒绝或暂停推进。"
            ]
          },
          {
            title: "客户责任",
            body: [
              "您应尽量提供真实、完整、及时的健康资料、既往病史、用药信息和相关文件。",
              "您应理解跨境医疗存在等待周期、机构规则、语言流程、费用变化和医学不确定性。",
              "法律、税务、保险、签证和支付等非医疗事项应由您或相关专业顾问确认。"
            ]
          }
        ]
      },
      ja: {
        eyebrow: "Terms of Service",
        title: "利用規約",
        description: "本規約は、本サイトの利用、相談送信、サービス調整に関する一般的なルールとサービス境界を説明します。",
        updated: "最終更新：2026年5月31日",
        note: "有料サービス、費用、成果物、キャンセル条件、秘密保持の詳細は、個別に確認されるサービス文書または契約に従います。",
        sections: [
          {
            title: "相談と適合性確認",
            body: [
              "相談の送信は、特定の医師、病院、検査、治療を手配できることを意味しません。",
              "相談内容、資料の完全性、時期、規制境界、医学的リスクを確認したうえで次のステップを判断します。",
              "サービス範囲外、不適切な要求、重大なリスクがある場合、進行をお断りまたは停止することがあります。"
            ]
          },
          {
            title: "お客様の責任",
            body: [
              "健康資料、既往歴、服薬情報、関連文書をできるだけ正確、完全、適時に提供してください。",
              "国際医療には待機期間、医療機関規定、言語プロセス、費用変動、医学的不確実性があることをご理解ください。",
              "法律、税務、保険、ビザ、支払いなど医療以外の事項は、ご自身または専門家と確認してください。"
            ]
          }
        ]
      },
      en: {
        eyebrow: "Terms of Service",
        title: "Terms of Service",
        description: "These terms explain general rules and service boundaries for using this website, submitting inquiries, and receiving service coordination.",
        updated: "Last updated: May 31, 2026",
        note: "Specific paid services, fees, deliverables, cancellation terms, and confidentiality arrangements are governed by separately confirmed service documents or agreements.",
        sections: [
          {
            title: "Inquiry and Fit Review",
            body: [
              "Submitting an inquiry does not mean we have accepted an engagement or can arrange a specific physician, hospital, test, or treatment.",
              "We first review needs, document completeness, timing, compliance boundaries, and medical risk before deciding whether to proceed.",
              "If a request is outside scope, non-compliant, or high risk, we may decline or pause the process."
            ]
          },
          {
            title: "Client Responsibilities",
            body: [
              "You should provide accurate, complete, and timely health information, medical history, medication details, and related documents.",
              "You should understand that cross-border medical coordination involves waiting periods, institution rules, language process, cost changes, and medical uncertainty.",
              "Legal, tax, insurance, visa, and payment matters should be reviewed by you or appropriate professional advisors."
            ]
          }
        ]
      }
    }
  },
  compliance: {
    slug: "compliance",
    metaTitle: "合规与医疗治理",
    metaDescription: "合规与医疗治理原则，说明机构审核、医生评估、质量控制与长期随访框架。",
    copies: {
      zh: {
        eyebrow: "Compliance",
        title: "合规与医疗治理",
        description: "我们以医疗家族办公室的方式，围绕机构审核、医生评估、方案边界、过程记录和长期随访建立医疗治理框架。",
        updated: "最后更新：2026年5月31日",
        note: "以下为一般治理原则，不代表任何特定国家或地区的法律意见。具体项目需结合当地法规、机构规则和医生判断确认。",
        sections: [
          {
            title: "机构审核",
            body: [
              "在进入协调前，关注医疗机构资质、许可范围、国际患者规则、费用结构和责任边界。",
              "涉及再生医疗、细胞相关项目或高风险医学领域时，需特别确认监管路径、备案情况和适应症边界。"
            ]
          },
          {
            title: "医生评估",
            body: [
              "医生资料应基于公开履历、当前任职、专科能力、学术资料、学会活动和机构规则进行核验。",
              "医生页面仅作为专业背景介绍，不等于合作确认、推荐或治疗承诺。"
            ]
          },
          {
            title: "长期随访",
            body: [
              "高净值家庭需要的不只是一次就医安排，而是可复盘的长期健康决策系统。",
              "我们支持建立健康档案、复查节奏、年度回顾、重大疾病预案和跨境医疗资料管理。"
            ]
          }
        ]
      },
      ja: {
        eyebrow: "Compliance",
        title: "コンプライアンスと医療ガバナンス",
        description: "医療ファミリーオフィスとして、医療機関審査、医師評価、方案境界、記録管理、長期フォローを含む医療ガバナンスを構築します。",
        updated: "最終更新：2026年5月31日",
        note: "以下は一般的なガバナンス方針であり、特定国・地域の法律助言ではありません。個別案件は現地法令、医療機関規定、医師判断に基づき確認されます。",
        sections: [
          {
            title: "医療機関審査",
            body: [
              "調整前に、医療機関の資格、許可範囲、国際患者対応、費用構造、責任境界を確認します。",
              "再生医療、細胞関連、高リスク医学領域では、規制ルート、届出状況、適応境界を特に確認します。"
            ]
          },
          {
            title: "医師評価",
            body: [
              "医師情報は、公開履歴、現在の所属、専門能力、学術資料、学会活動、医療機関規定に基づいて確認します。",
              "医師ページは専門背景の紹介であり、協力確定、推薦、治療効果の約束ではありません。"
            ]
          },
          {
            title: "長期フォロー",
            body: [
              "富裕層家族に必要なのは単発の受診手配ではなく、レビュー可能な長期健康意思決定システムです。",
              "健康記録、再検査頻度、年次レビュー、重大疾患対応、国際医療資料管理を支援します。"
            ]
          }
        ]
      },
      en: {
        eyebrow: "Compliance",
        title: "Compliance and Medical Governance",
        description: "As a Medical Family Office, we build a governance framework around institution review, physician assessment, service boundaries, process records, and long-term follow-up.",
        updated: "Last updated: May 31, 2026",
        note: "The following are general governance principles and not legal advice for any specific jurisdiction. Individual matters must be reviewed under local laws, institution rules, and physician judgment.",
        sections: [
          {
            title: "Institution Review",
            body: [
              "Before coordination, we review institution credentials, permitted scope, international patient rules, fee structure, and responsibility boundaries.",
              "For regenerative medicine, cell-related services, or high-risk medical areas, regulatory route, filing status, and indication boundaries require special attention."
            ]
          },
          {
            title: "Physician Assessment",
            body: [
              "Physician information should be checked against public background, current role, specialty capability, academic materials, society activity, and institution rules.",
              "Physician pages introduce professional background only and do not mean confirmed cooperation, recommendation, or treatment commitment."
            ]
          },
          {
            title: "Long-Term Follow-up",
            body: [
              "High-net-worth families need more than a one-time appointment; they need a reviewable long-term health decision system.",
              "We support health archives, retesting rhythm, annual reviews, critical illness protocols, and cross-border medical record management."
            ]
          }
        ]
      }
    }
  }
};
