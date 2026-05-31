import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/lib/legal";

const page = legalPages["medical-disclaimer"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription
};

export default function MedicalDisclaimerPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  return <LegalPage page={page} searchParams={searchParams} />;
}
