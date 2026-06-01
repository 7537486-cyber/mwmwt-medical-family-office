import { knowledgeCenters } from "@/lib/knowledge-centers";
import type { Language } from "@/lib/site";

export type KnowledgeFaqItem = {
  id: string;
  centerSlug: string;
  centerLabel: string;
  audienceKey: string;
  publishedAt: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
};

export const FAQ_LIBRARY_UPDATED_AT = "2026-06-01";

const audiences = [
  {
    key: "entrepreneurs",
    zh: "企业家",
    ja: "経営者",
    en: "entrepreneurs",
    zhNeed: "时间稀缺、压力长期存在，最需要把健康判断变成可执行的年度节奏",
    jaNeed: "時間が限られ、長期的なストレスがあるため、健康判断を年次リズムに落とし込む必要があります",
    enNeed: "limited time and persistent pressure make an annual health decision rhythm especially useful"
  },
  {
    key: "founders-over-50",
    zh: "50岁以上创始人",
    ja: "50歳以上の創業者",
    en: "founders over 50",
    zhNeed: "心脑血管、代谢、肿瘤筛查和恢复力更需要提前管理",
    jaNeed: "心血管、代謝、がん検査、回復力を早めに管理する必要があります",
    enNeed: "cardiovascular, metabolic, cancer-screening, and recovery risks need earlier management"
  },
  {
    key: "family-office-clients",
    zh: "家族办公室客户",
    ja: "ファミリーオフィス顧客",
    en: "family office clients",
    zhNeed: "健康决策需要像资产、税务和法律事务一样被长期治理",
    jaNeed: "健康判断も資産、税務、法務と同じように長期管理が必要です",
    enNeed: "health decisions need the same long-term governance as wealth, tax, and legal matters"
  },
  {
    key: "private-banking-clients",
    zh: "私人银行客户",
    ja: "プライベートバンキング顧客",
    en: "private banking clients",
    zhNeed: "更重视隐私、效率、解释质量和跨境资源的可靠性",
    jaNeed: "プライバシー、効率、説明品質、国際医療資源の信頼性が重視されます",
    enNeed: "privacy, efficiency, explanation quality, and reliable cross-border access matter most"
  },
  {
    key: "global-travelers",
    zh: "频繁跨境出行人群",
    ja: "頻繁に国際移動する人",
    en: "frequent global travelers",
    zhNeed: "睡眠、时差、免疫、慢性疲劳和医疗资料连续性容易被打断",
    jaNeed: "睡眠、時差、免疫、慢性疲労、医療記録の連続性が乱れやすくなります",
    enNeed: "sleep, jet lag, immunity, fatigue, and medical-record continuity are easily disrupted"
  },
  {
    key: "parents-and-elders",
    zh: "父母与长辈",
    ja: "親世代と高齢家族",
    en: "parents and elders",
    zhNeed: "慢病、用药、跌倒、认知和照护安排需要更早形成家庭共识",
    jaNeed: "慢性疾患、服薬、転倒、認知、介護計画を早めに家族で共有する必要があります",
    enNeed: "chronic disease, medication, fall risk, cognition, and care planning need earlier family alignment"
  },
  {
    key: "next-generation-family",
    zh: "下一代家庭成员",
    ja: "次世代家族メンバー",
    en: "next-generation family members",
    zhNeed: "压力、睡眠、生育力、代谢和心理恢复力需要更温和但持续的关注",
    jaNeed: "ストレス、睡眠、生殖力、代謝、メンタル回復力を穏やかに継続管理する必要があります",
    enNeed: "stress, sleep, fertility, metabolism, and mental recovery deserve steady attention"
  },
  {
    key: "japan-medical-access",
    zh: "计划赴日医疗客户",
    ja: "訪日医療を検討する顧客",
    en: "clients considering Japan medical access",
    zhNeed: "最需要先判断目标、资料、机构规则和是否真的适合跨境就医",
    jaNeed: "目的、資料、医療機関ルール、国際受診の適合性を先に整理する必要があります",
    enNeed: "goals, records, institution rules, and cross-border suitability should be clarified first"
  },
  {
    key: "longevity-members",
    zh: "长寿管理会员",
    ja: "長寿管理メンバー",
    en: "longevity members",
    zhNeed: "重点不是一次检测，而是长期趋势、复盘和健康寿命策略",
    jaNeed: "一度の検査ではなく、長期トレンド、レビュー、健康寿命戦略が重要です",
    enNeed: "the focus is not one test, but trends, reviews, and healthspan strategy"
  },
  {
    key: "high-net-worth-families",
    zh: "高净值家庭",
    ja: "富裕層ファミリー",
    en: "high-net-worth families",
    zhNeed: "需要把个人健康、家庭决策、隐私保护和国际医疗资源放在同一框架里",
    jaNeed: "個人の健康、家族判断、プライバシー、国際医療資源を一つの枠組みに入れる必要があります",
    enNeed: "personal health, family decisions, privacy, and international resources need one framework"
  }
];

