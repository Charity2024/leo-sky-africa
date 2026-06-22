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
  "relative rounded-full px-3 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:px-4 lg:text-sm";

const navLinkInactive =
  "text-white/65 hover:-translate-y-0.5 hover:text-purple-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.35)]";

const navLinkActive =
  "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]";

const mobileLinkBase =
  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

const mobileLinkInactive =
  "text-white/65 hover:bg-white/5 hover:text-purple-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]";

const mobileLinkActive =
  "bg-white/10 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]";

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
        rootMargin: "-32% 0px -32% 0px",
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

  const motionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  const isActive = (href: string) =>
    pathname === "/" && activeSection === getSectionId(href);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(5, 5, 10, 0.55)"
          : "rgba(5, 5, 10, 0.45)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0, 0, 0, 0.2)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={motionTransition}
      className="sticky top-0 z-50 border-b backdrop-blur-[16px] backdrop-saturate-150"
    >
      <nav aria-label="Main navigation">
        <Container>
          <div className="flex h-[52px] items-center justify-between gap-6 lg:h-16">
            <Link
              href="/"
              className="group relative flex shrink-0 flex-col gap-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span className="text-[13px] font-semibold tracking-[0.2em] text-white uppercase lg:text-sm">
                {siteContent.companyName}
              </span>
              <span className="hidden text-[10px] tracking-[0.18em] text-white/55 uppercase sm:block lg:text-[11px]">
                {siteContent.tagline}
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
              />
            </Link>

            <ul className="hidden items-center gap-1 xl:flex">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
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
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-purple-400/70 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
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
                className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/10 hover:text-purple-300 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:inline-flex"
              >
                {footerContent.contactCta.label}
              </Link>

              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls={menuId}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((open) => !open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent xl:hidden"
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
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
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
              className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-[rgba(5,5,10,0.88)] shadow-[0_24px_64px_rgba(0,0,0,0.4)] backdrop-blur-[16px] xl:hidden"
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
                          aria-current={active ? "true" : undefined}
                          onClick={closeMobileMenu}
                          className={clsx(
                            mobileLinkBase,
                            active ? mobileLinkActive : mobileLinkInactive,
                          )}
                        >
                          {item.title}
                          {active && (
                            <span
                              aria-hidden
                              className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.7)]"
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
                  className="mt-6 border-t border-white/10 pt-6"
                >
                  <Link
                    href={footerContent.contactCta.href}
                    onClick={closeMobileMenu}
                    className="flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:bg-white/10 hover:text-purple-300 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
