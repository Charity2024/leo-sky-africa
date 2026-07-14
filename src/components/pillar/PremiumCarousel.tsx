"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";
import clsx from "clsx";

type ExperienceCard = {
  title: string;
  description: string;
  image?: string;
};

type PremiumCarouselProps = {
  items: readonly ExperienceCard[];
  autoPlayInterval?: number;
};

function CardImage({ src, alt }: { src: string; alt: string }) {
  if (isGalleryPlaceholder(src)) {
    return (
      <ImagePlaceholder label={alt} className="h-full w-full" aspectRatio="" />
    );
  }
  return (
    <BrandImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 400px"
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      wrapperClassName="h-full w-full"
    />
  );
}

export default function PremiumCarousel({
  items,
  autoPlayInterval = 4500,
}: PremiumCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const itemCount = items.length;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  // Auto-play
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [
    currentIndex,
    prefersReducedMotion,
    isPaused,
    autoPlayInterval,
    nextSlide,
  ]);

  // Touch swipe support
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].screenX;
    const diff = touchStartRef.current - touchEndRef.current;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel */}
      <div className="relative overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`carousel-slide-${currentIndex}`}
            custom={direction}
            variants={prefersReducedMotion ? {} : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: easePremium }}
            className="group relative aspect-[4/3] overflow-hidden lg:aspect-[16/9]"
          >
            {currentItem.image && (
              <div className="absolute inset-0">
                <CardImage src={currentItem.image} alt={currentItem.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
              </div>
            )}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <motion.h3
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easePremium }}
                className="text-2xl font-bold text-brand-cream sm:text-3xl lg:text-4xl"
              >
                {currentItem.title}
              </motion.h3>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: easePremium }}
                className="mt-3 max-w-lg text-base leading-relaxed text-brand-body/90 sm:text-lg"
              >
                {currentItem.description}
              </motion.p>
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: easePremium }}
                className="mt-6"
              >
                <button className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent/80">
                  
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
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-brand-secondary/30 bg-brand-dark/60 backdrop-blur-md transition-all duration-300 hover:border-brand-secondary/60 hover:bg-brand-dark/80 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="h-5 w-5 text-brand-cream"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-brand-secondary/30 bg-brand-dark/60 backdrop-blur-md transition-all duration-300 hover:border-brand-secondary/60 hover:bg-brand-dark/80 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="h-5 w-5 text-brand-cream"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-3">
        {items.map((_, index) => (
          <button
            key={`carousel-dot-${index}`}
            onClick={() => goToSlide(index)}
            className={clsx(
              "h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-brand-accent"
                : "w-2 bg-brand-secondary/30 hover:bg-brand-secondary/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
