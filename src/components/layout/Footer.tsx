"use client"
import { siteConfig, courses } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#001A5C] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-poppins font-bold text-xl text-white mb-3">IPB <span className="text-[#FF6B00]">KOCHI</span></p>
            <p className="text-white/50 text-sm font-inter leading-relaxed">Kerala&apos;s most trusted banking training institute. Part of Versa Growth Ventures.</p>
          </div>
          <div>
            <p className="label text-[#FF6B00] mb-4">Courses</p>
            <ul className="space-y-2">{courses.map(c => <li key={c.id}><a href="#courses" className="text-sm text-white/50 hover:text-white transition-colors font-inter">{c.short}</a></li>)}</ul>
          </div>
          <div>
            <p className="label text-[#FF6B00] mb-4">Quick Links</p>
            <ul className="space-y-2">{[["Placements","#recruiters"],["Why IPB","#why"],["Apply Now","#contact"]].map(([l,h]) => <li key={l}><a href={h} className="text-sm text-white/50 hover:text-white transition-colors font-inter">{l}</a></li>)}</ul>
          </div>
          <div>
            <p className="label text-[#FF6B00] mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-white/50 font-inter">
              <li>{siteConfig.phone}</li><li>{siteConfig.email}</li><li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-white/25 font-inter">© {new Date().getFullYear()} IPB Kochi | Part of Versa Growth Ventures</p>
          <p className="text-xs text-white/25 font-inter">Designed by Loopgen Technologies</p>
        </div>
      </div>
    </footer>
  )
}
