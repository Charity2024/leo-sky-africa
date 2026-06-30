"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import HeroLogoWatermark from "@/components/ui/HeroLogoWatermark";
import type { PillarPageContent } from "@/content/types";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";

type AstrotourismPageProps = {
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

export default function AstrotourismPage({ content }: AstrotourismPageProps) {
  const prefersReducedMotion = useReducedMotion();
  const journeyRef = useRef<HTMLElement>(null);
  const journeyInView = useInView(journeyRef, { once: true, margin: "-10% 0px" });
  const heroCta = content.heroCta ?? content.cta;
  const destinations = content.destinations;
  const visitorJourney = content.visitorJourney;

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
        aria-labelledby="astro-hero-heading"
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-dark"
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
          <div className="absolute inset-0 bg-brand-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/30" />
          <HeroLogoWatermark
            position={content.heroWatermark?.position ?? "center"}
            opacity={content.heroWatermark?.opacity ?? 0.05}
          />
        </div>

        <Container className="relative z-10 py-32 text-center">
          <motion.div {...reveal(0)} className="mx-auto max-w-4xl">
            <p className="mb-5 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.kicker}
            </p>
            <h1
              id="astro-hero-heading"
              className="text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl lg:text-6xl xl:text-[4.5rem] xl:leading-[1.05]"
            >
              {content.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-body/90 sm:text-xl">
              {content.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
              {content.heroDescription}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={heroCta.primaryHref}>{heroCta.primaryLabel}</Button>
              <Button href={heroCta.secondaryHref} variant="secondary">
                {heroCta.secondaryLabel}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-brand-dark py-28 lg:py-36">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.mission.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-[2.75rem]">
              {content.mission.title}
            </h2>
            <div className="mt-12 space-y-7">
              {content.mission.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.85, delay: index * 0.08, ease: easePremium }}
                  className="text-base leading-[1.85] text-brand-body/90 sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Experiences */}
      <section
        aria-labelledby="experiences-heading"
        className="py-28 lg:py-36"
        style={{ background: "linear-gradient(180deg, #030303 0%, #390059 40%, #030303 100%)" }}
      >
        <Container>
          <SectionHeader
            eyebrow={content.programs.eyebrow}
            title={content.programs.title}
            align="center"
            className="mb-16"
          />
          <ul className="mx-auto max-w-4xl space-y-5">
            {content.programs.items.map((experience, index) => (
              <motion.li
                key={experience.title}
                initial={prefersReducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: index * 0.06, ease: easePremium }}
                className="grid gap-6 rounded-2xl border border-brand-secondary/10 bg-brand-dark/40 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/25 lg:grid-cols-[180px_1fr] lg:items-center lg:p-10"
              >
                <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-accent uppercase">
                  {content.programs.itemLabel} {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3
                    id={index === 0 ? "experiences-heading" : undefined}
                    className="text-xl font-semibold text-brand-cream"
                  >
                    {experience.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-body/85 sm:text-base">
                    {experience.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Destinations */}
      {destinations && (
        <section id="destinations" className="scroll-mt-24 bg-brand-dark py-28 lg:py-36">
          <Container>
            <SectionHeader
              eyebrow={destinations.eyebrow}
              title={destinations.title}
              className="mb-14"
            />
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl lg:aspect-[4/3] lg:min-h-[480px]">
                <GalleryImage
                  src={destinations.featured.image.src}
                  alt={destinations.featured.image.alt}
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-accent uppercase">
                  {destinations.featured.location}
                </p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl">
                  {destinations.featured.name}
                </h3>
                <p className="mt-6 text-base leading-[1.85] text-brand-body/90 sm:text-lg">
                  {destinations.featured.description}
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Visitor Journey */}
      {visitorJourney && (
        <section
          ref={journeyRef}
          aria-labelledby="journey-heading"
          className="py-28 lg:py-36"
          style={{
            background: "radial-gradient(ellipse 90% 70% at 50% 30%, rgba(57, 0, 89, 0.45), #030303 75%)",
          }}
        >
          <Container>
            <SectionHeader
              eyebrow={visitorJourney.eyebrow}
              title={visitorJourney.title}
              align="center"
              className="mb-20"
            />
            <ol className="relative mx-auto max-w-2xl">
              <div
                aria-hidden
                className="absolute top-0 bottom-0 left-[7px] w-px bg-brand-secondary/20 lg:left-1/2 lg:-translate-x-px"
              />
              {visitorJourney.steps.map((step, index) => (
                <motion.li
                  key={step.phase}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.85, delay: index * 0.1, ease: easePremium }}
                  className={clsx(
                    "relative pb-14 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-12",
                    index % 2 === 0 ? "lg:text-right" : "lg:col-start-2 lg:text-left",
                  )}
                >
                  <div
                    aria-hidden
                    className="absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2 border-brand-secondary bg-brand-dark lg:left-1/2 lg:-translate-x-1/2"
                  />
                  <div
                    className={clsx(
                      "pl-10 lg:pl-0",
                      index % 2 === 0 ? "lg:col-start-1 lg:pr-12" : "lg:col-start-2 lg:pl-12",
                    )}
                  >
                    <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-accent uppercase">
                      {step.phase}
                    </p>
                    <h3
                      id={index === 0 ? "journey-heading" : undefined}
                      className="mt-2 text-lg font-semibold text-brand-cream sm:text-xl"
                    >
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-body/85 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-brand-dark py-28 lg:py-36">
        <Container>
          <SectionHeader
            eyebrow={content.gallery.eyebrow}
            title={content.gallery.title}
            className="mb-16"
          />
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {content.gallery.images.map((img, index) => (
              <motion.div
                key={img.src}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: index * 0.06, ease: easePremium }}
                className={clsx(
                  "relative min-h-[260px] overflow-hidden rounded-2xl",
                  index === 0 && "lg:col-span-2 lg:row-span-2 lg:min-h-[520px]",
                )}
              >
                <GalleryImage src={img.src} alt={img.alt} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-dark py-28 lg:py-36">
        <Container>
          <SectionHeader
            eyebrow={content.testimonials.eyebrow}
            title={content.testimonials.title}
            align="center"
            className="mb-16"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {content.testimonials.items.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.author}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: index * 0.08, ease: easePremium }}
                className="flex h-full flex-col justify-between rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 p-10 backdrop-blur-md lg:p-12"
              >
                <p className="text-lg leading-relaxed text-brand-body/90 sm:text-xl">
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

      {/* CTA */}
      <section className="bg-brand-dark pb-28 lg:pb-36">
        <Container>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-20 text-center lg:px-24 lg:py-28"
            style={{
              background: "linear-gradient(135deg, rgba(57, 0, 89, 0.35) 0%, rgba(3, 3, 3, 0.9) 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 border border-brand-secondary/15 rounded-3xl"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-body/85 sm:text-lg">
                {content.cta.description}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={content.cta.primaryHref}>{content.cta.primaryLabel}</Button>
                <Button href={content.cta.secondaryHref} variant="secondary">
                  {content.cta.secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
