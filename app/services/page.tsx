import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { normalizeLanguage, pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "服务",
  description: pages.services.description
};

export default function ServicesPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return <ContentPage page={pages.services} lang={normalizeLanguage(searchParams?.lang)} />;
}
