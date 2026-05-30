import Link from "next/link";
import { navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-pearl lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-champagne">
            Japan Medical Family Office
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-balance md:text-5xl">
            Private access to Japan&apos;s advanced medical ecosystem.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-pearl/68">
            本网站内容仅用于服务介绍，不构成医疗诊断或治疗建议。具体医疗安排需基于医生评估、机构规则与个人健康状况确认。
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-champagne">Navigation</p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-pearl/70 transition hover:text-champagne"
                >
                  {item.label} / {item.ja}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-champagne">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-pearl/70">
              <p>Tokyo coordination desk</p>
              <p>Chinese / Japanese / English</p>
              <p>By appointment only</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
