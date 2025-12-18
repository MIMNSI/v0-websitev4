"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, MousePointer2, ChevronLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Import custom components
import { ProductCard } from "@/components/image-to-3d/ProductCard";
import ParticleExplosion from "@/components/image-to-3d/ParticleExplosion";
import { Model3D } from "@/components/image-to-3d/Model3D";
import { ScrollText } from "@/components/image-to-3d/ScrollText";
import { submitWaitlistForm } from "@/lib/api";

// Define Asset Paths
const chairFront = "/images/front.jpg";
const chairBack = "/images/back.jpg";
const chairLeft = "/images/left.jpg";
const chairRight = "/images/right.jpg";
const chairTop = "/images/top.jpg";

const products = [
  { image: chairFront, label: "Front" },
  { image: chairBack, label: "Back" },
  { image: chairRight, label: "Right" },
  { image: chairTop, label: "Top" },
  { image: chairLeft, label: "Left" },
];

// 1. Define Validation Schema
const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long")
    .regex(/^[0-9]+$/, "Digits only"),
});

type WaitlistData = z.infer<typeof waitlistSchema>;

export default function ImageTo3DPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isJoined, setIsJoined] = useState(false); // Success state
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const scrollRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardStage, setCardStage] = useState<any>("hidden");

  // 2. Setup React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.scrollY;
      const height = containerRef.current.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / height, 0), 1);

      scrollRef.current = progress;
      setScrollProgress(progress);

      if (progress < 0.25) setCardStage("hidden");
      else if (progress < 0.35) setCardStage("single");
      else if (progress < 0.45) setCardStage("two");
      else if (progress < 0.55) setCardStage("three");
      else if (progress < 0.65) setCardStage("bento");
      else setCardStage("center");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProgress = (targetProgress: number) => {
    if (!containerRef.current) return;
    const height = containerRef.current.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: height * targetProgress,
      behavior: "smooth",
    });
  };

  // 3. Handle Form Submission
  const onSubmit = async (data: WaitlistData) => {
    setIsLoading(true);

    try {
      const payload = {
        email: data.email,
        phone: data.phone,
        source: "Image-to-3D Page",
      };

      const response = await submitWaitlistForm(payload);

      if (response.success || response.status === 200) {
        toast.success("You're on the list!", {
          description: "We'll notify you when early access opens.",
        });
        setIsJoined(true);
        reset();
      } else {
        toast.error("Something went wrong", {
          description: response.message || "Please try again later.",
        });
      }
    } catch (error: any) {
      toast.error("Submission failed", {
        description: error.message || "Please check your connection.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const modelScale = Math.min(1, Math.max(0, (scrollProgress - 0.92) / 0.06));

  return (
    <div
      ref={containerRef}
      className="relative bg-black min-h-screen"
      style={{ height: "600vh" }}
    >
      <style jsx global>{`
        footer {
          display: none !important;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-black to-[#050a05]">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Navigation Dots */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[70] flex flex-col gap-4">
          {[0, 0.3, 0.6, 0.9].map((p, i) => (
            <button
              key={i}
              onClick={() => scrollToProgress(p)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.abs(scrollProgress - p) < 0.15
                  ? "bg-[#2dffa7] scale-125"
                  : "bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Scroll to section ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div
          className="fixed bottom-10 inset-x-0 z-[60] flex justify-center pointer-events-none"
          style={{
            opacity: scrollProgress < 0.1 ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          <div className="text-white/50 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs uppercase tracking-widest">
              Scroll to Explore
            </span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>

        {/* Scroll Text & Product Cards */}
        <ScrollText scrollProgress={scrollProgress} />
        <div
          className="fixed inset-0 flex items-center justify-center pointer-events-none perspective-1000"
          style={{ opacity: 1 - Math.max(0, (scrollProgress - 0.7) / 0.05) }}
        >
          <div className="relative w-full h-full max-w-[100vw] flex items-center justify-center">
            {products.map((p, i) => (
              <ProductCard
                key={i}
                index={i}
                image={p.image}
                label={p.label}
                stage={cardStage}
              />
            ))}
          </div>
        </div>

        {/* Particle System */}
        {scrollProgress > 0.72 && scrollProgress < 0.98 && (
          <ParticleExplosion scrollRef={scrollRef} />
        )}

        {/* Final Stage Text */}
        <div
          className="fixed top-24 inset-x-0 flex flex-col items-center justify-center z-[60] pointer-events-none"
          style={{
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.92) / 0.05)),
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl text-center">
            Real Life <span className="text-[#2dffa7] inline-block">To 3D</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground tracking-[0.4em] uppercase font-light text-center">
            100% Automated With AI
          </p>
        </div>

        {/* 3D Model Layer */}
        <div
          className="absolute inset-0 z-50 flex items-center justify-center"
          style={{
            pointerEvents: scrollProgress > 0.92 ? "auto" : "none",
            opacity: modelScale,
            transform: `scale(${0.1 + modelScale * 0.9})`,
            transition:
              "opacity 0.2s linear, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          onMouseDown={() => setHasInteracted(true)}
          onTouchStart={() => setHasInteracted(true)}
        >
          <div className="w-full h-[50vh] mt-20 relative group">
            <Model3D opacity={1} />
            {!hasInteracted && scrollProgress > 0.95 && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-black/60 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm animate-pulse border border-white/10">
                <MousePointer2 className="w-4 h-4" />
                <span className="text-sm font-medium">Drag to Rotate</span>
              </div>
            )}
          </div>
        </div>

        {/* --- BOTTOM SECTION (Functional Pill) --- */}
        <div
          className="absolute bottom-8 sm:bottom-12 inset-x-0 flex justify-center z-[70] px-4"
          style={{
            opacity: scrollProgress > 0.95 ? 1 : 0,
            pointerEvents: scrollProgress > 0.95 ? "auto" : "none",
            transition: "opacity 0.5s",
          }}
        >
          {/* ✅ FIXED: The container wraps BOTH the form/success AND the link */}
          <div className="flex flex-col xl:flex-row items-center gap-6 w-full max-w-5xl justify-center">
            {/* Conditional Block: Form OR Success Message */}
            {isJoined ? (
              <div className="bg-[#2dffa7]/10 border border-[#2dffa7]/30 text-[#2dffa7] px-8 py-4 rounded-full text-xl font-medium backdrop-blur-md animate-in fade-in zoom-in duration-500">
                You&apos;re on the list! 🚀
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center p-2 rounded-[2rem] bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-emerald-500/10 gap-2 md:gap-0"
              >
                {/* Email Input */}
                <div className="relative w-full md:w-64">
                  <Input
                    type="email"
                    placeholder="Email Id*"
                    {...register("email")}
                    className="w-full bg-transparent text-white px-6 py-4 md:py-3 border-none focus-visible:ring-0 focus-visible:bg-white/5 rounded-full md:rounded-l-full md:rounded-r-none placeholder:text-white/30 h-auto"
                  />
                  {errors.email && (
                    <span className="absolute -bottom-6 left-6 text-xs text-red-400 font-medium whitespace-nowrap">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

                {/* Phone Input */}
                <div className="relative w-full md:w-56">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone")}
                    className="w-full bg-transparent text-white px-6 py-4 md:py-3 border-none focus-visible:ring-0 focus-visible:bg-white/5 rounded-none placeholder:text-white/30 h-auto"
                  />
                  {errors.phone && (
                    <span className="absolute -bottom-6 left-6 text-xs text-red-400 font-medium whitespace-nowrap">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="md:ml-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black font-semibold px-8 py-3.5 rounded-full transition-all h-auto min-w-[140px] disabled:opacity-70"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            )}

            {/* ✅ FIXED: Link is now OUTSIDE the conditional check, so it's always visible */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium text-sm md:text-base px-4 py-2"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
