import { redirect } from "next/navigation";

export default function AboutMwmwtRedirect({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const suffix = searchParams?.lang ? `?lang=${searchParams.lang}` : "";

  redirect(`/about-medical-family-office${suffix}`);
}
