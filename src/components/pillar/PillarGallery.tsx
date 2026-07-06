"use client";

import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";

type GalleryImage = {
  src: string;
  alt: string;
};

type PillarGalleryProps = {
  eyebrow: string;
  title: string;
  description?: string;
  images: readonly GalleryImage[];
  layout?: "grid-3" | "masonry";
};

function GalleryImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  if (isGalleryPlaceholder(src)) {
    return <ImagePlaceholder label={alt} className={clsx("h-full w-full", className)} aspectRatio="" />;
  }
  return (
    <BrandImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      wrapperClassName="h-full w-full"
    />
  );
}

export default function PillarGallery({
  eyebrow,
  title,
  description,
  images,
  layout = "masonry",
}: PillarGalleryProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-brand-dark py-28 lg:py-36">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} description={description} className="mb-16" />
        
        {layout === "masonry" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {images.map((img, index) => (
              <motion.div
                key={img.src}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, delay: index * 0.06, ease: easePremium }}
                className={clsx(
                  "relative min-h-[240px] overflow-hidden rounded-2xl",
                  index === 0 && "sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[520px]",
                  index === 1 && "lg:col-span-5",
                  index === 2 && "lg:col-span-3",
                  index === 3 && "lg:col-span-2",
                )}
              >
                <GalleryImage src={img.src} alt={img.alt} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {images.map((img, index) => (
              <motion.div
                key={img.src}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.85, delay: index * 0.06, ease: easePremium }}
                className={clsx(
                  "relative min-h-[260px] overflow-hidden rounded-2xl",
                  index === 0 && "lg:col-span-2 lg:row-span-2 lg:min-h-[520px]",
                )}
              >
                <GalleryImage src={img.src} alt={img.alt} />
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
