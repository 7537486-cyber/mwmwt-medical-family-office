import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "公开医学专家资料库",
  description:
    "基于公开学术与职业资料整理的医学专家参考数据库，用于医学资源研究、专科方向理解与转诊前准备。"
};

const categorySets = {
  zh: [
    ["再生医疗 / 抗衰", "公开资料"],
    ["肿瘤", "公开资料"],
    ["心血管", "公开资料"],
    ["神经科", "公开资料"],
    ["内分泌 / 代谢", "公开资料"],
    ["运动医学 / 康复", "公开资料"],
    ["综合体检 / 预防医学", "公开资料"]
  ],
  ja: [
    ["再生医療 / 抗加齢", "公開情報"],
    ["腫瘍", "公開情報"],
    ["心血管", "公開情報"],
    ["神経内科", "公開情報"],
    ["内分泌 / 代謝", "公開情報"],
    ["スポーツ医学 / リハビリ", "公開情報"],
    ["総合健診 / 予防医学", "公開情報"]
  ],
  en: [
    ["Regenerative / Anti-aging", "Public"],
    ["Oncology", "Public"],
    ["Cardiovascular", "Public"],
    ["Neurology", "Public"],
    ["Endocrinology / Metabolism", "Public"],
    ["Sports Medicine / Rehabilitation", "Public"],
    ["Executive Screening / Preventive Medicine", "Public"]
  ]
};

