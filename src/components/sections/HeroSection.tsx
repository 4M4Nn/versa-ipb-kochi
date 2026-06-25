"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { banks } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)

function BankingVisual() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Bank building */}
      <div className="relative z-10">
        <div className="mx-auto relative" style={{ width: 140, height: 120, background: "#001A5C", borderRadius: "6px 6px 0 0", border: "2px solid rgba(255,107,0,0.3)" }}>
          {/* Windows */}
          {[[12,15,18,25],[55,15,18,25],[90,15,18,25],[12,55,18,25],[55,55,18,25],[90,55,18,25]].map(([l,t,w,h],i)=>(
            <div key={i} style={{ position:"absolute",left:l,top:t,width:w,height:h, background:"rgba(255,107,0,0.2)", border:"1px solid rgba(255,107,0,0.3)", animation:`glow-pulse ${1.5+i*0.2}s ease-in-out ${i*0.3}s infinite` }} />
          ))}
          {/* Door */}
          <div style={{ position:"absolute",bottom:0,left:50,width:40,height:45,background:"#FF6B00",borderRadius:"3px 3px 0 0",opacity:.8 }} />
          {/* Columns */}
          {[15,50,95].map((l,i)=>(
            <div key={i} style={{ position:"absolute",bottom:0,left:l,width:8,height:120,background:"rgba(255,255,255,0.06)" }} />
          ))}
        </div>
        {/* Base */}
        <div style={{ width:160,height:8,background:"linear-gradient(90deg,transparent,#FF6B00,transparent)",borderRadius:4 }} />
      </div>

      {/* Floating bank card */}
      <div className="absolute top-8 right-4 w-28 h-16 rounded-xl overflow-hidden shadow-xl"
        style={{ background: "linear-gradient(135deg, #003087 0%, #001A5C 100%)", border: "1px solid rgba(255,107,0,0.3)", animation: "float 4s ease-in-out 0.5s infinite", boxShadow: "0 8px 30px rgba(255,107,0,0.2)" }}>
        <div style={{ position:"absolute",top:6,left:8,width:16,height:12,background:"#FF6B00",borderRadius:2,opacity:.8 }} />
        <div className="absolute bottom-2 left-2 font-inter text-white/60" style={{ fontSize:7 }}>•••• •••• •••• 1234</div>
      </div>

      {/* 100% placement badge */}
      <div className="absolute bottom-10 right-2 flex flex-col items-center justify-center rounded-full border-4"
        style={{ width:80,height:80,borderColor:"#FF6B00",background:"#001A5C", animation:"pulseGlow 2s ease-in-out infinite" }}>
        <span className="font-poppins font-bold text-white" style={{ fontSize:16 }}>100%</span>
        <span className="font-inter text-white/60" style={{ fontSize:8 }}>PLACEMENT</span>
      </div>

      {/* Orbiting icons */}
      {["📊","🏦","📋","🎓"].map((icon,i)=>(
        <div key={i} className="absolute text-xl" style={{ left:"50%",top:"50%",
          animation:`orbit ${6+i*1.5}s linear ${i*1.5}s infinite`,
          "--r":`${90+i*20}px`} as React.CSSProperties}>
          {icon}
        </div>
      ))}

      {/* Orange glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse at center, rgba(255,107,0,0.06) 0%, transparent 70%)", animation:"glow-pulse 3s ease-in-out infinite" }} />
    </div>
  )
}

export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".h-extra")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      const tl = gsap.timeline({ delay: 2.8 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.07, duration: 0.8, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" }, "-=0.3")
    }, sec)
    return () => ctx.revert()
  }, [])
  const marquee = [...banks, ...banks].join(" · ")
  return (
    <section ref={sec} id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, #003087 0%, #001A5C 100%)" }}>
      {/* Grid BG */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage:"linear-gradient(rgba(255,107,0,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,.3) 1px, transparent 1px)", backgroundSize:"50px 50px" }} />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 md:px-12 py-16 items-center">
        {/* Left */}
        <div>
          <div className="h-extra overflow-hidden mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6B00] text-white text-xs font-poppins font-semibold rounded-full">
              INDIA&apos;S MOST TRUSTED BANKING INSTITUTE
            </div>
          </div>
          <h1 className="font-poppins text-white mb-6" style={{ fontSize:"clamp(44px,6.5vw,90px)", lineHeight:1.05 }}>
            {["Launch","Your","Banking","Career","Today."].map((w,i)=>(
              <span key={i} className="word-wrap"><span className="word">{w}{i<4?" ":""}</span></span>
            ))}
          </h1>
          <div className="h-extra overflow-hidden mb-8">
            <p className="font-inter text-white/80" style={{ fontSize:18,lineHeight:1.7,maxWidth:480 }}>
              Professional banking courses with 100% placement assistance. Join 13,200+ successful bankers.
            </p>
          </div>
          <div className="h-extra overflow-hidden mb-8">
            <div className="flex flex-wrap gap-3">
              {["13,200+ Placed","100% Placement","ISO 9001:2015","NSDC Approved"].map(b=>(
                <span key={b} className="flex items-center gap-2 text-white/90 text-sm font-inter">
                  <span className="text-[#FF6B00]">✓</span>{b}
                </span>
              ))}
            </div>
          </div>
          <div className="h-extra overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-poppins font-semibold text-sm rounded-sm transition-colors">Apply Now</a>
              <a href="#courses" className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-inter text-sm rounded-sm transition-all">View Courses</a>
            </div>
          </div>
        </div>
        {/* Right — animated banking visual */}
        <div className="hidden md:block"><BankingVisual /></div>
      </div>

      {/* Ticker */}
      <div className="w-full overflow-hidden border-t border-white/10 py-3 bg-black/20">
        <div className="flex whitespace-nowrap" style={{ animation:"ticker 30s linear infinite" }}>
          <span className="text-white/50 text-xs font-inter tracking-widest">{marquee}</span>
          <span className="text-white/50 text-xs font-inter tracking-widest ml-8">{marquee}</span>
        </div>
      </div>
    </section>
  )
}
