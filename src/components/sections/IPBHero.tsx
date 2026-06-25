"use client"
import { motion } from "framer-motion"
import { GraduationCap, Award, Users } from "lucide-react"

export default function IPBHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#1B2A4A] rounded-full blur-3xl" />
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-[#C9A84C]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0, 0.6, 0] }} transition={{ duration: 3 + Math.random() * 2, delay: Math.random() * 3, repeat: Infinity }} />
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs tracking-widest font-medium uppercase">Kerala&apos;s Premier Banking Institute</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Banking<br /><span className="text-[#C9A84C]">Career</span> Starts<br />Here.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="text-blue-200 text-lg leading-relaxed mb-10 max-w-lg">
              ISO 9001:2015 certified. NSDC approved. 13,200+ students placed in 25+ leading banks across India. Join Kerala&apos;s most trusted banking training institute.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#C9A84C] hover:bg-[#F5D78E] text-[#0A1628] rounded-full font-bold transition-all duration-300 text-center">Apply Now — Free Counselling</a>
              <a href="#courses" className="px-8 py-4 border border-white/30 hover:border-[#C9A84C] text-white rounded-full font-medium transition-all duration-300 text-center">View Courses</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, value: "13,200+", label: "Students Placed", color: "#C9A84C" },
              { icon: Award, value: "25+", label: "Recruiting Banks", color: "#8FBC5A" },
              { icon: GraduationCap, value: "34", label: "Centers Pan-India", color: "#C9A84C" },
              { icon: Award, value: "2.6 LPA", label: "Avg Package", color: "#8FBC5A" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#C9A84C]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-blue-300 text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
