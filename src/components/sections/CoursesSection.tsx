import Link from "next/link"
import { COURSES } from "@/lib/data"

export default function CoursesSection() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR PROGRAMS</p>
          <h2 className="font-montserrat text-4xl font-bold text-[#F0EDE6]">Four Ways to Your Banking Career</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {COURSES.map(c => (
            <div key={c.id} className="glass-card rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-all border border-transparent">
              <div className="flex items-center justify-between mb-4">
                <span className="font-montserrat text-2xl font-black" style={{ color: c.color }}>{c.short}</span>
                <div className="text-right">
                  <span className="text-[#A8B89A] text-xs">{c.duration}</span>
                  <p className="font-bold text-[#C9A84C]">{c.fee}</p>
                </div>
              </div>
              <h3 className="font-montserrat text-lg font-bold text-[#F0EDE6] mb-2">{c.name}</h3>
              <p className="text-[#A8B89A] text-sm leading-relaxed mb-4">{c.desc.substring(0, 160)}...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.banks.slice(0,4).map(b => <span key={b} className="text-xs px-2 py-1 rounded" style={{ background: `${c.color}20`, color: c.color }}>{b}</span>)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#10B981] text-sm font-medium">✓ {c.placements}</span>
                <Link href={`/courses/${c.id}`} className="text-xs tracking-widest text-[#C9A84C] hover:underline">DETAILS →</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/courses" className="inline-block px-10 py-4 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase hover:bg-[#C9A84C]/10 transition-colors">View All Courses</Link>
        </div>
      </div>
    </section>
  )
}
