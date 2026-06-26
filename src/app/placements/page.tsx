import type { Metadata } from "next"
import { PLACEMENTS, WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Placements — 13,200+ Students Placed in Top Banks",
  description: "IPB Kochi's placement record: 13,200+ students placed in SBI, HDFC, Axis, Canara, DCB, Equitas and 20+ more banks across India.",
}

const PARTNER_BANKS = [
  "SBI", "HDFC Bank", "Axis Bank", "ICICI Bank", "Canara Bank", "Federal Bank", "DCB Bank",
  "Equitas SFB", "Jana SFB", "Ujjivan SFB", "Bank of Baroda", "Union Bank", "PNB", "IOB",
  "IDFC First", "Kotak Mahindra Bank", "IndusInd Bank", "Yes Bank", "CSB Bank", "South Indian Bank",
]

export default function PlacementsPage() {
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">PLACEMENT RECORD</p>
        <h1 className="font-montserrat text-5xl font-bold text-[#F0EDE6] mb-4">13,200+ Students Placed</h1>
        <p className="text-[#A8B89A] text-lg">Kerala&apos;s largest banking placement network — built over years, backed by results.</p>
      </section>
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[["13,200+","Students Placed"],["25+","Partner Banks"],["₹3.2 LPA","Average Package"],["94%+","Placement Rate"]].map(([v,l]) => (
              <div key={l} className="glass-card rounded-xl p-5 text-center">
                <p className="font-montserrat text-3xl font-bold text-[#C9A84C]">{v}</p>
                <p className="text-[#A8B89A] text-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
          <h2 className="font-montserrat text-2xl font-bold text-[#F0EDE6] mb-6">Recent Placements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {PLACEMENTS.map(p => (
              <div key={p.name} className="glass-card rounded-xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#003087] flex items-center justify-center text-[#C9A84C] font-bold text-sm mb-3">{p.name.charAt(0)}</div>
                <p className="font-montserrat font-bold text-[#F0EDE6]">{p.name}</p>
                <p className="text-[#A8B89A] text-xs mt-0.5">{p.role}</p>
                <p className="text-[#FF6B00] text-xs font-medium mt-1">{p.bank}</p>
                <div className="flex justify-between mt-2">
                  <span className="text-[#C9A84C] text-xs">{p.package}</span>
                  <span className="text-[#4A7C59] text-xs">{p.year}</span>
                </div>
              </div>
            ))}
          </div>
          <h2 className="font-montserrat text-2xl font-bold text-[#F0EDE6] mb-6">Our 25+ Partner Banks</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {PARTNER_BANKS.map(b => (
              <span key={b} className="px-4 py-2 glass-card rounded-full text-sm text-[#F0EDE6]">{b}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#060D1A] px-6 text-center">
        <h2 className="font-montserrat text-3xl font-bold text-[#F0EDE6] mb-3">You Could Be Next</h2>
        <p className="text-[#A8B89A] mb-6">13,200 students trusted IPB. Start your banking career today.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#FF6B00] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#FF8533] transition-colors">Enroll Now</a>
      </section>
    </div>
  )
}
