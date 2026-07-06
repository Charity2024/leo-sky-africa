"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";
import HeroLogoWatermark from "@/components/ui/HeroLogoWatermark";
import PremiumCarousel from "@/components/pillar/PremiumCarousel";
import PremiumGallery from "@/components/pillar/PremiumGallery";
import Starfield from "@/components/ui/Starfield";
import FeaturedActivities from "@/components/pillar/FeaturedActivities";
import type { PillarPageContent } from "@/content/types";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";

type LabsPageProps = {
  content: PillarPageContent;
};

function GalleryImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  if (isGalleryPlaceholder(src)) {
    return <ImagePlaceholder label={alt} className={clsx("h-full w-full", className)} aspectRatio="" />;
  }
  return (
    <BrandImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      wrapperClassName="h-full w-full"
    />
  );
}

export default function LabsPage({ content }: LabsPageProps) {
  const prefersReducedMotion = useReducedMotion();
  const impactRef = useRef<HTMLElement>(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-10% 0px" });
  const heroCta = content.heroCta ?? content.cta;

  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.95, delay, ease: easePremium },
        };

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="labs-hero-heading"
        className="relative flex min-h-dvh items-end overflow-hidden bg-brand-dark"
      >
        <div className="absolute inset-0">
          <BrandImage
            src={content.heroImage}
            alt={content.title}
            fill
            sizes="100vw"
            hoverZoom={false}
            revealOnScroll={false}
            priority
            className="object-cover"
            wrapperClassName="absolute inset-0"
          />
          <div className="absolute inset-0 bg-brand-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
          <HeroLogoWatermark
            position={content.heroWatermark?.position ?? "left"}
            opacity={content.heroWatermark?.opacity ?? 0.07}
          />
        </div>

        <Container className="relative z-10 pb-20 pt-32 lg:pb-28">
          <motion.div {...reveal(0)} className="max-w-3xl">
            <p className="mb-5 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.kicker}
            </p>
            <h1
              id="labs-hero-heading"
              className="text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl lg:text-6xl xl:text-[4.25rem] xl:leading-[1.05]"
            >
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-body/90 sm:text-xl">
              {content.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
              {content.heroDescription}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={heroCta.primaryHref}>{heroCta.primaryLabel}</Button>
              <Button href={heroCta.secondaryHref} variant="secondary">
                {heroCta.secondaryLabel}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission - Glassmorphism */}
      {content.mission && (
        <section className="bg-brand-dark py-32 lg:py-48">
          <Container>
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, ease: easePremium }}
                className="rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 p-12 backdrop-blur-md lg:p-16"
              >
                <p className="mb-6 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
                  {content.mission.eyebrow}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                  {content.mission.title}
                </h2>
                <div className="mt-12 space-y-6 text-lg leading-relaxed text-brand-body/90 sm:text-xl">
                  {content.mission.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-8% 0px" }}
                      transition={{ duration: 0.85, delay: 0.2 + index * 0.1, ease: easePremium }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* Programs - Premium Carousel */}
      {content.programs && (
        <section
          id="programs"
          aria-labelledby="programs-heading"
          className="scroll-mt-24 bg-brand-dark py-32 lg:py-48"
        >
          <Container>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, ease: easePremium }}
              className="mb-16 text-center"
            >
              <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
                {content.programs.eyebrow}
              </p>
              <h2 id="programs-heading" className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                {content.programs.title}
              </h2>
            </motion.div>
            <PremiumCarousel items={content.programs.items} autoPlayInterval={4500} />
          </Container>
        </section>
      )}

      {/* Impact - Glassmorphism cards */}
      {content.impact && (
        <section
          ref={impactRef}
          aria-labelledby="impact-heading"
          className="relative overflow-hidden py-32 lg:py-48"
          style={{
            background: "radial-gradient(ellipse 90% 60% at 50% 40%, rgba(57, 0, 89, 0.25), #030303 70%)",
          }}
        >
          <Container>
            <SectionHeader
              eyebrow={content.impact.eyebrow}
              title={content.impact.title}
              align="center"
              className="mb-20"
            />
            <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {content.impact.stats.map((stat, index) => (
                <motion.li
                  key={stat.label}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.85, delay: index * 0.08, ease: easePremium }}
                  className="rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 text-center backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:bg-brand-primary/10 lg:p-10"
                >
                  <p
                    id={index === 0 ? "impact-heading" : undefined}
                    className="text-3xl font-semibold text-brand-accent sm:text-4xl lg:text-5xl"
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} active={impactInView} />
                  </p>
                  <p className="mt-3 text-sm text-brand-body">{stat.label}</p>
                </motion.li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Gallery - Premium Editorial Masonry */}
      <PremiumGallery
        images={content.gallery.images}
        eyebrow={content.gallery.eyebrow}
        title={content.gallery.title}
        instagramUrl="https://instagram.com/leoskyafrica"
      />

      {/* Featured Activities - Data-driven cards */}
      {content.relatedEvents && content.relatedEvents.length > 0 && (
        <FeaturedActivities
          activities={content.relatedEvents}
          eyebrow={content.relatedEventsSection?.eyebrow}
          title={content.relatedEventsSection?.title}
          showStatus={false}
        />
      )}

      {/* Testimonials - Glassmorphism cards */}
      {content.testimonials && (
        <section className="bg-brand-dark py-32 lg:py-48">
          <Container>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, ease: easePremium }}
              className="mb-20 text-center"
            >
              <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
                {content.testimonials.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                {content.testimonials.title}
              </h2>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-2">
              {content.testimonials.items.map((testimonial, index) => (
                <motion.blockquote
                  key={testimonial.author}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.85, delay: index * 0.1, ease: easePremium }}
                  className="rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 p-10 backdrop-blur-md lg:p-12"
                >
                  <p className="text-xl leading-relaxed text-brand-body/90 sm:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-8 border-t border-brand-secondary/10 pt-6">
                    <cite className="not-italic">
                      <span className="block text-sm font-semibold text-brand-cream">{testimonial.author}</span>
                      <span className="text-xs text-brand-muted">{testimonial.role}</span>
                    </cite>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA - Premium with animated starfield */}
      <section className="relative overflow-hidden bg-brand-dark pb-32 lg:pb-48">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark" />
          <Starfield className="absolute inset-0" starCount={60} />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.85, ease: easePremium }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
              {content.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-body/85 sm:text-lg">
              {content.cta.description}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={content.cta.primaryHref}>{content.cta.primaryLabel}</Button>
              <Button href={content.cta.secondaryHref} variant="secondary">
                {content.cta.secondaryLabel}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
