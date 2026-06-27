import type { Metadata } from "next"
import FAQSection from "@/components/sections/FAQSection"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about IPB Kochi banking courses, placements, fees, and admissions.",
}

export default function FAQPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-16 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Help Center</p>
        <h1 className="font-poppins text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Everything you need to know about IPB Kochi programs and admissions.</p>
      </section>
      <FAQSection />
    </div>
  )
}
