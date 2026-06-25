import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/components/providers/LenisProvider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-poppins", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "IPB Kochi — Best Banking Course Kerala | 13,200+ Placements",
  description: "IPB Kochi — Kerala's most trusted banking training institute. ISO 9001:2015 certified. 100% placement assistance. Join 13,200+ successful bankers placed in 25+ leading banks.",
  keywords: ["banking course Kochi", "IPB Kochi", "bank job Kerala", "banking institute Kerala", "CBFS course", "PO program Kerala"],
  openGraph: { title: "IPB Kochi — Best Banking Course Kerala", description: "13,200+ students placed. 100% placement assistance.", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1A1A2E] overflow-x-hidden">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  )
}
