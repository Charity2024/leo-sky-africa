"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandImage from "@/components/ui/BrandImage";
import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";
//import HeroLogoWatermark from "@/components/ui/HeroLogoWatermark";
import PillarGallery from "@/components/pillar/PillarGallery";
import type { PillarPageContent, PillarLayoutVariant } from "@/content/types";
import { easePremium } from "@/lib/motion";

type PillarPageTemplateProps = {
  content: PillarPageContent;
};

function FaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
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
              <span className="text-base font-medium text-brand-cream">
                {item.question}
              </span>
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
                  initial={
                    prefersReducedMotion ? false : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    prefersReducedMotion ? undefined : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: easePremium }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-brand-body/85">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function HeroSection({
  content,
  variant,
}: {
  content: PillarPageContent;
  variant: PillarLayoutVariant;
}) {
  const prefersReducedMotion = useReducedMotion();
  const heroHeight =
    variant === "astrotourism"
      ? "min-h-[85vh]"
      : variant === "labs"
        ? "min-h-[75vh]"
        : "min-h-[70vh]";

  return (
    <section
      className={clsx(
        "relative flex items-end overflow-hidden bg-brand-dark",
        heroHeight,
      )}
    >
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
        <div
          className={clsx(
            "absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/40 to-transparent",
            variant === "labs" &&
              "bg-[linear-gradient(135deg,rgba(57,0,89,0.55)_0%,rgba(3,3,3,0.65)_50%,rgba(3,3,3,0.75)_100%)]",
          )}
        />
        {/* <HeroLogoWatermark
          position={content.heroWatermark?.position ?? "left"}
          opacity={content.heroWatermark?.opacity ?? 0.07}
        /> */}
      </div>
      <Container className="relative z-10 pb-16 pt-32 lg:pb-20">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easePremium }}
          className={
            variant === "astrotourism"
              ? "mx-auto max-w-3xl text-center"
              : undefined
          }
        >
          <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
            {content.kicker}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-body/90">
            {content.tagline}
          </p>
          {variant !== "education" && (
            <p className="mt-3 max-w-2xl text-base text-brand-muted">
              {content.heroDescription}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

function IntroSection({ content }: { content: PillarPageContent }) {
  return (
    <section className="border-b border-brand-secondary/10 bg-brand-dark py-16 lg:py-20">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-body/90 sm:text-xl">
          {content.heroDescription}
        </p>
      </Container>
    </section>
  );
}

function MissionSection({
  content,
  variant,
}: {
  content: PillarPageContent;
  variant: PillarLayoutVariant;
}) {
  if (!content.mission) return null;

  if (variant === "astrotourism") {
    return (
      <section className="bg-brand-dark py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {content.mission.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl">
              {content.mission.title}
            </h2>
            <div className="mt-10 space-y-6 text-base leading-[1.85] text-brand-body/90 sm:text-lg">
              {content.mission.paragraphs.map((p, i) => (
                <p key={`mission-paragraph-${i}`}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            eyebrow={content.mission.eyebrow}
            title={content.mission.title}
          />
          <div
            className={clsx(
              "space-y-6 text-base leading-relaxed text-brand-body/90",
              variant === "education" &&
                "border-l border-brand-secondary/20 pl-8",
            )}
          >
            {content.mission.paragraphs.map((p, i) => (
              <p key={`mission-paragraph-2-${i}`}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProgramsSection({
  content,
  variant,
}: {
  content: PillarPageContent;
  variant: PillarLayoutVariant;
}) {
  const prefersReducedMotion = useReducedMotion();
  if (!content.programs) return null;

  if (variant === "astrotourism") {
    return (
      <section className="bg-[linear-gradient(180deg,#030303_0%,#390059_40%,#030303_100%)] py-24 lg:py-32">
        <Container>
          <SectionHeader
            eyebrow={content.programs.eyebrow}
            title={content.programs.title}
            className="mb-14"
          />
          <ul className="space-y-5">
            {content.programs.items.map((program, index) => (
              <li
                key={program.title}
                className="grid gap-6 rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/25 lg:grid-cols-[200px_1fr] lg:items-center"
              >
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.06,
                    ease: easePremium,
                  }}
                  className="contents"
                >
                  <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-accent uppercase">
                    {content.programs?.itemLabel || "Program"}{" "}
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-cream">
                      {program.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-body/85">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }

  if (variant === "labs") {
    return (
      <section className="bg-brand-dark py-24 lg:py-32">
        <Container>
          <SectionHeader
            eyebrow={content.programs.eyebrow}
            title={content.programs.title}
            className="mb-14"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {content.programs.items.map((program, index) => (
              <motion.article
                key={program.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                  ease: easePremium,
                }}
                className={clsx(
                  "rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30",
                  index === 0 &&
                    "lg:row-span-2 lg:flex lg:flex-col lg:justify-center",
                )}
              >
                <h3 className="text-lg font-semibold text-brand-cream">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-body/85">
                  {program.description}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[linear-gradient(180deg,#030303_0%,#390059_50%,#030303_100%)] py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow={content.programs.eyebrow}
          title={content.programs.title}
          className="mb-14"
        />
        <ul className="grid gap-5 sm:grid-cols-2">
          {content.programs.items.map((program, index) => (
            <li
              key={program.title}
              className="rounded-2xl border border-brand-secondary/10 border-l-brand-secondary/40 bg-brand-primary/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:shadow-[0_8px_32px_rgba(105,21,135,0.2)]"
            >
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: easePremium,
                }}
              >
                <h3 className="text-lg font-semibold text-brand-cream">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-body/85">
                  {program.description}
                </p>
              </motion.div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function GallerySection({
  content,
  variant,
}: {
  content: PillarPageContent;
  variant: PillarLayoutVariant;
}) {
  const layout =
    variant === "astrotourism"
      ? "grid-3"
      : variant === "labs"
        ? "masonry"
        : "masonry";

  return (
    <PillarGallery
      eyebrow={content.gallery.eyebrow}
      title={content.gallery.title}
      images={content.gallery.images}
      layout={layout}
    />
  );
}

function ImpactSection({
  content,
  variant,
  impactRef,
  impactInView,
}: {
  content: PillarPageContent;
  variant: PillarLayoutVariant;
  impactRef: React.RefObject<HTMLElement | null>;
  impactInView: boolean;
}) {
  if (!content.impact) return null;

  return (
    <section
      ref={impactRef}
      className={clsx(
        "relative overflow-hidden py-24 lg:py-32",
        variant === "astrotourism"
          ? "bg-[radial-gradient(ellipse_90%_70%_at_50%_30%,rgba(57,0,89,0.5),#030303_75%)]"
          : "bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(105,21,135,0.35),#030303_70%)]",
      )}
    >
      <Container>
        <SectionHeader
          eyebrow={content.impact.eyebrow}
          title={content.impact.title}
          align="center"
          className="mb-16"
        />
        <ul
          className={clsx(
            "grid gap-6",
            variant === "labs" ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4",
          )}
        >
          {content.impact.stats.map((stat) => (
            <li
              key={stat.label}
              className={clsx(
                "rounded-2xl border border-brand-secondary/15 bg-brand-dark/45 text-center backdrop-blur-xl",
                variant === "labs" ? "p-10 sm:p-12" : "p-8",
              )}
            >
              <p className="text-3xl font-semibold text-brand-accent sm:text-4xl lg:text-5xl">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  active={impactInView}
                />
              </p>
              <p className="mt-3 text-sm text-brand-body">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function TestimonialsSection({
  content,
  variant,
}: {
  content: PillarPageContent;
  variant: PillarLayoutVariant;
}) {
  if (variant === "astrotourism" && content.testimonials.items[0]) {
    const t = content.testimonials.items[0];
    return (
      <section className="bg-brand-dark py-24 lg:py-32">
        <Container>
          <SectionHeader
            eyebrow={content.testimonials.eyebrow}
            title={content.testimonials.title}
            align="center"
            className="mb-12"
          />
          <blockquote className="mx-auto max-w-3xl rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 px-8 py-12 text-center backdrop-blur-md lg:px-16">
            <p className="text-xl leading-relaxed text-brand-body/90 sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <span className="block text-sm font-semibold text-brand-cream">
                  {t.author}
                </span>
                <span className="text-xs text-brand-muted">{t.role}</span>
              </cite>
            </footer>
          </blockquote>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow={content.testimonials.eyebrow}
          title={content.testimonials.title}
          className="mb-14"
        />
        <div
          className={clsx(
            "grid gap-8",
            variant === "labs" ? "lg:grid-cols-1 max-w-2xl" : "lg:grid-cols-2",
          )}
        >
          {content.testimonials.items.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl border border-brand-secondary/10 bg-brand-primary/5 p-8 backdrop-blur-md"
            >
              <p className="text-base leading-relaxed text-brand-body/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-brand-cream">
                    {t.author}
                  </span>
                  <span className="text-xs text-brand-muted">{t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RelatedEventsSection({ content }: { content: PillarPageContent }) {
  if (!content.relatedEvents || content.relatedEvents.length === 0) return null;
  if (!content.relatedEventsSection) return null;

  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow={content.relatedEventsSection.eyebrow}
          title={content.relatedEventsSection.title}
          className="mb-14"
        />
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
                  <p className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                    {event.date}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-brand-cream transition-colors group-hover:text-brand-secondary">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-muted">
                    {event.location}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CtaSection({ content }: { content: PillarPageContent }) {
  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <Container>
        <div className="rounded-3xl border border-brand-secondary/15 bg-brand-primary/10 px-8 py-16 text-center backdrop-blur-md lg:px-20">
          <h2 className="text-2xl font-bold text-brand-cream sm:text-3xl">
            {content.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-body/85">
            {content.cta.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={content.cta.primaryHref}>
              {content.cta.primaryLabel}
            </Button>
            <Button href={content.cta.secondaryHref} variant="secondary">
              {content.cta.secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

const sectionOrder: Record<PillarLayoutVariant, readonly string[]> = {
  education: [
    "intro",
    "mission",
    "programs",
    "gallery",
    "impact",
    "testimonials",
    "events",
    "faq",
    "cta",
  ],
  astrotourism: [
    "mission",
    "programs",
    "gallery",
    "impact",
    "testimonials",
    "events",
    "faq",
    "cta",
  ],
  labs: [
    "intro",
    "mission",
    "programs",
    "faq",
    "gallery",
    "impact",
    "testimonials",
    "events",
    "cta",
  ],
};

export default function PillarPageTemplate({
  content,
}: PillarPageTemplateProps) {
  const impactRef = useRef<HTMLElement>(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-10% 0px" });
  const variant = content.layoutVariant;

  const sections: Record<string, React.ReactNode> = {
    intro: <IntroSection key="intro" content={content} />,
    mission: (
      <MissionSection key="mission" content={content} variant={variant} />
    ),
    programs: (
      <ProgramsSection key="programs" content={content} variant={variant} />
    ),
    gallery: (
      <GallerySection key="gallery" content={content} variant={variant} />
    ),
    impact: (
      <ImpactSection
        key="impact"
        content={content}
        variant={variant}
        impactRef={impactRef}
        impactInView={impactInView}
      />
    ),
    testimonials: (
      <TestimonialsSection
        key="testimonials"
        content={content}
        variant={variant}
      />
    ),
    events: <RelatedEventsSection key="events" content={content} />,
    faq: content.faq ? (
      <section key="faq" className="bg-brand-dark py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <SectionHeader
              eyebrow={content.faq.eyebrow}
              title={content.faq.title}
            />
            <FaqAccordion items={content.faq.items} />
          </div>
        </Container>
      </section>
    ) : null,
    cta: <CtaSection key="cta" content={content} />,
  };

  return (
    <>
      <HeroSection content={content} variant={variant} />
      {sectionOrder[variant].map((key) => sections[key])}
    </>
  );
}
