import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { COURSES, WA_URL } from "@/lib/data"

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return COURSES.map(c => ({ id: c.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const c = COURSES.find(x => x.id === id)
  if (!c) return {}
  return { title: `${c.name} (${c.short}) — ${c.duration} | IPB Kochi`, description: c.desc.substring(0, 160) }
}

export default async function CourseDetailPage({ params }: Props) {
  const { id } = await params
  const c = COURSES.find(x => x.id === id)
  if (!c) notFound()
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/courses" className="text-[#C9A84C] text-xs tracking-widest uppercase mb-8 inline-block hover:underline">← ALL COURSES</Link>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="font-montserrat text-6xl font-black mb-2" style={{ color: c.color }}>{c.short}</p>
            <h1 className="font-montserrat text-3xl font-bold text-[#F0EDE6] mb-3">{c.name}</h1>
            <p className="text-[#A8B89A] text-sm mb-1">{c.duration} • {c.fee} • {c.eligibility}</p>
            <p className="text-[#10B981] text-sm mb-6">✓ {c.placements}</p>
            <p className="text-[#A8B89A] leading-relaxed mb-6">{c.desc}</p>
            <div className="glass-card rounded-xl p-6 mb-6">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Course Highlights</p>
              {c.highlights.map(h => <p key={h} className="text-[#A8B89A] text-sm mb-2">✓ {h}</p>)}
            </div>
            <div className="glass-card rounded-xl p-6">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Partner Banks</p>
              <div className="flex flex-wrap gap-2">{c.banks.map(b => <span key={b} className="px-3 py-1.5 rounded text-sm" style={{ background:`${c.color}20`, color:c.color }}>{b}</span>)}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-6" style={{ borderColor: `${c.color}40`, borderWidth: 1 }}>
              <p className="font-montserrat text-3xl font-bold mb-1" style={{ color: c.color }}>{c.fee}</p>
              <p className="text-[#A8B89A] text-sm mb-4">{c.duration} program</p>
              <a href={`${WA_URL}?text=${encodeURIComponent(`I want to enroll in ${c.name}`)}`} target="_blank" rel="noopener noreferrer"
                className="block w-full py-4 text-center text-white font-bold text-sm tracking-widest hover:opacity-90 transition-opacity" style={{ background: c.color }}>
                ENROLL NOW
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full py-3 text-center border text-sm tracking-widest mt-3 hover:bg-white/5 transition-colors" style={{ borderColor:`${c.color}60`, color:c.color }}>
                FREE COUNSELLING
              </a>
            </div>
            <div className="glass-card rounded-xl p-5 text-center">
              <p className="text-[#F0EDE6] font-bold text-2xl">{c.placements.split(" ")[0]}</p>
              <p className="text-[#A8B89A] text-xs">Total Placements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
