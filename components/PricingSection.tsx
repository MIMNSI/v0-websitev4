"use client"

import { PricingCards, type PricingTier } from "@/components/ui/pricing-cards"
import { Button } from "@/components/ui/button"

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: 0,
    description: "3D Artists & Hobbyists",
    features: [
      { name: "Input file: Videos (mov, mp4 only)", included: true },
      { name: "Supports small to medium objects (e.g., toys, decor, furniture)", included: true },
      { name: "Supports textured, shiny, transparent & complex objects", included: true },
      { name: "NeRF-based 3D technology", included: true },
      { name: "Export to glb, obj, usdz, ply", included: true },
      { name: "1-1.5 hour 3D asset turnaround", included: true },
      { name: "Multi-device, zero-lag 3D viewer", included: true },
      { name: "Input file size limit up to 2GB", included: true },
      { name: "Email support", included: true },
    ],
    highlight: false,
    cta: {
      text: "Start your 3D project",
    },
  },
  {
    name: "Enterprise & API",
    price: 0,
    description: "Real Estate, E-commerce, Automobile",
    features: [
      { name: "Everything in Free, plus:", included: true, highlight: true },
      { name: "Input file: Videos (mov, mp4 only), Image to 3D coming soon", included: true },
      { name: "Supports large spaces (e.g., rooms, flats, showrooms, buildings, landscapes)", included: true },
      { name: "Gaussian Splats–based 3D technology", included: true },
      { name: "Export to ply", included: true },
      { name: "Same-day 3D asset turnaround", included: true },
      { name: "Unlimited input file size", included: true },
      { name: "Branded & customizable 3D viewer", included: true },
      { name: "Advanced viewer analytics", included: true },
      { name: "Priority feature requests", included: true },
      { name: "Email support & tech support", included: true },
      { name: "Dedicated web integration assistance", included: true },
      { name: "Custom feature requests", included: true },
    ],
    highlight: true,
    cta: null as any,
  },
]

export default function PricingSection() {
  return (
    <section className="py-[40px] md:py-[80px] lg:py-[90px]">
      <div className="w-[95%] max-w-7xl mx-auto">
        {/* Title and Body */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance font-display font-medium">
            Turn Clicks into Customers with 3D
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            You've done the hard work of getting visitors to your product page. Don't lose them at the final step.
            MetaShop AI transforms your pages into high-converting sales tools.
          </p>
        </div>

        <PricingCards
          tiers={tiers}
          sectionClassName="py-0 px-0"
          containerClassName="px-0"
          className="grid-cols-1 lg:grid-cols-[minmax(390px,490px)_minmax(390px,490px)] justify-center gap-6 lg:gap-8"
          cardClassName={(tier) => {
            if (tier.name === "Enterprise & API") {
              return "bg-gradient-to-b from-emerald-900/60 via-emerald-950/30 to-black border-0 lg:min-h-[700px]"
            }
            return "bg-neutral-900 border-border lg:min-h-[700px]"
          }}
          renderCustomCTA={(tier) => {
            if (tier.name === "Enterprise & API") {
              return (
                <div className="mt-8">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-medium">
                    Book a Demo
                  </Button>
                </div>
              )
            }
            if (tier.name === "Free") {
              return (
                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="w-full h-12 border-neutral-600 text-white hover:bg-neutral-800 hover:text-white font-medium bg-transparent"
                  >
                    Start your 3D project
                  </Button>
                </div>
              )
            }
            return null
          }}
        />

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            All plans include enterprise-grade security and customer data protection. Use of the platform is subject to
            the terms outlined in our Terms of Use.
          </p>
        </div>
      </div>
    </section>
  )
}
