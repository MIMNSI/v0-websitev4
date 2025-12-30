"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { PlayCircle, X, Loader2 } from "lucide-react";

// -- Data --
// UPDATED: Industry tab sequence: Travel -> Commercial -> Residential -> E-commerce
const industries = [
  { id: "travel", name: "Travel & Hospitality" },
  { id: "commercial", name: "Commercial" },
  { id: "residential", name: "Residential" },
  { id: "ecommerce", name: "E-commerce" },
];

// UPDATED: Logo sequence: Kesari -> Ultraviolette -> L&T -> Itallica -> Material Depot
const allClients = [
  {
    id: "kesari",
    name: "Kesari Awayddings",
    industryId: "travel",
    logo: "/logos/awayddings-logo.webp",
    modelUrl:
      "https://metashopairealestate.s3.us-east-1.amazonaws.com/uiUpdater/Dallas/Exterior/Dallas_Exterior.html",
  },
  {
    id: "ultraviolette",
    name: "Ultraviolette",
    industryId: "commercial",
    logo: "/logos/ultraviolette.svg",
    modelUrl:
      "https://metashopairealestate.s3.us-east-1.amazonaws.com/UV_FST+2/UV_Manual_3Points.html",
  },
  {
    id: "lnt",
    name: "L&T Realty",
    industryId: "residential",
    logo: "/logos/lnt-logo-white.png",
    modelUrl:
      "https://metashopairealestate.s3.us-east-1.amazonaws.com/L%26T/LnT4bhk_EvaraHeights_.html",
  },
  {
    id: "itallica",
    name: "Itallica",
    industryId: "ecommerce",
    logo: "/logos/italica-white.png",
    modelUrl:
      "https://mimnsi.github.io/interactive_scenes_3d_estate_2/demo/italicademochair.html",
  },
  {
    id: "material-depot",
    name: "Material Depot",
    industryId: "ecommerce",
    logo: "/logos/material-depot-white.png",
    modelUrl:
      "https://mimnsi.github.io/interactive_scenes_3d_estate_2/demo/WL00096_LaStona.html",
  },
];

const DESKTOP_BREAKPOINT = 768;

interface ViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  clientName: string;
}

