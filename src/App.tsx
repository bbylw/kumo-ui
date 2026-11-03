import { useEffect, useState } from "react";
import { useKumoToastManager, useTableOfContentsActiveId } from "@cloudflare/kumo";
import { Header } from "./components/Header";
import type { ThemeMode } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sidebar, MobileToc } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Intro } from "./sections/Intro";
import { Highlights } from "./sections/Highlights";
import { Installation } from "./sections/Installation";
import { Usage } from "./sections/Usage";
import { Cli } from "./sections/Cli";
import { Development } from "./sections/Development";
import { SECTIONS } from "./content";

const SECTION_IDS = SECTIONS.map((section) => section.id);

export default function App() {
  const [mode, setMode] = useState<ThemeMode>(() =>
    document.documentElement.dataset.mode === "light" ? "light" : "dark",
  );
  const toasts = useKumoToastManager();
  const { activeId, selectSection } = useTableOfContentsActiveId({
    ids: SECTION_IDS,
    offset: 96,
  });

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", mode === "light" ? "#fafafa" : "#0a0a0a");
  }, [mode]);

  function toggleMode() {
    const next: ThemeMode = mode === "dark" ? "light" : "dark";
    document.documentElement.dataset.mode = next;
    try {
      localStorage.setItem("kumo-theme", next);
    } catch {
      // Storage can be unavailable in private or embedded contexts.
    }
    setMode(next);
    toasts.add({
      title: next === "light" ? "已切换到浅色模式" : "已切换到深色模式",
      description: "主题偏好已保存在本地，下次访问会自动应用。",
    });
  }

  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-kumo-base focus:px-4 focus:py-2 focus:text-sm focus:text-kumo-default focus:shadow-lg"
      >
        跳到主要内容
      </a>

      <Header mode={mode} onToggleMode={toggleMode} />

      <main id="main">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Hero />
        </div>

        <div className="border-t border-kumo-hairline">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-16">
              <Sidebar activeId={activeId} onSelect={selectSection} />

              <div className="min-w-0">
                <div className="mb-10 lg:hidden">
                  <MobileToc activeId={activeId} onSelect={selectSection} />
                </div>

                <div className="space-y-20 md:space-y-24">
                  <Intro />
                  <Highlights />
                  <Installation />
                  <Usage />
                  <Cli />
                  <Development />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
