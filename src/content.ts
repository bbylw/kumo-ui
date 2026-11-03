export const VERSION = "2.17.0";
export const RELEASED_AT = "2026-11-02";
export const SITE_URL = "https://kumo-ui.com";
export const REPO_URL = "https://github.com/cloudflare/kumo";
export const AGENTS_URL = "https://github.com/cloudflare/kumo/blob/main/AGENTS.md";

export type SectionId = "intro" | "highlights" | "installation" | "usage" | "cli" | "development";

export const SECTIONS: { id: SectionId; index: string; label: string }[] = [
  { id: "intro", index: "00", label: "简介" },
  { id: "highlights", index: "01", label: "更新亮点" },
  { id: "installation", index: "02", label: "安装" },
  { id: "usage", index: "03", label: "使用方法" },
  { id: "cli", index: "04", label: "命令行工具" },
  { id: "development", index: "05", label: "开发指南" },
];

export const STATS = [
  { value: "54", label: "组件", hint: "表单、导航、浮层、数据展示与布局" },
  { value: "40", label: "Base UI 原语", hint: "通过 primitives/* 按需导入" },
  { value: "3", label: "可安装 Blocks", hint: "PageHeader · ResourceList · DeleteResource" },
] as const;

export type HighlightIcon = "sparkle" | "blocks" | "robot" | "palette" | "cube" | "figma";

export const HIGHLIGHTS: { icon: HighlightIcon; title: string; body: string }[] = [
  {
    icon: "sparkle",
    title: "54 个组件 · 40 个原语",
    body: "覆盖表单、导航、浮层、数据展示与布局。所有 Base UI 原语都可以从 @cloudflare/kumo/primitives/* 按需导入。",
  },
  {
    icon: "blocks",
    title: "Blocks 按需安装",
    body: "PageHeader、ResourceList、DeleteResource 等页面级区块通过 kumo add 写入项目，不随包入口捆绑。",
  },
  {
    icon: "robot",
    title: "AI 友好",
    body: "内置 ai/component-registry、ai/schemas 与 kumo ai 命令，让编码 Agent 准确查询组件 API 与示例。",
  },
  {
    icon: "palette",
    title: "Tailwind v4 主题",
    body: "语义颜色令牌基于 light-dark() 自动切换深浅色；非 Tailwind 项目可直接使用 styles/standalone。",
  },
  {
    icon: "cube",
    title: "可选依赖",
    body: "Chart 需要 echarts，AI Schemas 需要 zod；两者均为可选 peer，不增加默认安装体积。",
  },
  {
    icon: "figma",
    title: "Figma 插件",
    body: "构建时可选同步设计令牌，让 Figma 与代码中的颜色、字体保持一致。",
  },
];

export type PackageManager = "pnpm" | "npm" | "yarn";

export const INSTALLERS: {
  value: PackageManager;
  label: string;
  commands: { label: string; command: string }[];
}[] = [
  {
    value: "pnpm",
    label: "pnpm",
    commands: [
      { label: "主要包", command: "pnpm add @cloudflare/kumo" },
      { label: "React 对等依赖", command: "pnpm add react react-dom" },
      { label: "图标对等依赖", command: "pnpm add @phosphor-icons/react" },
    ],
  },
  {
    value: "npm",
    label: "npm",
    commands: [
      { label: "主要包", command: "npm install @cloudflare/kumo" },
      { label: "React 对等依赖", command: "npm install react react-dom" },
      { label: "图标对等依赖", command: "npm install @phosphor-icons/react" },
    ],
  },
  {
    value: "yarn",
    label: "yarn",
    commands: [
      { label: "主要包", command: "yarn add @cloudflare/kumo" },
      { label: "React 对等依赖", command: "yarn add react react-dom" },
      { label: "图标对等依赖", command: "yarn add @phosphor-icons/react" },
    ],
  },
];

export const BASIC_IMPORT = `import { Button, Input, Dialog } from "@cloudflare/kumo";
import "@cloudflare/kumo/styles";`;

