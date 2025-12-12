"use client";

import { useState, useMemo } from "react";
import { Search, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import NewHeader from "@/components/NewHeader";

// FAQ data structure from the provided table
const faqData = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "What is MetaShop AI and how does it work?",
        answer:
          "MetaShop AI is an end-to-end platform that transforms your videos or images into production-ready 3D models in just one day. Simply record with any device (even your phone), upload to our web platform, and our AI automatically generates photorealistic 3D models powered by Gaussian Splats & NeRFs. No manual touch-ups required.",
      },
      {
        question: "Who can benefit from MetaShop AI?",
        answer: `MetaShop AI serves multiple industries:
• Real Estate - Create virtual property tours to increase engagement and reduce site visits.
• E-commerce - Showcase products in 3D to reduce returns and boost conversions
• Travel & Hospitality - Offer immersive venue previews to drive bookings
• Commercial Real Estate - Present spaces professionally to close deals faster`,
      },
      {
        question: "Do I need any special equipment or software?",
        answer:
          "No special equipment needed! Use any device - smartphone, tablet, camera or drone. Our platform is completely web-based with no downloads or installations required. Just upload and let our AI handle the rest.",
      },
    ],
  },
  {
    category: "Recording & Upload",
    faqs: [
      {
        question: "What devices can I use to record?",
        answer: `MetaShop AI works with any recording device:
• Smartphones (iOS/Android)
• Tablets
• Digital cameras
• Drones
• Professional recording equipment

Our AI optimizes the output regardless of your input device, ensuring consistent quality across all platforms.`,
      },
      {
        question: "How should I record for best results?",
        answer: `Follow these simple guidelines:
• Object recording guidelines
• Spaces recording guidelines`,
      },
      {
        question: "Can you handle the recording for me?",
        answer:
          "Yes! We offer professional on-site recording services as an additional paid service. Our team handles everything from equipment to capture, ensuring optimal results. Contact us at info@metashopai.com to discuss your project scope and pricing.",
      },
      {
        question: "What video formats do you accept?",
        answer: "We accept video formats: MP4 and MOV only.",
      },
      {
        question: "Are there any file size limitations?",
        answer: `Yes.
• Free usage: File uploads are limited to 2GB.
• Paid usage: There is no limit on file upload size.

Our platform efficiently handles all files, and every 3D model is optimized for fast loading across all devices with zero lag, regardless of free or paid usage.`,
      },
    ],
  },
  {
    category: "Processing & Quality",
    faqs: [
      {
        question: "How long does processing actually take?",
        answer:
          "Production Ready in 1 Day refers to our processing time. Once you upload your content, our AI-powered system generates your photorealistic 3D model within 24 hours. This includes all automated processing with no manual touch-ups required.",
      },
      {
        question: 'What makes your 3D models "photorealistic"?',
        answer: `Our models use cutting-edge Gaussian Splats & NeRF technology, capturing:
• Transparent and reflective surfaces accurately
• Highly textured materials with fine detail
• Real-world lighting and shadows
• Dimensionally accurate measurements
• Surface properties that manual 3D struggles with`,
      },
      {
        question: "How accurate are the measurements?",
        answer:
          "Our models are scaled to real-world measurements with precision you can trust. Whether you're showcasing a small product or an entire building, dimensional accuracy is maintained throughout the process.",
      },
      {
        question: "What happens if I'm not satisfied with the results?",
        answer:
          "We provide constant feedback loops throughout the process. Our team monitors quality and works with you to ensure the final result meets your expectations. Contact our support team for any adjustments or concerns.",
      },
    ],
  },
  {
    category: "Customization & Branding",
    faqs: [
      {
        question: "Can I customize the 3D viewer with my brand?",
        answer: `Our interactive 3D viewer is fully customizable: Add your logo and brand colors, Include custom audio narration, Insert call-to-action buttons, Create labeled hotspots for key features, Add interactive forms and redirects, Tailor interactions for your specific use case`,
      },
      {
        question: "What kind of interactive features can I add?",
        answer: `MetaShop AI supports extensive interactivity: Clickable hotspots with information pop-ups, Voice notes and audio guides, Embedded forms for lead capture, Direct links to product pages or booking systems, Custom animations and transitions, Multi-language support`,
      },
      {
        question: "Do you provide analytics on viewer engagement?",
        answer: `Yes! Built-in viewer analytics track: Total visits and unique viewers, Interaction rates with hotspots, Time spent exploring the model, Device and location data. All insights your marketing team needs to optimize performance.`,
      },
    ],
  },
  {
    category: "Integration & Sharing",
    faqs: [
      {
        question: "How easy is it to embed the 3D model on my website?",
        answer:
          "Incredibly simple! You get a single iframe link - just copy and paste it into your website code. No setup, no extra steps, no technical knowledge required. Embedding takes less than 5 minutes.",
      },
      {
        question: "Can I share the 3D model on social media?",
        answer: `One link does it all! The same link works for: Website embedding, Social media sharing, Direct email links, QR codes for physical marketing, Integration into presentations`,
      },
      {
        question: "What about mobile compatibility?",
        answer: `MetaShop AI works flawlessly across ALL devices: Mobile phones (iOS/Android), Desktop computers, Laptops and tablets, VR headsets, All web browsers. Same performance, zero compromise.`,
      },
      {
        question: "Can I download and edit the 3D models?",
        answer:
          "Yes! Download your models in multiple formats and import into any 3D editing software. We also offer one-click export plugins for Blender and Unity for seamless workflow integration. Please check our offerings for more info[click here]",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    faqs: [
      {
        question: "Do you offer free trials?",
        answer: `Yes, we offer both Free and Paid plans.
• Free plan: Great for 3D artists and hobbyists. Includes essential features like object creation, shiny/complex objects, basic exports, same-day turnaround, and email support.
• Paid plan: Designed for professional and enterprise use. Unlocks advanced features such as large space capture, additional 3D technologies (like Gaussian Splats), branding customization, advanced analytics, unlimited upload size, priority feature requests, and full tech support.`,
      },
      {
        question: "How is pricing determined?",
        answer: `Pricing is project-based and depends on:
• Content complexity and size
• Processing requirements
• Customization needs
• Recording service requirements (if needed)
• Volume and ongoing usage

Contact us or reach out to us at info@metashopai.com for a custom quote tailored to your specific project needs.`,
      },
      {
        question: "Is pricing predictable at scale? / Discount???",
        answer:
          "Our architecture ensures predictable pricing even at massive scale. No surprises, no hidden fees. We provide transparent cost structures that remain stable as your usage grows.",
      },
    ],
  },
  {
    category: "Technical Support",
    faqs: [
      {
        question: "What browsers are supported?",
        answer: `MetaShop AI works on all modern web browsers: Chrome, Firefox, Safari, Edge, Mobile browsers (iOS Safari, Android Chrome). No downloads or plugins required. Consistent performance across all platforms.`,
      },
      {
        question: "How do you ensure fast loading times?",
        answer: `Edge-native rendering technology loads 3D directly on the user's device - no streaming needed. This means: Zero latency loading, No bandwidth limitations, Consistent performance regardless of internet speed, No server dependency during viewing`,
      },
      {
        question: "Is the platform secure for business use?",
        answer: `Edge-native rendering technology loads 3D directly on the user's device - no streaming needed. This means:
• Zero latency loading
• No bandwidth limitations
• Consistent performance regardless of internet speed
• No server dependency during viewing`,
      },
      {
        question: "What kind of support do you provide?",
        answer: `We offer comprehensive support including: Technical assistance during setup, Hands-on guidance throughout the process, Responsive customer service team, Constant feedback loops for quality assurance, Direct communication at info@metashopai.com`,
      },
    ],
  },
  {
    category: "Industry-Specific",
    faqs: [
      {
        question: "Real Estate: How does 3D help sell properties faster?",
        answer: `3D virtual tours allow potential buyers to:
• Explore properties remotely 24/7
• Get accurate spatial understanding
• Reduce unnecessary site visits
• Make faster purchasing decisions
• Experience properties before construction completion

Perfect for sample flats, completed projects, and commercial spaces.`,
      },
      {
        question: "E-commerce: Will 3D actually reduce returns?",
        answer: `3D product visualization helps customers:
• Examine products from every angle
• Understand true size and proportions
• See fine details and textures
• Make informed purchasing decisions
• Reduce uncertainty that leads to returns

Studies show 3D reduces returns by up to 40%.`,
      },
      {
        question: "Travel & Hospitality: How can 3D increase bookings?",
        answer: `Immersive 3D experiences help travelers: Explore hotels, restaurants, and venues virtually, Build confidence in their booking choice, Experience the atmosphere before arrival, Share exciting previews with travel companions, Make faster booking decisions`,
      },
      {
        question: "What makes MetaShop different from competitors?",
        answer: `MetaShop AI offers unique advantages:
• True 1-day processing vs weeks with traditional methods
• No manual touch-ups - fully automated AI pipeline
• Edge-native rendering - no streaming delays
• Sovereign architecture - no third-party dependencies
• Universal device compatibility - works everywhere
• Custom branding and interactions - not just basic viewing
• Predictable pricing - scales without surprises`,
      },
      {
        question: "Can I create virtual showrooms or galleries?",
        answer:
          "Yes! MetaShop AI can create interconnected 3D environments where users can navigate between different products, rooms, or spaces. Perfect for virtual showrooms, property developments, or product catalogs.",
      },
      {
        question: "Do you support 360-degree environments?",
        answer:
          "Our platform excels at both individual objects and complete environmental captures - rooms, buildings, outdoor spaces, landscapes and complex scenes. The same simple process works for any scale.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search query
  const filteredFaqData = useMemo(() => {
    if (!searchQuery.trim()) return faqData;

    const query = searchQuery.toLowerCase();
    return faqData
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query) ||
            category.category.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  }, [searchQuery]);

  return (
    <>
      <NewHeader />
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,255,167,0.03)_0%,_transparent_50%)]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent z-0" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-sans ts-h2 md:ts-h1 mb-4 text-white">
              Frequently Asked Questions
            </h1>
            <p className="font-sans ts-body1 text-muted max-w-2xl mx-auto mb-8">
              Everything you need to know about MetaShop AI in one place.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search FAQs by keywords or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-sans pl-12 pr-4 py-6 text-base bg-dark/50 border-medium/50 focus:border-primary/50 focus:ring-primary/20 backdrop-blur-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFaqData.length > 0 ? (
              filteredFaqData.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-dark/30 backdrop-blur-sm rounded-xl border border-medium/30 p-6"
                >
                  <h2 className="font-sans font-medium text-[20px] md:text-[24px] lg:text-[28px] text-primary mb-6">
                    {category.category}
                  </h2>

                  <Accordion type="multiple" className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-medium/30 rounded-lg bg-dark/50 px-6"
                      >
                        <AccordionTrigger className="font-sans font-medium text-[18px] md:text-[20px] text-white hover:text-primary hover:no-underline text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="font-sans ts-body2 text-light space-y-4">
                          <div className="whitespace-pre-line text-base">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="font-sans ts-body1 text-muted">
                  No FAQs found matching your search query.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="font-sans mt-4 ts-body2 text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* Contact CTA - UPDATED with Center Aligned & Full Width Cards */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="font-sans ts-h4 mb-4 text-white">
                Still have questions?
              </h3>
              <p className="font-sans ts-body1 text-light">
                Our team is here to help. Reach out to us for personalized
                assistance.
              </p>
            </div>

            {/* Changed from max-w-3xl to w-full to match FAQ width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Call us block */}
              <CardContainer className="w-full">
                <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                  <CardItem translateZ="50" className="w-full">
                    {/* Changed items-start to items-center and added text-center */}
                    <div className="flex flex-col items-center text-center space-y-4 w-full">
                      <Phone className="w-8 h-8 text-primary" />
                      <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Call us
                        </h3>
                        <a
                          href="tel:+91xxxxxxxxxx"
                          className="text-white/60 hover:text-primary transition-colors"
                        >
                          +91xxxxxxxxxx
                        </a>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>

              {/* Mail us block */}
              <CardContainer className="w-full">
                <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                  <CardItem translateZ="50" className="w-full">
                    {/* Changed items-start to items-center and added text-center */}
                    <div className="flex flex-col items-center text-center space-y-4 w-full">
                      <Mail className="w-8 h-8 text-primary" />
                      <div className="flex flex-col items-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Mail us at
                        </h3>
                        <a
                          href="mailto:info@metashopai.com"
                          className="text-white/60 hover:text-primary transition-colors break-all"
                        >
                          info@metashopai.com
                        </a>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
