import { Badge, Button, Link, Tooltip } from "@cloudflare/kumo";
import { GithubLogo, Moon, Sun } from "@phosphor-icons/react";
import { REPO_URL, VERSION } from "../content";

export type ThemeMode = "dark" | "light";

export function Header({ mode, onToggleMode }: { mode: ThemeMode; onToggleMode: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-kumo-hairline bg-kumo-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="回到顶部">
          <span className="grid size-8 place-items-center rounded-lg bg-[#f6821f] font-mono text-sm font-bold text-black">
            K
          </span>
          <span className="font-mono text-sm font-bold tracking-[0.18em] text-kumo-default">KUMO</span>
          <Badge variant="orange">v{VERSION}</Badge>
        </a>

        <nav className="ml-auto hidden items-center gap-5 md:flex" aria-label="主导航">
          <Link href="#highlights" variant="plain" className="text-sm text-kumo-subtle hover:text-kumo-default">
            亮点
          </Link>
          <Link href="#installation" variant="plain" className="text-sm text-kumo-subtle hover:text-kumo-default">
            安装
          </Link>
          <Link href="#usage" variant="plain" className="text-sm text-kumo-subtle hover:text-kumo-default">
            用法
          </Link>
          <Link href="#cli" variant="plain" className="text-sm text-kumo-subtle hover:text-kumo-default">
            CLI
          </Link>
          <Link href="#development" variant="plain" className="text-sm text-kumo-subtle hover:text-kumo-default">
            开发
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <Tooltip
            content="GitHub 仓库"
            render={
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub 仓库"
                className="inline-flex size-9 items-center justify-center rounded-md text-kumo-subtle transition-colors hover:bg-kumo-recessed hover:text-kumo-default"
              />
            }
          >
            <GithubLogo size={18} weight="fill" />
          </Tooltip>
          <Button
            variant="ghost"
            shape="square"
            size="sm"
            aria-label={mode === "dark" ? "切换到浅色模式" : "切换到深色模式"}
            title={mode === "dark" ? "切换到浅色模式" : "切换到深色模式"}
            onClick={onToggleMode}
            icon={mode === "dark" ? Sun : Moon}
          />
        </div>
      </div>
    </header>
  );
}
