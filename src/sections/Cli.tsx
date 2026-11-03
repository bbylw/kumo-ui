import { Banner, InlineCopyText, Table, Text } from "@cloudflare/kumo";
import { Terminal } from "@phosphor-icons/react";
import { CLI_COMMANDS } from "../content";
import { SectionHeading } from "../components/ui";

function CommandCopy({ command, compact = false }: { command: string; compact?: boolean }) {
  return (
    <InlineCopyText
      labels={{ copyAction: `复制 ${command}`, copied: "已复制" }}
      className={`w-fit max-w-full whitespace-nowrap ${compact ? "[&>span]:text-xs" : ""}`}
    >
      {command}
    </InlineCopyText>
  );
}

export function Cli() {
  return (
    <section id="cli" className="scroll-mt-24">
      <SectionHeading
        index="04"
        title="命令行工具"
        description="CLI 现在同时负责组件文档、Blocks 分发、令牌迁移与 AI 指南输出。点击命令即可复制。"
      />

      <div className="overflow-hidden rounded-xl border border-kumo-hairline bg-kumo-base md:hidden">
        <div className="divide-y divide-kumo-hairline">
          {CLI_COMMANDS.map((item) => (
            <div key={item.command} className="p-4">
              <CommandCopy command={item.command} compact />
              <p className="mt-1.5 text-xs leading-relaxed text-kumo-subtle">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden overflow-x-auto rounded-xl border border-kumo-hairline bg-kumo-base md:block">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-[46%]">
                <Text variant="mono-secondary" as="span">
                  命令
                </Text>
              </Table.Head>
              <Table.Head>
                <Text variant="mono-secondary" as="span">
                  用途
                </Text>
              </Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {CLI_COMMANDS.map((item) => (
              <Table.Row key={item.command}>
                <Table.Cell>
                  <CommandCopy command={item.command} />
                </Table.Cell>
                <Table.Cell>
                  <Text variant="secondary" size="sm" as="span">
                    {item.description}
                  </Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <Banner
        className="mt-5"
        variant="default"
        size="sm"
        icon={<Terminal size={16} weight="duotone" />}
        title="从 AI 指南开始"
        description="npx @cloudflare/kumo ai 会输出组件清单、API 约束和示例，适合直接提供给编码 Agent。"
      />
    </section>
  );
}
