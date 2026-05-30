import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "医生网络",
  description:
    "日本顶级医生简历与专科网络，覆盖再生医疗、肿瘤、心血管、神经科、内分泌与运动医学。"
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
          title: "Japan top doctor profiles and specialist collaboration network",
          secondaryTitle: "Verified specialist intelligence for referral decisions",
          description:
            "A searchable and diligence-ready specialist archive across regenerative medicine, oncology, cardiovascular care, neurology, endocrinology, and sports medicine.",
          secondaryDescription:
            "Profiles are organized from public information and structured around education, society activity, research fields, publications, and appropriate case scenarios.",
          cta: "Build doctor matching",
          diligenceTitle:
            "A doctor network is not a list. It is decision-grade referral intelligence.",
          diligenceItems: ["Public profile verification", "Research and publication focus", "Appropriate case scenarios"],
          diligenceBody:
            "We confirm specialty fit, institution rules, language workflow, and document requirements before moving into appointments or second-opinion communication.",
          profileCta: "View full profile",
          accessLabel: "Professional Positioning",
          accessTitle: "The doctor network is a professional resource archive, not a sales page.",
          accessBody:
            "We continuously build a cross-specialty physician network to support long-term medical resource matching and health risk management for high-net-worth families. Physician pages present public background information and referral context only.",
          categoriesLabel: "Network Categories",
          categoriesTitle: "Specialty areas under continuous development",
          disclaimer:
            "Doctor profiles do not constitute medical advertising, treatment recommendation, or outcome commitment. Referral availability and cooperation identity must be confirmed case by case."
        }
      : lang === "ja"
        ? {
            title: "日本トップドクターの専門家ネットワーク",
            secondaryTitle: "紹介判断のための検証可能な専門医情報",
            description:
              "再生医療、腫瘍、心血管、神経内科、内分泌、スポーツ医学を横断し、検索・確認・紹介準備に使える専門医プロフィールを整理します。",
            secondaryDescription:
              "公開情報を基に、学歴、学会活動、研究領域、論文、適応シーンを確認できる形で管理します。",
            cta: "医師マッチングを相談",
            diligenceTitle: "医師ネットワークは名簿ではなく、紹介判断のための専門情報です。",
            diligenceItems: ["公開プロフィール確認", "研究・論文領域", "適した相談シーン"],
            diligenceBody:
              "予約やセカンドオピニオンに進む前に、専門性、医療機関の規定、言語対応、必要資料を確認します。",
            profileCta: "詳しいプロフィール",
            accessLabel: "専門的な位置づけ",
            accessTitle: "医師ページは販売ページではなく、専門履歴と医療資源紹介ページです。",
            accessBody:
              "富裕層家族の長期的な医療資源マッチングと健康リスク管理を支えるため、分野横断の医師ネットワークを継続的に構築します。",
            categoriesLabel: "専門領域分類",
            categoriesTitle: "継続的に整備する専門領域",
            disclaimer:
              "医師プロフィールは医療広告、診断助言、治療効果の保証ではありません。紹介可否や協力形態は個別に確認が必要です。"
          }
      : {
          title: "日本顶级医生简历与专科协作网络",
          secondaryTitle: "用于转诊决策的可核验专家资料",
          description:
            "围绕再生医疗、肿瘤、心血管、神经科、内分泌与运动医学，建立可检索、可尽调、可转诊沟通的专家档案。",
          secondaryDescription:
            "基于公开资料整理医生履历、学会活动、研究领域、代表论文与适配场景，帮助客户在转诊前做更冷静的判断。",
          cta: "建立医生匹配",
          diligenceTitle: "医生网络不是名单，而是可验证的转诊决策资料",
          diligenceItems: ["公开履历核验", "论文与研究方向", "适配案例场景"],
          diligenceBody:
            "先确认医生专长、机构规则、语言流程与资料要求，再决定是否进入预约或第二意见沟通。",
          profileCta: "查看完整简历",
          accessLabel: "专业定位",
          accessTitle: "医生页面不是销售页，而是专业履历页与医疗资源介绍页。",
          accessBody:
            "我们持续建立跨领域医生网络，为高净值家庭提供长期医疗资源匹配与健康风险管理。页面只呈现公开背景、专科方向与适配场景，不暗示疗效保证。",
          categoriesLabel: "医生分类规划",
          categoriesTitle: "持续建立的跨领域医生网络",
          disclaimer:
            "医生档案不构成医疗广告、诊断建议或治疗承诺。医生当前任职、接诊规则、合作身份与机构准入要求，均需在正式转诊前再次核验。"
        };
  const categories = [
    ["再生医疗 / 抗衰", "20"],
    ["肿瘤", "20"],
    ["心血管", "15"],
    ["神经科", "15"],
    ["内分泌 / 代谢", "15"],
    ["运动医学 / 康复", "10"],
    ["综合体检 / 预防医学", "5"]
  ];

  return (
    <>
      <PageHero
        eyebrow="Doctor Network"
        title={hero.title}
        secondaryTitle={hero.secondaryTitle}
        description={hero.description}
        secondaryDescription={hero.secondaryDescription}
        cta={hero.cta}
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
                  {doctor.specialty}
                </p>
                <h2 className="mt-5 font-serif text-3xl leading-tight text-ink">
                  {doctor.name}
                </h2>
                <p className="mt-2 text-lg text-jade">{doctor.jaName}</p>
                <p className="mt-5 text-sm font-semibold leading-6 text-graphite">
                  {doctor.institution}
                </p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">
                  {doctor.summary}
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
