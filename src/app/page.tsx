import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";
import ThreePillars from "@/components/sections/ThreePillars";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ThreePillars />
    </SiteLayout>
  );
}