"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    companyLocation: "",
    needs3DFor: [] as string[],
    categoryQuantity: "",
    needsAPI: "",
    additionalInfo: "",
  })

  const needs3DOptions = ["Landscape", "Buildings", "Interiors", "E-commerce", "Automobile", "Other"]

  const handleCheckboxChange = (option: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      needs3DFor: checked ? [...prev.needs3DFor, option] : prev.needs3DFor.filter((item) => item !== option),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 z-0">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-background"
          colors={[
            [45, 255, 167], // Emerald green matching brand
            [255, 255, 255], // White
          ]}
          dotSize={3}
          reverse={false}
          showGradient={true}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_transparent_100%)] z-0" />
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent z-0" />

      <div className="relative z-10">
        {/* Header spacing */}
        <div className="h-20" />

        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">Ready for 3D?</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 mt-2 text-balance">
              Launch your business
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left Column - Connect with us section */}
            <div className="space-y-8">
              <CardContainer className="w-full">
                <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                  <CardItem translateZ="50" className="w-full">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Connect with us</h2>
                  </CardItem>
                  <CardItem translateZ="60" className="w-full">
                    <ul className="space-y-4 text-white/70">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>See if 3D is the right match for your project.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Discover how 3D requires zero effort on your end — we handle everything.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Get a custom quote tailored to your project's unique needs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Brainstorm innovative 3D solutions designed specifically for your business.</span>
                      </li>
                    </ul>
                  </CardItem>
                </CardBody>
              </CardContainer>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Call us block with 3D hover effect */}
                <CardContainer className="w-full">
                  <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                    <CardItem translateZ="50" className="w-full">
                      <div className="flex flex-col items-start space-y-4">
                        <Phone className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Call us</h3>
                          <a href="tel:+91xxxxxxxxxx" className="text-white/60 hover:text-primary transition-colors">
                            +91xxxxxxxxxx
                          </a>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                {/* Mail us block with 3D hover effect */}
                <CardContainer className="w-full">
                  <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                    <CardItem translateZ="50" className="w-full">
                      <div className="flex flex-col items-start space-y-4">
                        <Mail className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Mail us at</h3>
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

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name here"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email ID
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your valid email id here"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your valid phone number here"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-white">
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    placeholder="Enter your company name here"
                    value={formData.companyName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* Company Location */}
                <div className="space-y-2">
                  <Label htmlFor="companyLocation" className="text-white">
                    Company Location
                  </Label>
                  <Input
                    id="companyLocation"
                    placeholder="Enter your company location here"
                    value={formData.companyLocation}
                    onChange={(e) => setFormData((prev) => ({ ...prev, companyLocation: e.target.value }))}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* What do you need 3D for? */}
                <div className="space-y-3">
                  <Label className="text-white">What do you need 3D for? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {needs3DOptions.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <Checkbox
                          id={option}
                          checked={formData.needs3DFor.includes(option)}
                          onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        />
                        <Label htmlFor={option} className="cursor-pointer font-normal text-white/70">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category & Quantity */}
                <div className="space-y-2">
                  <Label htmlFor="categoryQuantity" className="text-white">
                    What category & quantity need 3D?
                  </Label>
                  <Textarea
                    id="categoryQuantity"
                    placeholder="e.g., Interior - 2, Cars - 3, Furniture - 10,000"
                    value={formData.categoryQuantity}
                    onChange={(e) => setFormData((prev) => ({ ...prev, categoryQuantity: e.target.value }))}
                    className="min-h-20 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>

                {/* Do you need API? */}
                <div className="space-y-3">
                  <Label className="text-white">Do you need API?</Label>
                  <RadioGroup
                    value={formData.needsAPI}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, needsAPI: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="api-yes" />
                      <Label htmlFor="api-yes" className="cursor-pointer font-normal text-white/70">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="api-no" />
                      <Label htmlFor="api-no" className="cursor-pointer font-normal text-white/70">
                        No
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="not-sure" id="api-not-sure" />
                      <Label htmlFor="api-not-sure" className="cursor-pointer font-normal text-white/70">
                        Not sure
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-white">
                    Tell us more about your requirement (optional)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Share any additional details about your project..."
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
                    className="min-h-24 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <HoverBorderGradient
                    containerClassName="w-full"
                    className="ts-button group/btn w-full px-6 py-3"
                    gradientColor="#2DFFA7"
                    duration={1.5}
                    backgroundGradient="bg-[radial-gradient(circle_at_center,_#000000_0%,_#000000_50%,_rgba(45,106,79,0.5)_100%)]"
                    as="button"
                    type="submit"
                  >
                    Submit
                    <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover/btn:translate-x-1 transition-transform" />
                  </HoverBorderGradient>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
