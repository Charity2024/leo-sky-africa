"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";
import clsx from "clsx";

type GalleryImage = {
  src: string;
  alt: string;
};

type PremiumGalleryProps = {
  images: readonly GalleryImage[];
  title?: string;
  eyebrow?: string;
  instagramUrl?: string;
};

function GalleryItemImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  if (isGalleryPlaceholder(src)) {
    return (
      <ImagePlaceholder
        label={alt}
        className={clsx("h-full w-full", className)}
        aspectRatio=""
      />
    );
  }
  return (
    <BrandImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      wrapperClassName="h-full w-full"
    />
  );
}

export default function PremiumGallery({
  images,
  title,
  eyebrow,
  instagramUrl = "https://instagram.com/leoskyafrica",
}: PremiumGalleryProps) {
  const prefersReducedMotion = useReducedMotion();
  const galleryRef = useRef<HTMLElement>(null);
  const galleryInView = useInView(galleryRef, {
    once: true,
    margin: "-10% 0px",
  });
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for different images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const y6 = useTransform(scrollYProgress, [0, 1], [0, -25]);

  // Editorial masonry layout configuration
  const layoutConfig = [
    { span: "col-span-2 row-span-2", aspect: "aspect-square" },
    { span: "col-span-1 row-span-1", aspect: "aspect-[4/5]" },
    { span: "col-span-1 row-span-1", aspect: "aspect-[3/4]" },
    { span: "col-span-1 row-span-2", aspect: "aspect-[3/5]" },
    { span: "col-span-1 row-span-1", aspect: "aspect-square" },
    { span: "col-span-1 row-span-1", aspect: "aspect-[4/3]" },
  ];

  return (
    <section ref={galleryRef} className="bg-brand-dark py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.85, ease: easePremium }}
          className="mb-16 text-center"
        >
          {eyebrow && (
            <p className="mb-4 text-[11px] font-medium tracking-[0.36em] text-brand-secondary uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
        </motion.div>

        {/* Editorial Masonry Gallery */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {images.slice(0, 6).map((image, index) => {
            const config = layoutConfig[index % layoutConfig.length];
            const parallaxY = [y1, y2, y3, y4, y5, y6][index % 6];

            return (
              <motion.div
                key={`${image.src}-${image.alt}-${index}`}
                style={{ y: prefersReducedMotion ? 0 : parallaxY }}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={
                  galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.85,
                  delay: index * 0.1,
                  ease: easePremium,
                }}
                className={clsx(
                  "group relative overflow-hidden rounded-3xl",
                  config.span,
                  config.aspect,
                )}
              >
                <GalleryItemImage src={image.src} alt={image.alt} />
                <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-500 group-hover:bg-brand-dark/30" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-end p-6"
                >
                  <p className="text-sm font-medium text-brand-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {image.alt}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Instagram Link */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.85, delay: 0.4, ease: easePremium }}
          className="mt-12 text-center"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent/80"
          >
            View More Moments
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
