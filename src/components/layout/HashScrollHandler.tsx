"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

export default function HashScrollHandler() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const behavior = prefersReducedMotion ? "auto" : "smooth";
    const timer = window.setTimeout(() => scrollToSection(hash, behavior), 120);
    return () => window.clearTimeout(timer);
  }, [pathname, prefersReducedMotion]);

  return null;
}
