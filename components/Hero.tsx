"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import TextScroller from "@/components/TextScroller";
import Galaxy from "@/components/Galaxy";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-28 pb-12 md:pb-20 overflow-hidden bg-black">
      {/* Galaxy Background - Placed absolutely behind content */}
      <div className="absolute inset-0 z-0">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={2.6}
          glowIntensity={0.1}
          saturation={1}
          hueShift={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl mx-auto text-center">
              {/* --- UPDATED BADGE --- */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#1a1a1a]/60 backdrop-blur-sm py-1.5 px-4 mb-8 md:mb-10 mx-auto">
                <span className="text-xs md:text-sm lg:text-[14px] font-medium text-white/90 whitespace-nowrap">
                  100% Automated - No manual intervention
                </span>
              </div>

              {/* Heading - UPDATED FONT SIZES HERE */}
              <h1 className="text-[42px] md:text-[58px] lg:text-[68px] xl:text-[72px] font-normal mb-8 md:mb-12 leading-tight font-sans text-center">
                {/* First Line: Text Scroller */}
                <div className="relative h-[1.3em] w-full overflow-hidden flex justify-center items-start mb-2 md:mb-4">
                  <span className="text-white">
                    <TextScroller
                      words={[
                        "Everything",
                        "Buildings",
                        "Landscapes",
                        "Interiors",
                        "Inventory",
                        "Automobile",
                      ]}
                      interval={2000} // Normal speed for subsequent words
                      initialDelay={3500} // Wait 3.5s on "Everything"
                    />
                  </span>
                </div>

                {/* Second Line: Static Text */}
                <span className="block">
                  <span className="text-white">to 3D with </span>
                  <span className="bg-gradient-to-r from-[#2dffa7] to-[#1a8f65] bg-clip-text text-transparent">
                    AI
                  </span>
                </span>
              </h1>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12 md:max-w-[86.25%] mx-auto">
                {/* --- Video to 3D Card --- */}
                {/* Redirects to #production section */}
                <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-[0_2px_12px_rgba(34,197,94,0.08)] transition-all duration-300 -translate-y-0.5 cursor-pointer hover:border-[#2dffa7]/30">
                  {/* Background Link that covers the whole card */}
                  <Link
                    href="/#production"
                    className="absolute inset-0 z-0"
                    aria-label="Go to Production Section"
                  />

                  <div className="absolute inset-0 opacity-100 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[length:4px_4px]" />
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-100 pointer-events-none" />

                  {/* Content Group - pointer-events-none allows clicks to pass through to the card link */}
                  <div className="relative z-10 flex flex-col items-center w-full px-[10px] md:px-[20px] py-[20px] lg:py-[30px] gap-[30px] lg:gap-[46px] pointer-events-none">
                    <h3 className="text-[18px] md:text-[24px] font-medium text-white text-center whitespace-nowrap">
                      Video to 3D
                    </h3>

                    {/* Button - pointer-events-auto re-enables clicking specifically for this button */}
                    <Link
                      href="/contact"
                      className="pointer-events-auto flex items-center justify-center gap-1.5 md:gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors w-fit whitespace-nowrap"
                    >
                      Book a demo
                      <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                    </Link>
                  </div>
                </div>

                {/* --- Image to 3D Card --- */}
                {/* Redirects to Image to 3D page */}
                <Link
                  href="/image-to-3d"
                  className="group relative rounded-xl overflow-hidden border border-white/10 bg-black shadow-[0_2px_12px_rgba(34,197,94,0.08)] transition-all duration-300 -translate-y-0.5 hover:border-[#2dffa7]/30 block"
                >
                  <div className="absolute inset-0 opacity-100 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[length:4px_4px]" />
                  </div>
                  <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-100 pointer-events-none" />

                  {/* Content Group */}
                  <div className="relative z-10 flex flex-col items-center w-full px-[10px] md:px-[20px] py-[20px] lg:py-[30px] gap-[30px] lg:gap-[46px]">
                    <h3 className="text-[18px] md:text-[24px] font-medium text-white text-center whitespace-nowrap">
                      Image to 3D
                    </h3>

                    {/* Visually a button, but technically just a div since it's inside a Link */}
                    <div
                      className="flex items-center justify-center gap-1.5 md:gap-2 border border-[#2dffa7] text-[#2dffa7] group-hover:bg-[#2dffa7]/10 font-medium transition-colors whitespace-nowrap
                      w-[120px] h-[28px] text-[14px]
                      md:w-[148px] md:h-[40px] md:text-[16px] rounded-full"
                    >
                      Join waitlist
                      <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Trusted By */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                <span className="text-sm md:text-base text-white font-light">
                  Trusted by:
                </span>
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
          </div>
        </div>
      </div>
    </section>
  );
}
