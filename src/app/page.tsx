import type { Metadata } from "next"
import IPBHero from "@/components/sections/IPBHero"
import IPBStats from "@/components/sections/IPBStats"
import IPBCourses from "@/components/sections/IPBCourses"
import IPBRecruiters from "@/components/sections/IPBRecruiters"
import IPBContact from "@/components/sections/IPBContact"

export const metadata: Metadata = {
  title: "IPB Kochi — Kerala's Premier Banking Institute | 13,200+ Placements",
  description: "ISO certified banking training institute in Kochi. 13,200+ placements in 25+ banks. CBFS, PO Program, bank partnership placements.",
}

export default function HomePage() {
  return (
    <main>
      <IPBHero />
      <IPBStats />
      <IPBCourses />
      <IPBRecruiters />
      <IPBContact />
    </main>
  )
}