const intents = [
  {
    key: "what-is",
    zhQuestion: (center: string, audience: string) => `${audience}为什么要理解${center}？`,
    jaQuestion: (center: string, audience: string) => `${audience}が${center}を理解すべき理由は何ですか。`,
    enQuestion: (center: string, audience: string) => `Why should ${audience} understand ${center}?`,
    zhAnswer: (center: string, need: string) => `${center}不是一个孤立名词，而是长期健康判断的一部分。对这类客户来说，${need}。`,
    jaAnswer: (center: string, need: string) => `${center}は単独の用語ではなく、長期的な健康判断の一部です。${need}。`,
    enAnswer: (center: string, need: string) => `${center} is not a stand-alone buzzword; it is part of long-term health judgment. For this group, ${need}.`
  },
  {
    key: "checklist",
    zhQuestion: (center: string) => `第一次接触${center}，应该先问哪三个问题？`,
    jaQuestion: (center: string) => `${center}を初めて検討する時、最初に聞くべき3つの質問は何ですか。`,
    enQuestion: (center: string) => `What three questions should come first when considering ${center}?`,
    zhAnswer: () => "先问目标是什么、证据到什么程度、风险和替代方案是什么。能把这三件事讲清楚，后面的选择才不会被营销话术带着走。",
    jaAnswer: () => "目的、証拠レベル、リスクと代替案を先に確認します。この3点が明確になると、宣伝文句に流されにくくなります。",
    enAnswer: () => "Start with the goal, the evidence level, and the risks or alternatives. Clear answers keep the decision from being led by marketing language."
  },
  {
    key: "red-flags",
    zhQuestion: (center: string) => `${center}里有哪些需要警惕的信号？`,
    jaQuestion: (center: string) => `${center}で注意すべきサインは何ですか。`,
    enQuestion: (center: string) => `What red flags matter in ${center}?`,
    zhAnswer: () => "任何保证效果、回避风险、拒绝解释资质或不愿留下正式记录的说法，都需要暂停。高端医疗不是承诺越大越好，而是边界越清楚越可靠。",
    jaAnswer: () => "効果保証、リスク回避、資格説明の不足、正式記録を残さない提案には注意が必要です。高品質な医療ほど境界が明確です。",
    enAnswer: () => "Promises of guaranteed outcomes, vague risk disclosure, unclear qualifications, or no formal documentation are warning signs. Better medical guidance usually has clearer boundaries."
  },
  {
    key: "japan-angle",
    zhQuestion: (center: string) => `日本在${center}方面有什么值得关注？`,
    jaQuestion: (center: string) => `日本の${center}で注目すべき点は何ですか。`,
    enQuestion: (center: string) => `What is worth noting about ${center} in Japan?`,
    zhAnswer: () => "日本的价值通常不在“最快”或“最夸张”，而在流程、记录、医生评估和机构规则。适合重视稳妥、隐私和长期跟进的家庭。",
    jaAnswer: () => "日本の価値は「最速」や「最も派手」ではなく、手順、記録、医師評価、医療機関ルールにあります。",
    enAnswer: () => "Japan's value is often not speed or spectacle, but process, documentation, physician assessment, and institutional rules. That suits families who value discretion and follow-up."
  },
  {
    key: "family-office",
    zhQuestion: (center: string) => `${center}为什么会成为家族办公室议题？`,
    jaQuestion: (center: string) => `${center}はなぜファミリーオフィスの議題になるのですか。`,
    enQuestion: (center: string) => `Why does ${center} become a family office issue?`,
    zhAnswer: () => "因为医疗选择会影响时间、家庭共识、资产安排和长期生活质量。真正重要的不是一次预约，而是决策是否被持续管理。",
    jaAnswer: () => "医療判断は時間、家族合意、資産計画、生活の質に影響します。大切なのは一度の予約ではなく、判断を継続管理することです。",
    enAnswer: () => "Medical choices affect time, family alignment, wealth planning, and quality of life. The real issue is not one appointment, but whether decisions are governed over time."
  },
  {
    key: "not-treatment",
    zhQuestion: (center: string) => `Medical Family Office 会直接提供${center}治疗吗？`,
    jaQuestion: (center: string) => `Medical Family Office は${center}の治療を直接提供しますか。`,
    enQuestion: (center: string) => `Does a Medical Family Office directly provide ${center} treatment?`,
    zhAnswer: () => "不直接提供诊断或治疗。它的角色是帮助客户整理资料、提出关键问题、协调合规医疗资源，并让医生意见变得更容易理解和比较。",
    jaAnswer: () => "診断や治療を直接提供するものではありません。資料整理、重要質問の設計、適切な医療資源の調整、医師意見の理解を支援します。",
    enAnswer: () => "No. It does not directly diagnose or treat. Its role is to organize records, frame key questions, coordinate appropriate resources, and make medical opinions easier to compare."
  },
  {
    key: "timing",
    zhQuestion: (center: string) => `什么时候开始做${center}比较合适？`,
    jaQuestion: (center: string) => `${center}はいつ始めるのが適切ですか。`,
    enQuestion: (center: string) => `When is the right time to start with ${center}?`,
    zhAnswer: () => "最好的时间通常不是症状最严重的时候，而是风险刚开始显现、资料还能完整整理、选择还比较多的时候。越早建立基线，越容易看见趋势。",
    jaAnswer: () => "最適な時期は症状が最も重い時ではなく、リスクが見え始め、資料を整理でき、選択肢が残っている時です。",
    enAnswer: () => "The best time is often before symptoms become severe, when records can still be organized and options remain open. Earlier baselines make trends easier to see."
  },
  {
    key: "documents",
    zhQuestion: (center: string) => `咨询${center}前需要准备什么资料？`,
    jaQuestion: (center: string) => `${center}の相談前に何を準備すべきですか。`,
    enQuestion: (center: string) => `What records should be prepared before discussing ${center}?`,
    zhAnswer: () => "至少准备既往病史、近期体检、用药清单、影像或化验结果，以及你真正想解决的问题。资料越清楚，医生和顾问越能判断下一步是否值得做。",
    jaAnswer: () => "既往歴、最近の健診、服薬、画像や検査結果、そして本当に解決したい質問を準備します。",
    enAnswer: () => "Prepare medical history, recent checkups, medications, imaging or lab results, and the real question you want answered. Better records make next steps clearer."
  },
  {
    key: "membership",
    zhQuestion: (center: string) => `${center}为什么适合放进会员服务，而不是单次咨询？`,
    jaQuestion: (center: string) => `${center}はなぜ単発相談ではなく会員サービスに向いていますか。`,
    enQuestion: (center: string) => `Why does ${center} fit membership better than a one-off consultation?`,
    zhAnswer: () => "因为健康风险会随时间变化。会员制的价值在于持续记录、定期复盘、必要时快速协调资源，而不是每次都从零开始解释身体情况。",
    jaAnswer: () => "健康リスクは時間とともに変わります。会員制の価値は継続記録、定期レビュー、必要時の迅速な調整にあります。",
    enAnswer: () => "Health risk changes over time. Membership adds value through continuity, periodic review, and faster coordination when decisions are needed."
  },
  {
    key: "decision",
    zhQuestion: (center: string) => `${center}最终应该帮助客户做出什么判断？`,
    jaQuestion: (center: string) => `${center}は最終的にどんな判断を助けるべきですか。`,
    enQuestion: (center: string) => `What decision should ${center} ultimately support?`,
    zhAnswer: () => "它应该帮助客户判断：现在是否需要行动、行动的优先级是什么、哪些资源可信、哪些选择可以等待。真正有价值的是确定性，而不是信息量本身。",
    jaAnswer: () => "今行動すべきか、優先順位は何か、信頼できる資源はどれか、待てる選択肢は何かを判断する助けになります。",
    enAnswer: () => "It should clarify whether action is needed now, what should come first, which resources are credible, and which options can wait. Certainty is more valuable than volume."
  }
];

