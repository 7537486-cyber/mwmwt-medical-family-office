import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { normalizeLanguage, pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "长寿规划",
  description: pages["longevity-planning"].description
};

export default function LongevityPlanningPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return (
    <ContentPage
      page={pages["longevity-planning"]}
      lang={normalizeLanguage(searchParams?.lang)}
    />
  );
}
