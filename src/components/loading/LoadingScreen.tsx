"use client"
import { useEffect, useState } from "react"

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState(0)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("ipb-intro")) {
      onDone?.(); setDone(true); return
    }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 800)
    const t3 = setTimeout(() => {
      setPhase(3)
      const dur = 1800, target = 13200, steps = 60
      let i = 0
      const interval = setInterval(() => {
        i++
        setCount(Math.round(target * Math.min(i / steps, 1)))
        if (i >= steps) clearInterval(interval)
      }, dur / steps)
    }, 1200)
    const t4 = setTimeout(() => {
      setVisible(false)
      setTimeout(() => { sessionStorage.setItem("ipb-intro","1"); onDone?.(); setDone(true) }, 700)
    }, 3600)
    return () => [t1,t2,t3,t4].forEach(clearTimeout)
  }, [onDone])

  if (done) return null

  return (
    <div style={{
      position:"fixed",inset:0,background:"#0A1628",zIndex:9999,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      transition:"opacity 0.7s ease",opacity:visible?1:0,gap:24
    }}>
      {/* Building icon */}
      <div style={{ opacity: phase >= 1 ? 1 : 0, transition:"opacity 0.5s", display:"flex", flexDirection:"column", gap:4 }}>
        {[4,6,8,6,4].map((w,i)=>(
          <div key={i} style={{ height:10, width: w*10, background:"linear-gradient(90deg,#003087,#C9A84C)", borderRadius:2,
            transform: phase >= 1 ? "scaleX(1)" : "scaleX(0)", transition:`transform 0.5s ${i*0.1}s`, transformOrigin:"left" }} />
        ))}
      </div>
      {/* IPB text */}
      <div style={{ opacity: phase >= 2 ? 1 : 0, transition:"opacity 0.5s", textAlign:"center" }}>
        <p style={{ fontSize:52, fontWeight:900, color:"#003087", letterSpacing:"0.2em", fontFamily:"serif" }}>IPB</p>
        <p style={{ fontSize:13, color:"#C9A84C", letterSpacing:"0.4em", textTransform:"uppercase" }}>INSTITUTE OF PROFESSIONAL BANKING</p>
      </div>
      {/* Counter */}
      {phase >= 3 && (
        <div style={{ textAlign:"center" }}>
          <p style={{ fontSize:42, fontWeight:900, color:"#C9A84C", fontFamily:"serif" }}>{count.toLocaleString()}+</p>
          <p style={{ fontSize:11, color:"rgba(255,255,255,0.6)", letterSpacing:"0.3em", textTransform:"uppercase" }}>Students Placed</p>
        </div>
      )}
    </div>
  )
}
