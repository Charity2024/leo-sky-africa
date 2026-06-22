"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import { pillarsContent, type Pillar } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

function PillarDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center bg-brand-dark px-6 py-6"
    >
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-brand-secondary/15 to-transparent" />
    </div>
  );
}

function StoryBlock({
  pillar,
  index,
  learnMoreLabel,
}: {
  pillar: Pillar;
  index: number;
  learnMoreLabel: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const imageLeft = index % 2 === 0;

  // Track scroll position relative to this section for image parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Safe parallax translation of image
  const yParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const hidden = prefersReducedMotion ? false : { opacity: 0, y: 30 };
  const visible = { opacity: 1, y: 0 };

  return (
    <>
      {index > 0 && <PillarDivider />}

      <article
        id={pillar.sectionId}
        ref={ref}
        className="relative scroll-mt-24 bg-brand-dark overflow-hidden py-10 lg:py-16"
      >
        {/* Ambient glow background */}
        <div
          aria-hidden
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(105,21,135,0.08),transparent_70%)] blur-[80px] ${
            imageLeft ? "right-1/10" : "left-1/10"
          }`}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${
              imageLeft ? "" : "lg:[&>*:first-child]:order-2"
            }`}
          >
            {/* Parallax Image Wrapper */}
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-secondary/10 shadow-[0_8px_32px_rgba(3,3,3,0.5)] lg:aspect-auto lg:h-[480px] group ${
                imageLeft ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="absolute inset-0 bg-brand-dark/20 z-10 transition-opacity duration-500 group-hover:opacity-10" />
              <motion.img
                src={pillar.image}
                alt={pillar.imageAlt}
                loading="lazy"
                style={{ y: prefersReducedMotion ? 0 : yParallax }}
                className="absolute -top-[15%] left-0 h-[130%] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 z-20 bg-gradient-to-t from-brand-dark/60 via-transparent to-brand-primary/10"
              />
              <div
                aria-hidden
                className={`absolute inset-0 z-20 hidden lg:block bg-gradient-to-${
                  imageLeft ? "r" : "l"
                } from-transparent via-transparent to-brand-dark/80`}
              />
            </div>

            {/* Glassmorphism Content Box */}
            <motion.div
              initial={prefersReducedMotion ? false : hidden}
              animate={prefersReducedMotion ? visible : isInView ? visible : hidden}
              transition={{
                duration: 0.95,
                ease,
                delay: prefersReducedMotion ? 0 : 0.1,
              }}
              className={`relative z-30 flex items-center ${
                imageLeft ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
              }`}
            >
              <div className="group/card relative w-full rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/35 hover:bg-brand-primary/10 hover:shadow-[0_0_40px_rgba(105,21,135,0.25)] md:p-10 lg:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(224,137,253,0.1),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                />
                
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-brand-accent uppercase">
                  <span>🚀</span>
                  <span>{pillar.kicker}</span>
                </p>

                <h3 className="text-[1.75rem] leading-[1.12] font-bold tracking-tight text-brand-cream sm:text-3xl lg:text-[2.25rem] lg:leading-[1.1]">
                  {pillar.title}
                </h3>

                <p className="mt-5 text-base leading-[1.8] text-brand-body/95 sm:mt-6 sm:text-[17px] sm:leading-8">
                  {pillar.description}
                </p>

                <Link
                  href={pillar.href}
                  className="group/link mt-8 inline-flex items-center gap-4 text-sm font-semibold tracking-wide text-brand-secondary transition-all duration-300 hover:text-brand-light-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:mt-10 sm:text-[15px]"
                >
                  <span>{learnMoreLabel}</span>
                  <span
                    aria-hidden
                    className="h-px w-8 bg-brand-secondary/40 transition-all duration-500 group-hover/link:w-16 group-hover/link:bg-brand-secondary"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  );
}

export default function ThreePillars() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="pillars-heading" className="bg-brand-dark py-16 lg:py-24">
      <Container className="px-6 pb-6 sm:px-10 lg:px-8">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.85, ease }}
          className="mx-auto mb-8 max-w-lg text-center text-sm leading-relaxed text-brand-muted sm:mb-10 sm:text-[15px] sm:leading-7"
        >
          {pillarsContent.transitionStatement}
        </motion.p>

        <motion.div
          ref={headerRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.95, ease, delay: prefersReducedMotion ? 0 : 0.08 }}
          className="max-w-3xl pb-6 border-b border-brand-secondary/10"
        >
          <p className="mb-3 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
            {pillarsContent.eyebrow}
          </p>
          <h2
            id="pillars-heading"
            className="text-3xl leading-[1.12] font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-[2.75rem]"
          >
            Three Pathways Into Africa&apos;s Space Future
          </h2>
        </motion.div>
      </Container>

      <div className="flex flex-col">
        {pillarsContent.pillars.map((pillar, index) => (
          <StoryBlock
            key={pillar.href}
            pillar={pillar}
            index={index}
            learnMoreLabel={pillarsContent.learnMoreLabel}
          />
        ))}
      </div>
    </section>
  );
}
