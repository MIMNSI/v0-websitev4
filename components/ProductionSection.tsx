"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// -- Data --
const industries = [
  { id: "residential", name: "Residential" },
  { id: "travel", name: "Travel & Hospitality" },
  { id: "commercial", name: "Commercial" },
  { id: "ecommerce", name: "E-commerce" },
]

const allClients = [
  {
    id: "lnt",
    name: "L&T Realty",
    industryId: "residential",
    logo: "/logos/lnt-realty.webp",
    modelUrl: "https://mimnsi.github.io/interior_threejs_viewer/demo/evara_w_floorplan.html",
  },
  {
    id: "kesari",
    name: "Kesari Awayddings",
    industryId: "travel",
    logo: "/logos/kesari-awayddings.png",
    modelUrl: "https://metashopai.s3.ap-south-1.amazonaws.com/uiUpdater-main/Dallas/Exterior/Dallas_Exterior.html",
  },
  {
    id: "ultraviolette",
    name: "Ultraviolette",
    industryId: "commercial",
    logo: "/logos/ultraviolette.svg",
    modelUrl: "https://metashopai.s3.ap-south-1.amazonaws.com/UV_FST/UV_Manual_3Points.html",
  },
  {
    id: "itallica",
    name: "Itallica",
    industryId: "ecommerce",
    logo: "/logos/itallica.avif",
    modelUrl: "https://mimnsi.github.io/interactive_scenes_3d_estate_2/demo/italicademochair.html",
  },
  {
    id: "material-depot",
    name: "Material Depot",
    industryId: "ecommerce",
    logo: "/logos/material-depot.svg",
    modelUrl: "https://mimnsi.github.io/interactive_scenes_3d_estate_2/demo/WL00096_LaStona.html",
  },
]

export default function ProductionSection() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)
  const [activeClientId, setActiveClientId] = useState(allClients[0].id)

  const activeClient = allClients.find((client) => client.id === activeClientId)

  const handleIndustryChange = (industryId: string) => {
    setActiveIndustry(industryId)
    const firstClient = allClients.find((client) => client.industryId === industryId)
    if (firstClient) {
      setActiveClientId(firstClient.id)
    }
  }

  const handleClientChange = (clientId: string) => {
    const client = allClients.find((c) => c.id === clientId)
    if (client) {
      setActiveClientId(clientId)
      setActiveIndustry(client.industryId)
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-background flex flex-col justify-center py-8 md:py-12 lg:py-16 overflow-hidden">
      
      {/* --- TOP FADE FROM HERO --- */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
      
      {/* Page Container */}
      <div className="w-full max-w-[1400px] mx-auto relative z-30 flex flex-col items-center px-4 md:px-6">
        
        {/* --- TITLE --- */}
        <h2 className="md:text-5xl lg:text-6xl text-center mb-6 md:mb-8 text-balance text-3xl font-display font-medium text-white">
          Production-ready 3D in 1 Day
        </h2>

        {/* 1. Industry Filters (Tabs) */}
        <div className="flex overflow-x-auto scrollbar-hide snap-x mb-6 border-b border-border/40 pb-3 gap-6 md:gap-10 
                        w-[calc(100%+32px)] -mx-4 px-4 justify-start 
                        md:w-full md:mx-0 md:px-0 md:justify-center">
          {industries.map((industry) => {
            const isActive = activeIndustry === industry.id
            return (
              <button
                key={industry.id}
                onClick={() => handleIndustryChange(industry.id)}
                className={`
                  relative text-sm md:text-base transition-colors duration-300 pb-2 flex-shrink-0 snap-start
                  ${isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground/70"}
                `}
              >
                {industry.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* 2. Client Logos (Selection Row) */}
        <div className="flex overflow-x-auto scrollbar-hide snap-x mb-8 py-4 gap-3 md:gap-4 max-w-5xl
                        w-[calc(100%+32px)] -mx-4 px-4 justify-start 
                        md:w-full md:mx-0 md:px-0 md:justify-center">
          {allClients.map((client) => {
            const isActive = activeClientId === client.id
            const isRelevant = client.industryId === activeIndustry
            
            return (
              <button
                key={client.id}
                onClick={() => handleClientChange(client.id)}
                className={`
                  relative group h-12 md:h-14 px-4 md:px-6 rounded-xl border transition-all duration-300 ease-out flex items-center justify-center flex-shrink-0 snap-start
                  ${isActive 
                    ? "bg-card border-primary/50 shadow-lg shadow-black/10 scale-105 z-10" 
                    : "bg-transparent border-transparent hover:bg-card/50 hover:border-border/50"
                  }
                  ${!isRelevant && !isActive ? "opacity-40 grayscale hover:opacity-100 hover:grayscale-0" : "opacity-100"}
                `}
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className={`
                    h-5 md:h-6 w-auto object-contain transition-all duration-300
                    ${isActive ? "brightness-100 contrast-125" : "brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"}
                  `}
                />
              </button>
            )
          })}
        </div>

        {/* 3. The Viewer */}
        <motion.div
          layout
          className="w-full max-w-6xl relative"
        >
          {/* UPDATED: Changed md:max-h-[420px] to md:h-[500px] 
             - This increases height to 500px (better visibility)
             - Still smaller than original 600px
             - Removed aspect-video on desktop to enforce this exact height
          */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-[24px] overflow-hidden border border-border/40 bg-card/20 shadow-2xl">
            
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-10 md:h-12 bg-background/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between z-20">
               <div className="flex gap-2">
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50" />
               </div>
               <div className="px-3 py-1 rounded-full bg-white/5 text-[9px] md:text-xs text-muted-foreground uppercase tracking-widest font-medium border border-white/5">
                 Live Preview • {activeClient?.name}
               </div>
               <div className="w-10" /> 
            </div>

            {/* Iframe Container */}
            <motion.div
              key={activeClient?.modelUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full pt-10 md:pt-12 bg-black/50"
            >
              <iframe
                src={activeClient?.modelUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {activeClient?.modelUrl.includes("example.com") && (
                <div className="absolute inset-0 flex items-center justify-center pt-12">
                   <p className="text-muted-foreground">Interactive 3D Demo</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
