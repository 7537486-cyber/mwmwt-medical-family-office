"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { type Language, navItems, normalizeLanguage, withLanguage } from "@/lib/site";

const languageLabels: Array<[Language, string]> = [
  ["zh", "中文"],
  ["ja", "日本語"],
  ["en", "EN"]
];

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lang = normalizeLanguage(searchParams.get("lang") ?? undefined);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 text-pearl backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href={withLanguage("/", lang)} className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-champagne/70 text-sm font-semibold text-champagne">
            JM
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.22em]">
              MEDICAL FAMILY OFFICE
            </span>
            <span className="block text-xs text-pearl/58">Tokyo | Shanghai</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={withLanguage(item.href, lang)}
              className="text-xs uppercase tracking-[0.18em] text-pearl/72 transition hover:text-champagne"
            >
              {lang === "zh" ? item.ja : item.en}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex border border-white/15">
            {languageLabels.map(([value, label]) => (
              <Link
                key={value}
                href={withLanguage(pathname, value)}
                className={`px-3 py-2 text-xs font-semibold transition ${
                  lang === value ? "bg-champagne text-ink" : "text-pearl/70 hover:text-champagne"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href={withLanguage("/contact", lang)}
            className="border border-champagne/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink"
          >
            Private Inquiry
          </Link>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs text-pearl/70 xl:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={withLanguage(item.href, lang)} className="shrink-0">
            {lang === "zh" ? item.label : item.en}
          </Link>
        ))}
        {languageLabels.map(([value, label]) => (
          <Link
            key={value}
            href={withLanguage(pathname, value)}
            className={`shrink-0 font-semibold ${
              lang === value ? "text-champagne" : "text-pearl/70"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
