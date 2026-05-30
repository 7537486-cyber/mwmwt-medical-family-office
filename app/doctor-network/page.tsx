import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { doctorProfiles } from "@/lib/doctors";
import { normalizeLanguage, withLanguage } from "@/lib/site";

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

  return (
    <>
      <PageHero
        eyebrow="Doctor Network"
        title="日本顶级医生简历与专科协作网络"
        secondaryTitle="日本トップドクターの専門家ネットワーク"
        description="围绕再生医疗、肿瘤、心血管、神经科、内分泌与运动医学，建立可检索、可尽调、可转诊沟通的专家档案。"
        secondaryDescription="公開情報に基づく医師プロフィールを整理し、学歴、学会活動、研究領域、論文、適応シーンを確認できる形で管理します。"
        cta="建立医生匹配"
      />

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {doctorProfiles.map((doctor) => (
            <Link
              key={doctor.slug}
              href={withLanguage(`/doctor-network/${doctor.slug}`, lang)}
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
                查看完整简历 →
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
              医生网络不是名单，而是可验证的转诊决策资料
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {["公开履历核验", "论文与研究方向", "适配案例场景"].map((item) => (
              <div key={item} className="border-t border-champagne/50 pt-6">
                <p className="text-xl font-semibold text-ink">{item}</p>
                <p className="mt-4 text-sm leading-7 text-graphite/72">
                  先确认医生专长、机构规则、语言流程与资料要求，再决定是否进入预约或第二意见沟通。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
