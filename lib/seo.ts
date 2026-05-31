import type { Metadata } from "next";

export const siteUrl = "https://mwmwt.com";
export const defaultOgImage = "/hero-medical-family-office.png";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localizedUrl(path: string, lang: "zh-CN" | "ja-JP" | "en-US") {
  const basePath = path === "/" ? "" : path;
  if (lang === "ja-JP") return absoluteUrl(`${basePath}?lang=ja`);
  if (lang === "en-US") return absoluteUrl(`${basePath}?lang=en`);
  return absoluteUrl(basePath || "/");
}

export function languageAlternates(path: string) {
  return {
    "zh-CN": localizedUrl(path, "zh-CN"),
    "ja-JP": localizedUrl(path, "ja-JP"),
    "en-US": localizedUrl(path, "en-US")
  };
}

export function createPageMetadata({
  path,
  title,
  description,
  image = defaultOgImage,
  type = "website"
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const canonical = localizedUrl(path, "zh-CN");
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path)
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Japan Medical Family Office",
      type,
      locale: "zh_CN",
      alternateLocale: ["ja_JP", "en_US"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
