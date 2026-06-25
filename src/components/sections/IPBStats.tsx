"use client"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { stats } from "@/lib/data"

function Counter({ target, suffix, isFloat }: { target: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current = Math.min(current + increment, target)
        setCount(current)
        if (current >= target) clearInterval(timer)
      }, duration / steps)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">{isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}</div>
}

export default function IPBStats() {
  return (
    <section className="py-20 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <Counter target={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              <p className="text-[#C9A84C] text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
