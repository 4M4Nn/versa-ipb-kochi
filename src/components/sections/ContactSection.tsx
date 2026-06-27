"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { SITE, COURSES } from "@/lib/data"
import { saveLead, openWhatsApp } from "@/lib/supabase"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit mobile required"
    if (!form.message.trim()) e.message = "Message is required"
    return e
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setStatus("loading")
    try {
      await saveLead({ ...form, source: "ipb-kochi", created_at: new Date().toISOString() })
      setStatus("success")
      setForm({ name: "", email: "", phone: "", course: "", message: "" })
    } catch { setStatus("error") }
  }

  return (
    <section id="contact" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">Admissions</p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0A1628]">Apply Now</h2>
          <p className="text-[#6B7280] mt-4 max-w-lg mx-auto">Seats are limited. Fill in your details and our admissions team will call you back within 2 hours.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-sm transition-all">
              <div className="w-11 h-11 bg-[#FFF3EC] rounded-xl flex items-center justify-center shrink-0"><Phone size={20} className="text-[#FF6B00]" /></div>
              <div><p className="text-xs text-[#6B7280] mb-0.5">Phone</p><p className="font-semibold text-[#0A1628] text-sm">{SITE.phone}</p></div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-sm transition-all">
              <div className="w-11 h-11 bg-[#FFF3EC] rounded-xl flex items-center justify-center shrink-0"><Mail size={20} className="text-[#FF6B00]" /></div>
              <div><p className="text-xs text-[#6B7280] mb-0.5">Email</p><p className="font-semibold text-[#0A1628] text-sm">{SITE.email}</p></div>
            </a>
            <button onClick={() => openWhatsApp()} className="flex items-center gap-4 bg-[#25D366] rounded-xl p-5 hover:bg-[#1ebe57] transition-colors text-left">
              <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0"><MessageCircle size={20} className="text-white" /></div>
              <div><p className="text-xs text-green-100 mb-0.5">WhatsApp</p><p className="font-semibold text-white text-sm">Chat with admissions</p></div>
            </button>
            <div className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-[#FFF3EC] rounded-xl flex items-center justify-center shrink-0"><MapPin size={20} className="text-[#FF6B00]" /></div>
              <div><p className="text-xs text-[#6B7280] mb-0.5">Address</p><p className="font-semibold text-[#0A1628] text-sm">{SITE.address}</p></div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-[#FFF3EC] rounded-full flex items-center justify-center mb-5"><Phone size={28} className="text-[#FF6B00]" /></div>
                <h3 className="font-poppins text-2xl font-bold text-[#0A1628] mb-2">Application Received!</h3>
                <p className="text-[#6B7280]">Our admissions team will call you back within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input type="tel" placeholder="Phone (10 digits)" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <select value={form.course} onChange={(e) => setForm(f => ({ ...f, course: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" style={{ color: form.course ? "#1A1A1A" : "#9CA3AF" }}>
                  <option value="">Select Course (optional)</option>
                  {COURSES.map(c => <option key={c.id}>{c.name}</option>)}
                </select>
                <div>
                  <textarea placeholder="Your message or questions..." rows={3} value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors resize-none" />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please WhatsApp us.</p>}
                <button type="submit" disabled={status === "loading"} className="w-full py-3.5 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-semibold rounded-lg transition-colors disabled:opacity-50">
                  {status === "loading" ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
