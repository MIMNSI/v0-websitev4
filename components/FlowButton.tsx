"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface FlowButtonProps {
  text?: string
  href?: string
  onClick?: () => void
}

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT"

export function FlowButton({ text = "Book a Demo", href, onClick }: FlowButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false)
  const [direction, setDirection] = useState<Direction>("TOP")

  const gradientColor = "#10b981" // mint green

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"]
    const currentIndex = directions.indexOf(currentDirection)
    const nextIndex = (currentIndex - 1 + directions.length) % directions.length
    return directions[nextIndex]
  }

  const movingMap: Record<Direction, string> = {
    TOP: `radial-gradient(20.7% 50% at 50% 0%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
    RIGHT: `radial-gradient(16.2% 41.199999999999996% at 100% 50%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
  }

  const highlight = `radial-gradient(75% 181.15942028985506% at 50% 50%, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState))
      }, 1500)
      return () => clearInterval(interval)
    }
  }, [hovered])

  const buttonContent = (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit cursor-pointer active:scale-[0.95]"
    >
      <div className="w-auto text-white z-10 px-3 py-1.5 sm:px-6 sm:py-2 rounded-[inherit] bg-[radial-gradient(circle_at_center,_#000000_0%,_#000000_50%,_rgba(16,185,129,0.5)_100%)] group/btn font-bold text-xs sm:text-sm">
        <span className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
          {text}
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 inline-block group-hover/btn:translate-x-1 transition-transform hidden sm:inline-block" />
        </span>
      </div>

      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: 1.5 }}
      />

      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </button>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}
