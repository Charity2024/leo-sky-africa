"use client";

import { motion, useReducedMotion } from "framer-motion";

type StarfieldProps = {
  className?: string;
  starCount?: number;
};

function Star({ index }: { index: number }) {
  const prefersReducedMotion = useReducedMotion();
  
  const randomDuration = 3 + Math.random() * 4;
  const randomDelay = Math.random() * 2;
  const randomSize = 1 + Math.random() * 2;
  const randomOpacity = 0.3 + Math.random() * 0.7;
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;

  return (
    <motion.div
      className="absolute rounded-full bg-brand-cream"
      style={{
        width: randomSize,
        height: randomSize,
        left: `${randomX}%`,
        top: `${randomY}%`,
        opacity: randomOpacity,
      }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              opacity: [randomOpacity, 0.1, randomOpacity],
              scale: [1, 0.8, 1],
            }
      }
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

export default function Starfield({ className, starCount = 50 }: StarfieldProps) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: starCount }).map((_, index) => (
        <Star key={index} index={index} />
      ))}
    </div>
  );
}