export default function DoctorNetworkPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const image = serviceImages["doctor-network"];
  const hero =
    lang === "en"
      ? {
          title: "Public Medical Expert Database",
          secondaryTitle: "Based on public academic and professional information",
          description:
            "A reference database for medical resource research, specialty understanding, and pre-referral preparation across regenerative medicine, oncology, cardiovascular care, neurology, endocrinology, and sports medicine.",
          secondaryDescription:
            "These profiles do not imply employment by MWMWT, confirmed cooperation, endorsement, or current availability.",
          cta: "Request referral preparation",
          diligenceTitle:
            "Public information is only the starting point for referral diligence.",
          diligenceItems: ["Public profile verification", "Research and publication focus", "Appropriate case scenarios"],
          diligenceBody:
            "We confirm specialty fit, institution rules, language workflow, and document requirements before moving into appointments or second-opinion communication.",
          profileCta: "View full profile",
          cardSpecialty: "Specialist Profile",
          cardSummary:
            "Public background, research focus, and referral context are organized for pre-referral review. Current availability and cooperation status are confirmed case by case.",
          accessLabel: "Professional Positioning",
          accessTitle: "The database is a public reference layer, not a team roster.",
          accessBody:
            "MWMWT uses public academic and professional information to support specialist research, medical resource mapping, and referral preparation. A listed physician should not be understood as an MWMWT employee, team member, confirmed partner, or guaranteed referral option.",
          categoriesLabel: "Network Categories",
          categoriesTitle: "Specialty areas under continuous development",
          disclaimer:
            "Based on public academic and professional information. Doctor profiles do not constitute medical advertising, treatment recommendation, endorsement, or outcome commitment. Referral availability and cooperation identity must be confirmed case by case."
        }
      : lang === "ja"
        ? {
            title: "公開医学専門家データベース",
            secondaryTitle: "公開された学術・職業情報に基づく参考資料",
            description:
              "再生医療、腫瘍、心血管、神経内科、内分泌、スポーツ医学を横断し、医療資源調査、専門領域の理解、紹介前準備に使う参考データベースです。",
            secondaryDescription:
              "掲載情報は、MWMWTのチームメンバー、提携確定、推薦、現在の受診可否を意味しません。",
            cta: "紹介前準備を相談",
            diligenceTitle: "公開情報は、紹介前確認の出発点です。",
            diligenceItems: ["公開プロフィール確認", "研究・論文領域", "適した相談シーン"],
            diligenceBody:
              "予約やセカンドオピニオンに進む前に、専門性、医療機関の規定、言語対応、必要資料を確認します。",
            profileCta: "詳しいプロフィール",
            cardSpecialty: "専門医プロフィール",
            cardSummary:
              "公開履歴、研究領域、紹介前の確認ポイントを整理しています。現在の受診可否と協力形態は個別に確認します。",
            accessLabel: "専門的な位置づけ",
            accessTitle: "このデータベースは公開参考資料であり、チーム名簿ではありません。",
            accessBody:
              "MWMWTは公開された学術・職業情報を用いて、専門医調査、医療資源の整理、紹介前準備を支援します。掲載医師はMWMWTの従業員、チームメンバー、提携確定先、受診保証先ではありません。",
            categoriesLabel: "専門領域分類",
            categoriesTitle: "継続的に整備する専門領域",
            disclaimer:
              "Based on public academic and professional information. 医師プロフィールは医療広告、診断助言、推薦、治療効果の保証ではありません。紹介可否や協力形態は個別に確認が必要です。"
          }
      : {
          title: "公开医学专家资料库",
          secondaryTitle: "基于公开学术与职业资料整理",
          description:
            "围绕再生医疗、肿瘤、心血管、神经科、内分泌与运动医学，整理用于医学资源研究、专科方向理解与转诊前准备的公开专家资料。",
          secondaryDescription:
            "页面不代表医生为 MWMWT 团队成员，不代表已确认合作、推荐背书或当前可接诊。",
          cta: "咨询转诊前准备",
          diligenceTitle: "公开资料只是转诊尽调的起点",
          diligenceItems: ["公开履历核验", "论文与研究方向", "适配案例场景"],
          diligenceBody:
            "先确认医生专长、机构规则、语言流程与资料要求，再决定是否进入预约或第二意见沟通。",
          profileCta: "查看完整简历",
          cardSpecialty: "专家资料",
          cardSummary: "",
          accessLabel: "专业定位",
          accessTitle: "这是公开参考资料层，不是 MWMWT 团队名单。",
          accessBody:
            "MWMWT 基于公开学术与职业信息整理专家资料，用于医学资源研究、专科方向理解和转诊前准备。页面出现的医生不应被理解为 MWMWT 员工、团队成员、已确认合作医生或保证可接诊资源。",
          categoriesLabel: "专科资料方向",
          categoriesTitle: "持续整理的公开专家资料",
          disclaimer:
            "Based on public academic and professional information. 医生档案不构成医疗广告、诊断建议、推荐背书或治疗承诺。医生当前任职、接诊规则、合作身份与机构准入要求，均需在正式转诊前再次核验。"
        };
  const categories = categorySets[lang];

  return (
    <>
      <PageHero
        eyebrow="Medical Reference Network"
        title={hero.title}
        secondaryTitle={hero.secondaryTitle}
        description={hero.description}
        secondaryDescription={hero.secondaryDescription}
        cta={hero.cta}
        ctaHref={withLanguage("/contact", lang)}
        image={image}
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {hero.accessLabel}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {hero.accessTitle}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-graphite/72">{hero.accessBody}</p>
            <p className="mt-8 border-l border-champagne pl-5 text-sm leading-7 text-graphite/66">
              {hero.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {doctorProfiles.map((doctor) => (
            <Link
              key={doctor.slug}
              href={withLanguage(`/doctors/${doctor.slug}`, lang)}
              className="group flex min-h-[28rem] flex-col justify-between border border-mist bg-white/70 p-7 shadow-sm transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {lang === "zh" ? doctor.specialty : hero.cardSpecialty}
                </p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink">
                  {doctor.name}
                </h2>
                {lang !== "en" ? <p className="mt-2 text-lg text-jade">{doctor.jaName}</p> : null}
                <p className="mt-5 text-sm font-semibold leading-6 text-graphite">
                  {doctor.institution}
                </p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">
                  {lang === "zh" ? doctor.summary : hero.cardSummary}
                </p>
              </div>
              <span className="mt-8 inline-flex text-sm font-semibold text-jade">
                {hero.profileCta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Diligence Standard
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {hero.diligenceTitle}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {hero.diligenceItems.map((item) => (
              <div key={item} className="border-t border-champagne/50 pt-6">
                <p className="text-xl font-semibold text-ink">{item}</p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">
                  {hero.diligenceBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {hero.categoriesLabel}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {hero.categoriesTitle}
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden border border-mist bg-mist md:grid-cols-2">
            {categories.map(([field, count]) => (
              <div key={field} className="flex items-center justify-between gap-6 bg-white p-6">
                <p className="text-base font-semibold text-ink">{field}</p>
                <p className="font-serif text-3xl text-champagne">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
