import type { Metadata } from "next"
import { PLACEMENTS, TESTIMONIALS, STATS, SITE } from "@/lib/data"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Placements — 13,200+ Students Placed",
  description: "See IPB Kochi's outstanding placement record — 13,200+ students placed in 25+ banks across India.",
}

export default function PlacementsPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-20 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Track Record</p>
        <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">{PLACEMENTS.heading}</h1>
        <p className="text-gray-300 max-w-xl mx-auto">{PLACEMENTS.description}</p>
      </section>

      <section className="py-12 bg-[#003087]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-poppins text-4xl font-bold text-[#FF6B00] mb-1">{s.value.toLocaleString("en-IN")}{s.suffix}</p>
              <p className="text-blue-200 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins text-2xl font-bold text-[#0A1628] mb-8 text-center">Our Banking Partners</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {PLACEMENTS.banks.map((bank) => (
              <span key={bank} className="bg-[#F0F4FF] border border-[#003087]/20 text-[#003087] text-sm font-medium px-5 py-2 rounded-full">{bank}</span>
            ))}
          </div>

          <h2 className="font-poppins text-2xl font-bold text-[#0A1628] mb-8 text-center">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex gap-1 mb-3">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} className="text-[#FF6B00] fill-[#FF6B00]" />)}</div>
                <p className="text-[#374151] text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#003087] flex items-center justify-center text-white font-bold text-sm">{t.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-[#0A1628] text-sm">{t.name}</p>
                    <p className="text-xs text-[#6B7280]">{t.course} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FF6B00] text-center text-white">
        <h2 className="font-poppins text-3xl font-bold mb-4">Your Name Could Be Next</h2>
        <p className="text-orange-100 mb-8 max-w-lg mx-auto">Join thousands of IPB Kochi graduates now thriving in banking careers.</p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#FF6B00] font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors">Apply Today</a>
      </section>
    </div>
  )
}
