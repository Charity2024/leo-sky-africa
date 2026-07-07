"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import BrandImage from "@/components/ui/BrandImage";
import Button from "@/components/ui/Button";
import HeroLogoWatermark from "@/components/ui/HeroLogoWatermark";
import Starfield from "@/components/ui/Starfield";
import PremiumCarousel from "@/components/pillar/PremiumCarousel";
import PremiumGallery from "@/components/pillar/PremiumGallery";
import FeaturedActivities from "@/components/pillar/FeaturedActivities";
import type { PillarPageContent } from "@/content/types";
import { easePremium } from "@/lib/motion";

type AstrotourismPageProps = {
  content: PillarPageContent;
};

export default function AstrotourismPage({ content }: AstrotourismPageProps) {
  const prefersReducedMotion = useReducedMotion();
  const heroCta = content.heroCta ?? content.cta;
  const whyAstrotourismMatters = content.whyAstrotourismMatters;
  const leadership = content.leadership;
  const signatureExperiences = content.signatureExperiences;
  const whyChooseLeoSky = content.whyChooseLeoSky;
  const featuredExperiences = content.featuredExperiences;

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
        aria-labelledby="astrotourism-hero-heading"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-dark"
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
          <div className="absolute inset-0 bg-brand-dark/60" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/40 to-brand-dark/20" />
          <HeroLogoWatermark
            position={content.heroWatermark?.position ?? "center"}
            opacity={content.heroWatermark?.opacity ?? 0.05}
          />
        </div>

        <Container className="relative z-10 py-32 text-center">
          <motion.div {...reveal(0)} className="mx-auto max-w-4xl">
            <p className="mb-6 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.kicker}
            </p>
            <h1
              id="astrotourism-hero-heading"
              className="text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl lg:text-6xl xl:text-[5rem] xl:leading-[1.05]"
            >
              {content.title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-brand-body/90 sm:text-2xl">
              {content.tagline}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-muted">
              {content.heroDescription}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={heroCta.primaryHref}>{heroCta.primaryLabel}</Button>
              <Button href={heroCta.secondaryHref} variant="secondary">
                {heroCta.secondaryLabel}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Why Astrotourism Matters - Full Width Text with glassmorphism */}
      {whyAstrotourismMatters && (
        <section
          id="why-matters"
          className="scroll-mt-24 bg-brand-dark py-32 lg:py-48"
        >
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
                  {whyAstrotourismMatters.eyebrow}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                  {whyAstrotourismMatters.title}
                </h2>
                <div className="mt-12 space-y-6 text-lg leading-relaxed text-brand-body/90 sm:text-xl">
                  {whyAstrotourismMatters.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={`why-paragraph-${index}`}
                      initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 10 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-8% 0px" }}
                      transition={{
                        duration: 0.85,
                        delay: 0.3 + index * 0.1,
                        ease: easePremium,
                      }}
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

      {/* Leadership - Minimal with subtle purple accent gradient */}
      {leadership && (
        <section className="bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,rgba(105,21,135,0.15),#030303_70%)] py-32 lg:py-48">
          <Container>
            <div className="mx-auto max-w-3xl">
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, ease: easePremium }}
                className="mb-6 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase"
              >
                {leadership.eyebrow}
              </motion.p>
              <motion.h2
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: 0.1, ease: easePremium }}
                className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl"
              >
                {leadership.title}
              </motion.h2>
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: 0.2, ease: easePremium }}
                className="mt-16 space-y-6 text-lg leading-relaxed text-brand-body/90 sm:text-xl"
              >
                {leadership.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={`leadership-paragraph-${index}`}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 10 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-8% 0px" }}
                    transition={{
                      duration: 0.85,
                      delay: 0.3 + index * 0.1,
                      ease: easePremium,
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* Signature Experiences - Premium Carousel */}
      {signatureExperiences && (
        <section
          id="experiences"
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
                {signatureExperiences.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                {signatureExperiences.title}
              </h2>
            </motion.div>
            <PremiumCarousel
              items={signatureExperiences.items}
              autoPlayInterval={4500}
            />
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

      {/* Why Choose Leo Sky - Minimal List with glassmorphism cards */}
      {whyChooseLeoSky && (
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
                {whyChooseLeoSky.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                {whyChooseLeoSky.title}
              </h2>
            </motion.div>
            <div className="mx-auto max-w-4xl space-y-6">
              {whyChooseLeoSky.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.08,
                    ease: easePremium,
                  }}
                  className="rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:bg-brand-primary/10 lg:p-10"
                >
                  <h3 className="text-xl font-semibold text-brand-cream sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-brand-body/85 sm:text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Featured Experiences - Cards with glassmorphism */}
      {featuredExperiences && (
        <section className="bg-[radial-gradient(ellipse_90%_60%_at_50%_40%,rgba(57,0,89,0.2),#030303_70%)] py-32 lg:py-48">
          <Container>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, ease: easePremium }}
              className="mb-20 text-center"
            >
              <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
                {featuredExperiences.eyebrow}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
                {featuredExperiences.title}
              </h2>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredExperiences.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.08,
                    ease: easePremium,
                  }}
                  className="rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:bg-brand-primary/10 lg:p-10"
                >
                  <h3 className="text-xl font-semibold text-brand-cream">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-brand-body/85">
                    {item.description}
                  </p>
                  <p className="mt-6 text-xs font-medium tracking-[0.2em] text-brand-accent uppercase">
                    {item.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

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
                transition={{
                  duration: 0.85,
                  delay: index * 0.1,
                  ease: easePremium,
                }}
                className="rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 p-10 backdrop-blur-md lg:p-12"
              >
                <p className="text-xl leading-relaxed text-brand-body/90 sm:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-brand-secondary/10 pt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-brand-cream">
                      {testimonial.author}
                    </span>
                    <span className="text-xs text-brand-muted">
                      {testimonial.role}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA - Premium with animated starfield */}
      <section className="relative overflow-hidden bg-brand-dark pb-32 lg:pb-48">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-dark/50 to-brand-dark" />
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
              <Button href={content.cta.primaryHref}>
                {content.cta.primaryLabel}
              </Button>
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
