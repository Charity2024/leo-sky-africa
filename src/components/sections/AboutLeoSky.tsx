"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { aboutContent } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutLeoSky() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const hidden = prefersReducedMotion ? false : { opacity: 0, y: 24 };
  const visible = { opacity: 1, y: 0 };

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-leo-sky-heading"
      className="scroll-mt-32 bg-black"
    >
      <Container className="px-6 py-24 sm:px-10 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <motion.div
            initial={prefersReducedMotion ? false : hidden}
            animate={prefersReducedMotion ? visible : isInView ? visible : hidden}
            transition={{ duration: 0.95, ease }}
            className="max-w-xl lg:py-8"
          >
            <p className="mb-5 text-[11px] font-medium tracking-[0.36em] text-white/55 uppercase">
              {aboutContent.eyebrow}
            </p>

            <h2
              id="about-leo-sky-heading"
              className="text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] xl:text-[3rem]"
            >
              {aboutContent.title}
            </h2>

            <div className="mt-7 space-y-5 text-base leading-[1.85] text-white/62 sm:mt-8 sm:text-[17px] sm:leading-8">
              {aboutContent.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={aboutContent.cta.href}
              className="group mt-10 inline-flex items-center gap-4 text-sm font-medium tracking-wide text-white/85 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-12 sm:text-[15px]"
            >
              <span>{aboutContent.cta.label}</span>
              <span
                aria-hidden
                className="h-px w-10 bg-white/25 transition-all duration-500 group-hover:w-16 group-hover:bg-[#691587]"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.03 }
            }
            transition={{ duration: 1.05, ease, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="group relative aspect-4/5 overflow-hidden sm:aspect-5/6 lg:aspect-auto lg:min-h-[72vh]"
          >
            <img
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/15"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent lg:from-black/50"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
