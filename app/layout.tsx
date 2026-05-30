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
    "面向中国高净值家庭的日本医疗家族办公室与长寿健康礼宾平台，提供再生医疗、抗衰管理、精密体检、第二诊疗意见与长期家庭健康规划。",
  keywords: [
    "日本医疗",
    "再生医疗",
    "长寿管理",
    "日本体检",
    "医疗礼宾",
    "セカンドオピニオン",
    "再生医療",
    "医療コンシェルジュ"
  ],
  openGraph: {
    title: "Japan Medical Family Office",
    description:
      "Private medical access, longevity planning, and family health governance in Japan.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["ja_JP"]
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
      "Private medical concierge and longevity planning platform for Chinese high-net-worth families seeking Japan medical resources.",
    areaServed: ["China", "Japan"],
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
