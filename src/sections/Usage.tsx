import { useState } from "react";
import { LayerCard, Tabs, Text } from "@cloudflare/kumo";
import { BASIC_IMPORT, USAGE, USAGE_TABS } from "../content";
import type { UsageTab } from "../content";
import { CodeSample, SectionHeading } from "../components/ui";

export function Usage() {
  const [tab, setTab] = useState<UsageTab>("tailwind");
  const current = USAGE[tab];

  return (
    <section id="usage" className="scroll-mt-24">
      <SectionHeading
        index="03"
        title="使用方法"
        description="基础引用保持不变；根据构建环境选择样式接入方式，再按需要选择子路径导入、原语或 Blocks。"
      />

      <LayerCard className="p-5 sm:p-6">
        <Text variant="mono-secondary" as="p">
          基础引用
        </Text>
        <CodeSample code={BASIC_IMPORT} lang="tsx" className="mt-3" />
        <p className="mt-3 text-sm leading-relaxed text-kumo-subtle">
          从包入口导入组件，样式在应用入口导入一次。组件、Hooks 与工具函数都从同一个入口导出。
        </p>
      </LayerCard>

      <LayerCard className="mt-5 p-5 sm:p-6">
        <Tabs
          variant="underline"
          size="sm"
          tabs={USAGE_TABS.map((item) => ({ value: item.value, label: item.label }))}
          value={tab}
          onValueChange={(value) => setTab(value as UsageTab)}
          labels={{ scrollStart: "向左滚动", scrollEnd: "向右滚动" }}
        />
        <p className="mt-4 text-sm leading-relaxed text-kumo-subtle">{current.note}</p>
        <CodeSample code={current.code} lang={current.lang} className="mt-4" />
      </LayerCard>
    </section>
  );
}
