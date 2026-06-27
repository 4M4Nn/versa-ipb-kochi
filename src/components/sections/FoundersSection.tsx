const FOUNDERS = [
  { name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59", bio: "Operational architect of IPB Kochi. Sandeep ensures world-class student experience from enrollment to placement." },
  { name: "Sreenivasa Prabhu", role: "Founder & Finance Head", monogram: "SP", color: "#C9A84C", bio: "Financial strategist and banking industry veteran. Sreenivasa designed IPB's curriculum in partnership with leading banks." },
  { name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#FF6B00", bio: "Brand and growth leader. Aman drives student acquisition and has built IPB Kochi into a recognized brand across Kerala." },
]

export default function FoundersSection() {
  return (
    <section id="about" className="py-20 bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">Leadership</p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">The Founders Behind IPB</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#FF6B00]/30 transition-all">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white font-poppins mx-auto mb-5"
                style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}88)` }}
              >
                {f.monogram}
              </div>
              <h3 className="font-poppins text-xl font-bold mb-1">{f.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: f.color }}>{f.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
