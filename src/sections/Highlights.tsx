import { Grid, GridItem, LayerCard, Text } from "@cloudflare/kumo";
import { Cube, FigmaLogo, Palette, Robot, Sparkle, SquaresFour } from "@phosphor-icons/react";
import { HIGHLIGHTS, VERSION, RELEASED_AT } from "../content";
import type { HighlightIcon } from "../content";
import { SectionHeading } from "../components/ui";

const ICONS: Record<HighlightIcon, typeof Sparkle> = {
  sparkle: Sparkle,
  blocks: SquaresFour,
  robot: Robot,
  palette: Palette,
  cube: Cube,
  figma: FigmaLogo,
};

export function Highlights() {
  return (
    <section id="highlights" className="scroll-mt-24">
      <SectionHeading
        index="01"
        title="更新亮点"
        description={`站点已同步至 @cloudflare/kumo ${VERSION}（${RELEASED_AT}）。以下是当前版本的主要能力。`}
      />

      <Grid variant="3up" gap="base">
        {HIGHLIGHTS.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <GridItem key={item.title}>
              <LayerCard className="group h-full p-6 transition-colors hover:border-kumo-line">
                <div className="flex size-10 items-center justify-center rounded-lg border border-kumo-hairline bg-kumo-recessed text-[#f6821f] transition-colors group-hover:border-[#f6821f]/40">
                  <Icon size={20} weight="duotone" />
                </div>
                <h3 className="mt-5 text-base font-medium text-kumo-default">{item.title}</h3>
                <div className="mt-2">
                  <Text variant="secondary" size="sm">
                    {item.body}
                  </Text>
                </div>
              </LayerCard>
            </GridItem>
          );
        })}
      </Grid>
    </section>
  );
}
