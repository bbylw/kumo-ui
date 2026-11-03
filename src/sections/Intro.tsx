import { Badge, Link } from "@cloudflare/kumo";
import { CheckCircle } from "@phosphor-icons/react";

export function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <div className="flex flex-col gap-6 border-l-2 border-[#f6821f] pl-5 sm:pl-7 md:flex-row md:items-end md:justify-between">
        <p className="max-w-2xl text-lg leading-relaxed text-kumo-default sm:text-xl">
          Kumo 使得构建无障碍应用变得简单。它自动处理键盘导航、焦点管理和 ARIA 属性，让开发者专注于业务逻辑，
          而不必深究每一个无障碍细节。
        </p>
        <Badge variant="outline" icon={CheckCircle} className="w-fit shrink-0">
          WCAG · 键盘导航 · 焦点管理
        </Badge>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-kumo-subtle">
        这个站点本身就是一次 dogfooding：页面用 React 19、Vite 与 Tailwind v4 构建，导航、标签页、表格、代码块、
        提示与主题切换全部来自{" "}
        <Link href="https://github.com/cloudflare/kumo" target="_blank" rel="noopener noreferrer">
          @cloudflare/kumo
        </Link>
        。
      </p>
    </section>
  );
}
