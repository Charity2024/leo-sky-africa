"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { partners } from "@/data/partners";
import styles from "./PartnersMarquee.module.css";

function PartnerLogo({
  name,
  logo,
  url,
  width,
  height,
}: (typeof partners)[number]) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} website`}
      className="group/logo flex shrink-0 items-center justify-center px-10 sm:px-12 lg:px-16"
    >
      <motion.div
        whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <Image
          src={logo}
          alt={name}
          width={width}
          height={height}
          className={clsx(
            "h-[40px] w-auto object-contain opacity-50 grayscale transition-[filter,opacity,transform] duration-500 md:h-[50px] lg:h-[60px]",
            "group-hover/logo:opacity-100 group-hover/logo:grayscale-0",
            "group-hover/logo:drop-shadow-[0_0_24px_rgba(255,255,255,0.55)]",
          )}
          draggable={false}
        />
      </motion.div>
    </Link>
  );
}

function LogoSet({ id, ariaHidden }: { id: string; ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {partners.map((partner) => (
        <PartnerLogo key={`${id}-${partner.name}`} {...partner} />
      ))}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <div className="relative mt-14 sm:mt-16 lg:mt-20">
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
          <LogoSet id="dup" ariaHidden />
        </div>
      </div>
    </div>
  );
}
