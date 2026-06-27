import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, Check, ArrowRight } from "lucide-react"
import { COURSES, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Banking Courses & Programs",
  description: "Explore all banking courses at IPB Kochi — CBFS, PO Program, HTD DCB, and Equitas IGNITE. 100% placement support.",
}

export default function CoursesPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-16 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Programs</p>
        <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">Banking Courses</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Every program comes with 100% placement support and industry-expert mentoring.</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {COURSES.map((course, i) => (
            <div key={course.id} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image src={course.image} alt={course.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full">
                    <Clock size={12} /> {course.duration}
                  </span>
                </div>
              </div>
              <div>
                <div className="w-10 h-1 rounded-full mb-4" style={{ backgroundColor: course.color }} />
                <h2 className="font-poppins text-2xl font-bold text-[#0A1628] mb-3">{course.name}</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-[#374151]">
                      <Check size={15} className="text-[#FF6B00] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Apply for This Course <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#003087] text-center text-white">
        <h2 className="font-poppins text-3xl font-bold mb-4">Not sure which course to choose?</h2>
        <p className="text-blue-200 mb-8 max-w-lg mx-auto">Our counselors will guide you to the right program based on your background and goals.</p>
        <Link href="/#contact" className="inline-block bg-[#FF6B00] hover:bg-[#e55f00] text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Book Free Counseling
        </Link>
      </section>
    </div>
  )
}
