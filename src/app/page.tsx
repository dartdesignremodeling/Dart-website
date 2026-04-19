import { HeroSection } from "@/components/HeroSection";
import { LampEffect } from "@/components/LampEffect";
import { ManifiestoSection } from "@/components/ManifiestoSection";
import { ElProcesoCreativoSection } from "@/components/ElProcesoCreativoSection";
import { InteractiveSelector } from "@/components/ui/interactive-selector";
import { StatsBar } from "@/components/StatsBar";
import { OurEssenceSection } from "@/components/OurEssenceSection";
import { NuestrasObrasSection } from "@/components/NuestrasObrasSection";
import { LuzSection } from "@/components/LuzSection";
import { ColeccionLamparasSection } from "@/components/ColeccionLamparasSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LampEffect />
      <ManifiestoSection />
      <ColeccionLamparasSection />
      <ElProcesoCreativoSection />
      <InteractiveSelector />
      <OurEssenceSection />
      <NuestrasObrasSection />
      <StatsBar />
      <LuzSection />
    </main>
  );
}
