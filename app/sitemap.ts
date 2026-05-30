import type { MetadataRoute } from "next";
import { doctorProfiles } from "@/lib/doctors";
import { navItems } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mwmwt.com";
  const platformPaths = [
    "/medical-governance-framework",
    "/knowledge-center/longevity-medicine",
    "/research-center",
    "/case-library",
    "/media-center",
    "/private-aviation-concierge"
  ];

  const staticPages = navItems.map((item) => ({
    url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date("2026-05-29"),
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8
  }));

  const platformPages = platformPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-05-30"),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const doctorPages = doctorProfiles.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: new Date("2026-05-30"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...platformPages, ...doctorPages];
}
