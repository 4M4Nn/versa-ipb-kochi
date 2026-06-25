"use client"
import { motion } from "framer-motion"
import { courses } from "@/lib/data"
import { CheckCircle } from "lucide-react"

export default function IPBCourses() {
  return (
    <section id="courses" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">Our Programs</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Banking Career Programs</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">Choose from our industry-leading programs with guaranteed bank placements and direct partnerships.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{course.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-[#C9A84C] text-sm font-medium">{course.duration}</span>
                    <span className="text-green-400 text-sm font-bold">{course.salary}</span>
                  </div>
                </div>
                <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: course.color }} />
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">{course.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {course.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-blue-200">
                    <CheckCircle size={14} className="text-[#C9A84C] flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 block w-full text-center py-3 rounded-xl font-medium text-[#0A1628] transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: course.color }}>
                Apply for This Program →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
