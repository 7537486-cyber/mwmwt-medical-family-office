import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "咨询已提交",
  description: "感谢提交私密咨询，MWMWT 私人礼宾团队将进行初步适配度确认。"
};

const copy = {
  zh: {
    eyebrow: "Private Inquiry Received",
    title: "Thank you. Your inquiry has been submitted.",
    description: "我们已收到您的私密咨询。团队会先进行适配度确认，再安排后续沟通。",
    secondaryTitle: "下一步",
    secondaryDescription:
      "我们会根据您提交的方向、时间安排和健康背景进行初步整理，并优先通过您留下的电话、WhatsApp、LINE 或微信回复。请勿通过公开渠道发送完整病历、影像或高度敏感资料。",
    line: "LINE 咨询",
    whatsapp: "WhatsApp 咨询",
    unavailable: "快捷入口配置后启用",
    back: "返回首页"
  },
  ja: {
    eyebrow: "Private Inquiry Received",
    title: "Thank you. Your inquiry has been submitted.",
    description: "プライベート相談を受領しました。内容を確認し、適合性を確認したうえでご連絡します。",
    secondaryTitle: "次のステップ",
    secondaryDescription:
      "ご相談内容、希望時期、健康背景を確認し、電話、WhatsApp、LINE、WeChat を優先してご連絡します。公開フォームや公開チャネルで完全な病歴、画像、高度に機微な資料を送信しないでください。",
    line: "LINE相談",
    whatsapp: "WhatsApp相談",
    unavailable: "設定後に利用可能",
    back: "ホームへ戻る"
  },
  en: {
    eyebrow: "Private Inquiry Received",
    title: "Thank you. Your inquiry has been submitted.",
    description: "Our team will first review fit before arranging next steps.",
    secondaryTitle: "What happens next",
    secondaryDescription:
      "We review the submitted topic, timing, and health background, then prioritize follow-up by phone, WhatsApp, LINE, or WeChat. Please do not send complete medical records, imaging, or highly sensitive files through public channels.",
    line: "LINE",
    whatsapp: "WhatsApp",
    unavailable: "Available after account setup",
    back: "Back Home"
  }
};

export default function ThankYouPage({
  searchParams
}: {
  searchParams?: { lang?: string };
}) {
  const lang = normalizeLanguage(searchParams?.lang);
  const text = copy[lang];
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL;
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;

  const actions = [
    {
      label: text.line,
      href: lineUrl,
      active: Boolean(lineUrl)
    },
    {
      label: text.whatsapp,
      href: whatsappUrl,
      active: Boolean(whatsappUrl)
    }
  ];

  return (
    <>
      <PageHero
        eyebrow={text.eyebrow}
        title={text.title}
        secondaryTitle={text.secondaryTitle}
        description={text.description}
        secondaryDescription={text.secondaryDescription}
        cta={text.back}
        ctaHref={withLanguage("/", lang)}
        image={serviceImages.contact}
      />

      <section className="bg-pearl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {actions.map((action) =>
              action.active && action.href ? (
                <a
                  key={action.label}
                  href={action.href}
                  className="border border-mist bg-white p-7 text-center text-sm font-semibold uppercase tracking-[0.18em] text-ink shadow-quiet transition hover:border-champagne hover:text-champagne"
                >
                  {action.label}
                </a>
              ) : (
                <div
                  key={action.label}
                  className="border border-mist bg-white p-7 text-center shadow-quiet"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                    {action.label}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-graphite/62">
                    {text.unavailable}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={withLanguage("/", lang)}
              className="inline-flex border border-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-ink hover:text-pearl"
            >
              {text.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
