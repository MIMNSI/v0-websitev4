"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextScrollerProps {
  words: string[];
  interval?: number;
  initialDelay?: number; // Added prop for the first word delay
  className?: string;
}

export default function TextScroller({
  words,
  interval = 2000,
  initialDelay = 4000, // Default to 4 seconds for the first word
  className,
}: TextScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Determine delay: If index is 0 (first word), use initialDelay, else use standard interval
    const delay = currentIndex === 0 ? initialDelay : interval;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, interval, initialDelay, words.length]);

  return (
    <div
      className={cn(
        "inline-grid overflow-hidden h-[1.3em] align-top",
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentIndex}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
          }}
          className="col-start-1 row-start-1 flex items-start justify-center whitespace-nowrap pt-[0.1em]"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer */}
      <span className="col-start-1 row-start-1 invisible opacity-0 pt-[0.1em]">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </div>
  );
}
