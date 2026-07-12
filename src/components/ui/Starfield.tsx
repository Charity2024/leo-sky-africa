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

// Deterministic PRNG (no Math.random) to keep SSR and hydration identical.
// Uses a simple LCG; fast, pure, and stable across server/client.
function createSeededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    // LCG: state = (a * state + c) mod 2^32
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296; // [0, 1)
  };
}

function createStarConfig(index: number, starCount: number): StarConfig {
  // Incorporate starCount so changing starCount deterministically changes layout.
  const rand = createSeededRandom(1337 + index * 1013 + starCount * 7);

  return {
    id: index,
    duration: 3 + rand() * 4,
    delay: rand() * 2,
    size: 1 + rand() * 2,
    opacity: 0.3 + rand() * 0.7,
    x: rand() * 100,
    y: rand() * 100,
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
      Array.from({ length: starCount }, (_, index) =>
        createStarConfig(index, starCount),
      ),
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
