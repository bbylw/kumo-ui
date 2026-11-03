import { useState } from "react";
import {
  Badge,
  Button,
  ClipboardText,
  Grid,
  GridItem,
  LayerCard,
  LinkButton,
  Tabs,
  Text,
} from "@cloudflare/kumo";
import {
  ArrowRight,
  BookOpen,
  CloudArrowDown,
  GithubLogo,
  Sparkle,
} from "@phosphor-icons/react";
import { RELEASED_AT, REPO_URL, SITE_URL, STATS, VERSION } from "../content";
import { CodeSample } from "./ui";

const SHOWCASE_CODE = `import { Button, Table, Tabs } from "@cloudflare/kumo";
import "@cloudflare/kumo/styles";

export function App() {
  return (
    <Button variant="primary" icon={Sparkle}>
      Ship it
    </Button>
  );
}`;

function Showcase() {
  const [tab, setTab] = useState("preview");

  return (
    <div className="relative rise [animation-delay:120ms]">
      <div
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(246,130,31,0.16),transparent)] blur-xl sm:-inset-6"
      />
      <LayerCard className="overflow-hidden p-1.5">
        <div className="rounded-xl border border-kumo-hairline bg-kumo-base p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="live-dot absolute inline-flex size-2 rounded-full bg-[#f6821f]" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f6821f]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-kumo-subtle">
                Live preview
              </span>
            </div>
            <Tabs
              size="sm"
              variant="segmented"
              tabs={[
                { value: "preview", label: "预览" },
                { value: "code", label: "代码" },
              ]}
              value={tab}
              onValueChange={setTab}
            />
          </div>

          <div className="mt-4">
            {tab === "preview" ? (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success" appearance="dot">
                    已安装
                  </Badge>
                  <Badge variant="blue">React 19</Badge>
                  <Badge variant="outline">Tailwind v4</Badge>
                </div>

                <ClipboardText
                  text="pnpm add @cloudflare/kumo"
                  size="sm"
                  tooltip={{ text: "复制命令", copiedText: "已复制", side: "top" }}
                  labels={{ copyAction: "复制安装命令" }}
                />

                <div className="grid grid-cols-3 gap-2">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-kumo-hairline bg-kumo-elevated p-2.5">
                      <div className="font-mono text-lg font-bold text-[#f6821f]">{stat.value}</div>
                      <div className="mt-0.5 text-[11px] leading-tight text-kumo-subtle">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 border-t border-kumo-hairline pt-4">
                  <Button size="sm" variant="primary" icon={Sparkle}>
                    创建
                  </Button>
                  <Button size="sm" variant="secondary">
                    取消
                  </Button>
                  <Text variant="mono-secondary" as="span" truncate>
                    · 组件来自 Kumo 本身
                  </Text>
                </div>
              </div>
            ) : (
              <CodeSample code={SHOWCASE_CODE} lang="tsx" className="border-0" />
            )}
          </div>
        </div>
      </LayerCard>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative py-16 sm:py-20 lg:py-24" aria-labelledby="hero-title">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 -z-10 h-80 bg-[radial-gradient(55%_60%_at_70%_0%,rgba(246,130,31,0.14),transparent_70%)]"
      />
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="rise">
          <Badge variant="orange" icon={Sparkle}>
            v{VERSION} · {RELEASED_AT}
          </Badge>
          <h1
            id="hero-title"
            className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-kumo-default sm:text-6xl lg:text-7xl"
          >
            KUMO <span className="text-kumo-subtle">UI</span>
            <span className="text-[#f6821f]">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-kumo-default sm:text-xl">
            Cloudflare 的 React 组件库，把无障碍、设计令牌与交互模式一次性做对。
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-kumo-subtle sm:text-base">
            基于 Base UI 构建，提供 54 个无障碍组件、40 个原语与可安装 Blocks。Tailwind v4
            语义令牌自动适配深浅色，AI 组件注册表让编码 Agent 直接读懂 API。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton href="#installation" variant="primary" icon={CloudArrowDown}>
              开始安装
            </LinkButton>
            <LinkButton href={SITE_URL} variant="secondary" external icon={BookOpen}>
              在线文档
            </LinkButton>
            <LinkButton href={REPO_URL} variant="ghost" external icon={GithubLogo}>
              GitHub
            </LinkButton>
          </div>
          <a
            href="#highlights"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-kumo-subtle transition-colors hover:text-kumo-default"
          >
            查看 2.17 更新
            <ArrowRight size={14} />
          </a>
        </div>

        <Showcase />
      </div>

      <Grid variant="3up" gap="base" className="mt-16">
        {STATS.map((stat) => (
          <GridItem key={stat.label}>
            <LayerCard className="h-full p-5 transition-colors hover:border-kumo-line">
              <div className="flex items-end justify-between gap-3">
                <div className="font-mono text-4xl font-bold tracking-tight text-[#f6821f]">{stat.value}</div>
                <div className="pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-kumo-subtle">
                  {stat.label}
                </div>
              </div>
              <p className="mt-3 border-t border-kumo-hairline pt-3 text-xs leading-relaxed text-kumo-subtle">
                {stat.hint}
              </p>
            </LayerCard>
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
