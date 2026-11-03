import { useState } from "react";
import { Banner, ClipboardText, LayerCard, Tabs, Text } from "@cloudflare/kumo";
import { Info } from "@phosphor-icons/react";
import { INSTALLERS } from "../content";
import type { PackageManager } from "../content";
import { SectionHeading } from "../components/ui";

export function Installation() {
  const [manager, setManager] = useState<PackageManager>("pnpm");
  const active = INSTALLERS.find((item) => item.value === manager) ?? INSTALLERS[0];

  return (
    <section id="installation" className="scroll-mt-24">
      <SectionHeading
        index="02"
        title="安装"
        description="安装 Kumo 主包并补齐 React 与 Phosphor 图标对等依赖。样式在应用入口导入一次即可。"
        action={
          <Tabs
            size="sm"
            variant="segmented"
            tabs={INSTALLERS.map((item) => ({ value: item.value, label: item.label }))}
            value={manager}
            onValueChange={(value) => setManager(value as PackageManager)}
            labels={{ scrollStart: "向左滚动", scrollEnd: "向右滚动" }}
          />
        }
      />

      <LayerCard className="p-4 sm:p-6">
        <div className="space-y-4">
          {active.commands.map((item, index) => (
            <div key={item.label} className="grid gap-2 md:grid-cols-[180px_minmax(0,1fr)] md:items-center">
              <Text variant="mono-secondary" as="p">
                0{index + 1} / {item.label}
              </Text>
              <ClipboardText
                size="sm"
                text={item.command}
                tooltip={{ text: "复制命令", copiedText: "已复制", side: "top" }}
                labels={{ copyAction: `复制命令：${item.command}` }}
              />
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-kumo-hairline pt-4 font-mono text-xs text-kumo-subtle">
          可选 peer：echarts（Chart）· zod（AI Schemas）
        </p>
      </LayerCard>

      <Banner
        className="mt-5"
        variant="secondary"
        size="sm"
        icon={<Info size={16} weight="duotone" />}
        title="样式入口只需导入一次"
        description="Tailwind v4 项目在 CSS 中导入；非 Tailwind 项目改用 styles/standalone。两种方式都不要重复引入。"
      />
    </section>
  );
}
