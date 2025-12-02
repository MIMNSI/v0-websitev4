"use client"

import { useRef, useState, useEffect } from "react"

interface GlowingEffectProps {
  spread?: number
  glow?: boolean
  disabled?: boolean
  proximity?: number
  inactiveZone?: number
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (disabled) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [disabled])

  if (disabled) return null

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden rounded-[inherit] z-0"
      style={{
        pointerEvents: "auto",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
        }}
      >
        {glow && (
          <div
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${spread * 2}px`,
              height: `${spread * 2}px`,
              left: `${mousePosition.x - spread}px`,
              top: `${mousePosition.y - spread}px`,
              background: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.15) 40%, transparent 70%)`,
              transition: "left 0.06s linear, top 0.06s linear",
            }}
          />
        )}

        <div
          className="absolute rounded-full blur-md"
          style={{
            width: `${proximity * 2}px`,
            height: `${proximity * 2}px`,
            left: `${mousePosition.x - proximity}px`,
            top: `${mousePosition.y - proximity}px`,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)`,
            transition: "left 0.04s linear, top 0.04s linear",
          }}
        />
      </div>
    </div>
  )
}
