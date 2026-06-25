"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { banks } from "@/lib/data"
gsap.registerPlugin(ScrollTrigger)
export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".h-extra")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      const tl = gsap.timeline({ delay: 1.6 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.07, duration: 0.8, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" }, "-=0.3")
    }, sec)
    return () => ctx.revert()
  }, [])
  const marquee = [...banks, ...banks].join(" · ")
  return (
    <section ref={sec} id="hero" className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#003087] to-[#001A5C] overflow-hidden pt-20">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-20 max-w-5xl">
        <div className="h-extra overflow-hidden mb-6">
          <div className="word inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6B00] text-white text-xs font-poppins font-semibold rounded-full" style={{ opacity: 1 }}>
            INDIA&apos;S MOST TRUSTED BANKING INSTITUTE
          </div>
        </div>
        <h1 className="font-poppins text-white mb-6" style={{ fontSize: "clamp(48px,7vw,100px)", lineHeight: 1.05 }}>
          {["Launch", "Your", "Banking", "Career", "Today."].map((w, i) => (
            <span key={i} className="word-wrap"><span className="word">{w}{i < 4 ? " " : ""}</span></span>
          ))}
        </h1>
        <div className="h-extra overflow-hidden mb-10">
          <p className="word font-inter text-white/80" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 520 }}>
            Professional banking courses with 100% placement assistance. Join 13,200+ successful bankers.
          </p>
        </div>
        <div className="h-extra overflow-hidden mb-8">
          <div className="word flex flex-wrap gap-4">
            {["13,200+ Placed","100% Placement","ISO 9001:2015","NSDC Approved"].map(b => (
              <span key={b} className="flex items-center gap-2 text-white/90 text-sm font-inter">
                <span className="text-[#FF6B00]">✓</span>{b}
              </span>
            ))}
          </div>
        </div>
        <div className="h-extra overflow-hidden">
          <div className="word flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-poppins font-semibold text-sm transition-colors rounded-sm">Apply Now</a>
            <a href="#courses" className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white hover:bg-white/10 font-inter text-sm transition-all rounded-sm">Download Brochure</a>
          </div>
        </div>
      </div>
      {/* Ticker */}
      <div className="w-full overflow-hidden border-t border-white/10 py-3 bg-black/20">
        <div className="flex whitespace-nowrap" style={{ animation: "ticker 30s linear infinite" }}>
          <span className="text-white/50 text-xs font-inter tracking-widest">{marquee}</span>
          <span className="text-white/50 text-xs font-inter tracking-widest ml-8">{marquee}</span>
        </div>
      </div>
    </section>
  )
}
