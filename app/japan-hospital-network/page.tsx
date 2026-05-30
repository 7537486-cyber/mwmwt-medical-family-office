import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "日本医院网络",
  description: pages["japan-hospital-network"].description
};

export default function JapanHospitalNetworkPage() {
  return <ContentPage page={pages["japan-hospital-network"]} />;
}
