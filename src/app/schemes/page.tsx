import type { Metadata } from "next"
import { SCHEMES, WA_URL } from "@/lib/data"
export const metadata: Metadata = {
  title: "Admission Schemes & Offers — IPB Kochi",
  description: "Special admission offers from IPB Kochi — Early Bird discount, Sibling offer, and Freshers Fast Track.",
}
export default function SchemesPage() {
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OFFERS</p>
        <h1 className="font-montserrat text-4xl font-bold text-[#F0EDE6] mb-4">Admission Schemes</h1>
        <p className="text-[#A8B89A]">Limited-time offers to help more Kerala graduates access quality banking education.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {SCHEMES.map(s => (
            <div key={s.title} className="glass-card rounded-2xl p-7 flex flex-col gap-4 hover:border-[#C9A84C]/20 transition-all border border-transparent">
              <span className="text-xs tracking-widest px-3 py-1 rounded-full self-start" style={{ background:"#FF6B0020", color:"#FF6B00" }}>{s.tag}</span>
              <h2 className="font-montserrat text-xl font-bold text-[#F0EDE6]">{s.title}</h2>
              <p className="text-[#A8B89A] text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href={`${WA_URL}?text=${encodeURIComponent(s.cta)}`} target="_blank" rel="noopener noreferrer"
                className="block text-center py-3 bg-[#FF6B00] text-white text-sm font-bold tracking-widest hover:bg-[#FF8533] transition-colors">{s.cta}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
