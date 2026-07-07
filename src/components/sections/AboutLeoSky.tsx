"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import { aboutContent } from "@/content/about";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutLeoSky() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll parallax for the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const revealText = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10% 0px" },
          transition: { duration: 0.95, delay, ease },
        };

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-leo-sky-heading"
      className="relative scroll-mt-24 bg-brand-dark overflow-hidden py-24 lg:py-36"
    >
      {/* Background ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(224,137,253,0.05),transparent_70%)] blur-[80px]"
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left: Mission Content */}
          <div className="max-w-xl">
            <motion.div {...revealText(0)}>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.36em] text-brand-secondary uppercase">
                {aboutContent.eyebrow}
              </p>
            </motion.div>

            <motion.h2
              id="about-leo-sky-heading"
              {...revealText(0.08)}
              className="text-3xl leading-[1.12] font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              {aboutContent.title}
            </motion.h2>

            <motion.div
              {...revealText(0.16)}
              className="mt-7 space-y-6 text-base leading-[1.8] text-brand-body/90 sm:mt-8 sm:text-[17px] sm:leading-8"
            >
              {aboutContent.description.map((paragraph, index) => (
                <p key={`about-paragraph-${index}`}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div {...revealText(0.24)}>
              <Link
                href={aboutContent.cta.href}
                className="group mt-10 inline-flex items-center gap-4 text-sm font-semibold tracking-wide text-brand-secondary transition-all duration-300 hover:text-brand-light-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:mt-12 sm:text-[15px]"
              >
                <span>{aboutContent.cta.label}</span>
                <span
                  aria-hidden
                  className="h-px w-8 bg-brand-secondary/40 transition-all duration-500 group-hover:w-16 group-hover:bg-brand-secondary"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right: Large Immersive Image with Float & Clipping Reveal & Parallax */}
          <div className="relative w-full">
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }
              }
              whileInView={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }
              }
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1.25, ease: [0.25, 1, 0.5, 1] }}
              className="relative aspect-4/5 overflow-hidden rounded-2xl border border-brand-secondary/15 shadow-[0_12px_64px_rgba(105,21,135,0.25)] sm:aspect-5/6 lg:aspect-auto lg:h-[580px]"
            >
              {/* Parallax Image Content */}
              <motion.img
                src={aboutContent.image.src}
                alt={aboutContent.image.alt}
                loading="lazy"
                style={{ y: prefersReducedMotion ? 0 : imgY }}
                className="absolute -top-[15%] left-0 h-[130%] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-102"
              />

              {/* Floating inner glow layer for high-end feeling */}
              <motion.div
                animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
                className="absolute inset-0 pointer-events-none z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-brand-primary/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(105,21,135,0.2),transparent_70%)]" />
              </motion.div>

              {/* Outer stroke overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-brand-secondary/15 transition-all duration-500 hover:ring-brand-secondary/35"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
