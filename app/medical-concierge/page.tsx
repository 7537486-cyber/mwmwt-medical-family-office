import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "医疗礼宾",
  description: pages["medical-concierge"].description
};

export default function MedicalConciergePage() {
  return <ContentPage page={pages["medical-concierge"]} />;
}
