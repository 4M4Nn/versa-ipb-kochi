"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { courses } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)

function CourseCard({ c }: { c: typeof courses[0] }) {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".c-extra")
      if (!words) return
      gsap.set([words, extras ?? []], { y: 50, opacity: 0 })
      ScrollTrigger.create({
        trigger: sec.current, start: "top 75%",
        onEnter: () => {
          gsap.to(words, { y: 0, opacity: 1, stagger: 0.07, duration: 0.9, ease: "power4.out" })
          gsap.to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out", delay: 0.3 })
        }
      })
    }, sec)
    return () => ctx.revert()
  }, [])
  const dark = !c.textDark
  const textClr = c.textDark ? "#1A1A2E" : "#FFFFFF"
  const mutedClr = c.textDark ? "#64748B" : "rgba(255,255,255,0.7)"
  return (
    <section ref={sec} id={`course-${c.id}`} className="min-h-screen flex items-center overflow-hidden px-6 md:px-16 py-24" style={{ background: c.bg }}>
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="word-wrap mb-4"><span className="word label" style={{ color: "#FF6B00", letterSpacing: "3px" }}>{c.num} / {c.duration} Program</span></div>
          <h2 className="font-poppins font-bold mb-4" style={{ fontSize: "clamp(32px,5vw,64px)", lineHeight: 1.05, color: textClr }}>
            {c.name.split(" ").map((w, i) => <span key={i} className="word-wrap"><span className="word">{w} </span></span>)}
          </h2>
          <div className="c-extra">
            <p className="font-poppins font-semibold text-2xl mb-6" style={{ color: "#FF6B00" }}>{c.salary}</p>
            <ul className="space-y-3 mb-8">
              {c.highlights.map(h => (
                <li key={h} className="flex items-center gap-3 font-inter text-sm" style={{ color: mutedClr }}>
                  <span className="text-[#FF6B00] flex-shrink-0">✓</span>{h}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center px-7 py-3.5 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-poppins font-semibold text-sm transition-colors rounded-sm">Apply for This Program →</a>
          </div>
        </div>
        <div className="c-extra flex items-center justify-center min-h-[200px] rounded-2xl" style={{ background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,48,135,0.05)", border: "1px solid rgba(255,107,0,0.2)" }}>
          <div className="text-center p-10">
            <div className="font-poppins font-bold text-6xl text-[#FF6B00] mb-2">{c.num}</div>
            <p className="font-inter text-sm" style={{ color: mutedClr, letterSpacing: "2px" }}>{c.short.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CoursesSection() {
  return <div id="courses">{courses.map(c => <CourseCard key={c.id} c={c} />)}</div>
}
