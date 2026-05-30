import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { normalizeLanguage, pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "生育力保存",
  description: pages["fertility-preservation"].description
};

export default function FertilityPreservationPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return (
    <ContentPage
      page={pages["fertility-preservation"]}
      lang={normalizeLanguage(searchParams?.lang)}
    />
  );
}
