"use client"
import { banks } from "@/lib/data"
const row1 = banks.slice(0, 9)
const row2 = banks.slice(9)
export default function RecruitersSection() {
  return (
    <section id="recruiters" className="py-32 bg-[#F5F7FA] overflow-hidden px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="label text-[#FF6B00] mb-4" style={{ letterSpacing: "3px" }}>/ Our Recruiters</p>
        <h2 className="font-poppins font-bold text-[#1A1A2E]" style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1 }}>
          25+ Leading Banks<br />Hire From IPB
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {[row1, row2].map((row, ri) => (
          <div key={ri} className="overflow-hidden">
            <div className="flex gap-3 whitespace-nowrap" style={{ animation: `ticker ${ri === 0 ? "25s" : "20s"} linear infinite ${ri === 1 ? "reverse" : ""}` }}>
              {[...row, ...row, ...row].map((b, i) => (
                <span key={i} className="inline-block px-5 py-2.5 border border-[#003087]/20 text-[#003087] text-sm font-inter font-medium rounded-full hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors flex-shrink-0">{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
