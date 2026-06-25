"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { whyIPB } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)
export default function WhyIPBSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sec.current?.querySelectorAll(".why-card")
      if (!cards) return
      gsap.set(cards, { opacity: 0, y: 30 })
      ScrollTrigger.create({
        trigger: sec.current, start: "top 70%",
        onEnter: () => gsap.to(cards, { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: "power3.out" })
      })
    }, sec)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sec} id="why" className="py-32 bg-[#003087] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="label text-[#FF6B00] mb-4" style={{ letterSpacing: "3px" }}>/ Why Choose IPB</p>
          <h2 className="font-poppins font-bold text-white" style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1 }}>What makes us different.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyIPB.map(item => (
            <div key={item.title} className="why-card p-6 rounded-xl border border-white/10 hover:border-[#FF6B00]/50 transition-colors bg-white/5">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/20 flex items-center justify-center mb-4">
                <span className="text-[#FF6B00] text-lg">✓</span>
              </div>
              <p className="font-poppins font-semibold text-white text-sm mb-1">{item.title}</p>
              <p className="font-inter text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
