import Image from "next/image";
import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { homeServices } from "@/lib/site";

const metrics = [
  ["01", "日本本地医疗资源协调"],
  ["02", "中日双语家庭健康顾问"],
  ["03", "长期健康档案与年度复盘"]
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-pearl">
        <Image
          src="/hero-longevity-concierge.png"
          alt="Luxury Tokyo medical family office lounge"
          fill
          priority
          className="object-cover object-center opacity-72"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,20,18,0.2),rgba(18,20,18,0.72))]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-44 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">
            Japan Medical Family Office
          </p>
          <h1 className="mt-7 max-w-5xl font-serif text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
            为中国高净值家庭连接日本先进医疗与长寿管理
          </h1>
          <div className="mt-8 grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <p className="text-lg leading-9 text-pearl/78">
              我们提供再生医疗咨询、抗衰项目、精密体检、第二诊疗意见、海外转诊与长期家庭健康规划。以私行式礼宾与医学顾问体系，让跨境医疗决策更安静、更审慎、更可执行。
            </p>
            <p className="border-l border-champagne/50 pl-6 text-base leading-8 text-pearl/68">
              日本の高度医療、再生医療、予防医療、長寿管理を、中国語と日本語で丁寧にコーディネートします。
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-champagne px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-pearl"
            >
              预约私密咨询 <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-pearl/45 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:border-champagne hover:text-champagne"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {metrics.map(([number, label]) => (
            <div key={number} className="border-t border-champagne/50 pt-6">
              <p className="font-serif text-5xl text-champagne">{number}</p>
              <p className="mt-4 text-lg text-ink">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What We Arrange"
            title="不是医院中介，而是面向家庭长期利益的医疗顾问平台"
            body="每一次检查、会诊或治疗都应纳入更长周期的健康治理框架。我们帮助家庭理解选择、排序风险、管理隐私，并在日本完成高质量医疗协作。"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homeServices.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group min-h-72 border border-mist bg-pearl/55 p-8 transition hover:-translate-y-1 hover:border-champagne hover:shadow-quiet"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-champagne">
                  {service.eyebrow}
                </p>
                <h2 className="mt-6 text-2xl font-semibold leading-tight text-ink">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-graphite/72">
                  {service.description}
                </p>
                <span className="mt-8 inline-flex text-sm font-semibold text-jade">
                  {service.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-pearl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Family Governance
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              把医疗资源、时间成本与家族风险放在同一张桌上讨论
            </h2>
          </div>
          <div className="grid gap-6 text-pearl/72">
            <p className="text-lg leading-9">
              高净值家庭面对的医疗问题，往往不是单一预约，而是信息不对称、跨语言沟通、隐私保护、时间效率和重大决策压力的叠加。
            </p>
            <p className="text-lg leading-9">
              私人医疗家族办公室以顾问视角整理问题：哪些事情需要立即处理，哪些需要年度观察，哪些不应被过度医疗推动。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
