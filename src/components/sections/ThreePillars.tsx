"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import BrandImage from "@/components/ui/BrandImage";
import { pillarsContent } from "@/content/home";
import { easePremium } from "@/lib/motion";

export default function ThreePillars() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="scroll-mt-24 bg-brand-dark py-24 lg:py-32"
    >
      <Container>
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={
            prefersReducedMotion || headerInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 12 }
          }
          transition={{ duration: 0.85, ease: easePremium }}
          className="mx-auto mb-8 max-w-lg text-center text-sm leading-relaxed text-brand-muted sm:text-[15px]"
        >
          {pillarsContent.transitionStatement}
        </motion.p>

        <motion.div
          ref={headerRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={
            prefersReducedMotion || headerInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.95,
            ease: easePremium,
            delay: prefersReducedMotion ? 0 : 0.08,
          }}
          className="mx-auto max-w-3xl pb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
            {pillarsContent.eyebrow}
          </p>
          <h2
            id="pillars-heading"
            className="text-3xl leading-[1.12] font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-[2.75rem]"
          >
            {pillarsContent.title}
          </h2>
        </motion.div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {pillarsContent.pillars.map((pillar, index) => (
            <motion.li
              key={pillar.href}
              id={pillar.sectionId}
              className="scroll-mt-24"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                duration: 0.85,
                delay: index * 0.1,
                ease: easePremium,
              }}
            >
              <Link
                href={pillar.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-secondary/35 hover:shadow-[0_12px_48px_rgba(105,21,135,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <BrandImage
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    wrapperClassName="h-full w-full rounded-none"
                    rounded="2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-brand-accent uppercase">
                    {pillar.kicker}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-brand-cream group-hover:text-brand-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-body/85">
                    {pillar.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand-secondary">
                    {pillarsContent.learnMoreLabel}
                    <span className="h-px w-8 bg-brand-secondary/40 transition-all duration-500 group-hover:w-14 group-hover:bg-brand-secondary" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
