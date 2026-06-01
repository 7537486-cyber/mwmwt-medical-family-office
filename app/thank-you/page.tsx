import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { normalizeLanguage, serviceImages, withLanguage } from "@/lib/site";

export const metadata: Metadata = {
  title: "咨询已提交",
  description: "感谢提交私密咨询，Medical Family Office 私人礼宾团队将进行初步适配度确认。"
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
    wechat: "微信咨询",
    wechatBody:
      "也可以扫码添加微信，继续补充咨询方向、时间安排或家庭健康背景。请勿通过公开聊天直接发送完整病历或高度敏感资料。",
    lineBody:
      "也可以扫码添加 LINE，适合确认预约时间、接收礼宾通知或进行初步沟通。完整病历与敏感资料请等待团队提供安全提交方式。",
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
    wechat: "WeChat相談",
    wechatBody:
      "WeChatのQRコードから追加し、ご相談内容や希望時期を補足できます。完全な病歴や高度に機微な資料は公開チャットで送らないでください。",
    lineBody:
      "LINEのQRコードから追加し、予約時間の確認、コンシェルジュ通知、初回相談にご利用いただけます。機微な医療資料は安全な提出方法をご案内します。",
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
    wechat: "WeChat",
    wechatBody:
      "Scan the QR code to continue on WeChat. Please do not send complete medical records or highly sensitive information through public chat.",
    lineBody:
      "Scan the QR code to continue on LINE for scheduling, concierge notifications, or introductory coordination. Sensitive medical files should wait for a secure submission method.",
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
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                image: "/wechat-tyler-qr.jpg",
                label: "WeChat",
                title: text.wechat,
                body: text.wechatBody,
                alt: "AETERA WeChat QR code"
              },
              {
                image: "/line-qr.jpg",
                label: "LINE",
                title: text.line,
                body: text.lineBody,
                alt: "AETERA LINE QR code"
              }
            ].map((item) => (
              <div
                key={item.label}
                className="grid gap-5 border border-mist bg-white p-6 shadow-quiet sm:grid-cols-[150px_1fr] sm:items-center md:grid-cols-1"
              >
                <div className="relative mx-auto aspect-square w-36 overflow-hidden bg-pearl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                    {item.label}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/70">{item.body}</p>
                </div>
              </div>
            ))}
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