const ViewerModal: React.FC<ViewerModalProps> = ({
  isOpen,
  onClose,
  url,
  clientName,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-[#000000]">
        <iframe
          src={url}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute top-0 left-0 right-0 h-12 bg-black/50 border-b border-white/10 flex items-center px-4 justify-between">
          <p className="text-sm text-white/70 font-medium">
            Live Demo: {clientName}
          </p>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            aria-label="Close 3D Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductionSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const [activeClientId, setActiveClientId] = useState(allClients[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
      setIsReady(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeClient = useMemo(
    () => allClients.find((client) => client.id === activeClientId),
    [activeClientId]
  );

  const openModal = useCallback(() => {
    if (activeClient?.modelUrl) {
      setIsModalOpen(true);
    }
  }, [activeClient]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleIndustryChange = (industryId: string) => {
    setActiveIndustry(industryId);
    const firstClient = allClients.find(
      (client) => client.industryId === industryId
    );
    if (firstClient) {
      setActiveClientId(firstClient.id);
    }
  };

  const handleClientChange = (clientId: string) => {
    const client = allClients.find((c) => c.id === clientId);
    if (client) {
      setActiveClientId(clientId);
      setActiveIndustry(client.industryId);
    }
  };

  if (!activeClient || !isReady) {
    return (
      <section className="flex justify-center items-center min-h-screen bg-black">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </section>
    );
  }

  const ViewerContent = isDesktop ? (
    <motion.div
      key={activeClient.modelUrl}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full pt-10 md:pt-12 bg-black/50"
    >
      <iframe
        src={activeClient.modelUrl}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  ) : (
    <div className="w-full h-full pt-10 md:pt-12 flex items-center justify-center bg-black/50">
      <div className="flex flex-col items-center justify-center text-center p-8">
        <img
          src={activeClient.logo || "/placeholder.svg"}
          alt={`${activeClient.name} Demo`}
          className="w-24 h-24 md:w-32 md:h-32 object-contain brightness-0 invert opacity-60 mb-4"
        />
        <p className="text-white/50 mb-6 text-sm md:text-base">
          Tap "View 3D" to launch the interactive model.
        </p>
        <button
          onClick={openModal}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          <PlayCircle className="w-5 h-5" />
          View Interactive 3D
        </button>
      </div>
    </div>
  );

  return (
    <section
      id="production"
      className="relative w-full min-h-screen bg-background flex flex-col justify-center py-8 md:py-12 lg:py-16 overflow-hidden"
    >
      {!isDesktop && (
        <ViewerModal
          isOpen={isModalOpen}
          onClose={closeModal}
          url={activeClient.modelUrl}
          clientName={activeClient.name}
        />
      )}

      <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto relative z-30 flex flex-col items-center px-4 md:px-6">
        <h2 className="md:text-5xl lg:text-6xl text-center mb-6 md:mb-8 text-balance text-3xl font-display font-medium text-white">
          Production-ready 3D in 1 Day
        </h2>

        <div className="flex overflow-x-auto scrollbar-hide snap-x gap-6 md:gap-10 w-[calc(100%+32px)] -mx-4 pl-4 pr-4 justify-start md:w-full md:mx-0 md:px-0 md:justify-center md:overflow-visible">
          {industries.map((industry) => {
            const isActive = activeIndustry === industry.id;
            return (
              <button
                key={industry.id}
                onClick={() => handleIndustryChange(industry.id)}
                className={`
                  relative text-sm md:text-base transition-colors duration-300 pb-3 flex-shrink-0 snap-start
                  ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground/70"
                  }
                `}
              >
                {industry.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="w-full max-w-6xl h-px bg-white/10 mb-8" />

        <div className="flex overflow-x-auto scrollbar-hide snap-x mb-8 py-4 gap-3 md:gap-4 max-w-6xl w-[calc(100%+32px)] -mx-4 pl-4 pr-4 justify-start md:w-full md:mx-0 md:px-0 md:justify-between md:overflow-visible">
          {allClients.map((client) => {
            const isActive = activeClientId === client.id;
            const isRelevant = client.industryId === activeIndustry;

            return (
              <button
                key={client.id}
                onClick={() => handleClientChange(client.id)}
                className={`
                  relative group h-12 md:h-14 px-4 md:px-6 rounded-xl border transition-all duration-300 ease-out flex items-center justify-center flex-shrink-0 snap-start
                  ${
                    isActive
                      ? "bg-card border-primary/50 shadow-lg shadow-black/10 scale-105 z-10"
                      : "bg-transparent border-transparent hover:bg-card/50 hover:border-border/50"
                  }
                  ${
                    !isRelevant && !isActive
                      ? "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                      : "opacity-100"
                  }
                `}
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className={`
                    w-auto object-contain transition-all duration-300
                    ${
                      client.id === "lnt" ||
                      client.id === "kesari" ||
                      client.id === "itallica" ||
                      client.id === "material-depot"
                        ? "h-8 md:h-10 scale-110"
                        : "h-5 md:h-6"
                    }
                    ${
                      client.id === "lnt" ||
                      client.id === "kesari" ||
                      client.id === "itallica" ||
                      client.id === "material-depot"
                        ? "brightness-0 invert " +
                          (isActive ? "opacity-100" : "opacity-60")
                        : isActive
                        ? "brightness-100 contrast-125"
                        : "brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
                    }
                  `}
                />
              </button>
            );
          })}
        </div>

        <motion.div layout className="w-full max-w-6xl relative">
          <div className="relative w-full h-[300px] md:h-[500px] rounded-[24px] overflow-hidden border border-border/40 bg-card/20 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-10 md:h-12 bg-background/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between z-20">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 text-[9px] md:text-xs text-muted-foreground uppercase tracking-widest font-medium border border-white/5">
                {isDesktop ? "Live Preview" : "Preview"} • {activeClient.name}
              </div>
              <div className="w-10" />
            </div>
            {ViewerContent}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
