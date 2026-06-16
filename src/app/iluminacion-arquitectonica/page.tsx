import { IluminacionVideoHero } from "@/components/IluminacionVideoHero";
import { ArchitecturalLightingSection } from "@/components/ArchitecturalLightingSection";
import { IluminacionCarousel } from "@/components/IluminacionCarousel";
import { IluminacionCollage } from "@/components/IluminacionCollage";
import { PiezasDeAutorSection } from "@/components/PiezasDeAutorSection";

export default function IluminacionArquitectonicaPage() {
  return (
    <main>
      <IluminacionVideoHero />
      <ArchitecturalLightingSection />
      <IluminacionCarousel />
      <IluminacionCollage />
      <PiezasDeAutorSection />
    </main>
  );
}
