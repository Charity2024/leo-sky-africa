import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import Button from "@/components/ui/Button";
import { partnersPageContent } from "@/content/partners";
import { createPageMetadata } from "@/lib/metadata";

const content = partnersPageContent;

export const metadata: Metadata = createPageMetadata({
  title: "Partners",
  description: content.metadataDescription,
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-brand-dark pt-28 pb-8 lg:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(105,21,135,0.2),transparent_70%)]"
        />
        <Container>
          <SectionHeader
            eyebrow={content.hero.eyebrow}
            title={content.hero.title}
            description={content.hero.description}
            align="center"
          />
        </Container>
      </section>

      <section
        className="relative overflow-hidden py-16 lg:py-24"
        style={{ background: "linear-gradient(180deg, #030303 0%, #390059 55%, #030303 100%)" }}
      >
        <PartnersMarquee />
      </section>

      <section className="bg-brand-dark py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-brand-secondary/15 bg-brand-primary/10 px-8 py-14 text-center backdrop-blur-md">
            <h2 className="text-2xl font-bold text-brand-cream sm:text-3xl">{content.cta.title}</h2>
            <p className="mt-4 text-brand-body/85">{content.cta.description}</p>
            <div className="mt-8">
              <Button href={content.cta.button.href}>{content.cta.button.label}</Button>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
