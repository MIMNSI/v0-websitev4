"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

export default function NewHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6">
      {/* --- NEW VISUAL EFFECT ADDED HERE --- */}
      {/* This adds the radial gradient mask and heavy blur from the 'New' code */}
      <div className="absolute top-0 left-0 right-0 h-full bg-black/70 backdrop-blur-xl [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* --- PREVIOUS HEADER CONTENT --- */}
      {/* Added 'relative z-10' to ensure content sits on top of the blur effect */}
      <div className="relative z-10 mx-auto max-w-[1400px] flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-4 md:px-6 py-3">
        {/* Logo - Logic: Text hidden on mobile (hidden), visible on Tablet+ (md:inline) */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/logos/metashop-logo.svg"
            alt="MetaShop"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="hidden md:inline text-lg md:text-xl font-semibold text-white">
            MetaShop
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            Home
          </Link>
          <a
            href="https://blitzapp.metashopai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            Blitz
          </a>
          <Link
            href="/image-to-3d"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            Image to 3D
          </Link>
          <Link
            href="/faq"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/90 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          {/* Logic: "Call us" link visible on Mobile/Tablet (lg:hidden) */}

          <Link
            href="/contact"
            className="lg:hidden text-xs md:text-sm text-white/90 hover:text-white transition-colors whitespace-nowrap"
          >
            Call us
          </Link>
          {/* Logic: Full number visible ONLY on Desktop (hidden lg:inline) */}
          <span className="hidden lg:inline text-sm text-white/70 whitespace-nowrap">
            Call: +91 84 1292 1292
          </span>

          <Link
            href="/contact"
            className="flex items-center gap-1.5 md:gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap"
          >
            Book a Demo
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Logic: "Heavy" menu containing Nav + Bottom Action Section */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 z-50">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-white/90 hover:text-white transition-colors py-2"
            >
              Home
            </Link>
            <a
              href="https://blitzapp.metashopai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 hover:text-white transition-colors py-2"
            >
              Blitz
            </a>
            <Link
              href="/image-to-3d"
              className="text-sm text-white/90 hover:text-white transition-colors py-2"
            >
              Image to 3D
            </Link>
            <Link
              href="/faq"
              className="text-sm text-white/90 hover:text-white transition-colors py-2"
            >
              FAQ
            </Link>
            {/* HIDDEN: Mobile Contact Us
            <Link href="/contact" className="text-sm text-white/90 hover:text-white transition-colors py-2">
              Contact Us
            </Link>
            */}

            {/* Expanded Bottom Section: Phone + Big CTA */}
            <div className="border-t border-white/10 pt-4 mt-2 flex flex-col gap-3">
              <Link
                href="/contact"
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                Call: +91 84 1292 1292
              </Link>
              {/*<Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>*/}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
