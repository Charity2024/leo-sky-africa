"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  footerContent,
  navigation,
  siteContent,
} from "@/data/site-content";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative mt-auto border-t border-brand-secondary/10 bg-[#030303] text-brand-body py-10 lg:py-14 overflow-hidden"
    >
      {/* Subtle purple glow from the top of the footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(105,21,135,0.15),transparent_70%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 lg:gap-12 pb-10 border-b border-brand-secondary/10">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="group relative flex flex-col gap-1 focus-visible:outline-none"
            >
              <span className="text-base font-bold tracking-[0.2em] text-brand-cream uppercase">
                {siteContent.companyName}
              </span>
              <span className="text-[10px] tracking-[0.18em] text-brand-secondary uppercase">
                {siteContent.tagline}
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-brand-body/80 max-w-sm">
              {footerContent.description}
            </p>
            <Link
              href={footerContent.contactCta.href}
              className="inline-flex w-fit items-center rounded-full bg-brand-primary px-5 py-2 text-xs font-semibold text-brand-cream transition-all duration-300 hover:bg-brand-purple-tone hover:shadow-[0_0_15px_rgba(105,21,135,0.4)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
            >
              {footerContent.contactCta.label}
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-6 lg:pl-12">
            <h3 className="text-xs font-bold tracking-[0.2em] text-brand-secondary uppercase">
              {footerContent.exploreHeading}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-brand-body/80 transition-colors duration-300 hover:text-brand-light-purple focus-visible:outline-none"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Socials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-[0.2em] text-brand-secondary uppercase">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-brand-body/80">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-secondary shrink-0" />
                <a href="mailto:info@leoskyafrica.space" className="hover:text-brand-light-purple transition-colors">
                  info@leoskyafrica.space
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-secondary shrink-0" />
                <a href="tel:+254700000000" className="hover:text-brand-light-purple transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-secondary shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {/* Twitter / X */}
              <a href="#" aria-label="Twitter" className="text-brand-body/60 hover:text-brand-secondary transition-colors duration-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-brand-body/60 hover:text-brand-secondary transition-colors duration-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-brand-body/60 hover:text-brand-secondary transition-colors duration-300">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-brand-body/60 hover:text-brand-secondary transition-colors duration-300">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.858.508 9.388.508 9.388.508s7.53 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Single row on desktop */}
        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between text-xs text-brand-muted">
          <p>
            &copy; {currentYear} {siteContent.companyName}. All rights reserved.
          </p>
          <p className="tracking-[0.12em] text-brand-secondary uppercase">
            {siteContent.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
