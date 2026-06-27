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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#0A1628] text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {SITE.address}
            </span>
            <span className="flex items-center gap-1">
              <Mail size={12} />
              {SITE.email}
            </span>
          </div>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-1 hover:text-orange-400 transition-colors"
          >
            <Phone size={12} />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-poppins font-bold text-2xl text-[#003087]">
                IPB
              </span>
              <span className="font-poppins font-bold text-2xl text-[#FF6B00]">
                Kochi
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#003087] transition-colors rounded-md hover:bg-[#F8F9FA]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/#contact"
                className="bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1A1A1A] hover:text-[#003087] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[#1A1A1A] hover:text-[#003087] hover:bg-[#F8F9FA] rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
