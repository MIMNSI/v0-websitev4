import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  label: string;
  index: number;
  stage: "hidden" | "single" | "two" | "three" | "bento" | "center";
}

const getCardState = (index: number, stage: string) => {
  switch (stage) {
    case "hidden":
      return { x: 0, y: 0, opacity: 0, scale: 1, rotate: 0, rotateY: -90 };

    case "single":
      if (index === 0)
        return { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0, rotateY: 0 };
      return { x: 0, y: 0, opacity: 0, scale: 0.5, rotate: 0, rotateY: -90 };

    case "two":
      if (index === 0)
        return { x: -80, y: 20, opacity: 1, scale: 1, rotate: -5, rotateY: 0 };
      if (index === 1)
        return { x: 80, y: -20, opacity: 1, scale: 1, rotate: 5, rotateY: 0 };
      return { x: 0, y: 0, opacity: 0, scale: 0.5, rotate: 0, rotateY: 0 };

    case "three":
      if (index === 0)
        return {
          x: -100,
          y: -60,
          opacity: 1,
          scale: 0.9,
          rotate: -10,
          rotateY: 0,
        };
      if (index === 1)
        return {
          x: 100,
          y: -60,
          opacity: 1,
          scale: 0.9,
          rotate: 10,
          rotateY: 0,
        };
      if (index === 2)
        return { x: 0, y: 80, opacity: 1, scale: 1, rotate: 0, rotateY: 0 };
      return { x: 0, y: 0, opacity: 0, scale: 0.5, rotate: 0, rotateY: 0 };

    case "bento":
      // Note: Since cards are shorter now, you might see slightly larger gaps
      // between rows in the bento layout, but the positioning remains safe.
      const bento = [
        { x: -240, y: -140 },
        { x: 240, y: -140 },
        { x: 0, y: 0 },
        { x: -240, y: 140 },
        { x: 240, y: 140 },
      ];
      return {
        x: bento[index].x,
        y: bento[index].y,
        opacity: 1,
        scale: index === 2 ? 1.1 : 0.9,
        rotate: 0,
        rotateY: 0,
      };

    case "center":
      return {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 0.2,
        rotate: 0,
        rotateY: 0,
      };

    default:
      return { x: 0, y: 0, opacity: 0, scale: 0, rotate: 0, rotateY: 0 };
  }
};

export const ProductCard = ({
  image,
  label,
  index,
  stage,
}: ProductCardProps) => {
  const state = getCardState(index, stage);

  return (
    <motion.div
      // UPDATED HEIGHTS: Reduced to h-32 (mobile), h-52 (tablet), h-72 (desktop)
      className="absolute rounded-3xl overflow-hidden border-4 border-white/10 bg-card shadow-2xl origin-center w-24 h-32 md:w-40 md:h-52 lg:w-56 lg:h-72"
      initial={false}
      animate={{
        x: state.x,
        y: state.y,
        opacity: state.opacity,
        scale: state.scale,
        rotate: state.rotate,
        rotateY: state.rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 1,
      }}
      style={{
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
        boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5)",
        perspective: 1000,
        backfaceVisibility: "hidden",
        zIndex: index === 2 ? 20 : 10,
      }}
    >
      <div className="relative w-full h-full">
        <img src={image} alt={label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 border-[3px] border-primary/30 rounded-3xl" />
      </div>
    </motion.div>
  );
};
