import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { ABOUT, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "About IPB Kochi",
  description: "Learn about IPB Kochi — India's most trusted banking training institute with 13,200+ students placed.",
}

const FOUNDERS = [
  { name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59" },
  { name: "Sreenivasa Prabhu", role: "Founder & Finance Head", monogram: "SP", color: "#C9A84C" },
  { name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#FF6B00" },
]

export default function AboutPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-20 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Our Story</p>
        <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">{ABOUT.heading}</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">{ABOUT.description}</p>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins text-3xl font-bold text-[#0A1628] mb-4">Mission & Vision</h2>
            <div className="bg-[#FFF3EC] rounded-2xl p-6 mb-4">
              <p className="text-xs font-semibold text-[#FF6B00] tracking-widest uppercase mb-2">Mission</p>
              <p className="text-[#374151] leading-relaxed">{ABOUT.mission}</p>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl p-6 mb-6">
              <p className="text-xs font-semibold text-[#003087] tracking-widest uppercase mb-2">Vision</p>
              <p className="text-[#374151] leading-relaxed">{ABOUT.vision}</p>
            </div>
            <ul className="space-y-3">
              {ABOUT.checkpoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#374151]">
                  <CheckCircle2 size={18} className="text-[#FF6B00] shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image src={ABOUT.image} alt="IPB Kochi campus" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="font-poppins text-3xl font-bold text-[#0A1628]">The Founders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white font-poppins" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}88)` }}>{f.monogram}</div>
                <h3 className="font-poppins text-lg font-bold text-[#0A1628] mb-1">{f.name}</h3>
                <p className="text-xs tracking-widest uppercase" style={{ color: f.color }}>{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FF6B00] text-center text-white">
        <h2 className="font-poppins text-3xl font-bold mb-4">Start Your Banking Career Today</h2>
        <p className="text-orange-100 mb-8">Join 13,200+ successful IPB alumni now placed in banks across India.</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#FF6B00] font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors">
          Apply Now
        </a>
      </section>
    </div>
  )
}
