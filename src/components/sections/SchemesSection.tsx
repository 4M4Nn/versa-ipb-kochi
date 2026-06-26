import { SCHEMES, WA_URL } from "@/lib/data"
export default function SchemesSection() {
  return (
    <section className="py-20 bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">SPECIAL OFFERS</p>
          <h2 className="font-montserrat text-3xl font-bold text-[#F0EDE6]">Admission Schemes</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {SCHEMES.map(s => (
            <div key={s.title} className="glass-card rounded-2xl p-7 flex flex-col gap-4 hover:border-[#C9A84C]/20 transition-all border border-transparent">
              <span className="text-xs tracking-widest px-3 py-1 rounded-full self-start" style={{ background:"#FF6B0020", color:"#FF6B00" }}>{s.tag}</span>
              <h3 className="font-montserrat text-xl font-bold text-[#F0EDE6]">{s.title}</h3>
              <p className="text-[#A8B89A] text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href={`${WA_URL}?text=${encodeURIComponent(s.cta)}`} target="_blank" rel="noopener noreferrer"
                className="text-center py-3 bg-[#FF6B00] text-white text-sm tracking-widest hover:bg-[#FF8533] transition-colors font-medium">
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