export const USAGE_TABS = [
  { value: "tailwind", label: "Tailwind" },
  { value: "standalone", label: "样式" },
  { value: "imports", label: "子路径" },
  { value: "primitives", label: "原语" },
  { value: "blocks", label: "Blocks" },
] as const;

export type UsageTab = (typeof USAGE_TABS)[number]["value"];

export const USAGE: Record<
  UsageTab,
  { lang: "css" | "tsx" | "typescript" | "bash"; note: string; code: string }
> = {
  tailwind: {
    lang: "css",
    note: "Tailwind 默认不扫描 node_modules，需要声明 @source；Kumo 样式必须先于 tailwindcss 导入，@theme 令牌才会先生效。",
    code: `@source "../node_modules/@cloudflare/kumo/dist/**/*.{js,jsx,ts,tsx}";
@import "@cloudflare/kumo/styles/tailwind";
@import "tailwindcss";`,
  },
  standalone: {
    lang: "typescript",
    note: "不使用 Tailwind 时，导入预编译的 standalone 样式即可，包含组件所需的全部工具类与动画。",
    code: `// 在应用入口导入一次
import "@cloudflare/kumo/styles/standalone";`,
  },
  imports: {
    lang: "tsx",
    note: "按组件子路径导入，只打包实际用到的模块，适合对产物体积敏感的项目。",
    code: `import { Button } from "@cloudflare/kumo/components/button";
import { Dialog } from "@cloudflare/kumo/components/dialog";`,
  },
  primitives: {
    lang: "tsx",
    note: "Kumo 重新导出了所有 Base UI 原语，用于构建设计系统之外的交互。",
    code: `import { Popover } from "@cloudflare/kumo/primitives/popover";`,
  },
  blocks: {
    lang: "bash",
    note: "Blocks 是组合多个组件的高层页面区块，不会从包入口导出；先初始化配置，再写入项目。",
    code: `npx @cloudflare/kumo init
npx @cloudflare/kumo add PageHeader`,
  },
};

export const CLI_COMMANDS: { command: string; description: string }[] = [
  { command: "npx @cloudflare/kumo init", description: "初始化 kumo.json，配置 Blocks 的写入路径" },
  { command: "npx @cloudflare/kumo blocks", description: "列出所有可安装的 Blocks" },
  { command: "npx @cloudflare/kumo add PageHeader", description: "把 PageHeader Block 写入当前项目" },
  { command: "npx @cloudflare/kumo ls", description: "列出全部组件及所属分组" },
  { command: "npx @cloudflare/kumo doc Button", description: "查看单个组件的 API 与示例" },
  { command: "npx @cloudflare/kumo docs", description: "输出完整组件文档" },
  { command: "npx @cloudflare/kumo ai", description: "生成面向编码 Agent 的使用指南" },
  { command: "npx @cloudflare/kumo migrate --classes", description: "导出令牌重命名映射，辅助迁移" },
];

export const DEV_CARDS: { title: string; lines: { text: string; comment?: string }[] }[] = [
  {
    title: "快速开始",
    lines: [
      { text: "pnpm install" },
      { text: "pnpm dev", comment: "// port 4321" },
      { text: "pnpm lint" },
      { text: "pnpm typecheck" },
      { text: "pnpm --filter @cloudflare/kumo test" },
    ],
  },
  {
    title: "创建新组件",
    lines: [
      { text: "pnpm --filter @cloudflare/kumo new:component" },
      { text: "pnpm --filter @cloudflare/kumo gen:docs", comment: "// 生成文档与注册表" },
    ],
  },
  {
    title: "Figma 插件",
    lines: [
      { text: "pnpm --filter @cloudflare/kumo-figma build" },
      { text: "Figma → Plugins → Import plugin from manifest", comment: "// 手动导入 manifest" },
    ],
  },
];

export const AGENTS_TOPICS = [
  "组件模式和样式系统",
  "语义颜色令牌",
  "开发工作流",
  "CI/CD 流水线",
  "Figma 插件",
  "Blocks 与 AI 组件注册表",
];
