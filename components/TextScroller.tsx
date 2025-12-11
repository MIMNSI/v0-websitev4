"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextScrollerProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function TextScroller({
  words,
  interval = 2000,
  className,
}: TextScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  // CHANGED: h-[1.1em] -> h-[1.3em] (More room for tails)
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
          // CHANGED: items-center -> items-start (Anchors text to top so space adds to bottom)
          // ADDED: pt-[0.1em] (Small push to align perfectly with "to 3D")
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
