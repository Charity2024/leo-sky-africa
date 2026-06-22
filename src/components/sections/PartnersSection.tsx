"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import PartnersMarquee from "@/components/home/PartnersMarquee";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="partners"
      ref={ref}
      aria-labelledby="partners-heading"
      className="relative scroll-mt-32 overflow-hidden py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(180deg, #030303 0%, #390059 55%, #030303 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(105,21,135,0.2),transparent_65%)]"
      />

      <Container className="relative">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={
            prefersReducedMotion || isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.9, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-[11px] font-medium tracking-[0.38em] text-brand-secondary uppercase">
            Trusted Partners
          </p>
          <h2
            id="partners-heading"
            className="text-xl leading-relaxed font-medium tracking-tight text-brand-cream sm:text-2xl sm:leading-snug lg:text-[1.75rem] lg:leading-[1.45]"
          >
            Building Africa&apos;s space future through strategic partnerships,
            education, and innovation.
          </h2>
        </motion.div>
      </Container>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={
          prefersReducedMotion || isInView ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.9, delay: 0.15, ease }}
      >
        <PartnersMarquee />
      </motion.div>
    </section>
  );
}
