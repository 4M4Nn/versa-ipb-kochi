"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
export default function LoadingScreen() {
  const wrap = useRef<HTMLDivElement>(null)
  const buildingRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setGone(true) })
      gsap.set([buildingRef.current, textRef.current, subRef.current], { opacity: 0, y: 30 })
      tl.to(buildingRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .to(textRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.2")
        .to(lineRef.current, { width: "100%", duration: 0.5, ease: "power2.out" }, "-=0.1")
        .to(counterRef.current, { innerText: 13200, snap: { innerText: 100 }, duration: 1.2, ease: "power2.inOut" }, "-=0.3")
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.5")
        .to(wrap.current, { opacity: 0, duration: 0.5, ease: "power2.in" }, "+=0.5")
    })
    return () => ctx.revert()
  }, [])
  if (gone) return null
  return (
    <div ref={wrap} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center" style={{ background: "#003087" }}>
      {/* Banking building (CSS geometric) */}
      <div ref={buildingRef} className="mb-8 relative">
        <div className="mx-auto" style={{ width: 80, height: 70, background: "#001A5C", borderRadius: "4px 4px 0 0", border: "2px solid rgba(255,107,0,0.4)", position: "relative" }}>
          {[[10,15,12,20],[35,15,12,20],[10,45,12,20],[35,45,12,20]].map(([l,t,w,h],i) => (
            <div key={i} style={{ position: "absolute", left: l, top: t, width: w, height: h, background: "rgba(255,107,0,0.3)", animation: `glow-pulse ${1+i*0.3}s ease-in-out ${i*0.2}s infinite` }} />
          ))}
          <div style={{ position: "absolute", bottom: 0, left: 25, width: 30, height: 28, background: "#FF6B00", borderRadius: "2px 2px 0 0", opacity: 0.9 }} />
        </div>
        <div style={{ width: 100, height: 6, background: "linear-gradient(90deg, transparent, #FF6B00, transparent)", marginTop: 2 }} />
      </div>
      <div ref={textRef} className="text-center">
        <div className="font-poppins font-bold text-white mb-2" style={{ fontSize: 32, letterSpacing: "0.1em" }}>IPB <span style={{ color: "#FF6B00" }}>KOCHI</span></div>
        <span ref={lineRef} className="block h-0.5 bg-[#FF6B00] mx-auto mb-4" style={{ width: 0 }} />
      </div>
      <div ref={subRef} className="text-center opacity-0">
        <span ref={counterRef} className="font-poppins font-bold" style={{ fontSize: 48, color: "#FF6B00" }}>0</span>
        <p className="font-inter text-white/60 text-sm mt-1">Students Successfully Placed</p>
      </div>
    </div>
  )
}
