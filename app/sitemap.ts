import type { MetadataRoute } from "next";
import { doctorProfiles } from "@/lib/doctors";
import { navItems } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mwmwt.com";

  const staticPages = navItems.map((item) => ({
    url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date("2026-05-29"),
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8
  }));

  const doctorPages = doctorProfiles.map((doctor) => ({
    url: `${baseUrl}/doctor-network/${doctor.slug}`,
    lastModified: new Date("2026-05-30"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...doctorPages];
}
