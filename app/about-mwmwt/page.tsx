import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { createPageMetadata } from "@/lib/seo";
import { normalizeLanguage } from "@/lib/site";
import { trustPages } from "@/lib/trust";

const page = trustPages["about-mwmwt"];

export const metadata: Metadata = createPageMetadata({
  path: "/about-mwmwt",
  title: page.metaTitle,
  description: page.metaDescription,
  image: page.image
});

export default function AboutMwmwtPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return <TrustPage page={page} lang={normalizeLanguage(searchParams?.lang)} />;
}
