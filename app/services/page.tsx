import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "服务",
  description: pages.services.description
};

export default function ServicesPage() {
  return <ContentPage page={pages.services} />;
}
