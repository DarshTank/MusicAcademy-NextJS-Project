"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Updated Dark Shades for Backgrounds
  const backgroundColors = [
    "rgba(30, 30, 30, 1)",
    "rgba(40, 40, 40, 1)",
    "rgba(50, 50, 50, 1)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #1a1a1a, #333333)",
    "linear-gradient(to bottom right, #2b2b2b, #444444)",
    "linear-gradient(to bottom right, #262626, #3d3d3d)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] w-full flex justify-center relative space-x-10  p-10 shadow-lg"
      ref={ref}
      style={{
        overflowY: "auto", // Allow scrolling
        scrollbarWidth: "none", // Hide scrollbar (Firefox)
      }}
    >
      {/* Hide scrollbar for Chrome, Edge, and Safari */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Left Content Section */}
      <div className="w-full flex relative items-start px-4">
        <div className="w-[80%] mx-auto max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 transition-transform duration-500 ease-in-out"
              style={{
                transform: activeCard === index ? "scale(1)" : "scale(0.95)",
                opacity: activeCard === index ? 1 : 0.5,
              }}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-extrabold text-slate-50"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  y: activeCard === index ? 0 : 10,
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-300 mt-6 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Right Sticky Section */}
      <div
        style={{
          background: backgroundGradient,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          marginRight: "10%", // Adds 10% margin to the right
        }}
        className={cn(
          "hidden lg:block h-80 w-full max-w-md rounded-xl sticky top-10 overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
