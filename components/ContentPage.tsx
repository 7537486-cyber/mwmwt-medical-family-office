import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { type Language, type PageContent, pageText, serviceImages } from "@/lib/site";

type ContentPageProps = {
  page: PageContent;
  lang: Language;
};

export function ContentPage({ page, lang }: ContentPageProps) {
  const text = pageText(page, lang);
  const image = serviceImages[page.slug];
  const sectionLabels = {
    zh: {
      visual: "视觉呈现",
      assurance: "信任依据",
      protocol: "服务流程"
    },
    ja: {
      visual: "ビジュアル",
      assurance: "信頼の根拠",
      protocol: "進行プロトコル"
    },
    en: {
      visual: "Visual Diligence",
      assurance: "Assurance",
      protocol: "Working Protocol"
    }
  }[lang];
  const conciergeScenes = {
    zh: {
      eyebrow: "Premium Concierge Logistics",
      title: "包机、阿尔法接送与一对一陪同，让跨境就医更私密、有序。",
      items: [
        {
          title: "私人包机协调",
          body: "围绕行程时间、隐私动线、医疗资料与抵达后衔接，协调高净值客户的跨境医疗出行。",
          image: "/private-jet-medical-concierge.png",
          alt: "私人包机医疗礼宾协调"
        },
        {
          title: "阿尔法商务车接送",
          body: "安排高端商务车、司机与双语协调人员，覆盖机场、酒店、医院与私人会所之间的接送。",
          image: "/alphard-medical-transfer.png",
          alt: "阿尔法商务车医疗接送"
        },
        {
          title: "一对一医疗陪同",
          body: "从预约签到、检查动线、翻译沟通到诊后资料整理，提供稳定、安静、清晰的现场支持。",
          image: "/one-on-one-medical-escort.png",
          alt: "一对一医疗陪同"
        }
      ]
    },
    ja: {
      eyebrow: "Premium Concierge Logistics",
      title: "チャーター、専用車送迎、専属同行で、国際医療をより秘匿性高く整えます。",
      items: [
        {
          title: "プライベートジェット調整",
          body: "移動時間、プライバシー導線、医療資料、到着後の接続を含めて、国際医療渡航を調整します。",
          image: "/private-jet-medical-concierge.png",
          alt: "プライベートジェット医療コンシェルジュ"
        },
        {
          title: "高級ミニバン送迎",
          body: "空港、ホテル、医療機関、プライベート施設間を、専用車とバイリンガル担当者で支援します。",
          image: "/alphard-medical-transfer.png",
          alt: "高級ミニバン医療送迎"
        },
        {
          title: "一対一の医療同行",
          body: "受付、検査動線、通訳、診療後の資料整理まで、静かで明確な現地サポートを提供します。",
          image: "/one-on-one-medical-escort.png",
          alt: "一対一医療同行"
        }
      ]
    },
    en: {
      eyebrow: "Premium Concierge Logistics",
      title: "Charter flights, executive van transfer, and one-on-one escort for discreet medical travel.",
      items: [
        {
          title: "Private aviation coordination",
          body: "Travel timing, privacy routes, medical documents, and arrival coordination are managed for cross-border medical access.",
          image: "/private-jet-medical-concierge.png",
          alt: "Private aviation medical concierge"
        },
        {
          title: "Executive van transfer",
          body: "Premium vehicle, chauffeur, and bilingual coordinator support airport, hotel, hospital, and private-club transfers.",
          image: "/alphard-medical-transfer.png",
          alt: "Executive medical transfer in Japan"
        },
        {
          title: "One-on-one medical escort",
          body: "Appointment check-in, examination routing, interpretation, and post-visit documentation are handled with calm, private support.",
          image: "/one-on-one-medical-escort.png",
          alt: "One-on-one medical escort in Japan"
        }
      ]
    }
  }[lang];

  return (
    <>
      <PageHero
        eyebrow={text.eyebrow}
        title={text.title}
        secondaryTitle={text.secondaryTitle}
        description={text.description}
        secondaryDescription={text.secondaryDescription}
        cta={text.cta}
        image={image}
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border-l border-champagne/50 pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-champagne">
              {sectionLabels.assurance}
            </p>
            <div className="mt-8 space-y-5">
              {text.proof.map((item) => (
                <p key={item} className="font-serif text-2xl leading-tight text-ink">
                  {item}
                </p>
              ))}
            </div>
          </aside>
          <div className="grid gap-5 md:grid-cols-3">
            {text.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="border border-mist bg-white/50 p-7 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">{pillar.label}</p>
                <h2 className="mt-5 text-xl font-semibold text-ink">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-7 text-graphite/72">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {page.slug === "medical-concierge" ? (
        <section className="bg-ink px-5 py-20 text-pearl lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-champagne">
                  {conciergeScenes.eyebrow}
                </p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                  {conciergeScenes.title}
                </h2>
              </div>
              <p className="text-lg leading-9 text-pearl/68">
                {lang === "en"
                  ? "For UHNW clients, movement itself is part of medical risk management: privacy, timing, continuity, and a single accountable desk."
                  : lang === "ja"
                    ? "超富裕層クライアントにとって、移動そのものも医療リスク管理の一部です。秘匿性、時間、継続性、単一窓口を重視します。"
                    : "对高净值客户来说，移动本身也是医疗风险管理的一部分：隐私、时间、连续性和单一负责窗口都必须被管理。"}
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {conciergeScenes.items.map((item) => (
                <article key={item.title} className="bg-pearl/[0.04]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                  </div>
                  <div className="border border-white/10 border-t-0 p-7">
                    <h3 className="text-2xl font-semibold text-pearl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-pearl/64">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-champagne">
              {sectionLabels.protocol}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {lang === "en"
                ? "A clear protocol to reduce uncertainty"
                : lang === "ja"
                  ? "明確なプロトコルで不確実性を減らす"
                  : "清晰流程，减少不确定性"}
            </h2>
          </div>
          <div className="divide-y divide-mist border-y border-mist">
            {text.process.map((item, index) => (
              <div key={item} className="grid grid-cols-[4rem_1fr] py-6">
                <span className="font-serif text-3xl text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
