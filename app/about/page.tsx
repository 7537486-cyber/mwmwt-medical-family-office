import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { normalizeLanguage, pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于我们",
  description: pages.about.description
};

export default function AboutPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return <ContentPage page={pages.about} lang={normalizeLanguage(searchParams?.lang)} />;
}
