"use client"

import type * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export interface PricingFeature {
  name: string
  highlight?: boolean
  included: boolean
}

export interface PricingTier {
  name: string
  price: number
  interval?: string
  description: string
  features: PricingFeature[]
  highlight?: boolean
  cta?: {
    text: string
    href?: string
    onClick?: () => void
  } | null
}

export interface PricingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  tiers: PricingTier[]
  className?: string
  containerClassName?: string
  cardClassName?: string | ((tier: PricingTier) => string)
  sectionClassName?: string
  renderCustomCTA?: (tier: PricingTier) => React.ReactNode
}

export function PricingCards({
  tiers,
  className,
  containerClassName,
  cardClassName,
  sectionClassName,
  renderCustomCTA,
  ...props
}: PricingCardsProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0",
        sectionClassName,
      )}
    >
      <div className={cn("w-full max-w-7xl mx-auto px-4", containerClassName)} {...props}>
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group",
                "rounded-2xl transition-all duration-500",
                tier.highlight
                  ? "bg-gradient-to-b from-emerald-800/70 via-emerald-900/50 to-neutral-950"
                  : "bg-white dark:bg-neutral-900",
                tier.highlight ? "" : "border border-neutral-200 dark:border-neutral-800",
                tier.highlight
                  ? "hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]"
                  : "",
                typeof cardClassName === "function" ? cardClassName(tier) : cardClassName,
              )}
              style={
                tier.highlight
                  ? {
                      boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.7)",
                    }
                  : undefined
              }
            >
              <div className="p-4 md:p-10 flex flex-col h-full">
                <div className="space-y-4">
                  <h3
                    className={cn(
                      "text-xl md:text-[28px] lg:text-[32px] font-semibold",
                      tier.highlight ? "text-white" : "text-white",
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={cn(
                      "pb-6 border-b text-base md:text-xl",
                      tier.highlight
                        ? "text-neutral-400 border-white/40"
                        : "text-neutral-500 dark:text-neutral-400 border-neutral-800",
                    )}
                  >
                    {tier.description}
                  </p>
                </div>

                <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {tier.highlight && feature.highlight ? (
                        <span className={cn("font-semibold text-white tracking-normal text-base md:text-xl")}>
                          {feature.name}
                        </span>
                      ) : (
                        <>
                          <div
                            className={cn(
                              "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                              feature.included
                                ? tier.highlight
                                  ? "text-primary"
                                  : "text-white"
                                : "text-neutral-300 dark:text-neutral-700",
                            )}
                          >
                            <CheckIcon className="w-4 h-4" />
                          </div>
                          <span
                            className={cn(
                              "text-sm md:text-base",
                              tier.highlight ? "text-neutral-200" : "text-neutral-300",
                            )}
                          >
                            {feature.name}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {renderCustomCTA ? (
                  renderCustomCTA(tier)
                ) : tier.cta ? (
                  <div className="mt-8">
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 group relative",
                        "border-primary text-primary hover:bg-primary/10 hover:text-primary",
                        "transition-all duration-300",
                      )}
                      onClick={tier.cta.onClick}
                      asChild={Boolean(tier.cta.href)}
                    >
                      {tier.cta.href ? (
                        <a href={tier.cta.href}>
                          <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                            {tier.cta.text}
                            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </a>
                      ) : (
                        <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                          {tier.cta.text}
                          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
