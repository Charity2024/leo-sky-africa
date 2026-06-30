"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import clsx from "clsx";
import SiteLayout from "@/components/layout/SiteLayout";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandImage from "@/components/ui/BrandImage";
import Button from "@/components/ui/Button";
import { eventsContent, eventsPageContent } from "@/content/home";
import { easePremium } from "@/lib/motion";

function EventCard({
  event,
  index,
  defaultLearnMore,
}: {
  event: (typeof eventsContent.upcoming)[number];
  index: number;
  defaultLearnMore: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: easePremium }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 transition-all duration-500 hover:border-brand-secondary/30 hover:shadow-[0_8px_32px_rgba(105,21,135,0.2)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <BrandImage
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          wrapperClassName="h-full w-full rounded-none"
          rounded="2xl"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">
          {event.date}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-brand-cream">{event.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-body/80">
          {event.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-brand-secondary/10 pt-4">
          <span className="flex items-center gap-1.5 text-xs text-brand-muted">
            <MapPin className="h-3.5 w-3.5 text-brand-secondary" aria-hidden />
            {event.location}
          </span>
          <Link
            href={event.href}
            className="text-xs font-semibold text-brand-secondary hover:text-brand-light-purple"
          >
            {event.cta ?? defaultLearnMore} →
          </Link>
        </div>
      </div>
    </motion.li>
  );
}

export default function EventsPageClient() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const page = eventsPageContent;
  const events = tab === "upcoming" ? eventsContent.upcoming : eventsContent.past;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-brand-dark pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(105,21,135,0.25),transparent_70%)]"
        />
        <Container>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: easePremium }}
          >
            <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {page.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-body/90">{page.description}</p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-brand-dark py-12 lg:py-16">
        <Container>
          <div className="group overflow-hidden rounded-3xl border border-brand-secondary/15 bg-brand-primary/5 p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-[4/3]">
                <BrandImage
                  src={eventsContent.featured.image}
                  alt={eventsContent.featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  wrapperClassName="h-full w-full"
                />
              </div>
              <div>
                <span className="mb-3 inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  {page.featuredBadge}
                </span>
                <h2 className="text-2xl font-bold text-brand-cream sm:text-3xl">
                  {eventsContent.featured.title}
                </h2>
                <p className="mt-4 text-brand-body/90">{eventsContent.featured.description}</p>
                <div className="mt-5 space-y-2 text-sm text-brand-muted">
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-secondary" aria-hidden />
                    {eventsContent.featured.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-secondary" aria-hidden />
                    {eventsContent.featured.location}
                  </p>
                </div>
                <div className="mt-6">
                  <Button href={eventsContent.featured.href}>
                    {eventsContent.featured.cta ?? page.defaultCta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-dark py-16 lg:py-24">
        <Container>
          <SectionHeader eyebrow={page.calendarEyebrow} title={page.calendarTitle} className="mb-8" />

          <div className="mb-10 flex gap-2" role="tablist" aria-label="Event filter">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={clsx(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary",
                  tab === t
                    ? "bg-brand-primary text-brand-cream"
                    : "border border-brand-secondary/20 text-brand-body hover:border-brand-secondary/40",
                )}
              >
                {t === "upcoming" ? page.tabs.upcoming : page.tabs.past}
              </button>
            ))}
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} defaultLearnMore={page.defaultLearnMore} />
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-dark py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow={page.galleryEyebrow}
            title={page.galleryTitle}
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {eventsContent.upcoming.map((event) => (
              <div key={event.title} className="relative aspect-square overflow-hidden rounded-xl">
                <BrandImage
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="25vw"
                  wrapperClassName="h-full w-full"
                  rounded="xl"
                />
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href={page.registerCta.href}>{page.registerCta.label}</Button>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
