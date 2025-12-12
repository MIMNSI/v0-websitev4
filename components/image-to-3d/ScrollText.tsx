import { motion } from "framer-motion";

interface ScrollTextProps {
  scrollProgress: number;
}

export const ScrollText = ({ scrollProgress }: ScrollTextProps) => {
  const showIntro = scrollProgress < 0.6;
  const entrySlide = Math.max(0, 1 - scrollProgress / 0.1);
  const squeezeProgress = Math.min(
    1,
    Math.max(0, (scrollProgress - 0.1) / 0.1)
  );

  // Tighter squeeze distance
  const squeezeDistance = 100;

  const justX = -150 * entrySlide + squeezeDistance * squeezeProgress;
  const imagesX = 150 * entrySlide - squeezeDistance * squeezeProgress;

  const flipProgress = Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.05));
  const cardRotateY = flipProgress * 90;

  const introOpacity = Math.min(1, scrollProgress * 10);
  const textOpacity = introOpacity * (1 - squeezeProgress);
  const cardOpacity =
    introOpacity * (1 - Math.max(0, (flipProgress - 0.8) * 5));

  if (!showIntro) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 flex flex-col items-center justify-center"
      role="heading"
      aria-level={1}
      aria-label="Just 5 Images"
    >
      <div className="w-full max-w-7xl px-4 flex items-center justify-center perspective-1000">
        {/* LEFT SIDE: "Just" */}
        <div className="flex-1 text-right relative z-10 pr-4">
          <motion.span
            aria-hidden="true"
            className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white whitespace-nowrap"
            style={{
              x: justX,
              opacity: textOpacity,
              filter: `blur(${squeezeProgress * 10}px)`,
            }}
          >
            Just
          </motion.span>
        </div>

        {/* CENTER: "5" Card */}
        <div className="flex-none relative z-20">
          <motion.div
            aria-hidden="true"
            className="relative w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-3xl border-4 border-primary bg-black/80 backdrop-blur-md flex items-center justify-center glow-card origin-center"
            style={{
              opacity: cardOpacity,
              rotateY: cardRotateY,
              scale: 1 + squeezeProgress * 0.1,
              transformStyle: "preserve-3d",
            }}
          >
            <span className="text-6xl sm:text-8xl md:text-[10rem] font-bold text-primary text-glow-mint backface-hidden mt-[-10px]">
              5
            </span>
          </motion.div>
        </div>

        {/* RIGHT SIDE: "Images" */}
        <div className="flex-1 text-left relative z-10 pl-4">
          <motion.span
            aria-hidden="true"
            className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white whitespace-nowrap"
            style={{
              x: imagesX,
              opacity: textOpacity,
              filter: `blur(${squeezeProgress * 10}px)`,
            }}
          >
            Images
          </motion.span>
        </div>
      </div>
    </div>
  );
};
