import { Badge, Link } from "@cloudflare/kumo";
import { REPO_URL, SITE_URL, VERSION } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-kumo-hairline py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid size-7 place-items-center rounded-md bg-[#f6821f] font-mono text-xs font-bold text-black">
            K
          </span>
          <span className="font-mono text-xs font-bold tracking-[0.18em] text-kumo-default">KUMO UI</span>
          <Badge variant="neutral">v{VERSION}</Badge>
        </div>

        <p className="text-xs text-kumo-subtle">MIT License · © 2026 Cloudflare, Inc.</p>

        <div className="flex items-center gap-5 text-xs">
          <Link href={SITE_URL} variant="plain" target="_blank" rel="noopener noreferrer" className="text-kumo-subtle">
            在线文档
          </Link>
          <Link href={REPO_URL} variant="plain" target="_blank" rel="noopener noreferrer" className="text-kumo-subtle">
            GitHub
          </Link>
          <a href="#top" className="font-mono text-kumo-subtle transition-colors hover:text-kumo-default">
            回到顶部 ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
