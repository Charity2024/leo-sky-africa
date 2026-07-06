"use client";

import { motion, useReducedMotion } from "framer-motion";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";
import clsx from "clsx";

type ActivityCard = {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  href: string;
  cta?: string;
  status?: "upcoming" | "past";
};

type FeaturedActivitiesProps = {
  activities: readonly ActivityCard[];
  eyebrow?: string;
  title?: string;
  showStatus?: boolean;
};

function ActivityImage({ src, alt }: { src: string; alt: string }) {
  if (isGalleryPlaceholder(src)) {
    return <ImagePlaceholder label={alt} className="h-full w-full" aspectRatio="" />;
  }
  return (
    <BrandImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 400px"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      wrapperClassName="h-full w-full"
    />
  );
}

export default function FeaturedActivities({ 
  activities, 
  eyebrow, 
  title,
  showStatus = true 
}: FeaturedActivitiesProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-brand-dark py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.85, ease: easePremium }}
            className="mb-20 text-center"
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
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: easePremium }}
              className="group overflow-hidden rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:bg-brand-primary/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ActivityImage src={activity.image} alt={activity.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                {showStatus && activity.status && (
                  <div className="absolute right-4 top-4">
                    <span
                      className={clsx(
                        "rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase",
                        activity.status === "upcoming"
                          ? "bg-brand-accent text-brand-dark"
                          : "bg-brand-secondary/30 text-brand-cream"
                      )}
                    >
                      {activity.status}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 lg:p-10">
                <div className="mb-4 flex flex-wrap gap-4 text-xs font-medium tracking-[0.2em] text-brand-accent uppercase">
                  <span>{activity.date}</span>
                  <span>•</span>
                  <span>{activity.location}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-brand-cream sm:text-2xl">
                  {activity.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-brand-body/85 sm:text-lg">
                  {activity.description}
                </p>
                <Button href={activity.href} variant="secondary" className="w-full sm:w-auto">
                  {activity.cta}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
