import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { normalizeLanguage, pages } from "@/lib/site";

export const metadata: Metadata = {
  title: "再生医疗",
  description: pages["regenerative-medicine"].description
};

export default function RegenerativeMedicinePage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return (
    <ContentPage
      page={pages["regenerative-medicine"]}
      lang={normalizeLanguage(searchParams?.lang)}
    />
  );
}
