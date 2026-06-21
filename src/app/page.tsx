import SiteLayout from "@/components/layout/SiteLayout";
import AboutLeoSky from "@/components/sections/AboutLeoSky";
import Hero from "@/components/sections/Hero";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ThreePillars from "@/components/sections/ThreePillars";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ThreePillars />
      <ImpactSection />
      <ProgramsSection />
      <PartnersSection />
      <AboutLeoSky />
    </SiteLayout>
  );
}
