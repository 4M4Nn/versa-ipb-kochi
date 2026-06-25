"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { statement } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)
export default function StatementSection() {
  const sec = useRef<HTMLElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const tagRef = useRef<HTMLDivElement>(null)
  const words = statement.split(" ")
  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      const wEls = wordsRef.current.filter(Boolean)
      gsap.set(wEls, { color: "rgba(255,255,255,0.08)" })
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: sec.current, start: "top top", end: `+=${words.length * 60}`, pin: true, pinSpacing: true, scrub: 1.5 } })
        tl.to(wEls, { color: "#ffffff", stagger: { each: 0.04 }, ease: "none" })
          .from(tagRef.current, { opacity: 0, y: 20, duration: 1 }, "-=0.5")
        return () => {}
      })
      mm.add("(max-width: 767px)", () => {
        gsap.to(wEls, { color: "#ffffff", stagger: { each: 0.06 }, scrollTrigger: { trigger: sec.current, start: "top 70%", end: "bottom 30%", scrub: 1 } })
        return () => {}
      })
    }, sec)
    return () => { ctx.revert(); mm.revert() }
  }, [words.length])
  return (
    <section ref={sec} className="relative min-h-screen flex flex-col items-center justify-center bg-[#003087] overflow-hidden px-6 md:px-12">
      <div className="relative z-10 max-w-3xl text-center">
        <p className="font-poppins font-semibold leading-relaxed" style={{ fontSize: "clamp(22px,3.5vw,42px)" }}>
          {words.map((w, i) => <span key={i} ref={el => { if (el) wordsRef.current[i] = el }} className="inline-block mr-[0.28em]">{w}</span>)}
        </p>
        <div ref={tagRef} className="mt-10 flex flex-col items-center gap-3 opacity-0">
          <div className="w-24 h-0.5 bg-[#FF6B00]" />
          <p className="label text-[#FF6B00]" style={{ letterSpacing: "3px" }}>— IPB Kochi</p>
        </div>
      </div>
    </section>
  )
}
