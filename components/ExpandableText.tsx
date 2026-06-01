"use client";

import { useId, useMemo, useState } from "react";
import type { Language } from "@/lib/site";

type ExpandableTextProps = {
  text?: string;
  paragraphs?: string[];
  lang?: Language;
  initialParagraphs?: number;
  className?: string;
  paragraphClassName?: string;
  buttonClassName?: string;
};

const labels = {
  zh: { more: "继续阅读", less: "收起" },
  ja: { more: "続きを読む", less: "閉じる" },
  en: { more: "Read more", less: "Collapse" }
};

export function ExpandableText({
  text,
  paragraphs,
  lang = "zh",
  initialParagraphs = 1,
  className = "",
  paragraphClassName = "",
  buttonClassName = ""
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const blocks = useMemo(() => {
    const source = paragraphs ?? text?.split(/\n{2,}/) ?? [];
    return source.map((item) => item.trim()).filter(Boolean);
  }, [paragraphs, text]);

  if (blocks.length === 0) {
    return null;
  }

  const shouldCollapse = blocks.length > initialParagraphs;
  const visibleBlocks = expanded || !shouldCollapse ? blocks : blocks.slice(0, initialParagraphs);
  const label = expanded ? labels[lang].less : labels[lang].more;

  return (
    <div className={className}>
      <div id={contentId} className="space-y-4">
        {visibleBlocks.map((paragraph) => (
          <p key={paragraph} className={paragraphClassName}>
            {paragraph}
          </p>
        ))}
      </div>
      {shouldCollapse ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={() => setExpanded((value) => !value)}
          className={
            buttonClassName ||
            "mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-champagne transition hover:text-ink"
          }
        >
          <span aria-hidden="true">{expanded ? "−" : "＋"}</span>
          {label}
        </button>
      ) : null}
    </div>
  );
}
