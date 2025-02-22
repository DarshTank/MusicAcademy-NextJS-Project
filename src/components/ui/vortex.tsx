"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  baseHue?: number;
  baseSpeed?: number;
  baseRadius?: number;
  backgroundColor?: string;
}

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  baseHue = 220,
  baseSpeed = 0.5,
  baseRadius = 1.5,
  backgroundColor = "#000",
}: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noise3D = createNoise3D();
  let tick = 0;

  const setup = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      resizeCanvas(canvas);
      if (ctx) draw(ctx, canvas);
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const hue = baseHue + (noise3D(x * 0.01, y * 0.01, tick * 0.001) * 100);

      ctx.fillStyle = `hsla(${hue}, 100%, 60%, 0.8)`;
      ctx.beginPath();
      ctx.arc(x, y, baseRadius, 0, 2 * Math.PI);
      ctx.fill();
    }

    requestAnimationFrame(() => draw(ctx, canvas));
  };

  const resizeCanvas = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", () => resizeCanvas(canvasRef.current!));
    return () => window.removeEventListener("resize", () => resizeCanvas(canvasRef.current!));
  }, []);

  return (
    <div className={cn("relative h-full w-full", containerClassName)}>
      <motion.div className="absolute inset-0 z-0 bg-transparent">
        <canvas ref={canvasRef} />
      </motion.div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
