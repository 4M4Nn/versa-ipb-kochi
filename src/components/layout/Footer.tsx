import Link from "next/link"
import { WA_URL, PHONE, EMAIL, ADDRESS, PARENT_URL } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#060D1A] border-t border-[#C9A84C]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="text-2xl font-bold mb-1"><span className="bg-[#C9A84C] text-[#003087] px-2 py-0.5">IPB</span></p>
            <p className="text-[#A8B89A] text-sm mt-3 leading-relaxed">Kerala&apos;s #1 Banking Career Institute. 13,200+ placements. 25+ partner banks.</p>
            <p className="text-[#A8B89A] text-xs mt-3">{ADDRESS}</p>
            <a href={PARENT_URL} className="text-[#C9A84C] text-xs mt-2 inline-block hover:underline">A Versa Growth Ventures company</a>
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Programs</p>
            {[["CBFS","/courses/cbfs"],["PO Program","/courses/po-program"],["HTD DCB","/courses/htd-dcb"],["Equitas Ignite","/courses/equitas-ignite"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Quick Links</p>
            {[["Placements","/placements"],["About","/about"],["Blog","/blog"],["FAQ","/faq"],["Schemes","/schemes"],["Contact","/contact"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Contact</p>
            <a href={`tel:${PHONE}`} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C]">{EMAIL}</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block text-[#A8B89A] text-sm hover:text-[#C9A84C]">WhatsApp Admissions</a>
          </div>
        </div>
        <div className="border-t border-[#C9A84C]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A8B89A] text-xs">© {new Date().getFullYear()} IPB Kochi. All rights reserved.</p>
          <p className="text-[#A8B89A] text-xs">Part of Versa Growth Ventures</p>
        </div>
      </div>
    </footer>
  )
}
