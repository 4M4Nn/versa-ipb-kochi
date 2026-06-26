import { PLACEMENTS, TOTAL_PLACED } from "@/lib/data"

export default function PlacementsSection() {
  return (
    <section className="py-20 bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">PLACEMENT RECORD</p>
          <h2 className="font-montserrat text-4xl font-bold text-[#F0EDE6] mb-2">{TOTAL_PLACED.toLocaleString()}+ Lives Changed</h2>
          <p className="text-[#A8B89A]">Real students. Real banks. Real careers.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {PLACEMENTS.map(p => (
            <div key={p.name} className="glass-card rounded-xl p-5">
              <div className="w-10 h-10 rounded-full bg-[#003087] flex items-center justify-center text-[#C9A84C] font-bold text-sm mb-3">
                {p.name.charAt(0)}
              </div>
              <p className="font-montserrat font-bold text-[#F0EDE6] text-sm">{p.name}</p>
              <p className="text-[#A8B89A] text-xs mt-0.5">{p.role}</p>
              <p className="text-[#FF6B00] text-xs font-medium mt-1">{p.bank}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[#C9A84C] text-xs">{p.package}</span>
                <span className="text-[#4A7C59] text-xs">{p.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[["25+","Partner Banks"],["13,200+","Students Placed"],["100%","Placement Support"],["₹3.2 LPA","Avg Package"]].map(([v,l]) => (
            <div key={l} className="glass-card rounded-xl p-5">
              <p className="font-montserrat text-3xl font-bold text-[#C9A84C]">{v}</p>
              <p className="text-[#A8B89A] text-xs mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
