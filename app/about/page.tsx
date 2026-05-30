import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于我们",
  description: pages.about.description
};

export default function AboutPage() {
  return <ContentPage page={pages.about} />;
}
