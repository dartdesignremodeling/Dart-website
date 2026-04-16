import { HeroSection } from "@/components/HeroSection";
import { LampEffect } from "@/components/LampEffect";
import { ManifiestoSection } from "@/components/ManifiestoSection";
import { ElProcesoCreativoSection } from "@/components/ElProcesoCreativoSection";
import { StatsBar } from "@/components/StatsBar";
import { OurEssenceSection } from "@/components/OurEssenceSection";
import { NuestrasObrasSection } from "@/components/NuestrasObrasSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LampEffect />
      <ManifiestoSection />
      <ElProcesoCreativoSection />
      <StatsBar />
      <OurEssenceSection />
      <NuestrasObrasSection />
    </main>
  );
}
