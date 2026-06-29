"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import clsx from "clsx";

type VideoSource =
  | { type: "mp4"; src: string }
  | { type: "youtube"; src: string }
  | { type: "vimeo"; src: string };

type VideoSectionProps = {
  source: VideoSource;
  poster?: string;
  fallbackImage?: string;
  title?: string;
  autoplay?: boolean;
  className?: string;
  aspectRatio?: string;
};

function getEmbedUrl(source: VideoSource): string {
  if (source.type === "youtube") {
    const id = source.src.includes("youtube.com")
      ? new URL(source.src).searchParams.get("v")
      : source.src;
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }
  if (source.type === "vimeo") {
    const id = source.src.split("/").pop();
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }
  return source.src;
}

export default function VideoSection({
  source,
  poster,
  fallbackImage,
  title,
  autoplay = false,
  className,
  aspectRatio = "aspect-video",
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoplay);
  const [failed, setFailed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handlePlay = () => {
    if (source.type === "mp4" && videoRef.current) {
      videoRef.current.play().catch(() => setFailed(true));
    }
    setPlaying(true);
  };

  const showFallback = failed && fallbackImage;
  const showPoster = !playing && (poster || fallbackImage);

  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-brand-secondary/10 bg-brand-dark",
        aspectRatio,
        className,
      )}
    >
      {source.type === "mp4" && playing && !showFallback && (
        <video
          ref={videoRef}
          autoPlay={autoplay}
          muted
          loop
          playsInline
          poster={poster}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
          aria-label={title}
        >
          <source src={source.src} type="video/mp4" />
        </video>
      )}

      {(source.type === "youtube" || source.type === "vimeo") && playing && (
        <iframe
          src={getEmbedUrl(source)}
          title={title ?? "Video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      )}

      {showFallback && (
        <Image
          src={fallbackImage}
          alt={title ?? "Video fallback"}
          fill
          className="object-cover"
        />
      )}

      {showPoster && !showFallback && (
        <>
          <Image
            src={poster ?? fallbackImage!}
            alt={title ?? "Video poster"}
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-dark/40" />
        </>
      )}

      {!playing && !prefersReducedMotion && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={title ? `Play ${title}` : "Play video"}
          className="absolute inset-0 z-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
        >
          <motion.span
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-secondary/30 bg-brand-primary/80 text-brand-cream shadow-[0_0_40px_rgba(105,21,135,0.5)] backdrop-blur-md"
          >
            <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
          </motion.span>
        </button>
      )}
    </div>
  );
}
