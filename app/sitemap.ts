import type { MetadataRoute } from "next";
import { doctorProfiles } from "@/lib/doctors";
import { knowledgeCenters } from "@/lib/knowledge-centers";
import { knowledgeArticles } from "@/lib/knowledge";
import { languageAlternates, siteUrl } from "@/lib/seo";
import { navItems } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const platformPaths = [
    "/about-medical-family-office",
    "/founder",
    "/medical-advisory",
    "/medical-governance-framework",
    "/knowledge-center/longevity-medicine",
    "/research-center",
    "/case-library",
    "/case-library/second-opinion-certainty",
    "/case-library/executive-sleep-health",
    "/case-library/family-fertility-planning",
    "/case-library/cancer-risk-management",
    "/media-center",
    "/private-aviation-concierge",
    "/privacy-policy",
    "/medical-disclaimer",
    "/terms-of-service",
    "/compliance"
  ];

  const staticPages = navItems.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date("2026-05-31"),
    changeFrequency: item.href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: item.href === "/" ? 1 : 0.8,
    alternates: {
      languages: languageAlternates(item.href)
    }
  }));

  const platformPages = platformPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-05-31"),
    changeFrequency: "monthly" as const,
    priority: 0.75,
    alternates: {
      languages: languageAlternates(path)
    }
  }));

  const doctorPages = doctorProfiles.map((doctor) => ({
    url: `${siteUrl}/doctors/${doctor.slug}`,
    lastModified: new Date("2026-05-31"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: languageAlternates(`/doctors/${doctor.slug}`)
    }
  }));

  const knowledgePages = knowledgeArticles.map((article) => ({
    url: `${siteUrl}/knowledge-center/${article.slug}`,
    lastModified: new Date("2026-05-31"),
    changeFrequency: "monthly" as const,
    priority: 0.72,
    alternates: {
      languages: languageAlternates(`/knowledge-center/${article.slug}`)
    }
  }));

  const downloadableResources = [
    {
      url: `${siteUrl}/medical-family-office-faq.pdf`,
      lastModified: new Date("2026-05-31"),
      changeFrequency: "yearly" as const,
      priority: 0.55
    }
  ];

  const knowledgeCenterPages = knowledgeCenters.map((center) => ({
    url: `${siteUrl}/knowledge-center/centers/${center.slug}`,
    lastModified: new Date("2026-05-31"),
    changeFrequency: "monthly" as const,
    priority: 0.74,
    alternates: {
      languages: languageAlternates(`/knowledge-center/centers/${center.slug}`)
    }
  }));

  return [
    ...staticPages,
    ...platformPages,
    ...doctorPages,
    ...knowledgePages,
    ...knowledgeCenterPages,
    ...downloadableResources
  ];
}
