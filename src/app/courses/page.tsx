import type { Metadata } from "next"
import Link from "next/link"
import { COURSES, WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "Banking Courses — CBFS, PO Program, HTD DCB, Equitas Ignite",
  description: "Choose your banking career path with IPB Kochi. 4 specialized programs: CBFS (6 months), PO Program (4 months), HTD DCB (3 months), Equitas Ignite (2 months).",
}

export default function CoursesPage() {
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR PROGRAMS</p>
        <h1 className="font-montserrat text-5xl font-bold text-[#F0EDE6] mb-4">Choose Your Path to Banking</h1>
        <p className="text-[#A8B89A] text-lg">Four specialized programs. One promise: a banking career.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {COURSES.map((c, i) => (
            <div key={c.id} className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-[#1A2A4A] hover:border-[#C9A84C]/30 transition-all" style={{ background: "rgba(0,48,135,0.06)" }}>
              <div className="p-8 flex flex-col justify-between" style={{ background: `${c.color}10` }}>
                <div>
                  <p className="font-montserrat text-5xl font-black mb-2" style={{ color: c.color }}>{c.short}</p>
                  <p className="text-[#F0EDE6] font-bold mb-2">{c.name}</p>
                  <p className="text-[#A8B89A] text-sm">{c.duration} • {c.fee}</p>
                </div>
                <div className="mt-6">
                  <p className="text-[#10B981] text-sm font-medium">✓ {c.placements}</p>
                  <p className="text-[#A8B89A] text-xs mt-1">{c.eligibility}</p>
                </div>
              </div>
              <div className="p-8 col-span-1 md:col-span-2">
                <p className="text-[#A8B89A] text-sm leading-relaxed mb-6">{c.desc}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">Highlights</p>
                    {c.highlights.map(h => <p key={h} className="text-[#A8B89A] text-xs mb-1">• {h}</p>)}
                  </div>
                  <div>
                    <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-2">Partner Banks</p>
                    <div className="flex flex-wrap gap-1">
                      {c.banks.map(b => <span key={b} className="text-xs px-2 py-1 rounded" style={{ background:`${c.color}20`, color:c.color }}>{b}</span>)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={`${WA_URL}?text=${encodeURIComponent(`I want to enroll in ${c.name} (${c.short})`)}`} target="_blank" rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-bold tracking-widest text-white hover:opacity-90 transition-opacity" style={{ background: c.color }}>
                    ENROLL NOW
                  </a>
                  <Link href={`/courses/${c.id}`} className="px-6 py-3 border text-sm tracking-widest transition-colors" style={{ borderColor:`${c.color}60`, color: c.color }}>
                    FULL DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
