"use client"
import { motion } from "framer-motion"
import { recruiters, whyIPB } from "@/lib/data"
import { CheckCircle } from "lucide-react"

export default function IPBRecruiters() {
  return (
    <section className="py-24 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">Our Recruiting Partners</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-4">25+ Banks Hire Our Students</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">Direct partnerships with India&apos;s leading banks and financial institutions for guaranteed placements.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {recruiters.map((bank, i) => (
            <motion.span key={bank} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="px-4 py-2 bg-white/5 border border-[#C9A84C]/30 rounded-full text-white text-sm font-medium hover:bg-[#C9A84C]/10 transition-colors">
              {bank}
            </motion.span>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h3 className="font-playfair text-3xl font-bold text-white mb-2">Why Choose IPB?</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyIPB.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
              <CheckCircle size={20} className="text-[#C9A84C]" />
              <p className="text-white font-bold text-sm">{item.title}</p>
              <p className="text-blue-200 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
