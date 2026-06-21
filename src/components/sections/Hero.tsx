"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import { heroContent, pillarsContent } from "@/data/site-content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    video.play().catch(() => {
      // Muted inline playback may still be blocked on some browsers.
    });
  }, [prefersReducedMotion]);

  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.95, delay, ease },
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-dvh overflow-hidden bg-black"
    >
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div aria-hidden className="absolute inset-0 bg-black/45" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-black/80 via-black/55 to-black/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-black/30"
      />

      <Container className="relative z-10 flex min-h-dvh items-start pt-24 pb-28 sm:pt-28 sm:pb-32 lg:pt-32">
        <div className="relative w-full max-w-[580px]">
          <motion.p
            {...reveal(0)}
            className="mb-5 text-[10px] font-medium tracking-[0.38em] text-white/70 uppercase sm:mb-6 sm:text-[11px]"
          >
            {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...reveal(0.08)}
            className="text-[2rem] leading-[1.12] font-semibold tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-[2.5rem] sm:leading-[1.1] lg:text-[3.5rem] lg:leading-[1.06] lg:whitespace-nowrap xl:text-[3.75rem]"
          >
            <span className="block whitespace-nowrap lg:inline">
              {heroContent.title.line1}
            </span>
            <span className="block whitespace-nowrap lg:inline">
              <span className="hidden lg:inline"> </span>
              {heroContent.title.line2}
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.16)}
            className="mt-8 max-w-[540px] text-base leading-[1.75] text-white/80 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] sm:mt-10 sm:text-[17px] sm:leading-[1.8] lg:mt-11 lg:max-w-[580px] lg:text-lg lg:leading-8"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            {...reveal(0.24)}
            className="mt-11 flex flex-col gap-3 sm:mt-14 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-9 py-3.5 text-[15px] font-semibold tracking-wide text-[#0a0a0a] shadow-[0_2px_20px_rgba(0,0,0,0.25)] transition hover:bg-white/92 hover:shadow-[0_4px_28px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-white/75 transition hover:border-white/40 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 sm:text-[15px]"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.nav
            {...reveal(0.36)}
            aria-label="Core programs"
            className="mt-14 sm:mt-16"
          >
            <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
              {pillarsContent.pillars.map((pillar, index) => (
                <motion.li
                  key={pillar.href}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 6 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: prefersReducedMotion ? 0 : 0.55 + index * 0.08,
                    ease,
                  }}
                  className="flex items-center"
                >
                  {index > 0 && (
                    <span
                      aria-hidden
                      className="mx-3 hidden text-white/25 md:inline"
                    >
                      •
                    </span>
                  )}
                  <Link
                    href={pillar.href}
                    className="text-xs font-medium tracking-[0.06em] text-white/60 transition hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 sm:text-[13px]"
                  >
                    {pillar.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </Container>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.2, duration: 0.9, ease }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={
            prefersReducedMotion ? undefined : { y: [0, 6, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-medium tracking-[0.28em] text-white/45 uppercase">
            {heroContent.scrollIndicator}
          </span>
          <span className="relative flex h-10 w-px items-start justify-center overflow-hidden bg-white/15">
            <motion.span
              animate={
                prefersReducedMotion ? undefined : { y: ["-100%", "100%"] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
              }
              className="absolute h-1/2 w-full bg-white/50"
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
