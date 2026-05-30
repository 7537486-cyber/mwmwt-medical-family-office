import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "什么是长寿医学 Longevity Medicine",
  description:
    "介绍长寿医学、健康寿命、生物年龄检测、衰老机制与高净值人群长期健康管理理念。"
};

const comparison = [
  ["生病后治疗", "生病前预防"],
  ["关注疾病", "关注衰老"],
  ["单一器官", "全身系统"],
  ["诊断疾病", "发现风险"],
  ["延长寿命", "延长健康寿命"]
];

const agingMechanisms = [
  {
    title: "DNA损伤累积",
    body: "随着年龄增长，DNA修复能力下降，基因突变增加，癌症和慢性疾病风险也会随之上升。"
  },
  {
    title: "线粒体功能下降",
    body: "线粒体是人体能量系统的重要基础。功能下降会影响疲劳感、代谢速度、运动能力和整体活力。"
  },
  {
    title: "慢性炎症 Inflamaging",
    body: "长期微炎症状态可能与心血管疾病、肿瘤风险和神经退行性疾病风险相关，是长寿医学重点关注的基础指标。"
  },
  {
    title: "细胞衰老 Senescent Cells",
    body: "衰老细胞可能持续释放炎症因子和有害信号，影响周围健康细胞，因此也被称为 Zombie Cells。"
  },
  {
    title: "干细胞耗竭",
    body: "随着年龄增长，组织修复能力和再生能力下降，器官功能与身体恢复速度也会受到影响。"
  }
];

const researchAreas = [
  "生物年龄评估",
  "心血管、癌症、糖尿病、阿尔茨海默病与骨质疏松风险评估",
  "营养管理、睡眠优化、激素平衡、运动处方与肠道菌群管理",
  "再生医学、外泌体研究、干细胞研究与精准健康干预"
];

const biologicalAgeFinds = [
  "心血管风险：动脉老化、血管硬化、心脏风险",
  "代谢风险：胰岛素抵抗、糖尿病前期、肥胖风险",
  "炎症水平：慢性炎症、免疫失衡",
  "大脑老化：认知下降风险、神经退行性疾病风险",
  "激素老化：睾酮、雌激素、DHEA、生长激素相关指标"
];

const testingGenerations = [
  {
    title: "第一代：血液生物标志物",
    body: "检测血糖、血脂、肝肾功能与炎症指标。优势是成本较低、容易普及；局限是精度有限。"
  },
  {
    title: "第二代：DNA甲基化检测",
    body: "通过分析 DNA 甲基化位点变化，估算表观遗传年龄，是长寿研究和高端健康管理中常见的评估方向。"
  },
  {
    title: "第三代：多组学检测",
    body: "整合基因组、蛋白组、代谢组和肠道菌群等信息，适合更高阶的长寿医学中心和长期健康管理场景。"
  }
];

const officeApproach = [
  "生物年龄评估",
  "深度健康体检",
  "长寿风险分析",
  "国际医疗资源整合",
  "再生医学咨询",
  "持续健康管理"
];

