import type React from "react";
import type { Metadata } from "next";
import { Sora, Geist, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer } from "@/components/Footer";

const fontDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontBody = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const fontHandwritten = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontHandwritten.variable}`}
    >
      <body className={`font-body antialiased`}>
        {children}
        <Footer />
        <Analytics />
        <Toaster />

        {/* ✅ CORRECT PLACEMENT: Floating Status Badge */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl pointer-events-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/90"></span>
          </span>
          <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
            Website in Progress
          </span>
        </div>
      </body>
    </html>
  );
}
