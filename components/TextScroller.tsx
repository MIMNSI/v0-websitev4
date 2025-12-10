"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextScrollerProps {
  words: string[]
  interval?: number
  className?: string
}

export default function TextScroller({ 
  words, 
  interval = 2000, // Faster interval for tumbler feel
  className 
}: TextScrollerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className={cn("inline-grid overflow-hidden h-[1.1em] align-top", className)}>
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
            duration: 0.5 
          }}
          className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer to set container width based on longest word */}
      <span className="col-start-1 row-start-1 invisible opacity-0">
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </div>
  )
}
