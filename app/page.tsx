import Hero from "@/components/Hero"
import ProductionSection from "@/components/ProductionSection"
import TestimonialSection from "@/components/TestimonialSection"
import FeaturesSection from "@/components/FeaturesSection"
import FoundersSection from "@/components/FoundersSection"
import WhatMattersSection from "@/components/WhatMattersSection"
import PerformanceSection from "@/components/PerformanceSection"
import PricingSection from "@/components/PricingSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ProductionSection />
      <TestimonialSection />
      <FeaturesSection />
      <FoundersSection />
      <WhatMattersSection />
      <PerformanceSection />
      <PricingSection />
    </main>
  )
}
