import { TableOfContents } from "@cloudflare/kumo";
import { ArrowSquareOut, BookOpen, GithubLogo } from "@phosphor-icons/react";
import type { SectionId } from "../content";
import { REPO_URL, SECTIONS, SITE_URL } from "../content";

type SidebarProps = {
  activeId: string | null;
  onSelect: (id: string) => void;
};

export function Sidebar({ activeId, onSelect }: SidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <TableOfContents aria-label="页面目录">
          <TableOfContents.Title>目录</TableOfContents.Title>
          <TableOfContents.List>
            {SECTIONS.map((section) => (
              <TableOfContents.Item
                key={section.id}
                href={`#${section.id}`}
                active={activeId === section.id}
                onClick={() => onSelect(section.id)}
              >
                {section.label}
              </TableOfContents.Item>
            ))}
          </TableOfContents.List>
        </TableOfContents>

        <div className="mt-8 border-t border-kumo-hairline pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-kumo-subtle">链接</p>
          <ul className="mt-3 space-y-3 text-sm">
            <li>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-kumo-subtle transition-colors hover:text-kumo-default"
              >
                <span className="live-dot size-1.5 rounded-full bg-emerald-500" />
                在线文档
                <ArrowSquareOut size={12} className="ml-auto opacity-60" />
              </a>
            </li>
            <li>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-kumo-subtle transition-colors hover:text-kumo-default"
              >
                <GithubLogo size={14} />
                GitHub 仓库
                <ArrowSquareOut size={12} className="ml-auto opacity-60" />
              </a>
            </li>
            <li>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-kumo-subtle transition-colors hover:text-kumo-default"
              >
                <BookOpen size={14} />
                组件文档
                <ArrowSquareOut size={12} className="ml-auto opacity-60" />
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-8 font-mono text-[10px] leading-relaxed text-kumo-subtle/70">
          Built with Kumo
          <br />
          React 19 · Vite · Tailwind v4
        </p>
      </div>
    </aside>
  );
}

export function MobileToc({ activeId, onSelect }: SidebarProps) {
  return (
    <div className="lg:hidden">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-kumo-subtle">目录</p>
      <div className="-mx-5 mt-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2">
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelect(section.id)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "border-[#f6821f]/40 bg-[#f6821f]/10 text-kumo-default"
                    : "border-kumo-hairline text-kumo-subtle hover:text-kumo-default"
                }`}
              >
                <span className="mr-1.5 font-mono text-[10px] text-[#f6821f]">{section.index}</span>
                {section.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type { SectionId };
