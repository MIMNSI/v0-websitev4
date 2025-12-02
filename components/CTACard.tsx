"use client"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { ArrowRight } from "lucide-react"
import { FlowButton } from "@/components/FlowButton"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

interface CTACardProps {
  title: string
  buttonText: string
  variant?: "primary" | "secondary"
  onClick?: () => void
  href?: string
}

export default function CTACard({ title, buttonText, variant = "primary", onClick, href }: CTACardProps) {
  const isPrimary = variant === "primary"

  const gradientColor = isPrimary ? "#2DFFA7" : "#ffffff"
  const backgroundGradient = isPrimary
    ? "bg-[radial-gradient(circle_at_center,_#000000_0%,_#000000_50%,_rgba(45,106,79,0.5)_100%)]"
    : "bg-[radial-gradient(circle_at_center,_#000000_0%,_#000000_50%,_rgba(255,255,255,0.3)_100%)]"

  return (
    <CardContainer className="w-full">
      <CardBody className="relative group/card w-full h-auto">
        <CardItem translateZ="50" className="w-full">
          <div className="relative bg-card/50 backdrop-blur-sm border-border rounded-3xl p-3 sm:p-4 md:p-5 flex flex-col items-center justify-between min-h-[100px] md:min-h-[110px] hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 border-0">
            {/* Title */}
            <CardItem
              translateZ="75"
              as="h3"
              className="text-base sm:text-xl md:text-2xl font-bold text-foreground mb-auto text-center"
            >
              {title}
            </CardItem>

            <CardItem translateZ="100" className="mt-2 sm:mt-3">
              {buttonText === "Book a Demo" ? (
                <FlowButton text={buttonText} href={href} onClick={onClick} />
              ) : (
                <HoverBorderGradient
                  onClick={href ? undefined : onClick}
                  className="ts-button group/btn px-3 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm"
                  gradientColor={gradientColor}
                  duration={1.5}
                  backgroundGradient={backgroundGradient}
                  as={href ? "div" : "button"}
                >
                  <span className="flex items-center gap-1 sm:gap-2">
                    <span className="whitespace-nowrap">{buttonText}</span>
                    <ArrowRight className="w-0 h-0 sm:w-4 sm:h-4 opacity-0 sm:opacity-100 group-hover/btn:translate-x-1 transition-transform hidden sm:inline-block" />
                  </span>
                </HoverBorderGradient>
              )}
            </CardItem>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
