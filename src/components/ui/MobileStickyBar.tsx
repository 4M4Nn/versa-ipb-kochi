"use client"

import { Phone } from "lucide-react"
import { MessageCircle } from "lucide-react"
import { openWhatsApp } from "@/lib/supabase"
import { SITE } from "@/lib/data"

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-gray-200 bg-white shadow-lg">
      <a
        href={`tel:${SITE.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#003087] text-white text-sm font-semibold"
      >
        <Phone size={18} />
        Call Now
      </a>
      <button
        onClick={() => openWhatsApp()}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#FF6B00] text-white text-sm font-semibold"
      >
        <MessageCircle size={18} />
        Apply Now
      </button>
    </div>
  )
}
