import SiteLayout from "@/components/layout/SiteLayout";
import AboutLeoSky from "@/components/sections/AboutLeoSky";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ThreePillars from "@/components/sections/ThreePillars";
import EventsSection from "@/components/sections/EventsSection";
import BlogSection from "@/components/sections/BlogSection";
import { blogContent } from "@/content/home";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ThreePillars />
      <ImpactSection />
      <EventsSection />
      <BlogSection
        posts={blogContent.posts}
        eyebrow={blogContent.eyebrow}
        title={blogContent.title}
        description={blogContent.description}
        viewAllLabel={blogContent.viewAllLabel}
        viewAllHref={blogContent.viewAllHref}
      />
      <PartnersSection />
      <AboutLeoSky />
      <ContactSection />
    </SiteLayout>
  );
}
