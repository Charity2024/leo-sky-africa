"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import {
  footerContent,
  navigation,
  sectionIds,
  siteContent,
} from "@/data/site-content";

const SCROLL_THRESHOLD = 24;

const navLinkBase =
  "relative rounded-full px-3 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:px-4 lg:text-sm";

const navLinkInactive =
  "text-brand-body hover:-translate-y-0.5 hover:text-brand-light-purple hover:drop-shadow-[0_0_8px_rgba(255,179,255,0.35)]";

const navLinkActive =
  "text-brand-secondary drop-shadow-[0_0_12px_rgba(224,137,253,0.5)]";

const mobileLinkBase =
  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const mobileLinkInactive =
  "text-brand-body hover:bg-brand-primary/10 hover:text-brand-light-purple hover:drop-shadow-[0_0_8px_rgba(255,179,255,0.3)]";

const mobileLinkActive =
  "bg-brand-primary/15 text-brand-secondary drop-shadow-[0_0_12px_rgba(224,137,253,0.45)]";

function getSectionId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}

export default function Navbar() {
  const pathname = usePathname();
  const menuId = useId();
  const prefersReducedMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to highlight active sections on scroll
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });

        if (visibleSections.size === 0) {
          setActiveSection(null);
          return;
        }

        const mostVisible = [...visibleSections.entries()].reduce(
          (current, next) => (next[1] > current[1] ? next : current),
        );

        setActiveSection(mostVisible[0]);
      },
      {
        rootMargin: "-25% 0px -45% 0px", // Offset for sticky navbar & focus area
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobileMenu]);

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 76; // Match navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });

        setActiveSection(targetId);
        setMobileOpen(false);
      }
    }
  };

  const motionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  const isActive = (href: string) =>
    pathname === "/" && activeSection === getSectionId(href);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(3, 3, 3, 0.85)" : "rgba(3, 3, 3, 0.4)",
        borderColor: scrolled ? "rgba(224, 137, 253, 0.15)" : "rgba(224, 137, 253, 0.05)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(105, 21, 135, 0.15)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={motionTransition}
      className="sticky top-0 z-50 border-b backdrop-blur-[12px] backdrop-saturate-150"
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex h-[60px] items-center justify-between gap-6 lg:h-20">
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "#top")}
              className="group relative flex shrink-0 flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-secondary"
            >
              <span className="text-[14px] font-bold tracking-[0.2em] text-brand-cream uppercase lg:text-base">
                {siteContent.companyName}
              </span>
              <span className="hidden text-[10px] tracking-[0.18em] text-brand-secondary uppercase sm:block">
                {siteContent.tagline}
              </span>
            </Link>

            <ul className="hidden items-center gap-1 xl:flex">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={active ? "true" : undefined}
                      className={clsx(
                        navLinkBase,
                        active ? navLinkActive : navLinkInactive,
                      )}
                    >
                      {item.title}
                      {active && (
                        <motion.span
                          layoutId="navbar-active-indicator"
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-brand-secondary shadow-[0_0_8px_rgba(224,137,253,0.6)]"
                          transition={
                            prefersReducedMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 380, damping: 30 }
                          }
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href={footerContent.contactCta.href}
                onClick={(e) => handleNavClick(e, footerContent.contactCta.href)}
                className="hidden rounded-full border border-brand-secondary/20 bg-brand-primary px-5 py-2 text-xs font-semibold text-brand-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-purple-tone hover:shadow-[0_0_20px_rgba(105,21,135,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary md:inline-flex"
              >
                {footerContent.contactCta.label}
              </Link>

              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls={menuId}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-primary/10 text-brand-cream backdrop-blur-sm transition hover:border-brand-secondary/35 hover:bg-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary xl:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={prefersReducedMotion ? false : { opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={prefersReducedMotion ? false : { opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <Menu className="h-5 w-5" aria-hidden />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-sm xl:hidden"
              onClick={closeMobileMenu}
            />

            <motion.div
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -12 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12 }
              }
              transition={motionTransition}
              className="absolute inset-x-0 top-full z-50 border-b border-brand-secondary/10 bg-[rgba(3,3,3,0.95)] shadow-[0_24px_64px_rgba(105,21,135,0.25)] backdrop-blur-[16px] xl:hidden"
            >
              <Container className="py-6">
                <ul className="flex flex-col gap-1">
                  {navigation.map((item, index) => {
                    const active = isActive(item.href);

                    return (
                      <motion.li
                        key={item.href}
                        initial={
                          prefersReducedMotion
                            ? false
                            : { opacity: 0, x: -12 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        exit={
                          prefersReducedMotion
                            ? undefined
                            : { opacity: 0, x: -8 }
                        }
                        transition={{
                          ...motionTransition,
                          delay: prefersReducedMotion ? 0 : index * 0.04,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          aria-current={active ? "true" : undefined}
                          className={clsx(
                            mobileLinkBase,
                            active ? mobileLinkActive : mobileLinkInactive,
                          )}
                        >
                          {item.title}
                          {active && (
                            <span
                              aria-hidden
                              className="h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_rgba(224,137,253,0.7)]"
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...motionTransition,
                    delay: prefersReducedMotion ? 0 : 0.2,
                  }}
                  className="mt-6 border-t border-brand-secondary/10 pt-6"
                >
                  <Link
                    href={footerContent.contactCta.href}
                    onClick={(e) => handleNavClick(e, footerContent.contactCta.href)}
                    className="flex w-full items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold tracking-wide text-brand-cream backdrop-blur-sm transition-all duration-300 hover:bg-brand-purple-tone hover:shadow-[0_0_20px_rgba(105,21,135,0.45)]"
                  >
                    {footerContent.contactCta.label}
                  </Link>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