function dateForIndex(index: number) {
  const date = new Date(Date.UTC(2026, 5, 1));
  date.setUTCDate(date.getUTCDate() - (index % 90));
  return date.toISOString().slice(0, 10);
}

export const knowledgeFaqItems: KnowledgeFaqItem[] = knowledgeCenters.flatMap((center, centerIndex) =>
  audiences.flatMap((audience, audienceIndex) =>
    intents.map((intent, intentIndex) => {
      const index = centerIndex * audiences.length * intents.length + audienceIndex * intents.length + intentIndex;
      return {
        id: `${center.slug}-${audience.key}-${intent.key}`,
        centerSlug: center.slug,
        centerLabel: center.label,
        audienceKey: audience.key,
        publishedAt: dateForIndex(index),
        question: {
          zh: intent.zhQuestion(center.title.zh, audience.zh),
          ja: intent.jaQuestion(center.title.ja, audience.ja),
          en: intent.enQuestion(center.title.en, audience.en)
        },
        answer: {
          zh: intent.zhAnswer(center.title.zh, audience.zhNeed),
          ja: intent.jaAnswer(center.title.ja, audience.jaNeed),
          en: intent.enAnswer(center.title.en, audience.enNeed)
        }
      };
    })
  )
);

export function getFaqByCenter(centerSlug: string) {
  return knowledgeFaqItems.filter((item) => item.centerSlug === centerSlug);
}
