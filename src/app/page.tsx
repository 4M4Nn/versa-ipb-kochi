import type { Metadata } from "next"
import ClientWrapper from "@/components/layout/ClientWrapper"
import HeroSection from "@/components/sections/HeroSection"
import ProblemSection from "@/components/sections/ProblemSection"
import CoursesSection from "@/components/sections/CoursesSection"
import PlacementsSection from "@/components/sections/PlacementsSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import FAQSection from "@/components/sections/FAQSection"
import SchemesSection from "@/components/sections/SchemesSection"

export const metadata: Metadata = {
  title: "IPB Kochi — Kerala's #1 Banking Career Institute | 13,200+ Placements",
  description: "Join IPB Kochi — Kerala's premier banking institute with 13,200+ placements in 25+ banks. CBFS, PO Program, HTD DCB, Equitas Ignite.",
}

export default function HomePage() {
  return (
    <ClientWrapper>
      <HeroSection />
      <ProblemSection />
      <CoursesSection />
      <PlacementsSection />
      <FoundersSection />
      <BlogSection />
      <FAQSection />
      <SchemesSection />
    </ClientWrapper>
  )
}
