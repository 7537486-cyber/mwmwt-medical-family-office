import Link from "next/link";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 text-pearl backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
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
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-pearl/72 transition hover:text-champagne"
            >
              {item.ja}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden border border-champagne/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink md:inline-flex"
        >
          Private Inquiry
        </Link>
      </div>
      <div className="flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-3 text-xs text-pearl/70 xl:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
