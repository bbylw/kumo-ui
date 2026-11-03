# Kumo

[English](./README.en.md)

Cloudflare 用于构建现代 Web 应用程序的组件库。

Kumo 提供基于 [Base UI](https://base-ui.com/) 构建的无障碍且符合设计系统的 UI 组件。它自动处理键盘导航、焦点管理和 ARIA 属性，因此您可以专注于构建无障碍应用程序，而无需深究每一个细节。

<img width="2560" height="1456" alt="image" src="https://github.com/user-attachments/assets/032f5a0e-b686-4440-b1ca-6182379479aa" />

## 安装

```bash
pnpm add @cloudflare/kumo
```

### 对等依赖 (Peer Dependencies)

```bash
pnpm add react react-dom @phosphor-icons/react
```

## 使用方法

```tsx
import { Button, Input, Dialog } from "@cloudflare/kumo";
import "@cloudflare/kumo/styles";
```

### 精细导入 (Tree-Shaking)

```tsx
import { Button } from "@cloudflare/kumo/components/button";
```

### Base UI 原语

Kumo 重新导出了所有 Base UI 原语以支持高级用例：

```tsx
import { Popover } from "@cloudflare/kumo/primitives/popover";
```

## 命令行工具 (CLI)

直接从命令行查询组件文档：

```bash
npx @cloudflare/kumo ls          # 列出所有组件
npx @cloudflare/kumo doc Button  # 获取组件文档
npx @cloudflare/kumo docs        # 获取所有文档
```

## 开发指南

请参阅 [AGENTS.md](https://github.com/cloudflare/kumo/blob/main/AGENTS.md) 获取全面的开发文档，包括：

- 组件模式和样式系统
- 语义颜色令牌
- 开发工作流
- CI/CD 流水线
- Figma 插件

### 快速开始

```bash
pnpm install
pnpm dev                    # 在 localhost:4321 启动文档站点
pnpm --filter @cloudflare/kumo test
```

### 创建新组件

```bash
pnpm --filter @cloudflare/kumo new:component
```

### Figma 插件

```bash
# 可选：在构建时启用 Token 同步
# cp packages/kumo-figma/scripts/.env.example packages/kumo-figma/scripts/.env
# $EDITOR packages/kumo-figma/scripts/.env  # 设置 FIGMA_TOKEN（可选 FIGMA_FILE_KEY）

pnpm --filter @cloudflare/kumo-figma build
# 在 Figma 中：Plugins > Development > Import plugin from manifest...
# 选择：packages/kumo-figma/src/manifest.json
```

## 本站实现

本站是 Kumo 的展示页，使用 **Vite + React 19 + TypeScript + Tailwind CSS v4** 构建，界面本身由 Kumo 组件组成（Tabs、Table、LayerCard、ClipboardText、Toasty、TableOfContents 等）。

```bash
pnpm install
pnpm dev       # 本地开发
pnpm build     # 类型检查并构建到 dist/
pnpm preview   # 预览生产构建
```

推送 `main` 后由 GitHub Actions 构建并部署到 GitHub Pages，自定义域名为 `kumo.ndjp.net`。

## 文档

- **在线文档**: [kumo-ui.com](https://kumo-ui.com)
- **AI/Agent 指南**: [AGENTS.md](https://github.com/cloudflare/kumo/blob/main/AGENTS.md)
- **本站**: [kumo.ndjp.net](https://kumo.ndjp.net)

## 许可证 (License)

MIT
