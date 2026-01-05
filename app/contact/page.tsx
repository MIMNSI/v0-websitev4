"use client";

import type React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, Phone, Mail, Loader2 } from "lucide-react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import NewHeader from "@/components/NewHeader";
import { submitContactForm } from "@/lib/api";

// 1. Validation Schema
const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't exceed 15 digits")
    .regex(/^[0-9]+$/, "Phone number must be digits only"),
  companyName: z.string().optional(),
  companyLocation: z.string().optional(),
  needs3DFor: z.array(z.string()).min(1, "Please select at least one 3D need"),
  categoryQuantity: z.string().min(1, "This field is required"),
  needsAPI: z.enum(["yes", "no", "not sure"], {
    required_error: "Please select API requirement",
  }),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  // 2. Setup React Hook Form
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      companyLocation: "",
      needs3DFor: [],
      categoryQuantity: "",
      // @ts-ignore
      needsAPI: undefined,
      additionalInfo: "",
    },
  });

  const needs3DOptions = [
    "Landscape",
    "Buildings",
    "Interiors",
    "E-commerce",
    "Automobile",
    "Other",
  ];

  // 3. Handle Submission (🔴 FIXED DATA STRUCTURE HERE)
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    // We create a "FLAT" object so the email reads it perfectly.
    // No nested objects like { company: { name: ... } }
    const payload = {
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone,
      "Company Name": data.companyName || "Not Provided",
      "Company Location": data.companyLocation || "Not Provided",
      // .join turns ["Car", "House"] into "Car, House"
      "Need 3D For": data.needs3DFor.join(", "),
      "Category And Quantity": data.categoryQuantity,
      "Need API": data.needsAPI,
      "More Requirement": data.additionalInfo || "None",
    };

    try {
      const response = await submitContactForm(payload);

      if (response.success || response.status === 200) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 48 hours.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: response.message || "Please try again later.",
        });
      }
    } catch (error: any) {
      console.error("Submission Error:", error);
      toast.error("Submission failed", {
        description:
          error.message || "Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NewHeader />
      <div className="min-h-screen bg-background relative">
        <div className="absolute inset-0 z-0">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-background"
            colors={[
              [45, 255, 167],
              [255, 255, 255],
            ]}
            dotSize={3}
            reverse={false}
            showGradient={true}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_transparent_100%)] z-0" />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent z-0" />

        <div className="relative z-10">
          <div className="h-20" />

          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
                Ready for 3D?
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 mt-2 text-balance">
                Launch your business
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Left Column */}
              <div className="space-y-8">
                <CardContainer className="w-full">
                  <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 md:p-8 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                    <CardItem translateZ="50" className="w-full">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Connect with us
                      </h2>
                    </CardItem>
                    <CardItem translateZ="60" className="w-full">
                      <ul className="space-y-4 text-white/70">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            See if 3D is the right match for your project.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Discover how 3D requires zero effort on your end —
                            we handle everything.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Get a custom quote tailored to your project's unique
                            needs.
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Brainstorm innovative 3D solutions designed
                            specifically for your business.
                          </span>
                        </li>
                      </ul>
                    </CardItem>
                  </CardBody>
                </CardContainer>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CardContainer className="w-full">
                    <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                      <CardItem translateZ="50" className="w-full">
                        <div className="flex flex-col items-start space-y-4">
                          <Phone className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">
                              Call us
                            </h3>
                            <a
                              href="tel:+91xxxxxxxxxx"
                              className="text-white/60 hover:text-primary transition-colors"
                            >
                              +91 8412921292
                            </a>
                          </div>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>

                  <CardContainer className="w-full">
                    <CardBody className="relative group/card bg-[#1A1A1A] rounded-2xl p-6 border border-border/50 hover:shadow-2xl hover:shadow-emerald-500/[0.1] transition-shadow duration-300 h-auto">
                      <CardItem translateZ="50" className="w-full">
                        <div className="flex flex-col items-start space-y-4">
                          <Mail className="w-8 h-8 text-primary" />
                          <div>
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

              {/* Right Column - Form */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name here"
                      {...register("fullName")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email ID *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your valid email id here"
                      {...register("email")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your valid phone number here"
                      {...register("phone")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-white">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Enter your company name here"
                      {...register("companyName")}
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
                      {...register("companyLocation")}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <Label className="text-white">
                      What do you need 3D for? * (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {needs3DOptions.map((option) => (
                        <Controller
                          key={option}
                          name="needs3DFor"
                          control={control}
                          render={({ field }) => (
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id={option}
                                checked={field.value.includes(option)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, option])
                                    : field.onChange(
                                        field.value.filter(
                                          (value) => value !== option
                                        )
                                      );
                                }}
                              />
                              <Label
                                htmlFor={option}
                                className="cursor-pointer font-normal text-white/70"
                              >
                                {option}
                              </Label>
                            </div>
                          )}
                        />
                      ))}
                    </div>
                    {errors.needs3DFor && (
                      <p className="text-red-400 text-sm">
                        {errors.needs3DFor.message}
                      </p>
                    )}
                  </div>

                  {/* Category & Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="categoryQuantity" className="text-white">
                      What category & quantity need 3D? *
                    </Label>
                    <Textarea
                      id="categoryQuantity"
                      placeholder="e.g., Interior - 2, Cars - 3, Furniture - 10,000"
                      {...register("categoryQuantity")}
                      className={`min-h-20 bg-white/5 border-white/10 text-white placeholder:text-white/40 ${
                        errors.categoryQuantity ? "border-red-500" : ""
                      }`}
                    />
                    {errors.categoryQuantity && (
                      <p className="text-red-400 text-sm">
                        {errors.categoryQuantity.message}
                      </p>
                    )}
                  </div>

                  {/* Radio: API */}
                  <div className="space-y-3">
                    <Label className="text-white">Do you need API? *</Label>
                    <Controller
                      name="needsAPI"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value || ""}
                          className="flex gap-6"
                        >
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id="api-yes" />
                            <Label
                              htmlFor="api-yes"
                              className="cursor-pointer font-normal text-white/70"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id="api-no" />
                            <Label
                              htmlFor="api-no"
                              className="cursor-pointer font-normal text-white/70"
                            >
                              No
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="not sure"
                              id="api-not-sure"
                            />
                            <Label
                              htmlFor="api-not-sure"
                              className="cursor-pointer font-normal text-white/70"
                            >
                              Not sure
                            </Label>
                          </div>
                        </RadioGroup>
                      )}
                    />
                    {errors.needsAPI && (
                      <p className="text-red-400 text-sm">
                        {errors.needsAPI.message}
                      </p>
                    )}
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo" className="text-white">
                      Tell us more about your requirement (optional)
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      placeholder="Share any additional details about your project..."
                      {...register("additionalInfo")}
                      className="min-h-24 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group w-full flex items-center justify-center gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black font-medium px-6 py-3 rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isLoading ? "Submitting..." : "Submit"}
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
