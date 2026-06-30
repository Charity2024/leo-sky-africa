"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { InquiryCard } from "@/components/contact/InquiryCard";
import { contactSectionContent } from "@/content/contact";
import { siteContent } from "@/content/site";
import { easePremium } from "@/lib/motion";

export default function ContactSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden bg-brand-dark py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(105,21,135,0.18),transparent_70%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16 xl:gap-24">
          <motion.div
            ref={headerRef}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={
              prefersReducedMotion || headerInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.9, ease: easePremium }}
          >
            <BrandLogo linked={false} className="mb-6 h-9 w-auto max-w-[200px] sm:h-10" />
            <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {contactSectionContent.eyebrow}
            </p>
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl"
            >
              {contactSectionContent.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-body/85">
              {contactSectionContent.description}
            </p>
            <dl className="mt-10 space-y-4 text-sm text-brand-body/80">
              <div>
                <dt className="text-[10px] font-medium tracking-[0.18em] text-brand-muted uppercase">{contactSectionContent.contactLabels.email}</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteContent.email}`} className="text-brand-cream transition-colors hover:text-brand-secondary">
                    {siteContent.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-medium tracking-[0.18em] text-brand-muted uppercase">{contactSectionContent.contactLabels.phone}</dt>
                <dd className="mt-1">
                  <a href={`tel:${siteContent.phone.replace(/\s/g, "")}`} className="text-brand-cream transition-colors hover:text-brand-secondary">
                    {siteContent.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-medium tracking-[0.18em] text-brand-muted uppercase">{contactSectionContent.contactLabels.location}</dt>
                <dd className="mt-1 text-brand-cream">{siteContent.location}</dd>
              </div>
            </dl>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {contactSectionContent.cards.map((card, index) => (
              <InquiryCard key={card.id} {...card} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
