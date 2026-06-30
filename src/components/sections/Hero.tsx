"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroContent, heroMedia, pillarsContent } from "@/content/home";
import { easePremium } from "@/lib/motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 800], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

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
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease: easePremium },
        };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-dvh overflow-hidden bg-brand-dark"
    >
      {/* Cinematic fullscreen video background */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: videoReady || prefersReducedMotion ? 1 : 0 }}
        transition={{ duration: 1.4, ease: easePremium }}
        className="absolute inset-0 z-0"
      >
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoReady(true)}
            className="h-full w-full object-cover"
            aria-hidden
          >
            <source src={heroMedia.video} type="video/mp4" />
          </video>
        )}
        {/* 60–70% dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-dark/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
      </motion.div>

      {/* Ambient glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/4 z-[1] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(105,21,135,0.12),transparent_70%)] blur-[120px]"
      />

      <Container className="relative z-10 flex min-h-dvh items-center pt-24 pb-28">
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : contentY, opacity: prefersReducedMotion ? 1 : contentOpacity }}
          className="relative w-full max-w-[720px] text-left"
        >
          <motion.div
            {...reveal(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-brand-primary/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[10px] font-medium tracking-[0.25em] text-brand-secondary uppercase sm:text-[11px]">
              {heroContent.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            {...reveal(0.1)}
            className="text-[2.5rem] leading-[1.08] font-bold tracking-tight text-brand-cream [text-shadow:0_2px_40px_rgba(105,21,135,0.4)] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem]"
          >
            <span className="block bg-gradient-to-r from-brand-cream via-brand-cream to-brand-secondary/80 bg-clip-text text-transparent">
              {heroContent.title.line1}
            </span>
            <span className="block bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
              {heroContent.title.line2}
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.25)}
            className="mt-8 max-w-[620px] text-base leading-[1.8] text-brand-body/90 [text-shadow:0_1px_20px_rgba(3,3,3,0.7)] sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            {...reveal(0.4)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.nav
            {...reveal(0.55)}
            aria-label={heroContent.navAriaLabel}
            className="mt-16 border-t border-brand-secondary/10 pt-8"
          >
            <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              {pillarsContent.pillars.map((pillar, index) => (
                <li key={pillar.href} className="flex items-center">
                  {index > 0 && (
                    <span aria-hidden className="mx-4 hidden text-brand-accent/60 md:inline">
                      •
                    </span>
                  )}
                  <Link
                    href={pillar.href}
                    className="text-xs font-semibold tracking-[0.1em] text-brand-muted uppercase transition-all duration-300 hover:text-brand-secondary hover:drop-shadow-[0_0_8px_rgba(224,137,253,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary/60 sm:text-[13px]"
                  >
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.4, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] text-brand-muted uppercase">
            {heroContent.scrollIndicator}
          </span>
          <span className="relative flex h-12 w-px items-start justify-center overflow-hidden bg-brand-secondary/20">
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: ["-100%", "100%"] }}
              transition={prefersReducedMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-1/2 w-full bg-brand-accent"
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
