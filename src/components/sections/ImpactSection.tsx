"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

const STATS = [
  { value: 1000, suffix: "+", label: "Students Reached" },
  { value: 50, suffix: "+", label: "Space Events" },
  { value: 10, suffix: "+", label: "Partners & Institutions" },
  { value: 3, suffix: "", label: "Core Programs" },
] as const;

const STARS = [
  { top: "8%", left: "12%", size: 1, delay: "0s" },
  { top: "18%", left: "78%", size: 2, delay: "1.2s" },
  { top: "32%", left: "34%", size: 1, delay: "0.5s" },
  { top: "24%", left: "56%", size: 1, delay: "2s" },
  { top: "12%", left: "91%", size: 1, delay: "0.8s" },
  { top: "44%", left: "8%", size: 2, delay: "1.6s" },
  { top: "38%", left: "67%", size: 1, delay: "0.3s" },
  { top: "52%", left: "22%", size: 1, delay: "2.4s" },
  { top: "48%", left: "84%", size: 1, delay: "1.1s" },
  { top: "62%", left: "47%", size: 2, delay: "0.6s" },
  { top: "58%", left: "73%", size: 1, delay: "1.9s" },
  { top: "72%", left: "16%", size: 1, delay: "0.9s" },
  { top: "68%", left: "61%", size: 1, delay: "2.6s" },
  { top: "82%", left: "44%", size: 1, delay: "1.4s" },
  { top: "76%", left: "88%", size: 2, delay: "0.2s" },
  { top: "90%", left: "27%", size: 1, delay: "2.1s" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function SectionDivider() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-linear-to-r from-transparent via-brand-primary/40 to-transparent"
    />
  );
}

function CountUp({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!active) return;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 2200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value, prefersReducedMotion]);

  return (
    <>
      {display.toLocaleString()}
      {suffix}
    </>
  );
}

export default function ImpactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 32 },
    animate:
      prefersReducedMotion || isInView
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 32 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <div className="bg-brand-dark">
      <SectionDivider />

      <section
        id="impact"
        ref={ref}
        aria-labelledby="impact-heading"
        className="relative scroll-mt-32 overflow-hidden py-28 lg:py-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(105, 21, 135, 0.35), #030303 70%)",
        }}
      >
        <style jsx>{`
          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.85;
            }
          }

          .impact-star {
            position: absolute;
            border-radius: 9999px;
            background: #fff0fa;
            animation: twinkle 3.5s ease-in-out infinite;
            animation-delay: var(--delay);
          }

          @media (prefers-reduced-motion: reduce) {
            .impact-star {
              animation: none;
              opacity: 0.35;
            }
          }
        `}</style>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(224,137,253,0.08),transparent_65%)]"
        />

        <div aria-hidden className="pointer-events-none absolute inset-0">
          {STARS.map((star, index) => (
            <span
              key={index}
              className="impact-star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                boxShadow:
                  star.size > 1
                    ? "0 0 8px rgba(224, 137, 253, 0.5)"
                    : "0 0 3px rgba(255, 240, 250, 0.35)",
                ["--delay" as string]: star.delay,
              }}
            />
          ))}
        </div>

        <Container className="relative">
          <motion.div {...reveal(0)} className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-[11px] font-medium tracking-[0.38em] text-brand-secondary uppercase">
              Our Impact
            </p>
            <h2
              id="impact-heading"
              className="text-3xl leading-[1.12] font-semibold tracking-tight text-brand-cream sm:text-4xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              Building Africa&apos;s Space Future
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.85] text-brand-body sm:mt-8 sm:text-lg sm:leading-8">
              Through education, astronomy experiences, and innovation programs,
              Leo Sky Africa is creating pathways for thousands of young Africans
              to participate in the global space economy.
            </p>
          </motion.div>

          <ul className="mt-20 grid grid-cols-1 gap-6 sm:mt-24 sm:grid-cols-2 sm:gap-7 lg:mt-32 lg:grid-cols-4 lg:gap-7">
            {STATS.map((stat, index) => (
              <motion.li
                key={stat.label}
                {...reveal(0.14 + index * 0.1)}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -10 }
                }
                transition={{ duration: 0.4, ease }}
                className="group relative rounded-2xl border border-[rgba(224,137,253,0.15)] bg-[rgba(3,3,3,0.45)] p-9 backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 hover:border-brand-secondary hover:shadow-[0_12px_56px_rgba(224,137,253,0.25)] sm:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(105,21,135,0.2),transparent_72%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="relative text-4xl font-semibold tracking-tight text-brand-accent sm:text-5xl lg:text-[3.25rem]">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    active={isInView}
                  />
                </p>
                <p className="relative mt-4 text-sm font-medium leading-snug tracking-wide text-brand-body sm:text-[15px]">
                  {stat.label}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            {...reveal(0.55)}
            className="mt-20 flex justify-center sm:mt-24 lg:mt-28"
          >
            <Link
              href="#partners"
              className="inline-flex items-center justify-center rounded-full border border-brand-secondary/30 bg-brand-primary/25 px-10 py-4 text-sm font-semibold tracking-wide text-brand-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-secondary hover:bg-brand-primary/40 hover:shadow-[0_0_40px_rgba(224,137,253,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark sm:text-[15px]"
            >
              Partner With Leo Sky
            </Link>
          </motion.div>
        </Container>
      </section>

      <SectionDivider />
    </div>
  );
}
