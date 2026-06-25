"use client"
import { useState } from "react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { courses, siteConfig } from "@/lib/data"
export default function ApplicationSection() {
  const [form, setForm] = useState({ name:"",phone:"",email:"",course:"",city:"",message:"" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!form.name||!form.phone) return
    setLoading(true)
    await saveLead({name:form.name,phone:form.phone,email:form.email,service_interested:form.course,source_website:"ipb-kochi",message:form.message})
    openWhatsApp({name:form.name,phone:form.phone,email:form.email,service:form.course})
    setSent(true);setLoading(false)
  }
  const inp = "w-full bg-transparent border-b border-white/20 focus:border-[#FF6B00] outline-none text-white placeholder-white/30 py-3 font-inter text-base transition-all duration-300"
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden" style={{ background:"linear-gradient(135deg, #001A5C 0%, #003087 100%)" }}>
      {/* Animated geometric shapes */}
      {Array.from({length:8}).map((_,i)=>(
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width:40+i*20, height:40+i*20,
            background:`rgba(255,107,0,${0.02+i*0.005})`,
            left:`${10+i*12}%`, top:`${20+i*8}%`,
            animation:`float ${3+i*0.5}s ease-in-out ${i*0.4}s infinite` }} />
      ))}
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage:"linear-gradient(rgba(255,107,0,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,.4) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="label text-[#FF6B00] mb-4" style={{ letterSpacing:"3px" }}>/ Start Today</p>
        <h2 className="font-poppins font-bold text-white mb-4" style={{ fontSize:"clamp(32px,5vw,60px)",lineHeight:1.1 }}>Your banking career begins here.</h2>
        <p className="font-inter text-white/60 mb-12" style={{ fontSize:18 }}>Free counselling session · Get admitted in 24 hours</p>
        {sent ? (
          <div className="rounded-2xl p-12 border border-white/10" style={{ background:"rgba(255,255,255,0.05)" }}>
            <div className="text-5xl mb-4" style={{ animation:"float 3s ease-in-out infinite" }}>🎓</div>
            <h3 className="font-poppins font-bold text-white text-2xl mb-2">Application Received!</h3>
            <p className="text-white/60 font-inter">Our counselor will contact you within 2 hours.</p>
          </div>
        ) : (
          <div className="p-8 rounded-2xl border border-white/10" style={{ background:"rgba(255,255,255,0.05)", backdropFilter:"blur(8px)" }}>
            <form onSubmit={submit} className="flex flex-col gap-6 text-left">
              <input required placeholder="Full Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className={inp} />
              <input required placeholder="Phone Number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className={inp} />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className={inp} />
              <select value={form.course} onChange={e=>setForm({...form,course:e.target.value})} className={inp+" bg-transparent"}>
                <option value="" className="bg-[#003087]">Select Course</option>
                {courses.map(c=><option key={c.id} value={c.short} className="bg-[#003087]">{c.short} — {c.duration}</option>)}
              </select>
              <input placeholder="Your City" value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className={inp} />
              <textarea placeholder="Any questions?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={3} className={inp+" resize-none"} />
              <button type="submit" disabled={loading}
                className="w-full h-14 text-white font-poppins font-bold text-base transition-all disabled:opacity-70 rounded-sm relative overflow-hidden"
                style={{ background:"linear-gradient(135deg,#FF6B00,#FF8C33,#FF6B00)",backgroundSize:"200%",animation:"shimmer 2s ease-in-out infinite" }}>
                {loading?"Sending...":"Apply Now — Free Counselling"}
              </button>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-full h-12 bg-[#25D366] text-white font-inter font-medium text-sm flex items-center justify-center rounded-sm"
                style={{ animation:"pulseGlow 2s ease-in-out infinite" }}>
                💬 Chat on WhatsApp Instead
              </a>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
