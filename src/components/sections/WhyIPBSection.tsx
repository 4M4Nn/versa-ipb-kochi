"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { whyIPB } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)

const ICONS: Record<string, string> = {
  "ISO 9001:2015":"🏅","NSDC Approved":"🏛️","Ex-Senior Bankers":"👔",
  "Interactive Training":"💻","Doubt Clearing":"❓","Latest Syllabus":"📚",
  "NISM Preparation":"📈","100% Placement":"✅"
}

export default function WhyIPBSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const cards = sec.current?.querySelectorAll(".why-card")
      if(!cards) return
      gsap.set(cards,{opacity:0,y:40,scale:.95})
      ScrollTrigger.create({trigger:sec.current,start:"top 70%",
        onEnter:()=>gsap.to(cards,{opacity:1,y:0,scale:1,stagger:0.07,duration:0.7,ease:"back.out(1.4)"})
      })
    },sec)
    return ()=>ctx.revert()
  },[])
  return (
    <section ref={sec} id="why" className="py-32 px-6 md:px-12 relative overflow-hidden" style={{ background:"#003087" }}>
      {/* Subtle financial pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage:"linear-gradient(rgba(255,107,0,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,.5) 1px,transparent 1px)", backgroundSize:"40px 40px" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="label text-[#FF6B00] mb-4" style={{ letterSpacing:"3px" }}>/ Why Choose IPB</p>
          <h2 className="font-poppins font-bold text-white" style={{ fontSize:"clamp(32px,5vw,60px)",lineHeight:1.1 }}>What makes us different.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyIPB.map((item,i)=>(
            <div key={item.title} className="why-card group p-6 rounded-xl border border-white/10 hover:border-[#FF6B00]/60 transition-all cursor-pointer relative overflow-hidden"
              style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(8px)" }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ background:"linear-gradient(135deg,rgba(255,107,0,0.08) 0%,transparent 100%)" }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl relative z-10"
                style={{ background:"rgba(255,107,0,0.15)", animation:`float ${2.5+i*0.2}s ease-in-out ${i*0.15}s infinite` }}>
                {ICONS[item.title] || "✓"}
              </div>
              <p className="font-poppins font-semibold text-white text-sm mb-2 relative z-10">{item.title}</p>
              <p className="font-inter text-white/50 text-xs leading-relaxed relative z-10">{item.desc}</p>
              {/* Progress bar for placement */}
              {item.title === "100% Placement" && (
                <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden relative z-10">
                  <div className="h-full bg-[#FF6B00] rounded-full" style={{ width:"100%", animation:"progress-fill 1.5s ease-out forwards", "--p":"100%"} as React.CSSProperties} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
