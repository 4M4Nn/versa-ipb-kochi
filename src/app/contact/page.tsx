"use client"
import { useState } from "react"
import { submitLead } from "@/lib/supabase"
import { WA_URL, PHONE, EMAIL, ADDRESS, SOURCE } from "@/lib/data"

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", course:"", message:"" })
  const [errors, setErrors] = useState<Record<string,string>>({})
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")
  const validate = () => {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name = "Required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit phone"
    return e
  }
  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setStatus("loading")
    try { await submitLead({...form, source:SOURCE, created_at:new Date().toISOString()}); setStatus("success") }
    catch { setStatus("error") }
  }
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">ADMISSIONS</p>
        <h1 className="font-montserrat text-4xl font-bold text-[#F0EDE6]">Start Your Banking Career Today</h1>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="glass-card rounded-2xl p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <p className="text-5xl mb-4">✓</p>
                <h3 className="font-montserrat text-2xl font-bold text-[#F0EDE6] mb-2">Enquiry Received!</h3>
                <p className="text-[#A8B89A]">Our admissions team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {[["name","Full Name","text"],["email","Email","email"],["phone","Phone Number","tel"]].map(([k,l,t]) => (
                  <div key={k}>
                    <input type={t} placeholder={l} value={form[k as keyof typeof form]} onChange={e => setForm(f => ({...f,[k]:e.target.value}))}
                      className="w-full bg-[#060D1A] border border-[#1A2A4A] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm placeholder:text-[#4A7C59] focus:outline-none focus:border-[#C9A84C] transition-colors" />
                    {errors[k] && <p className="text-red-400 text-xs mt-1">{errors[k]}</p>}
                  </div>
                ))}
                <select value={form.course} onChange={e => setForm(f => ({...f, course:e.target.value}))}
                  className="w-full bg-[#060D1A] border border-[#1A2A4A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]" style={{ color: form.course ? "#F0EDE6" : "#4A7C59" }}>
                  <option value="">Select Course</option>
                  <option>CBFS</option><option>PO Program</option><option>HTD DCB</option><option>Equitas Ignite</option>
                </select>
                <textarea placeholder="Any questions?" rows={3} value={form.message} onChange={e => setForm(f => ({...f, message:e.target.value}))}
                  className="w-full bg-[#060D1A] border border-[#1A2A4A] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm placeholder:text-[#4A7C59] focus:outline-none focus:border-[#C9A84C] resize-none" />
                {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please WhatsApp us.</p>}
                <button type="submit" disabled={status === "loading"} className="w-full py-4 bg-[#FF6B00] text-white font-bold text-sm tracking-widest uppercase hover:bg-[#FF8533] disabled:opacity-50 transition-colors">
                  {status === "loading" ? "SENDING…" : "SUBMIT ENQUIRY"}
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {[["📞","Phone",PHONE,`tel:${PHONE}`],["✉️","Email",EMAIL,`mailto:${EMAIL}`],["💬","WhatsApp","Chat for admissions",WA_URL],["📍","Location",ADDRESS,"#"]].map(([icon,label,value,link]) => (
              <a key={label} href={link} target={link.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-[#C9A84C]/20 transition-all border border-transparent">
                <span className="text-2xl">{icon}</span>
                <div><p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">{label}</p><p className="text-[#F0EDE6] text-sm">{value}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
