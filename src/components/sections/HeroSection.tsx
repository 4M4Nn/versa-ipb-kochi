import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SITE, STATS } from "@/lib/data"

export default function HeroSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="bg-[#0A1628] text-white py-20 px-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#003087] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            India&apos;s Premier Banking Institute
          </span>
          <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build Your Banking Career with India&apos;s{" "}
            <span className="text-[#FF6B00]">#1 Institute</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            13,200+ students placed in top banks. 100% placement support. Industry-expert faculty. Start your banking journey today.
          </p>
          <ul className="space-y-2 mb-8">
            {["NSDC Approved Certifications", "Guaranteed Bank Placement", "25+ Banking Partners", "8+ Years of Excellence"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#courses"
              className="flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              View Courses <ArrowRight size={18} />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Apply on WhatsApp
            </a>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#FF6B00]/30 transition-colors">
              <p className="font-poppins text-4xl font-bold text-[#FF6B00] mb-1">
                {stat.value.toLocaleString("en-IN")}{stat.suffix}
              </p>
              <p className="text-gray-400 text-xs tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
