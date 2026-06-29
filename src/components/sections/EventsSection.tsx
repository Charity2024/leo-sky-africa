"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import BrandImage from "@/components/ui/BrandImage";
import { eventsContent } from "@/data/site-content";
import { Calendar, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 32 },
    animate:
      prefersReducedMotion || isInView
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 32 },
    transition: { duration: 0.9, delay, ease },
  });

  const featured = eventsContent.featured;
  const upcoming = eventsContent.upcoming;

  return (
    <section
      id="events"
      ref={sectionRef}
      aria-labelledby="events-heading"
      className="relative scroll-mt-24 bg-brand-dark py-24 lg:py-36"
      style={{
        background:
          "linear-gradient(180deg, #030303 0%, #390059 50%, #030303 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(105,21,135,0.15),transparent_65%)]"
      />

      <Container className="relative z-10">
        {/* Header */}
        <motion.div {...reveal(0)} className="mb-16 max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.38em] text-brand-secondary uppercase">
            Space Events
          </p>
          <h2
            id="events-heading"
            className="text-3xl leading-[1.12] font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-[2.75rem]"
          >
            Connect With the Cosmos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-body/90">
            Join our astro-tourism camps, educational summits, and hackathons designed to launch Africa into the global space economy.
          </p>
        </motion.div>

        {/* Featured Event Card */}
        <motion.div
          {...reveal(0.12)}
          className="group relative overflow-hidden rounded-3xl border border-brand-secondary/15 bg-brand-primary/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-brand-secondary/35 hover:shadow-[0_12px_48px_rgba(105,21,135,0.3)] md:p-8 lg:p-12 mb-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_right,rgba(224,137,253,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 items-center">
            {/* Featured Image */}
            <div className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-secondary/10 group-hover:border-brand-secondary/20">
              <BrandImage
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                wrapperClassName="absolute inset-0 h-full w-full"
                rounded="2xl"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark/50 to-transparent" />
            </div>

            {/* Featured details */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3.5 py-1 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                ★ FEATURED EVENT
              </span>

              <h3 className="text-2xl font-bold tracking-tight text-brand-cream sm:text-3xl lg:text-[2rem] lg:leading-tight">
                {featured.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-brand-body/95">
                {featured.description}
              </p>

              <div className="mt-6 space-y-3 border-y border-brand-secondary/10 py-5">
                <div className="flex items-center gap-3 text-sm text-brand-muted">
                  <Calendar className="h-4.5 w-4.5 text-brand-secondary" />
                  <span className="text-brand-cream/90">{featured.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-muted">
                  <MapPin className="h-4.5 w-4.5 text-brand-secondary" />
                  <span className="text-brand-cream/90">{featured.location}</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={featured.href}
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold tracking-wide text-brand-cream shadow-[0_4px_20px_rgba(105,21,135,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-purple-tone hover:shadow-[0_6px_24px_rgba(105,21,135,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
                >
                  {featured.cta || "Register Now"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div {...reveal(0.24)}>
          <div className="mb-8 flex items-center justify-between border-b border-brand-secondary/10 pb-4">
            <h3 className="text-xl font-bold tracking-tight text-brand-cream uppercase sm:text-2xl">
              Upcoming Programs
            </h3>
            <Link
              href="/events"
              className="text-xs font-semibold text-brand-secondary transition-colors hover:text-brand-light-purple"
            >
              View all events →
            </Link>
          </div>

          {/* Carousel Track */}
          <div 
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-brand-secondary/20 scroll-smooth snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE
            }}
          >
            {upcoming.map((event, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[350px] shrink-0 snap-start snap-always"
              >
                <div className="group/item relative h-full rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-5 transition-all duration-500 hover:border-brand-secondary/35 hover:bg-brand-primary/10 hover:shadow-[0_8px_32px_rgba(105,21,135,0.15)] flex flex-col justify-between">
                  <div>
                    {/* Event image */}
                    <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl border border-brand-secondary/5">
                      <BrandImage
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="350px"
                        wrapperClassName="h-full w-full"
                        rounded="xl"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Date Badge */}
                      <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                        {event.date}
                      </span>
                      <h4 className="text-lg font-semibold tracking-tight text-brand-cream group-hover/item:text-brand-secondary transition-colors duration-300">
                        {event.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-brand-body/80 mt-1 line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-secondary/10 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                      <MapPin className="h-3.5 w-3.5 text-brand-secondary" />
                      <span className="truncate max-w-[140px]">{event.location}</span>
                    </span>
                    <Link
                      href={event.href}
                      className="text-xs font-semibold text-brand-cream hover:text-brand-light-purple transition-all duration-300 inline-flex items-center gap-1 group-hover/item:translate-x-1"
                    >
                      <span>{event.cta || "Learn More"}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
