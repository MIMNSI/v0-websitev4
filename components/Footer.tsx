"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

interface AnimatedContainerProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

function AnimatedContainer({ children, delay = 0.1, className }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full py-8">
      <div className="w-[95%] max-w-7xl mx-auto">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0f0f0f]/80 to-[#0a0a0a]/90 backdrop-blur-[14px] px-8 py-6 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

          <AnimatedContainer className="relative z-10">
            {/* Mobile Layout - Vertical and Centered */}
            <div className="flex flex-col items-center gap-6 md:hidden">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <Image src="/metashop-logo.svg" alt="MetaShop Logo" width={42} height={32} className="object-contain" />
                <span className="text-2xl font-semibold text-white">MetaShop</span>
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center justify-center gap-6 flex-wrap">
                <Link href="/" className="text-sm text-light hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link
                  href="/image-to-3d"
                  className="text-sm text-light hover:text-white transition-colors duration-300"
                >
                  Image to 3D
                </Link>
                <Link href="/faq" className="text-sm text-light hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
                <a
                  href="mailto:contact@metashop.ai"
                  className="text-sm text-light hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </nav>

              {/* Divider */}
              <div className="w-full border-t border-white/10" />

              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://www.instagram.com/metashop.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="size-6" />
                </a>
                <a
                  href="https://twitter.com/MetaShopApp?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="X/Twitter"
                >
                  <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    />
                  </svg>
                </a>
                <a
                  href="https://discord.com/invite/8YNGyq4Ze4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="Discord"
                >
                  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/metashopapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </a>
              </div>

              {/* Policy Links */}
              <div className="flex items-center justify-center gap-6">
                <Link
                  href="/terms-of-use"
                  className="text-sm text-light hover:text-white transition-colors duration-300"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-light hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </div>

              {/* Copyright */}
              <p className="text-sm text-light text-center">Copyright © {currentYear} MetaShop</p>
            </div>

            {/* Desktop/Tablet Layout - Horizontal */}
            <div className="hidden md:flex items-center justify-between gap-8">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image src="/metashop-logo.svg" alt="MetaShop Logo" width={42} height={32} className="object-contain" />
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center gap-8">
                <Link href="/" className="text-sm text-light hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link
                  href="/image-to-3d"
                  className="text-sm text-light hover:text-white transition-colors duration-300"
                >
                  Image to 3D
                </Link>
                <Link href="/faq" className="text-sm text-light hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
                <a
                  href="mailto:contact@metashop.ai"
                  className="text-sm text-light hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </nav>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <a
                  href="https://www.instagram.com/metashop.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://twitter.com/MetaShopApp?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="X/Twitter"
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    />
                  </svg>
                </a>
                <a
                  href="https://discord.com/invite/8YNGyq4Ze4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="Discord"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/metashopapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2} className="hidden md:block mt-6 pt-6 border-t border-white/10 relative z-10">
            <div className="flex justify-between items-center text-sm text-light">
              <p>Copyright © {currentYear} MetaShop</p>
              <div className="flex gap-6">
                <Link href="/terms-of-use" className="hover:text-white transition-colors duration-300">
                  Terms of Use
                </Link>
                <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  )
}
