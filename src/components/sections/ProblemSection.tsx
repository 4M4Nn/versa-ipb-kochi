import { TRUST_BADGES } from "@/lib/data"
import { Award, Shield, CheckCircle2 } from "lucide-react"

const ICON_MAP: Record<string, React.ReactNode> = {
  award: <Award size={28} className="text-[#FF6B00]" />,
  shield: <Shield size={28} className="text-[#FF6B00]" />,
  "check-circle": <CheckCircle2 size={28} className="text-[#FF6B00]" />,
}

export default function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-3">Why Choose IPB</p>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-[#0A1628]">Trusted by 13,200+ Students</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-[#FFF3EC] rounded-2xl flex items-center justify-center mb-5">
                {ICON_MAP[badge.icon] ?? <Award size={28} className="text-[#FF6B00]" />}
              </div>
              <h3 className="font-poppins text-xl font-bold text-[#0A1628] mb-2">{badge.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
