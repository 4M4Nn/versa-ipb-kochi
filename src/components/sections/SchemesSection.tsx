import { OFFER, SITE } from "@/lib/data"

export default function SchemesSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="py-20 bg-[#003087] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-[#FF6B00] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
          {OFFER.badge}
        </span>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">{OFFER.heading}</h2>
        <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">{OFFER.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B00] hover:bg-[#e55f00] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            {OFFER.cta}
          </a>
          <a
            href="/#contact"
            className="inline-block border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
