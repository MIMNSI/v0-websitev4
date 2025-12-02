"use client"

import type React from "react"
import { createContext, useState, useContext, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MouseEnterContextType {
  isMouseEntered: boolean
  setIsMouseEntered: React.Dispatch<React.SetStateAction<boolean>>
}

const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 15
    const y = (e.clientY - top - height / 2) / 15
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    <MouseEnterContext.Provider value={{ isMouseEntered, setIsMouseEntered }}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn("relative transition-all duration-200 ease-linear", className)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("h-96 w-full [transform-style:preserve-3d]", className)}>{children}</div>
}

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateZ = 0,
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateZ?: number | string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { isMouseEntered } = useContext(MouseEnterContext) || {}

  useEffect(() => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateZ(${translateZ}px)`
    } else {
      ref.current.style.transform = `translateZ(0px)`
    }
  }, [isMouseEntered, translateZ])

  return (
    <Tag ref={ref} className={cn("transition-transform duration-200 ease-linear", className)}>
      {children}
    </Tag>
  )
}
