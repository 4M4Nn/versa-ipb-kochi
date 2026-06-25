"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [{ label: "Home", href: "#hero" }, { label: "Courses", href: "#courses" }, { label: "Placements", href: "#recruiters" }, { label: "Contact", href: "#contact" }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", fn); fn()
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`} style={{ height: 64 }}>
        <a href="#" className="font-poppins font-bold text-xl text-[#003087] tracking-tight">IPB <span className="text-[#FF6B00]">KOCHI</span></a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => <a key={l.href} href={l.href} className="text-sm text-[#64748B] hover:text-[#003087] transition-colors font-inter">{l.label}</a>)}
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-poppins font-semibold text-sm transition-colors rounded-sm">Apply Now</a>
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-[#003087]" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-[#003087]" />
          <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-[#003087]" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed inset-x-0 top-16 z-40 bg-white shadow-lg px-6 py-6 flex flex-col gap-4 border-t border-gray-100">
            {[...links, { label: "Apply Now", href: "#contact" }].map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-poppins text-[#1A1A2E] hover:text-[#FF6B00] transition-colors">{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