export default function LongevityMedicineArticlePage() {
  return (
    <>
      <PageHero
        eyebrow="Longevity Medicine"
        title="什么是长寿医学？"
        secondaryTitle="Healthspan over lifespan"
        description="长寿医学并不是简单地活得更久。它融合预防医学、功能医学、再生医学、基因科学、人工智能、营养学和运动科学，核心目标是延长健康寿命。"
        secondaryDescription="不是让人带病活到100岁，而是帮助客户在更长时间里保持工作能力、独立生活能力、大脑认知能力和生活质量。"
        cta="Private Inquiry"
      />

      <article className="bg-pearl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <section className="border-b border-mist pb-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Definition
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
              长寿医学关注的不是寿命数字，而是健康寿命。
            </h2>
            <div className="mt-8 grid gap-4 text-base leading-8 text-graphite/76 md:grid-cols-2">
              {["80岁还能正常工作", "90岁还能独立生活", "减少卧床时间", "减少慢性疾病", "保持大脑认知能力", "保持生活质量"].map(
                (item) => (
                  <p key={item} className="border border-mist bg-white p-5">
                    {item}
                  </p>
                )
              )}
            </div>
          </section>

          <section className="border-b border-mist py-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Traditional Medicine vs Longevity Medicine
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              传统医学看疾病，长寿医学看风险和衰老速度。
            </h2>
            <div className="mt-10 overflow-hidden border border-mist bg-white">
              <div className="grid grid-cols-2 bg-ink text-sm font-semibold uppercase tracking-[0.2em] text-pearl">
                <p className="p-5">传统医疗</p>
                <p className="border-l border-white/15 p-5">长寿医学</p>
              </div>
              {comparison.map(([traditional, longevity]) => (
                <div key={traditional} className="grid grid-cols-2 border-t border-mist">
                  <p className="p-5 text-graphite/72">{traditional}</p>
                  <p className="border-l border-mist p-5 font-semibold text-ink">{longevity}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-l border-champagne pl-5 text-lg leading-9 text-graphite/76">
              传统体检可能告诉你：目前没有糖尿病。长寿医学更关注：是否已经出现胰岛素抵抗，未来5到10年糖尿病风险是否明显上升。
            </p>
          </section>

          <section className="border-b border-mist py-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Why We Age
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              为什么人会衰老？
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {agingMechanisms.map((item, index) => (
                <div key={item.title} className="border border-mist bg-white p-7">
                  <p className="font-serif text-4xl text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/72">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b border-mist py-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Research Areas
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              长寿医学主要研究什么？
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {researchAreas.map((item) => (
                <p key={item} className="border-t border-champagne/45 pt-5 text-base leading-8 text-graphite/76">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="border-b border-mist py-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Biological Age
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              什么是生物年龄检测？
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="bg-ink p-8 text-pearl">
                <p className="text-sm uppercase tracking-[0.24em] text-champagne">Case A</p>
                <p className="mt-5 text-2xl font-semibold">50岁，规律运动，睡眠良好</p>
                <p className="mt-5 text-sm leading-7 text-pearl/70">
                  生物年龄可能显示为42岁，提示身体状态比实际年龄年轻。
                </p>
              </div>
              <div className="bg-white p-8 text-ink">
                <p className="text-sm uppercase tracking-[0.24em] text-champagne">Case B</p>
                <p className="mt-5 text-2xl font-semibold">50岁，高压力，熬夜，饮酒</p>
                <p className="mt-5 text-sm leading-7 text-graphite/72">
                  生物年龄可能显示为61岁，提示身体老化速度高于实际年龄。
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg leading-9 text-graphite/76">
              普通体检主要看疾病，生物年龄更关注衰老速度。疾病出现前，身体系统往往已经开始发生长期变化。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {biologicalAgeFinds.map((item) => (
                <p key={item} className="border border-mist bg-white p-5 text-sm leading-7 text-graphite/74">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="border-b border-mist py-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Testing Technology
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              全球主流生物年龄检测技术
            </h2>
            <div className="mt-10 space-y-5">
              {testingGenerations.map((item) => (
                <div key={item.title} className="border border-mist bg-white p-7">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-graphite/72">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-16">
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Medical Family Office View
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink">
              高净值人群为什么关注生物年龄？
            </h2>
            <p className="mt-8 text-lg leading-9 text-graphite/76">
              因为他们已经不满足于“有没有病”，而开始关注“老得快不快”。企业家最稀缺的资源不是钱，而是健康寿命。很多人的财富增长曲线在50到70岁进入高峰，但身体状态也从这时开始明显分化。
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {officeApproach.map((item) => (
                <p key={item} className="border-t border-champagne/45 pt-5 text-base font-semibold text-ink">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-12 bg-ink p-8 text-xl leading-9 text-pearl md:text-2xl">
              传统医学关注疾病，长寿医学关注衰老；传统体检告诉你今天是否健康，生物年龄检测帮助你理解未来可能如何衰老。
            </p>
            <Link
              href="/knowledge-center"
              className="mt-10 inline-flex border border-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              Back to Knowledge Center
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
