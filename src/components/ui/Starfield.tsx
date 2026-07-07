"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type StarfieldProps = {
  className?: string;
  starCount?: number;
};

type StarConfig = {
  id: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
  x: number;
  y: number;
};

function createStarConfig(index: number): StarConfig {
  return {
    id: index,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
    size: 1 + Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.7,
    x: Math.random() * 100,
    y: Math.random() * 100,
  };
}

function Star({
  config,
  prefersReducedMotion,
}: {
  config: StarConfig;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-cream"
      style={{
        width: config.size,
        height: config.size,
        left: `${config.x}%`,
        top: `${config.y}%`,
        opacity: config.opacity,
      }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              opacity: [config.opacity, 0.1, config.opacity],
              scale: [1, 0.8, 1],
            }
      }
      transition={{
        duration: config.duration,
        delay: config.delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

export default function Starfield({
  className,
  starCount = 50,
}: StarfieldProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const stars = useMemo<StarConfig[]>(
    () =>
      Array.from({ length: starCount }, (_, index) => createStarConfig(index)),
    [starCount],
  );

  return (
    <div className={className} aria-hidden="true">
      {stars.map((star) => (
        <Star
          key={star.id}
          config={star}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}
