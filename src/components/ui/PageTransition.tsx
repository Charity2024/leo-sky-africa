"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easePremium } from "@/lib/motion";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: easePremium }}
    >
      {children}
    </motion.div>
  );
}
