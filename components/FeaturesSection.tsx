"use client";

import { Monitor } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

// Updated Data Structure
const features = [
  {
    title: "Record & Upload",
    description:
      "Use your phone to capture spaces or upload files directly to our web app. Don't have time? We'll handle the recording for you.",
    type: "video",
    source: "/videos/record.mp4",
  },
  {
    title: "Generate 3D",
    description:
      "Photorealistic 3D powered by Gaussian Splats & NeRFs. Fully automated. No manual touch-ups.",
    type: "video",
    source: "/videos/generate.mp4",
  },
  {
    title: "Customise & Embed",
    description:
      "We brand and tailor your 3D models with CTAs, hotspots, and more. Simply embed or share in one click.",
    type: "image",
    source: "/images/customise.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-[40px] md:py-[80px] lg:py-[90px] bg-background">
      <div className="w-[95%] max-w-7xl mx-auto">
        {/* Overline with web icon - FIXED: Added transform classes to make effects visible */}
        <div className="flex justify-center mb-6">
          {/* Added: transition-all duration-300 -translate-y-0.5 */}
          <div className="relative inline-flex items-center gap-2.5 rounded-full bg-black border border-white/10 shadow-[0_2px_12px_rgba(34,197,94,0.08)] overflow-hidden px-[18px] py-3 md:px-[26px] md:py-4 lg:px-[34px] lg:py-[22px] transition-all duration-300 -translate-y-0.5">
            {/* --- Background Effect 1: Radial Dots --- */}
            <div className="absolute inset-0 opacity-100 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            {/* --- Background Effect 2: Diagonal Slant/Shine --- */}
            <div className="absolute inset-0 -z-10 rounded-full p-px bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-100 pointer-events-none" />

            {/* Content (relative z-10 ensures it sits on top of effects) */}
            <div className="relative z-10 flex items-center gap-2.5">
              <Monitor className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
              <span className="text-sm md:text-base lg:text-[20px] font-medium text-foreground">
                MetaShop on Web
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="md:text-5xl lg:text-6xl text-center text-foreground mb-[50px] text-3xl font-display font-medium">
          Fast, Scalable, Photorealistic 3D
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <CardContainer key={index} className="w-full">
              <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 sm:p-4 lg:p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                <CardItem
                  translateZ="80"
                  as="div"
                  className="mb-4 sm:mb-3 lg:mb-4"
                >
                  <div
                    className="text-7xl sm:text-5xl lg:text-7xl font-bold text-primary/20"
                    style={{
                      textShadow:
                        "0 2px 0 rgba(16, 185, 129, 0.2), 0 4px 0 rgba(16, 185, 129, 0.15), 0 6px 0 rgba(16, 185, 129, 0.1), 0 8px 10px rgba(0, 0, 0, 0.4)",
                      WebkitTextStroke: "1px rgba(16, 185, 129, 0.4)",
                      background:
                        "linear-gradient(180deg, rgba(16, 185, 129, 0.6) 0%, rgba(16, 185, 129, 0.2) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {index + 1}
                  </div>
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="50"
                  as="h3"
                  className="text-xl sm:text-lg lg:text-xl font-bold text-foreground mb-3 sm:mb-2 lg:mb-3"
                >
                  {feature.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  translateZ="60"
                  as="p"
                  className="text-sm sm:text-xs lg:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-4 lg:mb-6"
                >
                  {feature.description}
                </CardItem>

                {/* Media (Video or Image) */}
                <CardItem translateZ="100" className="w-full">
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-black/20 relative">
                    {feature.type === "video" ? (
                      <video
                        src={feature.source}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={feature.source || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover/card:shadow-xl transition-shadow duration-300"
                      />
                    )}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
