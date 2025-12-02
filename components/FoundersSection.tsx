"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FoundersSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative py-[40px] md:py-[80px] lg:py-[90px]">
      <div className="w-[95%] max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              height: isExpanded ? "auto" : "auto",
            }}
            transition={{
              duration: 0.8,
              ease: [0.2, 0.9, 0.2, 1],
            }}
            className="group relative overflow-hidden rounded-[32px] bg-black border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.12),0_2px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 will-change-transform"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <div className="relative p-4 md:p-[58px] lg:p-16">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl text-white mb-6 font-display font-medium lg:text-5xl">
                From the Founders
              </h2>

              {/* Summary - Always Visible */}
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90 font-light mb-8 max-w-4xl">
                We didn't just reimagine 3D — we eliminated every barrier between your products and stunning digital
                experiences, building a solution that works for you, not the other way around.
              </p>

              {/* Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.2, 0.9, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 text-sm md:text-base lg:text-lg leading-normal text-neutral-300 pt-4 border-t border-white/10 max-w-5xl">
                      <p className="text-white/90">
                        From Day 1, our vision was clear: Make 3D as simple as sending a file — and as powerful as
                        telling a brand story.
                      </p>

                      <p>We saw how difficult it was for businesses to deal with:</p>

                      <ul className="space-y-2 pl-6">
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>Heavy file size that slows down loading</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>Inconsistent 3D quality across objects and spaces</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>Capture footage themselves often with expensive gear</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>Shiny, reflective, or complex surfaces entirely skipped</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>Tedious workflows just to get "production-ready" results</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary">•</span>
                          <span>Generic 3D outputs that lack branding or customization</span>
                        </li>
                      </ul>

                      <p className="text-white/90 font-medium">
                        So we reimagined the entire pipeline — not just the tech.
                      </p>

                      <p>We created a platform where you record — or we do — and everything else is fully handled.</p>

                      <p>
                        Whether you're showcasing a 500 sq ft room or a detailed automotive part, whether you're a
                        realtor, a retailer, or a manufacturer — your brand needs more than just a scan.
                      </p>

                      <p className="text-white/90 font-medium">It needs dimension, speed, and storytelling control.</p>

                      <p>
                        That's why MetaShop delivers 3D built for business — fast, branded, interactive, and
                        future-ready.
                      </p>

                      <p className="text-white/90 font-medium">
                        And we're not stopping here. So here's what our researchers focused on delivering — so you don't
                        have to.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-8 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-primary text-xs sm:text-sm font-bold border border-primary transition-colors hover:border-primary/80"
              >
                {isExpanded ? "Show Less" : "Continue Reading"}
              </button>
            </div>

            <div className="absolute inset-0 -z-10 rounded-[32px] p-px bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
