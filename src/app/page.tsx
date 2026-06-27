import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import ProblemSection from "@/components/sections/ProblemSection"
import CoursesSection from "@/components/sections/CoursesSection"
import PlacementsSection from "@/components/sections/PlacementsSection"
import FoundersSection from "@/components/sections/FoundersSection"
import BlogSection from "@/components/sections/BlogSection"
import SchemesSection from "@/components/sections/SchemesSection"
import FAQSection from "@/components/sections/FAQSection"
import ContactSection from "@/components/sections/ContactSection"
import { SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <CoursesSection />
      <PlacementsSection />
      <FoundersSection />
      <BlogSection />
      <SchemesSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
