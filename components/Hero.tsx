"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#1a4d3a] via-[#0d2619] to-[#050a08]" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          
          {/* Layout Change: Switched from grid-cols-2 to a centered flex column */}
          <div className="flex flex-col items-center justify-center">
            
            {/* Content Wrapper: Added max-width and removed ordering classes */}
            <div className="w-full max-w-4xl mx-auto text-center">
              
              {/* Badge: Removed lg:mx-0 to keep it centered on all screens */}
              <div className="inline-flex items-center gap-0 rounded-full border border-white/20 bg-[#1a1a1a]/60 backdrop-blur-sm py-1 md:py-1.5 mb-6 md:mb-8 lg:py-1.5 px-px pr-0.5 mx-auto">
                <div className="rounded-full bg-white px-2.5 py-1 ml-0.5 md:ml-[6px] md:px-3 lg:px-1.5 lg:py-0.5">
                  <span className="text-xs md:text-sm lg:text-[14px] font-medium text-black whitespace-nowrap">
                    100% AI-driven
                  </span>
                </div>
                <span className="text-xs md:text-sm lg:text-[14px] text-white/90 px-2.5 md:px-3 lg:px-[10px] whitespace-nowrap">
                  Zero manual intervention
                </span>
              </div>

              {/* Heading: Removed lg:text-left to keep it centered */}
              <h1 className="text-4xl md:text-5xl lg:text-[78px] font-light mb-8 md:mb-12 leading-tight font-sans text-center">
                <span className="md:inline block text-white/80">Everything </span>
                <span className="md:inline block">
                  <span className="text-white">to 3D with </span>
                  <span className="bg-gradient-to-r from-[#2dffa7] to-[#1a8f65] bg-clip-text text-transparent">AI</span>
                </span>
              </h1>

              {/* Cards Grid: Added mx-auto to center the grid block */}
              <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12 lg:max-w-[86.25%] mx-auto">
                {/* Video to 3D Card */}
                <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1a4d3a]/60 to-[#0d2619]/40 backdrop-blur-sm border border-[#2dffa7]/30 p-4 md:p-8 flex flex-col items-center justify-between min-h-[140px] md:min-h-[200px]">
                  <h3 className="text-base md:text-2xl font-medium text-white mb-3 md:mb-4 text-center">Video to 3D</h3>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-1.5 md:gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors w-fit whitespace-nowrap"
                  >
                    Book a demo
                    <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                  </Link>
                </div>

                {/* Image to 3D Card */}
                <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1a4d3a]/40 to-[#0d2619]/30 backdrop-blur-sm border border-white/20 p-4 md:p-8 flex flex-col items-center justify-between min-h-[140px] md:min-h-[200px]">
                  <h3 className="text-base md:text-2xl font-medium text-white mb-3 md:mb-4 text-center">Image to 3D</h3>
                  <button className="flex items-center justify-center gap-1.5 md:gap-2 border border-[#2dffa7] text-[#2dffa7] hover:bg-[#2dffa7]/10 px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors w-fit whitespace-nowrap">
                    Join waitlist
                    <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                  </button>
                </div>
              </div>

              {/* Trusted By: Removed lg:justify-start to keep it centered */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                <span className="text-sm md:text-base text-white font-light">Trusted by:</span>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                  <Image
                    src="/logos/aws.png"
                    alt="AWS"
                    width={40}
                    height={20}
                    className="h-4 md:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/logos/google-startups.png"
                    alt="Google for Startups"
                    width={100}
                    height={20}
                    className="h-4 md:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/logos/nvidia-inception.png"
                    alt="NVIDIA Inception Program"
                    width={80}
                    height={25}
                    className="h-5 md:h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/logos/samsung.png"
                    alt="Samsung"
                    width={70}
                    height={20}
                    className="h-4 md:h-5 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (3D Viewer) has been removed */}
          </div>
        </div>
      </div>
    </section>
  )
}
