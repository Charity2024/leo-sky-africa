"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { footerContent, navigation, siteContent } from "@/data/site-content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="relative mt-auto border-t border-brand-secondary/10 bg-brand-dark py-8 lg:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(105,21,135,0.12),transparent_70%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-8 pb-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Logo & mission */}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <BrandLogo className="max-h-7" />
            <p className="max-w-xs text-xs leading-relaxed text-brand-body/75">
              {footerContent.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">
              {footerContent.exploreHeading}
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-brand-body/75 transition-colors hover:text-brand-light-purple focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-brand-body/75">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-brand-secondary" aria-hidden />
                <a href={`mailto:${siteContent.email}`} className="hover:text-brand-light-purple transition-colors">
                  {siteContent.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-brand-secondary" aria-hidden />
                <a href={`tel:${siteContent.phone.replace(/\s/g, "")}`} className="hover:text-brand-light-purple transition-colors">
                  {siteContent.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-secondary" aria-hidden />
                <span>{siteContent.location}</span>
              </li>
            </ul>
            <div className="mt-3 flex items-center gap-3">
              {footerContent.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-body/50 transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
                >
                  <span className="text-[10px] font-medium tracking-wide uppercase">{social.label.split(" ")[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 text-[10px] font-bold tracking-[0.2em] text-brand-secondary uppercase">
              Newsletter
            </h3>
            {subscribed ? (
              <p className="text-xs text-brand-body/75" role="status">
                Thank you for subscribing.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="min-w-0 flex-1 rounded-lg border border-brand-secondary/15 bg-brand-primary/5 px-3 py-2 text-xs text-brand-cream placeholder:text-brand-muted focus:border-brand-secondary/40 focus:outline-none focus:ring-1 focus:ring-brand-secondary/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-brand-primary px-3 py-2 text-xs font-semibold text-brand-cream transition-colors hover:bg-brand-purple-tone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-brand-secondary/10 pt-5 text-[11px] text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} {siteContent.companyName}. {footerContent.copyright}
          </p>
          <p className="tracking-[0.12em] text-brand-secondary uppercase">{siteContent.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
