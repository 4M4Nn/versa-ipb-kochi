import type { Metadata } from "next"
import SchemesSection from "@/components/sections/SchemesSection"

export const metadata: Metadata = {
  title: "Schemes & Offers",
  description: "Current schemes, scholarships, and special offers at IPB Kochi banking institute.",
}

export default function SchemesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-16 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Limited Time</p>
        <h1 className="font-poppins text-4xl font-bold mb-4">Schemes & Special Offers</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Take advantage of our current scholarships and fee concessions.</p>
      </section>
      <SchemesSection />
    </div>
  )
}
