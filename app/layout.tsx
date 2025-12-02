import type React from "react"
import type { Metadata } from "next"
import { Sora, Geist, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/Footer"

const fontDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
})

const fontBody = Geist({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontHandwritten = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontHandwritten.variable}`}>
      <body className={`font-body antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
