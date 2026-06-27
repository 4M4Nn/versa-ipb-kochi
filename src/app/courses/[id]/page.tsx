import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Check } from "lucide-react"
import { COURSES, SITE } from "@/lib/data"

export async function generateStaticParams() {
  return COURSES.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const course = COURSES.find((c) => c.id === id)
  if (!course) return { title: "Course Not Found" }
  return { title: course.name, description: course.description }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = COURSES.find((c) => c.id === id)
  if (!course) notFound()

  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(`Hi, I'd like to apply for ${course.name} at IPB Kochi.`)}`

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/courses" className="inline-flex items-center gap-2 text-[#FF6B00] text-sm font-medium hover:gap-3 transition-all">
          <ArrowLeft size={16} /> All Courses
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image src={course.image} alt={course.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="flex items-center gap-1 bg-white/20 backdrop-blur text-white text-sm px-3 py-1.5 rounded-full">
              <Clock size={14} /> {course.duration}
            </span>
          </div>
        </div>

        <div className="w-10 h-1 rounded-full mb-4" style={{ backgroundColor: course.color }} />
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">{course.name}</h1>
        <p className="text-[#6B7280] text-lg leading-relaxed mb-8">{course.description}</p>

        <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-8">
          <h2 className="font-poppins text-xl font-bold text-[#0A1628] mb-4">Program Highlights</h2>
          <ul className="space-y-3">
            {course.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-[#374151]">
                <Check size={18} className="text-[#FF6B00] shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#003087] rounded-2xl p-8 text-center text-white">
          <h3 className="font-poppins text-2xl font-bold mb-3">Ready to Apply?</h3>
          <p className="text-blue-200 mb-6">Seats are limited. Apply today to secure your spot.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FF6B00] hover:bg-[#e55f00] text-white font-bold px-8 py-4 rounded-lg transition-colors">
            Apply via WhatsApp
          </a>
        </div>
      </article>
    </div>
  )
}
