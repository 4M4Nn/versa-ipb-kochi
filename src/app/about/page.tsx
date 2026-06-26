import type { Metadata } from "next"
import { FOUNDERS, WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "About IPB Kochi — Our Story & Mission",
  description: "Learn about IPB Kochi — Kerala's leading banking career institute founded by Sandeep Neelamana, Sreenivasa Prabhu, and Aman Faisal S.",
}

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR STORY</p>
        <h1 className="font-montserrat text-5xl font-bold text-[#F0EDE6] mb-6">Built to Make Banking Careers Accessible</h1>
        <p className="text-[#A8B89A] text-lg leading-relaxed max-w-3xl mx-auto">
          IPB Kochi was founded with one insight: thousands of Kerala graduates want banking careers, but the system makes it unnecessarily hard. Fragmented coaching, outdated curriculum, no placement network. We built IPB to fix all three — with focused programs, industry-designed content, and direct bank partnerships that put graduates in interview chairs.
        </p>
      </section>
      <section className="py-12 bg-[#060D1A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { label: "Mission", text: "To make banking careers accessible to every Kerala graduate through focused, practical education and guaranteed placement support." },
            { label: "Vision", text: "A Kerala where no graduate is unemployed because of a skills gap — where IPB is the bridge between talent and banking careers." },
            { label: "Approach", text: "Industry-designed curriculum. Direct bank partnerships. Continuous mentor support. Mock interviews. Real placement outcomes." },
          ].map(i => (
            <div key={i.label} className="glass-card rounded-2xl p-7">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">{i.label}</p>
              <p className="text-[#F0EDE6] leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-[#F0EDE6]">Meet the Founders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FOUNDERS.map(f => (
              <div key={f.name} className="glass-card rounded-2xl p-8 hover:border-[#C9A84C]/20 transition-all border border-transparent">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4" style={{ background:`linear-gradient(135deg,${f.color},${f.color}88)` }}>{f.monogram}</div>
                <h3 className="font-montserrat text-xl font-bold text-[#F0EDE6] mb-1">{f.name}</h3>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color:f.color }}>{f.role}</p>
                <p className="text-[#A8B89A] text-sm leading-relaxed mb-4">{f.bio}</p>
                <blockquote className="border-l-2 pl-3 italic text-xs text-[#C9A84C]" style={{ borderColor:f.color }}>&ldquo;{f.quote}&rdquo;</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#060D1A] px-6 text-center">
        <h2 className="font-montserrat text-3xl font-bold text-[#F0EDE6] mb-4">Start Your Banking Career</h2>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#FF6B00] text-white font-bold text-sm tracking-widest uppercase">Free Counselling Session</a>
      </section>
    </div>
  )
}
