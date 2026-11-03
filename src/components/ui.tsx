import type { ReactNode } from "react";
import { CodeHighlighted } from "@cloudflare/kumo/code";

export function SectionHeading({
  index,
  title,
  description,
  action,
}: {
  index: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#f6821f]">{index}</span>
          <h2 className="text-2xl font-semibold tracking-tight text-kumo-default sm:text-3xl">{title}</h2>
        </div>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-kumo-subtle sm:text-base">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function CodeSample({
  code,
  lang,
  className = "",
}: {
  code: string;
  lang: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-kumo-hairline [&_pre]:whitespace-pre-wrap [&_pre]:[overflow-wrap:anywhere] [&_code]:[overflow-wrap:anywhere] ${className}`}
    >
      <CodeHighlighted code={code} lang={lang} showCopyButton />
    </div>
  );
}
