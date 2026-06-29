"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  active: boolean;
};

export default function CountUp({ value, suffix = "", active }: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => (prefersReducedMotion ? value : 0));

  useEffect(() => {
    if (!active) return;

    if (prefersReducedMotion) return;

    const duration = 2200;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [active, value, prefersReducedMotion]);

  const shown = prefersReducedMotion ? value : display;

  return (
    <>
      {shown.toLocaleString()}
      {suffix}
    </>
  );
}
