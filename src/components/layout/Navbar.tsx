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
  siteContent,
} from "@/data/site-content";

const SCROLL_THRESHOLD = 24;

export default function Navbar() {
  const pathname = usePathname();
  const menuId = useId();
  const prefersReducedMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    href === "/" ? pathname === "/" : pathname.startsWith(href);

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
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "relative rounded-full px-3 py-1.5 text-[13px] font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:px-4 lg:text-sm",
                        active
                          ? "text-white"
                          : "text-white/65 hover:text-white",
                      )}
                    >
                      {item.title}
                      {active && (
                        <motion.span
                          layoutId="navbar-active-indicator"
                          className="absolute inset-x-3 -bottom-0.5 h-px bg-white/50"
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
                className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:inline-flex"
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
                          aria-current={active ? "page" : undefined}
                          onClick={closeMobileMenu}
                          className={clsx(
                            "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                            active
                              ? "bg-white/10 text-white"
                              : "text-white/65 hover:bg-white/5 hover:text-white",
                          )}
                        >
                          {item.title}
                          {active && (
                            <span
                              aria-hidden
                              className="h-1.5 w-1.5 rounded-full bg-white/70"
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
                    className="flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
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
