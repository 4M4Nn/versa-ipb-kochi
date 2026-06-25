"use client"
import { useState } from "react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { courses, siteConfig } from "@/lib/data"
export default function ApplicationSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", city: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await saveLead({ name: form.name, phone: form.phone, email: form.email, service_interested: form.course, source_website: "ipb-kochi", message: form.message })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.course })
    setSent(true); setLoading(false)
  }
  const inp = "w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] outline-none text-white placeholder-white/30 py-3 font-inter text-base transition-colors"
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[#001A5C] to-[#003087] px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <p className="label text-[#FF6B00] mb-4" style={{ letterSpacing: "3px" }}>/ Start Today</p>
        <h2 className="font-poppins font-bold text-white mb-4" style={{ fontSize: "clamp(32px,5vw,60px)", lineHeight: 1.1 }}>Your banking career begins here.</h2>
        <p className="font-inter text-white/60 mb-12" style={{ fontSize: 18 }}>Free counselling session · Get admitted in 24 hours</p>
        {sent ? (
          <div className="bg-white/10 rounded-2xl p-12">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-poppins font-bold text-white text-2xl mb-2">Application Received!</h3>
            <p className="text-white/60 font-inter">Our counselor will contact you within 2 hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-6 text-left">
            <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inp} />
            <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inp} />
            <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inp} />
            <select value={form.course} onChange={e => setForm({...form, course: e.target.value})} className={inp + " bg-transparent"}>
              <option value="" className="bg-[#003087]">Select Course</option>
              {courses.map(c => <option key={c.id} value={c.short} className="bg-[#003087]">{c.short} — {c.duration}</option>)}
            </select>
            <input placeholder="Your City" value={form.city} onChange={e => setForm({...form, city: e.target.value})} className={inp} />
            <textarea placeholder="Any questions?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} className={inp + " resize-none"} />
            <button type="submit" disabled={loading} className="w-full h-14 bg-[#FF6B00] hover:bg-[#E55A00] text-white font-poppins font-bold text-base transition-colors disabled:opacity-70 rounded-sm">
              {loading ? "Sending..." : "Apply Now — Free Counselling"}
            </button>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full h-12 bg-[#25D366] text-white font-inter font-medium text-sm flex items-center justify-center rounded-sm">
              Chat on WhatsApp Instead
            </a>
          </form>
        )}
      </div>
    </section>
  )
}
