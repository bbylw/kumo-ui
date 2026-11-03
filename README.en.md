# Kumo

[中文](./README.md)

Cloudflare's component library for building modern web applications.

Kumo provides accessible, design-system-compliant UI components built on [Base UI](https://base-ui.com/). It handles keyboard navigation, focus management, and ARIA attributes so you can build accessible applications without thinking through every detail.

<img width="2560" height="1456" alt="image" src="https://github.com/user-attachments/assets/032f5a0e-b686-4440-b1ca-6182379479aa" />

## Installation

```bash
pnpm add @cloudflare/kumo
```

### Peer Dependencies

```bash
pnpm add react react-dom @phosphor-icons/react
```

## Usage

```tsx
import { Button, Input, Dialog } from "@cloudflare/kumo";
import "@cloudflare/kumo/styles";
```

### Granular Imports (Tree-Shaking)

```tsx
import { Button } from "@cloudflare/kumo/components/button";
```

### Base UI Primitives

Kumo re-exports all Base UI primitives for advanced use cases:

```tsx
import { Popover } from "@cloudflare/kumo/primitives/popover";
```

## CLI

Query component documentation from the command line:

```bash
npx @cloudflare/kumo ls          # List all components
npx @cloudflare/kumo doc Button  # Get component docs
npx @cloudflare/kumo docs        # Get all docs
```

## Development

See [AGENTS.md](https://github.com/cloudflare/kumo/blob/main/AGENTS.md) for comprehensive development documentation including:

- Component patterns and styling system
- Semantic color tokens
- Development workflows
- CI/CD pipeline
- Figma plugin

### Quick Start

```bash
pnpm install
pnpm dev                    # Start docs site at localhost:4321
pnpm --filter @cloudflare/kumo test
```

### Creating Components

```bash
pnpm --filter @cloudflare/kumo new:component
```

### Figma Plugin

```bash
# Optional: enable token sync during build
# cp packages/kumo-figma/scripts/.env.example packages/kumo-figma/scripts/.env
# $EDITOR packages/kumo-figma/scripts/.env  # set FIGMA_TOKEN (and optionally FIGMA_FILE_KEY)

pnpm --filter @cloudflare/kumo-figma build
# In Figma: Plugins > Development > Import plugin from manifest...
# Select: packages/kumo-figma/src/manifest.json
```

## This Site

This landing page is built with **Vite, React 19, TypeScript, and Tailwind CSS v4**. The interface itself is composed from Kumo components (Tabs, Table, LayerCard, ClipboardText, Toasty, TableOfContents, and more). The source lives in `web/`, and the production build is published from the repository root.

```bash
cd web
pnpm install
pnpm dev           # local development
pnpm build         # typecheck and build to web/dist
pnpm publish:site  # build and copy to the repository root
```

Pushes to `main` run `publish:site` through GitHub Actions, which commits the build output; GitHub Pages serves it from the repository root at `kumo.ndjp.net`.

## Documentation

- **Live Docs**: [kumo-ui.com](https://kumo-ui.com)
- **AI/Agent Guide**: [AGENTS.md](https://github.com/cloudflare/kumo/blob/main/AGENTS.md)
- **This Site**: [kumo.ndjp.net](https://kumo.ndjp.net)

## License

MIT
