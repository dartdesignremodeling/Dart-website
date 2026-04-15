import { HeroSection } from "@/components/HeroSection";
import { OurEssenceSection } from "@/components/OurEssenceSection";
import NuestrasObras from "@/components/ui/image-gallery";
import { NuestrasObrasSection } from "@/components/NuestrasObrasSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurEssenceSection />
      <NuestrasObras />
      <NuestrasObrasSection />
    </main>
  );
}
