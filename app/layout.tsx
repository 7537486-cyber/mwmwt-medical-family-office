import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://mwmwt.com"),
  title: {
    default: "Japan Medical Family Office | 日本医疗家族办公室",
    template: "%s | Japan Medical Family Office"
  },
  description:
    "面向企业家、投资人与高净值家庭的全球医疗家族办公室与长寿健康管理平台，提供医疗治理体系、再生医疗资源、企业家健康管理、全球医疗准入与长期家庭健康规划。",
  keywords: [
    "Medical Family Office",
    "Global Medical Access",
    "Medical Governance Framework",
    "医疗治理体系",
    "医疗尽调",
    "企业家健康管理",
    "日本医疗",
    "再生医疗",
    "长寿管理",
    "日本体检",
    "医疗礼宾",
    "生育力保存",
    "卵子凍結",
    "セカンドオピニオン",
    "再生医療",
    "医療コンシェルジュ"
  ],
  openGraph: {
    title: "Japan Medical Family Office",
    description:
      "Private health intelligence, longevity planning, medical governance, and global medical access for entrepreneurs and families.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["ja_JP", "en_US"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Japan Medical Family Office",
    description:
      "Private health intelligence, longevity planning, medical governance, and global medical access for entrepreneurs, investors, and families.",
    areaServed: ["China", "Japan", "Singapore", "Switzerland", "United States"],
    availableLanguage: ["zh-CN", "ja-JP", "en"],
    medicalSpecialty: [
      "Preventive",
      "Regenerative Medicine",
      "Concierge Medicine",
      "Executive Health"
    ]
  };

  return (
    <html lang="zh-CN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
