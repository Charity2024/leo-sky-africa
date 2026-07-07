"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { footerContent, navigation, siteContent } from "@/content/site";

// Simple icon components
const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const XIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const iconMap = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YoutubeIcon,
  x: XIcon,
} as const;

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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
            <div className="mt-3 flex flex-wrap gap-3">
              {footerContent.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-brand-secondary/10 bg-brand-primary/5 p-2 text-brand-body/50 transition-colors hover:border-brand-secondary/30 hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
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
                <button
                  type="submit"
                  className="w-full rounded-lg border border-brand-secondary/30 bg-brand-secondary px-3 py-2 text-xs font-semibold text-brand-cream transition-colors hover:border-brand-secondary/50 hover:bg-brand-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  {footerContent.newsletterSubmitLabel}
                </button>
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
