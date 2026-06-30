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
import type { PillarPageContent } from "@/content/types";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";

type SpaceEducationPageProps = {
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

export default function SpaceEducationPage({ content }: SpaceEducationPageProps) {
  const prefersReducedMotion = useReducedMotion();
  const impactRef = useRef<HTMLElement>(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-10% 0px" });
  const learningExperience = content.learningExperience;
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
        aria-labelledby="education-hero-heading"
        className="relative flex min-h-dvh items-end overflow-hidden bg-brand-dark"
      >
        <div className="absolute inset-0">
          {content.heroVideo && !prefersReducedMotion ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={content.heroImage}
              className="h-full w-full object-cover"
              aria-hidden
            >
              <source src={content.heroVideo} type="video/mp4" />
            </video>
          ) : (
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
          )}
          <div className="absolute inset-0 bg-brand-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
          <HeroLogoWatermark
            position={content.heroWatermark?.position ?? "right"}
            opacity={content.heroWatermark?.opacity ?? 0.06}
          />
        </div>

        <Container className="relative z-10 pb-20 pt-32 lg:pb-28">
          <motion.div {...reveal(0)} className="max-w-3xl">
            <p className="mb-5 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.kicker}
            </p>
            <h1
              id="education-hero-heading"
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

      {/* Why Space Education */}
      <section className="bg-brand-dark py-28 lg:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <SectionHeader eyebrow={content.mission.eyebrow} title={content.mission.title} />
            <div className="space-y-7 border-l border-brand-secondary/20 pl-8 lg:pl-12">
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

      {/* Programs */}
      <section
        id="programs"
        aria-labelledby="programs-heading"
        className="scroll-mt-24 py-28 lg:py-36"
        style={{ background: "linear-gradient(180deg, #030303 0%, #390059 45%, #030303 100%)" }}
      >
        <Container>
          <SectionHeader
            eyebrow={content.programs.eyebrow}
            title={content.programs.title}
            className="mb-16"
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {content.programs.items.map((program, index) => (
              <motion.li
                key={program.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: index * 0.07, ease: easePremium }}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                className="group rounded-2xl border border-brand-secondary/10 bg-brand-dark/40 p-9 backdrop-blur-md transition-[border-color,box-shadow] duration-500 hover:border-brand-secondary/30 hover:shadow-[0_12px_48px_rgba(105,21,135,0.25)] lg:p-10"
              >
                <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-accent uppercase">
                  {content.programs.itemLabel} {String(index + 1).padStart(2, "0")}
                </p>
                <h3 id={index === 0 ? "programs-heading" : undefined} className="mt-4 text-xl font-semibold text-brand-cream">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-body/85 sm:text-base">
                  {program.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Learning Experience */}
      {learningExperience && (
        <section className="bg-brand-dark py-28 lg:py-36">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[3/4]">
                <GalleryImage src={learningExperience.image.src} alt={learningExperience.image.alt} />
              </div>
              <div>
                <SectionHeader
                  eyebrow={learningExperience.eyebrow}
                  title={learningExperience.title}
                  className="mb-10"
                />
                <div className="space-y-6">
                  {learningExperience.paragraphs.map((paragraph, index) => (
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
            </div>
          </Container>
        </section>
      )}

      {/* Impact */}
      <section
        ref={impactRef}
        aria-labelledby="impact-heading"
        className="relative overflow-hidden py-28 lg:py-36"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(105, 21, 135, 0.35), #030303 70%)",
        }}
      >
        <Container>
          <SectionHeader
            eyebrow={content.impact.eyebrow}
            title={content.impact.title}
            align="center"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {content.impact.stats.map((stat, index) => (
              <motion.li
                key={stat.label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: index * 0.08, ease: easePremium }}
                className="rounded-2xl border border-brand-secondary/15 bg-brand-dark/45 p-8 text-center backdrop-blur-xl lg:p-10"
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

      {/* Gallery */}
      <section className="bg-brand-dark py-28 lg:py-36">
        <Container>
          <SectionHeader
            eyebrow={content.gallery.eyebrow}
            title={content.gallery.title}
            className="mb-16"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {content.gallery.images.map((img, index) => (
              <motion.div
                key={img.src}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, delay: index * 0.06, ease: easePremium }}
                className={clsx(
                  "relative min-h-[240px] overflow-hidden rounded-2xl",
                  index === 0 && "sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[520px]",
                  index === 1 && "lg:col-span-5",
                  index === 2 && "lg:col-span-3",
                  index === 3 && "lg:col-span-2",
                )}
              >
                <GalleryImage src={img.src} alt={img.alt} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark pb-28 lg:pb-36">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-brand-secondary/15 px-8 py-20 text-center lg:px-24 lg:py-28">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(105,21,135,0.2),transparent_70%)]"
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
