import { Grid, GridItem, LayerCard, LinkButton, Text } from "@cloudflare/kumo";
import {
  ArrowSquareOut,
  CheckCircle,
  FigmaLogo,
  Lightning,
  Robot,
  Wrench,
} from "@phosphor-icons/react";
import { AGENTS_TOPICS, AGENTS_URL, DEV_CARDS } from "../content";
import { SectionHeading } from "../components/ui";

const CARD_ICONS = [Lightning, Wrench, FigmaLogo];

export function Development() {
  return (
    <section id="development" className="scroll-mt-24">
      <SectionHeading
        index="05"
        title="开发指南"
        description="在本地运行、扩展组件或同步设计令牌。更完整的约定与工作流写在 AGENTS.md 中。"
      />

      <Grid variant="3up" gap="base">
        {DEV_CARDS.map((card, index) => {
          const Icon = CARD_ICONS[index] ?? Wrench;
          return (
            <GridItem key={card.title}>
              <LayerCard className="h-full p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-md border border-kumo-hairline bg-kumo-recessed text-[#f6821f]">
                    <Icon size={16} weight="duotone" />
                  </span>
                  <h3 className="text-sm font-medium text-kumo-default">{card.title}</h3>
                </div>
                <div className="mt-5 space-y-2.5 font-mono text-xs leading-relaxed">
                  {card.lines.map((line) => (
                    <div key={line.text} className="flex gap-2">
                      <span className="select-none text-[#f6821f]">$</span>
                      <span className="min-w-0 break-words text-kumo-subtle">
                        {line.text}
                        {line.comment ? (
                          <span className="ml-2 text-kumo-subtle/50">{line.comment}</span>
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>
              </LayerCard>
            </GridItem>
          );
        })}
      </Grid>

      <LayerCard className="mt-6 p-6 sm:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg border border-kumo-hairline bg-kumo-recessed text-[#f6821f]">
                <Robot size={20} weight="duotone" />
              </span>
              <div>
                <h3 className="text-base font-medium text-kumo-default">AGENTS.md</h3>
                <Text variant="mono-secondary" as="p">
                  开发约定与 Agent 指南
                </Text>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-kumo-subtle">
              查阅完整的开发文档，包括组件模式、语义令牌、工作流、CI/CD、Figma 插件，以及 Blocks 与 AI
              组件注册表的生成方式。
            </p>
            <LinkButton
              href={AGENTS_URL}
              external
              variant="secondary"
              icon={ArrowSquareOut}
              className="mt-5"
            >
              阅读 AGENTS.md
            </LinkButton>
          </div>

          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 md:max-w-md">
            {AGENTS_TOPICS.map((topic) => (
              <li key={topic} className="flex items-center gap-2.5 text-sm text-kumo-subtle">
                <CheckCircle size={15} weight="duotone" className="shrink-0 text-[#f6821f]" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t border-kumo-hairline pt-4 font-mono text-[11px] tracking-wide text-kumo-subtle/70">
          工具链：Node 24+ · pnpm 12+ · Tailwind v4 · Vite+
        </p>
      </LayerCard>
    </section>
  );
}
