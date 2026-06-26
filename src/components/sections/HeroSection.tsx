"use client"
import Link from "next/link"
import { WA_URL, TOTAL_PLACED } from "@/lib/data"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const dur = 2000, target = TOTAL_PLACED, steps = 60
    let i = 0
    const t = setInterval(() => {
      i++
      setCount(Math.round(target * Math.min(i / steps, 1)))
      if (i >= steps) clearInterval(t)
    }, dur / steps)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#0A1628] flex items-center overflow-hidden">
      {/* Animated bank columns background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(90deg, #003087 0, #003087 2px, transparent 0, transparent 80px)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-transparent to-[#0A1628]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(0,48,135,0.3)", border: "1px solid rgba(201,168,76,0.3)" }}>
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs text-[#C9A84C] tracking-widest uppercase">Kerala&apos;s #1 Banking Institute</span>
          </div>
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6">
            Your Banking Career<br/>Starts <span className="text-[#FF6B00]">Right Here</span><br/>in Kochi.
          </h1>
          <p className="text-[#A8B89A] text-lg leading-relaxed mb-8 max-w-lg">
            Over <strong className="text-[#C9A84C]">13,200 Kerala graduates</strong> have started their banking careers through IPB. Our focused programs, 25+ bank partnerships, and 100% placement assistance make us different.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/courses" className="px-8 py-4 bg-[#FF6B00] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#FF8533] transition-colors">View Courses</Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase hover:bg-[#C9A84C]/10 transition-colors">Free Counselling</a>
          </div>
          <div className="flex gap-6">
            {[["25+","Bank Partners"],["100%","Placement Help"],["4","Specialized Courses"]].map(([v,l]) => (
              <div key={l}>
                <p className="font-montserrat text-2xl font-bold text-[#C9A84C]">{v}</p>
                <p className="text-[#A8B89A] text-xs">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,48,135,0.4) 0%, transparent 70%)", animation: "pulse 3s ease-in-out infinite" }} />
            <div className="text-center">
              <p className="font-montserrat font-black text-[#C9A84C]" style={{ fontSize: "clamp(60px,10vw,96px)", lineHeight: 1 }}>{count.toLocaleString()}</p>
              <p className="text-[#A8B89A] text-sm tracking-widest uppercase mt-2">Students Placed</p>
              <p className="text-[#4A7C59] text-xs mt-1">And counting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
