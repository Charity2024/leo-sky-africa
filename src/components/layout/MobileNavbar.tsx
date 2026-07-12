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
import { footerContent } from "@/content/site";
import { navigation } from "@/content/site";
import { getHashFromHref, scrollToSection } from "@/lib/scroll";

const navItemClass =
  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/50";

function isNavActive(
  pathname: string,
  href: string,
  activeHash: string | null,
) {
  const hash = getHashFromHref(href);
  if (hash) return pathname === "/" && activeHash === hash;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileNavbar() {
  const pathname = usePathname();
  const menuId = useId();
  const prefersReducedMotion = useReducedMotion();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string | null>(null);

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

  useEffect(() => {
    if (pathname !== "/") return;

    // Keep this lightweight for mobile header; only used for visual affordance.
    // If section ids are not available, active highlighting simply won't show.
    const sectionIds = navigation
      .map((n) => {
        const maybeId = getHashFromHref(n.href);
        return maybeId ?? null;
      })
      .filter((v): v is string => Boolean(v));

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
    }

    setMobileOpen(false);
  };

  const motionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <motion.header
      initial={false}
      className="sticky top-0 z-50 border-b border-brand-secondary/10 bg-brand-dark/30 backdrop-blur-[14px] backdrop-saturate-150"
    >
      <nav aria-label="Mobile navigation">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="min-w-0">
              <BrandLogo
                priority
                className={
                  // ~10–15% smaller than the current mobile size, fluid across devices.
                  // Targeting a compact premium header.
                  "h-[clamp(18px,3.2vw,24px)] w-auto max-w-[120px]"
                }
              />
            </div>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-primary/10 text-brand-cream backdrop-blur-sm transition hover:border-brand-secondary/35 hover:bg-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
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
        </Container>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-sm"
                onClick={closeMobileMenu}
              />

              <motion.aside
                id={menuId}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation drawer"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={motionTransition}
                className="fixed left-0 top-0 z-50 h-full w-[86vw] max-w-[360px] border-r border-brand-secondary/10 bg-[rgba(3,3,3,0.96)] shadow-[0_24px_64px_rgba(105,21,135,0.25)] backdrop-blur-[16px]"
              >
                <Container className="py-6">
                  <div className="flex items-center justify-between">
                    <div className="h-1" aria-hidden />
                  </div>

                  <ul className="mt-6 flex flex-col gap-1">
                    <li className="sr-only">Navigation</li>
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
                              navItemClass,
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

                  <div className="mt-auto pt-6">
                    <div className="border-t border-brand-secondary/10" />
                    <div className="mt-5">
                      <Button
                        href={footerContent.contactCta.href}
                        className="w-full py-3 text-sm"
                      >
                        {footerContent.contactCta.label}
                      </Button>
                    </div>
                  </div>
                </Container>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

