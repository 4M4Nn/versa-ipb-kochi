import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Check } from "lucide-react"
import { COURSES } from "@/lib/data"

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">Programs</p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0A1628]">Banking Courses & Programs</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">
            Every program is designed with industry input and comes with 100% placement support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-transparent transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur text-white text-xs px-2.5 py-1 rounded-full">
                    <Clock size={12} /> {course.duration}
                  </span>
                  <div className="w-5 h-1 rounded-full" style={{ backgroundColor: course.color }} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-lg font-bold text-[#0A1628] mb-2">{course.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{course.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-[#374151]">
                      <Check size={13} className="text-[#FF6B00] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6B7280]">{course.fee}</span>
                  <Link
                    href="/#contact"
                    className="flex items-center gap-1 text-sm font-semibold text-[#FF6B00] hover:gap-2 transition-all"
                  >
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 border border-[#003087] text-[#003087] font-semibold px-7 py-3 rounded-lg hover:bg-[#003087] hover:text-white transition-colors"
          >
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
