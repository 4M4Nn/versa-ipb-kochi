"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { Phone, Mail, MapPin } from "lucide-react"

export default function IPBContact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    await saveLead({ name: form.name, phone: form.phone, email: form.email, service_interested: form.course, source_website: "ipb-kochi" })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.course })
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Start Your Banking Career Today</h2>
          <p className="text-blue-200 text-lg">Free counselling session. Get admitted in 24 hours.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {sent ? (
              <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-3xl p-12 text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-blue-200">Our counselor will contact you within 2 hours. Check WhatsApp!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-4">
                <h3 className="text-white font-bold text-xl mb-2">Apply for Free Counselling</h3>
                <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-[#C9A84C] transition-colors" />
                <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-[#C9A84C] transition-colors" />
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-[#C9A84C] transition-colors" />
                <select value={form.course} onChange={e => setForm({...form, course: e.target.value})}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#C9A84C] transition-colors">
                  <option value="">Course of Interest</option>
                  <option>CBFS — Certified Banking & Finance Specialist</option>
                  <option>PO Program — Utkarsh Small Finance Bank</option>
                  <option>HTD Program — DCB Bank</option>
                  <option>Equitas IGNITE Program</option>
                </select>
                <button type="submit" className="py-4 bg-[#C9A84C] hover:bg-[#F5D78E] text-[#0A1628] rounded-xl font-bold transition-all duration-300">
                  Book Free Counselling →
                </button>
              </form>
            )}
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
            {[
              { icon: Phone, label: "Admissions Helpline", value: "+91 8891129111" },
              { icon: Mail, label: "Email", value: "info@ipbkochi.com" },
              { icon: MapPin, label: "Location", value: "Kochi, Kerala, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="w-11 h-11 rounded-xl bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-blue-300 text-xs uppercase tracking-wider">{label}</p>
                  <p className="text-white font-medium text-sm">{value}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-2xl p-6 mt-2">
              <p className="text-[#C9A84C] font-bold text-lg mb-1">100% Placement Guarantee</p>
              <p className="text-blue-200 text-sm">We do not just train you — we place you. Our placement record speaks for itself: 13,200+ students in top banks across India.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
