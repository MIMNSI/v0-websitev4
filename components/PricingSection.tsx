"use client";

import { Check, X } from "lucide-react";
import { Button } from "./ui/button";

export default function PricingSection() {
  return (
    <section className="py-[40px] md:py-[80px] lg:py-[90px] bg-background">
      <div className="w-[95%] max-w-7xl mx-auto">
        {/* Title and Body */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-balance font-display font-medium">
            Turn Clicks into Customers with 3D
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            You've done the hard work of getting visitors to your product page.
            Don't lose them at the final step. MetaShop AI transforms your pages
            into high-converting sales tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 md:gap-8 mb-12">
          {/* --- FREE CARD --- */}
          <div className="group relative rounded-xl overflow-hidden transition-all duration-300 border border-white/10 bg-black h-full flex flex-col">
            {/* Layer 0: Card Background (Implicit in parent bg-black) */}

            {/* Card Content */}
            <div className="relative p-6 md:p-8 flex flex-col flex-1 h-full">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4 mb-8">
                {/* Layer 2 (Front): Text & Buttons */}
                <div className="relative z-20 flex flex-col justify-center items-start flex-1 min-w-0 w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                    Free
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-tight mb-5">
                    3D Artists & Hobbyists
                  </p>

                  {/* CTA */}
                  <a
                    href="https://app.metashopai.com/"
                    className="block w-full md:w-auto"
                  >
                    <Button
                      variant="outline"
                      className="w-full md:w-[200px] bg-transparent border-white/20 hover:bg-white/10 text-white hover:text-white font-medium px-6"
                    >
                      Start your 3D project
                    </Button>
                  </a>
                </div>

                {/* Layer 1 (Middle): Video */}
                <div className="relative z-10 w-full md:w-64 shrink-0 aspect-video rounded-lg overflow-hidden bg-black/50 border border-white/10 mt-1">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://websitecreatives.s3.ap-south-1.amazonaws.com/Free_3D.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-8" />

              {/* Features List */}
              <div className="space-y-3 flex-1 relative z-20">
                {/* Included Features */}
                {[
                  "Video uploads only",
                  "Supports small to medium objects (e.g., toys, decor, furniture)",
                  "Supports textured, shiny, transparent & complex objects",
                  "NeRF 3D technology",
                  "Export to glb, obj, usdz, ply",
                  "1–1.5 hour 3D asset turnaround",
                  "Multi-device, zero-lag 3D viewer",
                  "2GB upload limit",
                  "Email support only",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}

                {/* Excluded Features (Cross Marked) */}
                {[
                  "Medium to large objects: Bike, Furniture etc",
                  "Spaces and scenes captures",
                ].map((feature, index) => (
                  <div
                    key={`excluded-${index}`}
                    className="flex items-start gap-3 opacity-60"
                  >
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- ENTERPRISE CARD --- */}
          <div className="group relative rounded-xl overflow-hidden transition-all duration-300 border border-white/10 bg-black shadow-[0_2px_12px_rgba(34,197,94,0.08)] -translate-y-0.5 h-full flex flex-col">
            {/* Layer 0: Background Effects (z-0) */}
            <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>
            <div className="absolute inset-0 z-0 rounded-xl p-px bg-gradient-to-bl from-transparent via-white/15 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Card Content */}
            <div className="relative p-6 md:p-8 flex flex-col flex-1 h-full z-10">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4 mb-8">
                {/* Layer 2 (Front): Text & Buttons */}
                <div className="relative z-20 flex flex-col justify-center items-start flex-1 min-w-0 w-full">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                    Enterprise & API
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-tight mb-5">
                    Real Estate, E-commerce, Automobile
                  </p>

                  {/* CTA */}
                  <Button className="w-full md:w-[240px] bg-primary hover:bg-primary/90 text-black font-medium px-8">
                    Book a Demo
                  </Button>
                </div>

                {/* Layer 1 (Middle): Video */}
                <div className="relative z-10 w-full md:w-64 shrink-0 aspect-video rounded-lg overflow-hidden bg-black/50 border border-primary/20 mt-1">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://websitecreativesmetashop.s3.eu-north-1.amazonaws.com/Enterprise_3D.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-8" />

              {/* Features List */}
              <div className="space-y-3 flex-1 relative z-20">
                <p className="text-sm md:text-base text-gray-300 font-medium mb-4">
                  Everything in Free, plus:
                </p>
                {[
                  "Image to 3D coming soon",
                  "Supports large objects (e.g., furniture, bikes, cars)",
                  "Supports large spaces (e.g., rooms, flats, showrooms, buildings, landscapes)",
                  "Gaussian Splats technology",
                  "Export to ply and plugins for Blender, Unity.",
                  "Same-day 3D asset turnaround",
                  "Unlimited input file size",
                  "Customized 3D viewer",
                  "Custom feature development",
                  "Viewer analytics",
                  "Email + tech support",
                  "Integration assistance",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground w-full mx-auto">
            All plans include enterprise-grade security and customer data
            protection. Use of the platform is subject to the terms outlined in
            our Terms of Use.
          </p>
        </div>
      </div>
    </section>
  );
}
