"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroAnimationProps {
  onComplete: () => void
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const count = useCountUp(13200, 1000, phase >= 2)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1800)
    const t4 = setTimeout(() => { setVisible(false); }, 2300)
    const t5 = setTimeout(() => onComplete(), 2800)
    return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout) }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ipb-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "#003087" }}
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Bank building SVG */}
            <svg viewBox="0 0 80 70" width="100" height="88" className="text-white">
              {/* Columns */}
              {[14, 24, 34, 44, 54, 64].map((x, i) => (
                <motion.rect
                  key={i}
                  x={x}
                  y={22}
                  width={6}
                  height={30}
                  fill="white"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: phase >= 1 ? 1 : 0 }}
                  style={{ transformOrigin: `${x + 3}px 52px` }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                />
              ))}
              {/* Roof */}
              <motion.polygon
                points="5,22 40,2 75,22"
                fill="none"
                stroke="#F97316"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* Base */}
              <motion.rect
                x={5}
                y={52}
                width={70}
                height={6}
                fill="#F97316"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase >= 1 ? 1 : 0 }}
                style={{ transformOrigin: "40px 55px" }}
                transition={{ duration: 0.5 }}
              />
            </svg>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-[#F97316] font-bold text-4xl tracking-tight">{count.toLocaleString("en-IN")}+</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Students Placed</p>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 8 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-white font-bold text-2xl tracking-[0.3em] uppercase">IPB Kochi</p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: phase >= 3 ? 1 : 0 }}
                style={{ transformOrigin: "left center" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="h-0.5 bg-[#F97316] w-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
