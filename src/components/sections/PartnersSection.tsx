"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

const PARTNERS = [
  "NASA",
  "ESA",
  "UNESCO",
  "Kenya Space Agency",
  "University Partner",
  "Innovation Partner",
] as const;

const STARS = [
  { top: "10%", left: "8%", size: 1, delay: "0s" },
  { top: "22%", left: "88%", size: 2, delay: "1.4s" },
  { top: "38%", left: "18%", size: 1, delay: "0.6s" },
  { top: "55%", left: "72%", size: 1, delay: "2.1s" },
  { top: "70%", left: "42%", size: 2, delay: "1s" },
  { top: "84%", left: "92%", size: 1, delay: "0.3s" },
  { top: "18%", left: "48%", size: 1, delay: "1.8s" },
  { top: "62%", left: "6%", size: 1, delay: "2.4s" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function LogoItem({ name }: { name: string }) {
  return (
    <div className="group flex shrink-0 items-center px-6 sm:px-10">
      <div
        className="flex h-11 min-w-[7.5rem] items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] px-5 grayscale opacity-55 transition-all duration-300 will-change-transform group-hover:scale-110 group-hover:border-[#8A2BE2]/45 group-hover:bg-[#4A006E]/20 group-hover:opacity-100 group-hover:grayscale-0 group-hover:shadow-[0_0_28px_rgba(138,43,226,0.4)] sm:h-14 sm:min-w-[9.5rem] sm:px-7"
        aria-label={name}
      >
        <span className="text-[9px] font-bold tracking-[0.16em] text-white uppercase sm:text-[11px] sm:tracking-[0.2em]">
          {name}
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  direction,
  duration,
  paused,
}: {
  direction: "left" | "right";
  duration: string;
  paused: boolean;
}) {
  const trackClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div className="marquee-mask relative overflow-hidden py-3 sm:py-4">
      <div
        className={`${trackClass} flex w-max ${paused ? "marquee-paused" : ""}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex shrink-0 items-center"
            aria-hidden={set === 1 ? true : undefined}
          >
            {PARTNERS.map((partner) => (
              <LogoItem key={`${set}-${partner}`} name={partner} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const paused = prefersReducedMotion;

  return (
    <section
      ref={ref}
      aria-labelledby="partners-heading"
      className="relative overflow-hidden bg-[#050816] py-24 lg:py-32"
    >
      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }

        .marquee-track-left,
        .marquee-track-right {
          animation-duration: var(--marquee-duration, 45s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }

        .marquee-track-left {
          animation-name: marquee-left;
        }

        .marquee-track-right {
          animation-name: marquee-right;
        }

        .marquee-paused {
          animation-play-state: paused;
        }

        .marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 8%,
            black 92%,
            transparent
          );
        }

        .partner-star {
          position: absolute;
          border-radius: 9999px;
          background: #ffffff;
          animation: partner-twinkle 3.8s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes partner-twinkle {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.7;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-left,
          .marquee-track-right {
            animation: none;
            transform: translate3d(0, 0, 0);
          }

          .partner-star {
            animation: none;
            opacity: 0.3;
          }
        }

        @media (max-width: 639px) {
          .marquee-track-left {
            animation-duration: 58s;
          }
          .marquee-track-right {
            animation-duration: 64s;
          }
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,rgba(106,13,173,0.14),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(74,0,110,0.2),transparent_60%)]"
      />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        {STARS.map((star, index) => (
          <span
            key={index}
            className="partner-star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow:
                star.size > 1
                  ? "0 0 8px rgba(138, 43, 226, 0.5)"
                  : "0 0 3px rgba(255, 255, 255, 0.35)",
              ["--delay" as string]: star.delay,
            }}
          />
        ))}
      </div>

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
          <p className="mb-5 text-[11px] font-medium tracking-[0.38em] text-white/55 uppercase">
            Trusted Partners
          </p>
          <h2
            id="partners-heading"
            className="text-xl leading-relaxed font-medium tracking-tight text-white sm:text-2xl sm:leading-snug lg:text-[1.75rem] lg:leading-[1.45]"
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
        className="relative mt-14 space-y-4 sm:mt-16 lg:mt-20"
      >
        <MarqueeRow direction="left" duration="42s" paused={paused} />
        <MarqueeRow direction="right" duration="48s" paused={paused} />
      </motion.div>
    </section>
  );
}
