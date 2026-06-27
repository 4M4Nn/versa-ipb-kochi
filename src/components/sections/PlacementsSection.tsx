import Image from "next/image"
import { PLACEMENTS, TESTIMONIALS } from "@/lib/data"
import { Star } from "lucide-react"

export default function PlacementsSection() {
  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">Track Record</p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0A1628]">{PLACEMENTS.heading}</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">{PLACEMENTS.description}</p>
        </div>

        {/* Bank partners */}
        <div className="mb-16">
          <p className="text-center text-xs text-[#6B7280] tracking-widest uppercase mb-6">Our Placement Partners</p>
          <div className="flex flex-wrap justify-center gap-3">
            {PLACEMENTS.banks.map((bank) => (
              <span
                key={bank}
                className="bg-[#F8F9FA] border border-gray-200 text-[#374151] text-sm font-medium px-5 py-2 rounded-full"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:border-[#FF6B00]/20 hover:shadow-sm transition-all"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#FF6B00] fill-[#FF6B00]" />
                ))}
              </div>
              <p className="text-[#374151] text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#003087] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
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
  )
}
