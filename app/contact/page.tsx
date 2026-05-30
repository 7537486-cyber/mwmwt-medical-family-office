import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系",
  description: pages.contact.description
};

const inquiryTypes = [
  "日本精密体检",
  "再生医疗 / 抗衰项目",
  "重大疾病第二意见",
  "赴日就医礼宾",
  "家庭长期健康规划"
];

export default function ContactPage() {
  const page = pages.contact;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        jaTitle={page.jaTitle}
        description={page.description}
        jaDescription={page.jaDescription}
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              Inquiry Scope
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              告诉我们家庭当前最重要的健康议题
            </h2>
            <div className="mt-10 grid gap-4">
              {inquiryTypes.map((item) => (
                <div key={item} className="border-l border-champagne/50 bg-white px-5 py-4">
                  <p className="text-sm font-semibold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="border border-mist bg-white p-6 shadow-quiet md:p-10">
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                称呼 / お名前
                <input
                  className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
                  placeholder="Mr. Chen"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                联系方式 / ご連絡先
                <input
                  className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
                  placeholder="Email / WeChat / Phone"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                咨询方向 / ご相談内容
                <select className="border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne">
                  {inquiryTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                背景说明 / ご状況
                <textarea
                  className="min-h-36 border border-mist bg-pearl px-4 py-3 font-normal outline-none transition focus:border-champagne"
                  placeholder="请简要说明目标、时间安排、家庭成员情况或已持有的医疗资料。"
                />
              </label>
              <button
                type="button"
                className="bg-ink px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-pearl transition hover:bg-champagne hover:text-ink"
              >
                Submit Private Inquiry
              </button>
              <p className="text-xs leading-6 text-graphite/62">
                表单为前端展示版本。正式上线时可接入加密邮件、CRM、预约系统或安全文件上传流程。
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
