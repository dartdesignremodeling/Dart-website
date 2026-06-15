import { IluminacionVideoHero } from "@/components/IluminacionVideoHero";
import { ArchitecturalLightingSection } from "@/components/ArchitecturalLightingSection";
import { IluminacionCarousel } from "@/components/IluminacionCarousel";
import { PiezasDeAutorSection } from "@/components/PiezasDeAutorSection";

export default function IluminacionArquitectonicaPage() {
  return (
    <main>
      <IluminacionVideoHero />
      <ArchitecturalLightingSection />
      <IluminacionCarousel />
      <PiezasDeAutorSection />
    </main>
  );
}
