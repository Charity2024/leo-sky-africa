"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { pillarsContent, type Pillar } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

function PillarDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center bg-black px-6 py-10 sm:py-12"
    >
      <div className="h-px w-full max-w-4xl bg-linear-to-r from-transparent via-white/12 to-transparent" />
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
  const isInView = useInView(ref, { once: true, margin: "-6% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const imageLeft = index % 2 === 0;

  const hidden = prefersReducedMotion ? false : { opacity: 0, y: 24 };
  const visible = { opacity: 1, y: 0 };

  return (
    <>
      {index > 0 && <PillarDivider />}

      <article
        id={pillar.sectionId}
        ref={ref}
        className="relative scroll-mt-32 bg-black"
      >
        <div
          className={`grid lg:min-h-[78vh] lg:grid-cols-2 ${
            imageLeft ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.03 }
            }
            transition={{ duration: 1.1, ease }}
            className="group relative min-h-[48vh] overflow-hidden lg:min-h-full"
          >
            <img
              src={pillar.image}
              alt={pillar.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className={`absolute inset-0 ${
                imageLeft
                  ? "bg-linear-to-r from-transparent via-transparent to-black/35 lg:to-black/65"
                  : "bg-linear-to-l from-transparent via-transparent to-black/35 lg:to-black/65"
              }`}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/15 lg:from-black/25"
            />
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : hidden}
            animate={
              prefersReducedMotion ? visible : isInView ? visible : hidden
            }
            transition={{
              duration: 0.95,
              ease,
              delay: prefersReducedMotion ? 0 : 0.12,
            }}
            className="flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-24"
          >
            <div className="max-w-xl">
              <p className="mb-4 text-[11px] font-medium tracking-[0.3em] text-white/40 uppercase">
                {pillar.kicker}
              </p>

              <h3 className="text-[1.75rem] leading-[1.12] font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.1] xl:text-4xl">
                {pillar.title}
              </h3>

              <p className="mt-5 text-base leading-[1.85] text-white/62 sm:mt-6 sm:text-[17px] sm:leading-8">
                {pillar.description}
              </p>

              <Link
                href={pillar.href}
                className="group/link mt-9 inline-flex items-center gap-4 text-sm font-medium tracking-wide text-white/85 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-10 sm:text-[15px]"
              >
                <span>{learnMoreLabel}</span>
                <span
                  aria-hidden
                  className="h-px w-10 bg-white/25 transition-all duration-500 group-hover/link:w-16 group-hover/link:bg-[#691587]"
                />
              </Link>
            </div>
          </motion.div>
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
    <section aria-labelledby="pillars-heading" className="bg-black">
      <Container className="px-6 pt-16 sm:px-10 lg:px-8 lg:pt-20">
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
          className="mx-auto mb-10 max-w-lg text-center text-sm leading-relaxed text-white/45 sm:mb-12 sm:text-[15px] sm:leading-7"
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
          className="max-w-2xl pb-8 lg:pb-10"
        >
          <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-white/50 uppercase">
            {pillarsContent.eyebrow}
          </p>
          <h2
            id="pillars-heading"
            className="text-2xl leading-[1.14] font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.6rem] lg:leading-[1.1]"
          >
            {pillarsContent.title}
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
