import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "再生医疗",
  description: pages["regenerative-medicine"].description
};

export default function RegenerativeMedicinePage() {
  return <ContentPage page={pages["regenerative-medicine"]} />;
}
