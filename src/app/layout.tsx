import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import LenisProvider from "@/components/providers/LenisProvider"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: "IPB Kochi — Kerala's #1 Banking Career Institute", template: "%s | IPB Kochi" },
  description: "IPB Kochi has placed 13,200+ students in top Indian banks. Join our banking programs: CBFS, PO Program, HTD DCB, Equitas Ignite.",
  keywords: ["IPB Kochi", "banking course Kerala", "IBPS PO coaching", "bank job Kerala", "CBFS program", "banking institute Kochi"],
  openGraph: { type: "website", locale: "en_IN", siteName: "IPB Kochi" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-[#0A1628] font-inter antialiased">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
        </LenisProvider>
      </body>
    </html>
  )
}
