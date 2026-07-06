"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import BrandImage from "@/components/ui/BrandImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { isGalleryPlaceholder } from "@/lib/media";
import { easePremium } from "@/lib/motion";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  href: string;
};

type BlogSectionProps = {
  posts: readonly BlogPost[];
  eyebrow?: string;
  title?: string;
  description?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
};

function PostImage({ src, alt }: { src: string; alt: string }) {
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

export default function BlogSection({
  posts,
  eyebrow,
  title,
  description,
  viewAllLabel,
  viewAllHref,
}: BlogSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-brand-dark py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6">
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
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-body/85 sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: easePremium }}
              className="group overflow-hidden rounded-3xl border border-brand-secondary/10 bg-brand-primary/5 backdrop-blur-md transition-all duration-500 hover:border-brand-secondary/30 hover:bg-brand-primary/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <PostImage src={post.image} alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-dark">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-3 flex flex-wrap gap-4 text-xs font-medium tracking-[0.2em] text-brand-muted uppercase">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-brand-cream sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-brand-body/85">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent/80"
                >
                  Read more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        {viewAllLabel && viewAllHref && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.85, delay: 0.3, ease: easePremium }}
            className="mt-16 text-center"
          >
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent/80"
            >
              {viewAllLabel}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
