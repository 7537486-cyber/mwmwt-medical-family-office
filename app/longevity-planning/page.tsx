import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "长寿规划",
  description: pages["longevity-planning"].description
};

export default function LongevityPlanningPage() {
  return <ContentPage page={pages["longevity-planning"]} />;
}
