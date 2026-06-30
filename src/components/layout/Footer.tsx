"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import Button from "@/components/ui/Button";
import { footerContent, navigation, siteContent } from "@/content/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="relative mt-auto border-t border-brand-secondary/10 bg-brand-dark py-6 lg:py-8">
      <Container className="relative z-10">
        <div className="grid gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-2 lg:col-span-4">
            <BrandLogo className="h-9 w-auto max-w-[200px] lg:h-10 lg:max-w-[220px]" />
            <p className="max-w-xs text-xs leading-relaxed text-brand-body/70">
              {footerContent.description}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">
              {footerContent.exploreHeading}
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-brand-body/70 transition-colors hover:text-brand-light-purple focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">
              {footerContent.contactHeading}
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs text-brand-body/70">
              <li>
                <a href={`mailto:${siteContent.email}`} className="transition-colors hover:text-brand-light-purple">
                  {siteContent.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteContent.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-brand-light-purple">
                  {siteContent.phone}
                </a>
              </li>
              <li>{siteContent.location}</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {footerContent.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium tracking-wide text-brand-body/50 uppercase transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-2 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">
              {footerContent.newsletterHeading}
            </h3>
            {subscribed ? (
              <p className="text-xs text-brand-body/70" role="status">
                {footerContent.newsletterSuccessMessage}
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  {footerContent.newsletterEmailLabel}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footerContent.newsletterPlaceholder}
                  required
                  className="w-full rounded-lg border border-brand-secondary/15 bg-brand-primary/5 px-3 py-2 text-xs text-brand-cream placeholder:text-brand-muted focus:border-brand-secondary/40 focus:outline-none focus:ring-1 focus:ring-brand-secondary/30"
                />
                <Button type="submit" variant="secondary" className="w-full px-3 py-2 text-xs">
                  {footerContent.newsletterSubmitLabel}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-brand-secondary/10 pt-4 text-[11px] text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteContent.companyName}. {footerContent.copyright}
          </p>
          <p className="tracking-[0.12em] text-brand-secondary uppercase">{siteContent.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
