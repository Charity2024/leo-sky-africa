"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";
import type { PillarPageContent } from "@/data/pillars";
import { easePremium } from "@/lib/motion";

type PillarPageTemplateProps = {
  content: PillarPageContent;
};

function FaqAccordion({
  items,
}: {
  items: PillarPageContent["faq"]["items"];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-brand-secondary/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              <span className="text-base font-medium text-brand-cream">{item.question}</span>
              <ChevronDown
                className={clsx(
                  "h-5 w-5 shrink-0 text-brand-secondary transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: easePremium }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-brand-body/85">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function PillarPageTemplate({ content }: PillarPageTemplateProps) {
  const impactRef = useRef<HTMLElement>(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-dark">
        <div className="absolute inset-0">
          {content.heroVideo && !prefersReducedMotion ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={content.heroImage}
              className="h-full w-full object-cover"
            >
              <source src={content.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <BrandImage
              src={content.heroImage}
              alt={content.title}
              fill
              sizes="100vw"
              hoverZoom={false}
              revealOnScroll={false}
              priority
              className="object-cover"
              wrapperClassName="absolute inset-0"
            />
          )}
          <div className="absolute inset-0 bg-brand-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        </div>
        <Container className="relative z-10 pb-16 pt-32">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easePremium }}
          >
            <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.kicker}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-body/90">{content.tagline}</p>
            <p className="mt-3 max-w-2xl text-base text-brand-muted">{content.heroDescription}</p>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeader
              eyebrow={content.mission.eyebrow}
              title={content.mission.title}
            />
            <div className="space-y-6 text-base leading-relaxed text-brand-body/90">
              {content.mission.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="bg-brand-dark py-20 lg:py-28" style={{ background: "linear-gradient(180deg, #030303 0%, #390059 50%, #030303 100%)" }}>
        <Container>
          <SectionHeader
            eyebrow={content.programs.eyebrow}
            title={content.programs.title}
            className="mb-14"
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {content.programs.items.map((program, index) => (
              <motion.li
                key={program.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: easePremium }}
                className="rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:shadow-[0_8px_32px_rgba(105,21,135,0.2)]"
              >
                <h3 className="text-lg font-semibold text-brand-cream">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-body/85">{program.description}</p>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow={content.gallery.eyebrow}
            title={content.gallery.title}
            className="mb-14"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.gallery.images.map((img) => (
              <div key={img.src} className="relative aspect-[4/3]">
                {img.src.startsWith("/gallery/") ? (
                  <ImagePlaceholder label={img.alt} className="h-full w-full" />
                ) : (
                  <BrandImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    wrapperClassName="h-full w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section
        ref={impactRef}
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(105, 21, 135, 0.35), #030303 70%)" }}
      >
        <Container>
          <SectionHeader
            eyebrow={content.impact.eyebrow}
            title={content.impact.title}
            align="center"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {content.impact.stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-brand-secondary/15 bg-brand-dark/45 p-8 text-center backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-brand-accent sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} active={impactInView} />
                </p>
                <p className="mt-3 text-sm text-brand-body">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow={content.testimonials.eyebrow}
            title={content.testimonials.title}
            className="mb-14"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {content.testimonials.items.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md"
              >
                <p className="text-base leading-relaxed text-brand-body/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-brand-cream">{t.author}</span>
                    <span className="text-xs text-brand-muted">{t.role}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Events */}
      {content.relatedEvents.length > 0 && (
        <section className="bg-brand-dark py-20 lg:py-28">
          <Container>
            <SectionHeader eyebrow="Events" title="Related events" className="mb-14" />
            <ul className="grid gap-6 sm:grid-cols-2">
              {content.relatedEvents.map((event) => (
                <li key={event.title}>
                  <Link
                    href={event.href}
                    className="group flex gap-5 rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-5 transition-all duration-500 hover:border-brand-secondary/30"
                  >
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                      <BrandImage
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="128px"
                        wrapperClassName="h-full w-full"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">{event.date}</p>
                      <h3 className="mt-1 text-base font-semibold text-brand-cream group-hover:text-brand-secondary transition-colors">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-xs text-brand-muted">{event.location}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} />
            <FaqAccordion items={content.faq.items} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <Container>
          <div className="rounded-3xl border border-brand-secondary/15 bg-brand-primary/10 px-8 py-16 text-center backdrop-blur-md lg:px-20">
            <h2 className="text-2xl font-bold text-brand-cream sm:text-3xl">{content.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-body/85">{content.cta.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={content.cta.primaryHref}>{content.cta.primaryLabel}</Button>
              <Button href={content.cta.secondaryHref} variant="secondary">
                {content.cta.secondaryLabel}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
