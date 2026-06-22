"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
}

interface NebulaCloud {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function SpaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let nebulae: NebulaCloud[] = [];
    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Re-initialize stars to fit the new size
      initStars();
    };

    const initStars = () => {
      stars = [];
      const density = 0.00015; // stars per square pixel
      const count = Math.floor(width * height * density);
      
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Initialize Nebula clouds (slow drifting gradient coordinates)
    nebulae = [
      {
        x: width * 0.3,
        y: height * 0.4,
        vx: 0.05,
        vy: 0.02,
        radius: Math.min(width, height) * 0.6,
        color: "rgba(105, 21, 135, 0.15)", // Primary Purple
      },
      {
        x: width * 0.7,
        y: height * 0.6,
        vx: -0.04,
        vy: -0.03,
        radius: Math.min(width, height) * 0.8,
        color: "rgba(57, 0, 89, 0.25)", // Deep Space Purple
      },
      {
        x: width * 0.5,
        y: height * 0.2,
        vx: 0.02,
        vy: -0.05,
        radius: Math.min(width, height) * 0.5,
        color: "rgba(224, 137, 253, 0.08)", // Secondary Purple
      },
    ];

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = "#030303";
      ctx.fillRect(0, 0, width, height);

      // Draw Nebulae
      if (!prefersReducedMotion) {
        nebulae.forEach((nebula) => {
          // Update coordinates
          nebula.x += nebula.vx;
          nebula.y += nebula.vy;

          // Bounce off bounds
          if (nebula.x < -nebula.radius || nebula.x > width + nebula.radius) nebula.vx *= -1;
          if (nebula.y < -nebula.radius || nebula.y > height + nebula.radius) nebula.vy *= -1;

          // Draw radial gradient
          const gradient = ctx.createRadialGradient(
            nebula.x,
            nebula.y,
            0,
            nebula.x,
            nebula.y,
            nebula.radius
          );
          gradient.addColorStop(0, nebula.color);
          gradient.addColorStop(0.5, nebula.color.replace(/[\d.]+\)$/, "0.05)"));
          gradient.addColorStop(1, "rgba(3, 3, 3, 0)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Fallback static background nebula if reduced motion
        const gradient = ctx.createRadialGradient(
          width * 0.5,
          height * 0.5,
          0,
          width * 0.5,
          height * 0.5,
          Math.max(width, height) * 0.6
        );
        gradient.addColorStop(0, "rgba(57, 0, 89, 0.25)");
        gradient.addColorStop(1, "rgba(3, 3, 3, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw Stars
      stars.forEach((star) => {
        if (!prefersReducedMotion) {
          star.phase += star.speed;
          star.opacity = 0.35 + Math.sin(star.phase) * 0.35;
        }

        ctx.fillStyle = `rgba(255, 240, 250, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle bloom for brighter/larger stars
        if (star.size > 1.2 && !prefersReducedMotion) {
          ctx.fillStyle = `rgba(224, 137, 253, ${star.opacity * 0.35})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 block h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
