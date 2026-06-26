import { FOUNDERS } from "@/lib/data"
export default function FoundersSection() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">LEADERSHIP</p>
          <h2 className="font-montserrat text-4xl font-bold text-[#F0EDE6]">The Founders Behind IPB</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FOUNDERS.map(f => (
            <div key={f.name} className="glass-card rounded-2xl p-8 text-center hover:border-[#C9A84C]/20 transition-all border border-transparent">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-4" style={{ background: `linear-gradient(135deg,${f.color},${f.color}88)` }}>{f.monogram}</div>
              <h3 className="font-montserrat text-xl font-bold text-[#F0EDE6] mb-1">{f.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: f.color }}>{f.role}</p>
              <p className="text-[#A8B89A] text-sm leading-relaxed mb-4">{f.bio}</p>
              <blockquote className="border-l-2 pl-3 italic text-xs text-[#C9A84C] text-left" style={{ borderColor: f.color }}>&ldquo;{f.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
