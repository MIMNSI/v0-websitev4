"use client"

import TextScroller from "./TextScroller"
import CTACard from "./CTACard"
import { Scene } from "./AnimatedBackground"

const rotatingWords = ["Everything", "Building", "Landscape", "Interior", "Inventory", "Automobile"]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pb-[40px] md:pb-[80px] lg:pb-[90px]">
      <div className="absolute inset-0 z-0 blur-sm">
        <Scene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center sm:pt-24 md:pt-0 pt-12">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="rounded-full mx-auto flex w-fit items-center gap-2 border border-white/20 p-1 pr-3 bg-black/40 backdrop-blur-sm">
              <span className="bg-white/20 rounded-full px-2 py-1 text-xs sm:text-sm font-medium text-white/90">
                100% AI-driven
              </span>
              <span className="text-xs sm:text-sm text-white/90">Zero manual intervention</span>
            </div>

            <div className="space-y-6 max-w-6xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-tight font-display whitespace-nowrap">
                <span className="block sm:inline">
                  <TextScroller words={rotatingWords} />
                </span>{" "}
                <span className="block sm:inline">to 3D with AI</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="pb-[50px]">
          <div className="grid grid-cols-2 gap-1 sm:gap-6 md:gap-8 w-full max-w-[630px] mx-auto px-0 sm:px-0">
            <CTACard title="Video to 3D" buttonText="Book a Demo" variant="primary" href="/contact" />
            <CTACard
              title="Image to 3D"
              buttonText="Join Waitlist"
              variant="secondary"
              onClick={() => console.log("Join Waitlist clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
