import type { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description: "Apply to IPB Kochi or get in touch with our admissions team for banking course inquiries.",
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-16 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Get In Touch</p>
        <h1 className="font-poppins text-4xl font-bold mb-4">Contact & Admissions</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Our admissions team responds within 2 hours on business days.</p>
      </section>
      <ContactSection />
    </div>
  )
}
