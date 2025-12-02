"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const industries = [
  { id: "residential", name: "Residential Real Estate" },
  { id: "travel", name: "Travel & Hospitality" },
  { id: "commercial", name: "Commercial Real Estate" },
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
    <section className="relative min-h-screen bg-background py-[40px] md:py-[80px] lg:py-[90px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="md:text-5xl lg:text-6xl text-center mb-5 md:mb-10 lg:mb-10 text-balance text-3xl font-display font-medium">
          Production-ready 3D in 1 Day
        </h2>

        {/* Client Logo Tabs - Tab 1 */}
        <div className="mb-5 md:mb-10 lg:mb-10">
          <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide pb-2">
            <div className="flex justify-start md:justify-center items-center px-4 md:px-0 md:gap-6">
              {allClients.map((client) => (
                <button
                  key={client.id}
                  onClick={() => handleClientChange(client.id)}
                  className={`relative px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-[10px] transition-all duration-300 border rounded-xl bg-sidebar-primary-foreground flex-shrink-0 ${
                    activeClientId === client.id
                      ? "bg-white border-white"
                      : "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                  }
                  `}
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className={`h-6 md:h-8 lg:h-[36px] w-auto object-contain transition-all duration-300 ${
                      activeClientId === client.id ? "brightness-0" : "brightness-100 invert opacity-70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Tabs - Tab 2 */}
        <div className="mb-[10px] max-w-6xl mx-auto px-4 md:px-0">
          <div className="flex text-sm overflow-x-auto scrollbar-hide justify-center md:gap-7">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => handleIndustryChange(industry.id)}
                className={`
                  relative pb-2 px-2 transition-colors duration-300 whitespace-nowrap
                  ${
                    activeIndustry === industry.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground/80"
                  }
                `}
              >
                {industry.name}

                {activeIndustry === industry.id && (
                  <motion.div
                    layoutId="industryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Model Viewer */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeClient?.modelUrl}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm h-[300px] md:h-[400px] lg:h-[450px]"
          >
            <iframe
              src={activeClient?.modelUrl}
              className="w-full h-full"
              title={`3D model for ${activeClient?.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Placeholder overlay */}
            {activeClient?.modelUrl.includes("example.com") && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base text-foreground font-medium">3D Model Viewer</p>
                    <p className="text-sm text-muted-foreground mt-1">{activeClient?.name}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
