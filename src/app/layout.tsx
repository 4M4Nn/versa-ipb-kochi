import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "IPB Kochi — Kerala's Premier Banking Institute | 13,200+ Placements",
  description: "Institute of Professional Banking Kochi. ISO certified, NSDC approved. 13,200+ students placed in 25+ banks across India.",
  keywords: ["banking course Kerala", "banking institute Kochi", "bank job training", "IPB Kochi", "BFSI career"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0A1628] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
