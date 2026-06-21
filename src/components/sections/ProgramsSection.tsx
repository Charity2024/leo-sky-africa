"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

const PROGRAMS = [
  {
    title: "Space Education",
    description:
      "Inspiring future scientists, engineers, and innovators through immersive STEM workshops, school programs, and hands-on learning experiences across Africa.",
    href: "/space-education",
    image:
      "https://images.unsplash.com/photo-1544717297-95a87ad9fcdc?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Students engaged in collaborative STEM learning",
  },
  {
    title: "Astrotourism",
    description:
      "Connecting people to the cosmos through stargazing events, telescope experiences, and dark sky journeys that reveal the wonder of the universe.",
    href: "/astrotourism",
    image:
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d48?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Stargazer beneath a vast Milky Way night sky",
  },
  {
    title: "Space Innovation",
    description:
      "Accelerating Africa's participation in the space economy through hackathons, research initiatives, and a growing ecosystem of founders and technologists.",
    href: "/space-innovation",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Earth viewed from orbit representing space innovation",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function ProgramBlock({
  program,
  index,
}: {
  program: (typeof PROGRAMS)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-6% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const imageLeft = index % 2 === 0;

  const hidden = prefersReducedMotion ? false : { opacity: 0, y: 28 };
  const visible = { opacity: 1, y: 0 };

  return (
    <article
      ref={ref}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24 ${
        index > 0 ? "mt-20 sm:mt-24 lg:mt-32" : ""
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
        transition={{ duration: 1.05, ease }}
        className={`group relative aspect-[4/3] overflow-hidden lg:aspect-[5/4] ${
          imageLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img
          src={program.image}
          alt={program.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10"
        />
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : hidden}
        animate={prefersReducedMotion ? visible : isInView ? visible : hidden}
        transition={{
          duration: 0.95,
          ease,
          delay: prefersReducedMotion ? 0 : 0.12,
        }}
        className={`flex flex-col justify-center lg:py-8 ${
          imageLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h3 className="text-2xl font-semibold tracking-[0.12em] text-white uppercase sm:text-3xl lg:text-4xl">
          {program.title}
        </h3>

        <p className="mt-5 max-w-lg text-base leading-[1.85] text-[#B8B8C5] sm:mt-6 sm:text-lg sm:leading-8">
          {program.description}
        </p>

        <Link
          href={program.href}
          className="group/link mt-8 inline-flex w-fit items-center gap-4 text-sm font-medium tracking-wide text-white transition hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A2BE2] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-10 sm:text-[15px]"
        >
          <span>Learn more</span>
          <span
            aria-hidden
            className="h-px w-10 bg-[#6A0DAD] transition-all duration-500 group-hover/link:w-16 group-hover/link:bg-[#8A2BE2]"
          />
        </Link>
      </motion.div>
    </article>
  );
}

export default function ProgramsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="programs-heading"
      className="bg-black py-28 lg:py-40"
    >
      <Container>
        <motion.div
          ref={headerRef}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 24 }
          }
          transition={{ duration: 0.9, ease }}
          className="mb-16 max-w-2xl sm:mb-20 lg:mb-24"
        >
          <p className="mb-5 text-[11px] font-medium tracking-[0.38em] text-[#B8B8C5] uppercase">
            Featured Programs
          </p>
          <h2
            id="programs-heading"
            className="text-3xl leading-[1.12] font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]"
          >
            Three pathways into Africa&apos;s future space economy.
          </h2>
        </motion.div>

        <div>
          {PROGRAMS.map((program, index) => (
            <ProgramBlock key={program.href} program={program} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
