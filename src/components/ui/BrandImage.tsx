"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { easePremium } from "@/lib/motion";

type BrandImageProps = Omit<ImageProps, "className" | "loading"> & {
  className?: string;
  wrapperClassName?: string;
  rounded?: "md" | "lg" | "xl" | "2xl" | "3xl";
  hoverZoom?: boolean;
  revealOnScroll?: boolean;
};

const radiusMap = {
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
} as const;

export default function BrandImage({
  className,
  wrapperClassName,
  rounded = "2xl",
  hoverZoom = true,
  revealOnScroll = true,
  alt,
  priority,
  ...props
}: BrandImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const imageLoadingProps = priority
    ? { priority: true as const }
    : { loading: "lazy" as const };

  return (
    <motion.div
      ref={ref}
      initial={
        revealOnScroll && !prefersReducedMotion ? { opacity: 0, y: 24 } : false
      }
      animate={
        revealOnScroll && !prefersReducedMotion
          ? isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 24 }
          : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.85, ease: easePremium }}
      className={clsx(
        "group relative overflow-hidden",
        radiusMap[rounded],
        wrapperClassName,
      )}
    >
      <Image
        alt={alt}
        className={clsx(
          "h-full w-full object-cover transition-transform duration-[1.2s] ease-out",
          hoverZoom && "group-hover:scale-105",
          className,
        )}
        {...props}
        {...imageLoadingProps}
      />
    </motion.div>
  );
}
