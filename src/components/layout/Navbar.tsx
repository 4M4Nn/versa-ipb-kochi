"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/data"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#0A1628] text-white text-xs py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><MapPin size={12} />{SITE.address}</span>
              <span className="flex items-center gap-1"><Mail size={12} />{SITE.email}</span>
            </div>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1 hover:text-orange-400 transition-colors">
              <Phone size={12} />{SITE.phone}
            </a>
          </div>
        </div>

        <nav className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
                <span className="font-poppins font-bold text-2xl text-[#003087]">IPB</span>
                <span className="font-poppins font-bold text-2xl text-[#FF6B00]">Kochi</span>
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#003087] transition-colors rounded-md hover:bg-[#F8F9FA]">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-3">
                <a href="/#contact" className="bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
                  Apply Now
                </a>
              </div>

              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2.5 rounded-lg text-[#1A1A1A] hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-white md:hidden flex flex-col transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
            <span className="font-poppins font-bold text-2xl text-[#003087]">IPB</span>
            <span className="font-poppins font-bold text-2xl text-[#FF6B00]">Kochi</span>
          </Link>
          <button className="p-2.5 rounded-lg text-[#1A1A1A] hover:bg-gray-100" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-4 py-4 text-lg font-semibold text-[#1A1A1A] hover:text-[#003087] hover:bg-[#F8F9FA] rounded-xl transition-all min-h-[56px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 py-6 border-t border-gray-100 space-y-3 shrink-0">
          <a href="/#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full bg-[#FF6B00] text-white font-bold py-4 rounded-xl text-base hover:bg-[#e55f00] transition-colors min-h-[56px]">
            Apply Now
          </a>
          <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 w-full border-2 border-[#003087] text-[#003087] font-bold py-4 rounded-xl text-base hover:bg-[#F8F9FA] transition-colors min-h-[56px]">
            <Phone size={18} /> {SITE.phone}
          </a>
        </div>
      </div>
    </>
  )
}
