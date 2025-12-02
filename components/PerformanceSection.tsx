"use client"

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

const EdgeRenderingIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

const ArchitectureIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

const CostIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 17l-5-5-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const features = [
  {
    icon: EdgeRenderingIcon,
    title: "Edge-Native Rendering. Zero Latency.",
    description: "MetaShop renders 3D directly on the user's device, no streaming needed.",
  },
  {
    icon: ArchitectureIcon,
    title: "A Sovereign, End-to-End Architecture.",
    description: "We built everything in-house. No third-party APIs. Just fast, secure, end-to-end control.",
  },
  {
    icon: CostIcon,
    title: "Predictable Costs. Scalable Performance.",
    description:
      "No surprises. Our architecture ensures stable performance and predictable pricing — even at massive scale.",
  },
]

export default function PerformanceSection() {
  return (
    <section className="relative py-[40px] md:py-[80px] lg:py-[90px] bg-background">
      <div className="w-[95%] max-w-7xl mx-auto">
        {/* Title - Two lines */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-center text-foreground mb-16 font-display">
          <span className="block font-medium">Load millions of time.</span>
          <span className="block mt-2 font-medium">Low Costs. Zero Lag.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card - Features List */}
          <CardContainer className="w-full h-full">
            <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-8 md:p-10 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 min-h-[400px] flex flex-col">
              <CardItem translateZ="50" className="w-full flex-1 flex items-center justify-center">
                <div className="space-y-4 w-full">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start gap-2">
                      <div className="text-primary [&_svg]:w-6 [&_svg]:h-6">
                        <feature.icon />
                      </div>

                      <div className="w-full">
                        <h3 className="text-lg font-semibold text-foreground mb-1.5 leading-tight">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Right Card - Visual Container */}
          <CardContainer className="w-full h-full">
            <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-8 md:p-10 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 min-h-[400px] flex flex-col">
              <CardItem translateZ="50" className="w-full flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-6">Same performance across all Devices.</h3>

                <div className="w-full flex-1 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center h-[180px]">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Performance across devices"
                    className="w-auto h-auto object-contain max-w-[80%] max-h-[160px]"
                  />
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  )
}
