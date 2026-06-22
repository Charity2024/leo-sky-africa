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
  { src: "/partners/university.svg", alt: "University Partner", width: 300, height: 80 },
  { src: "/partners/observatory.svg", alt: "Observatory Partner", width: 300, height: 80 },
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
      className="group/logo flex shrink-0 items-center justify-center px-10 sm:px-12 lg:px-16"
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx(
          "h-[40px] w-auto object-contain opacity-50 grayscale transition-[filter,opacity,transform] duration-500 md:h-[50px] lg:h-[60px]",
          "group-hover/logo:opacity-100 group-hover/logo:grayscale-0",
          "group-hover/logo:drop-shadow-[0_0_20px_rgba(224,137,253,0.65)]",
        )}
        draggable={false}
      />
    </motion.div>
  );
}

function LogoSet({ id }: { id: string }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={id !== "first" ? true : undefined}
    >
      {PARTNER_LOGOS.map((logo, idx) => (
        <PartnerLogo key={`${id}-${idx}`} {...logo} />
      ))}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <div className="relative mt-14 sm:mt-16 lg:mt-20">
      {/* Background ambient glow behind the marquee */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[150px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(105,21,135,0.15),transparent_75%)]"
      />

      <div
        className={clsx(styles.marquee, styles.edgeMask, "relative overflow-hidden py-8")}
        aria-label="Partner organization logos"
      >
        <div className={styles.track}>
          <LogoSet id="first" />
          <LogoSet id="dup1" />
          <LogoSet id="dup2" />
        </div>
      </div>
    </div>
  );
}
