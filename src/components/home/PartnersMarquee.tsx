"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import styles from "./PartnersMarquee.module.css";

const PARTNER_LOGOS = [
  { src: "/partners/nasa.svg", alt: "NASA", width: 240, height: 80 },
  { src: "/partners/esa.svg", alt: "European Space Agency", width: 240, height: 80 },
  { src: "/partners/unesco.svg", alt: "UNESCO", width: 280, height: 80 },
  { src: "/partners/ksa.svg", alt: "Kenya Space Agency", width: 320, height: 80 },
  {
    src: "/partners/university.svg",
    alt: "University Partner",
    width: 300,
    height: 80,
  },
] as const;

function PartnerLogo({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="group/logo flex shrink-0 items-center justify-center px-8 sm:px-10 lg:px-12"
      whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx(
          "h-[45px] w-auto object-contain opacity-60 grayscale transition-[filter,opacity,transform] duration-500 md:h-[60px] lg:h-[80px]",
          "group-hover/logo:opacity-100 group-hover/logo:grayscale-0",
          "group-hover/logo:drop-shadow-[0_0_24px_rgba(106,13,173,0.55)]",
        )}
        draggable={false}
      />
    </motion.div>
  );
}

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={duplicate || undefined}
    >
      {PARTNER_LOGOS.map((logo) => (
        <PartnerLogo key={`${duplicate ? "dup-" : ""}${logo.src}`} {...logo} />
      ))}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <div className="relative mt-14 sm:mt-16 lg:mt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[280px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(106,13,173,0.15),transparent_70%)]"
      />

      <div
        className={clsx(styles.marquee, styles.edgeMask, "relative overflow-hidden py-6 md:py-8")}
        aria-label="Partner organization logos"
      >
        <div className={styles.track}>
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </div>
  );
}
