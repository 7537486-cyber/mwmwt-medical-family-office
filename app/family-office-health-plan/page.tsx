import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "家庭健康计划",
  description: pages["family-office-health-plan"].description
};

export default function FamilyOfficeHealthPlanPage() {
  return <ContentPage page={pages["family-office-health-plan"]} />;
}
