"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonial = {
    text: `MetaShop AI made it incredibly easy to bring our sample flats online. They managed the entire process end-to-end and always improved based on our feedback. The result? Virtual tours that feel immersive, polished, and true to our brand.`,
    author: "L&T Realty Team",
    videoUrl: "https://placeholder-video-url.com", // Will be replaced with actual video URL
  };

  return (
    <section className="relative py-[40px] md:py-[80px] lg:py-[90px] bg-background overflow-hidden">
      <div className="w-[95%] max-w-7xl mx-auto relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-[260px_1fr] lg:grid-cols-[455px_1fr] gap-6 md:gap-8 items-center w-full"
        >
          <div className="relative w-full sm:w-[260px] lg:w-[455px] h-[150px] sm:h-[160px] lg:h-[280px] rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-900/90 to-black/95 border border-white/10 flex items-center justify-center p-8 overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

            {/* UPDATED LOGO IMAGE: Made ~25% bigger on all screens */}
            <Image
              src="/logos/lnt-logo-white.png"
              alt="L&T Realty"
              width={350}
              height={120}
              className="relative z-10 object-contain w-[160px] sm:w-[190px] lg:w-[320px] brightness-0 invert"
            />
          </div>

          <div className="space-y-6">
            <blockquote className="space-y-6">
              {/* Added quotes &quot; around the text */}
              <p className="leading-normal text-foreground/90 font-light text-lg sm:text-base lg:text-3xl">
                &quot;{testimonial.text}&quot;
              </p>
              <footer className="pt-2">
                <cite className="not-italic text-lg text-primary font-medium">
                  — {testimonial.author}
                </cite>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
