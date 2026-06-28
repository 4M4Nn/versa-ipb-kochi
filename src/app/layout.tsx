import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp"
import MobileStickyBar from "@/components/ui/MobileStickyBar"
import IntroWrapper from "@/components/ui/IntroWrapper"
import { SITE } from "@/lib/data"

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: ["IPB Kochi", "banking courses", "CBFS", "bank PO", "Kerala banking institute", "placement"],
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-white font-inter antialiased overflow-x-hidden">
        <IntroWrapper />
        <Navbar />
        <main className="pt-[64px] md:pt-[94px] pb-16 md:pb-0 overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  )
}
