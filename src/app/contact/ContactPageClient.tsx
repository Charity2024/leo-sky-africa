"use client";

import { motion } from "framer-motion";
import SiteLayout from "@/components/layout/SiteLayout";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { siteContent } from "@/data/site-content";
import { Mail, Phone, MapPin } from "lucide-react";
import { easePremium } from "@/lib/motion";

export default function ContactPageClient() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-brand-dark pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(105,21,135,0.2),transparent_70%)]"
        />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easePremium }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              Contact
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-brand-cream sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-5 text-lg text-brand-body/90">
              Whether you&apos;re exploring a partnership, booking an experience, or joining a program — we&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="space-y-8">
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" aria-hidden />
                  <div>
                    <p className="text-xs font-medium tracking-wide text-brand-muted uppercase">Email</p>
                    <a href={`mailto:${siteContent.email}`} className="mt-1 block text-brand-cream hover:text-brand-secondary transition-colors">
                      {siteContent.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" aria-hidden />
                  <div>
                    <p className="text-xs font-medium tracking-wide text-brand-muted uppercase">Phone</p>
                    <a href={`tel:${siteContent.phone.replace(/\s/g, "")}`} className="mt-1 block text-brand-cream hover:text-brand-secondary transition-colors">
                      {siteContent.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" aria-hidden />
                  <div>
                    <p className="text-xs font-medium tracking-wide text-brand-muted uppercase">Location</p>
                    <p className="mt-1 text-brand-cream">{siteContent.location}</p>
                  </div>
                </li>
              </ul>

              <div className="overflow-hidden rounded-2xl border border-brand-secondary/10">
                <iframe
                  title="Leo Sky Africa office location"
                  src="https://maps.google.com/maps?q=Nairobi,Kenya&output=embed"
                  className="h-56 w-full border-0 grayscale-[30%] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
