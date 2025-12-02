"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const features = [
  {
    id: "ar-vr",
    title: "3D, AR & VR – Visualization Ready",
    description: "Your 3D assets adapt instantly to AR and VR environments — optimized for every platform and device.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "dimensional",
    title: "Dimensionally Accurate",
    description:
      "Scaled to real-world measurements with precision you can trust — perfect for eCommerce, architecture, and design workflows.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "any-surface",
    title: "Any Surface to 3D",
    description:
      "Transparent, reflective, or textured — we turn every surface into high-fidelity 3D, ready for clean visualization.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "customise",
    title: "Customise Your Interactive 3D Viewer",
    description:
      "Add your brand logos, CTAs, labels, and hotspot interactions — tailor every 3D experience to your audience.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "analytics",
    title: "Built-in Viewer Analytics",
    description:
      "Track interactions, time spent, and engagement directly in your 3D viewer — actionable insights for marketing and performance tracking.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const embedTabs = [
  {
    id: "embed",
    name: "Embed & Share",
    title: "Embed in just 5 mins. Share in 1-click.",
    description:
      "Copy and paste your 3D model link anywhere — websites, social media, or eCommerce platforms. No setup, no code.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "download",
    name: "Download & Edit",
    title: "Download. Import. Edit Anywhere.",
    description:
      "Download your preferred file format and import into any 3D editing software to continue editing with ease.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "plugins",
    name: "Plugins",
    title: "One-Click Export to Blender & Unity.",
    description: "Directly export your 3D assets using our plugin — quick setup, smooth workflow.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function WhatMattersSection() {
  const [activeTab, setActiveTab] = useState(embedTabs[0].id)
  const activeTabContent = embedTabs.find((tab) => tab.id === activeTab)

  return (
    <section className="relative min-h-screen bg-background py-[40px] md:py-[80px] lg:py-[90px]">
      <div className="w-[95%] max-w-7xl mx-auto">
        {/* Overline */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] backdrop-blur-sm border border-border/50 h-[34px] px-4">
            <span className="text-xs font-medium text-muted-foreground/80">One AI pipeline. Many use cases.</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="md:text-5xl lg:text-6xl text-center mb-16 text-balance text-3xl font-display font-medium">
          We Listened. We Built What Matters.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Row 1: 3 cards - each spans 2 columns */}
          {features.slice(0, 3).map((feature) => (
            <div key={feature.id} className="lg:col-span-2">
              <FeatureCard feature={feature} />
            </div>
          ))}

          {/* Row 2: 2 cards - each spans 3 columns */}
          {features.slice(3, 5).map((feature) => (
            <div key={feature.id} className="lg:col-span-3">
              <FeatureCard feature={feature} />
            </div>
          ))}

          {/* Row 3: 1 card with tabs - spans all 6 columns */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-card">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

              <div className="relative flex h-full flex-col gap-4 rounded-xl border border-border/50 bg-background p-6 md:p-8 shadow-sm">
                {/* Tabs */}
                <div className="mb-4 overflow-x-auto scrollbar-hide border-b border-border/50">
                  <div className="flex gap-8 justify-center min-w-max md:min-w-0">
                    {embedTabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          relative pb-3 text-base md:text-lg
                          transition-colors duration-300 whitespace-nowrap
                          ${
                            activeTab === tab.id
                              ? "text-foreground font-medium"
                              : "text-muted-foreground hover:text-foreground/80"
                          }
                        `}
                      >
                        {tab.name}

                        {/* Active state underline */}
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="embedTabUnderline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="w-full aspect-[16/5.4] rounded-xl overflow-hidden bg-muted/30">
                    <img
                      src={activeTabContent?.image || "/placeholder.svg"}
                      alt={activeTabContent?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{activeTabContent?.title}</h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {activeTabContent?.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div className="relative rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-card h-full">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

      <div className="relative rounded-xl border border-border/50 bg-background p-6 md:p-8 shadow-sm h-full min-h-[400px] flex flex-col">
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-muted/30 flex-shrink-0">
          <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-4">{feature.title}</h3>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4">{feature.description}</p>
      </div>
    </div>
  )
}
