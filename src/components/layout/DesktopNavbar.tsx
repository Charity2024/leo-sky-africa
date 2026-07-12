"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import Button from "@/components/ui/Button";
import { footerContent, navigation, sectionIds } from "@/content/site";
import { getHashFromHref, scrollToSection } from "@/lib/scroll";

const SCROLL_THRESHOLD = 24;

const navLinkBase =
  "relative rounded-full px-3 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:px-3.5 lg:text-sm";

const navLinkInactive =
  "text-brand-body hover:-translate-y-0.5 hover:text-brand-light-purple hover:drop-shadow-[0_0_8px_rgba(255,179,255,0.35)]";

const navLinkActive =
  "text-brand-secondary drop-shadow-[0_0_12px_rgba(224,137,253,0.5)]";

function isNavActive(
  pathname: string,
  href: string,
  activeHash: string | null,
) {
  const hash = getHashFromHref(href);
  if (hash) return pathname === "/" && activeHash === hash;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DesktopNavbar() {
  const pathname = usePathname();
  const menuId = useId();
  const prefersReducedMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });
        if (visible.size === 0) {
          setActiveHash(null);
          return;
        }
        const best = [...visible.entries()].reduce((a, b) =>
          b[1] > a[1] ? b : a,
        );
        setActiveHash(best[0]);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const effectiveActiveHash = pathname === "/" ? activeHash : null;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobileMenu]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hash = getHashFromHref(href);
    if (hash && pathname === "/") {
      e.preventDefault();
      scrollToSection(hash, prefersReducedMotion ? "auto" : "smooth");
      setActiveHash(hash);
      window.history.replaceState(null, "", `/#${hash}`);
      setMobileOpen(false);
    } else if (hash) {
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  const motionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(3, 3, 3, 0.78)"
          : "rgba(3, 3, 3, 0.42)",
        borderColor: scrolled
          ? "rgba(224, 137, 253, 0.12)"
          : "rgba(224, 137, 253, 0.06)",
        boxShadow: scrolled
          ? "0 6px 24px rgba(105, 21, 135, 0.12)"
          : "0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={motionTransition}
      className="sticky top-0 z-50 border-b border-brand-secondary/10 bg-brand-dark/30 backdrop-blur-[14px] backdrop-saturate-150"
    >
      <nav aria-label="Main navigation">
        <Container>
          <motion.div
            className="grid grid-cols-[1fr_auto_1fr] items-center"
            initial={false}
            animate={{ height: scrolled ? 48 : 52 }}
            transition={motionTransition}
          >
            <div className="justify-self-start">
              <BrandLogo
                priority
                className="h-5 w-auto max-w-[120px] sm:h-6 sm:max-w-[138px] lg:h-7 lg:max-w-[160px]"
              />
            </div>

            <ul className="hidden items-center justify-center gap-0.5 xl:flex">
              {navigation.map((item) => {
                const active = isNavActive(
                  pathname,
                  item.href,
                  effectiveActiveHash,
                );
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={active ? "page" : undefined}
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

            <div className="flex items-center justify-end gap-3">
              <Button
                href={footerContent.contactCta.href}
                variant="ghost"
                className="hidden px-5 py-2 text-xs md:inline-flex"
              >
                {footerContent.contactCta.label}
              </Button>

              <button
                type="button"
                aria-expanded={mobileOpen}
                aria-controls={menuId}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((o) => !o)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-primary/10 text-brand-cream backdrop-blur-sm transition hover:border-brand-secondary/35 hover:bg-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary xl:hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <Menu className="h-5 w-5" aria-hidden />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </Container>
      </nav>

      <AnimatePresence key={pathname}>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-sm xl:hidden"
              onClick={closeMobileMenu}
            />
            <motion.div
              id={menuId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={motionTransition}
              className="absolute inset-x-0 top-full z-50 border-b border-brand-secondary/10 bg-[rgba(3,3,3,0.96)] shadow-[0_24px_64px_rgba(105,21,135,0.25)] backdrop-blur-[16px] xl:hidden"
            >
              <Container className="py-5">
                <ul className="flex flex-col gap-1">
                  {navigation.map((item, index) => {
                    const active = isNavActive(
                      pathname,
                      item.href,
                      effectiveActiveHash,
                    );
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          ...motionTransition,
                          delay: index * 0.04,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          aria-current={active ? "page" : undefined}
                          className={clsx(
                            "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/50",
                            active
                              ? "bg-brand-primary/15 text-brand-secondary"
                              : "text-brand-body hover:bg-brand-primary/10 hover:text-brand-light-purple",
                          )}
                        >
                          {item.title}
                          {active && (
                            <span
                              aria-hidden
                              className="h-1.5 w-1.5 rounded-full bg-brand-secondary"
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                <div className="mt-5 border-t border-brand-secondary/10 pt-5">
                  <Button
                    href={footerContent.contactCta.href}
                    className="w-full py-3 text-sm"
                  >
                    {footerContent.contactCta.label}
                  </Button>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
