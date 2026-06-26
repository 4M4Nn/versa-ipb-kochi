export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] text-xs tracking-[0.4em] uppercase mb-4">THE PROBLEM</p>
          <h2 className="font-montserrat text-3xl md:text-4xl text-[#F0EDE6] font-bold mb-4">Kerala Graduates Want Bank Jobs.<br/>Most Don&apos;t Know How to Get Them.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📚", title: "Degree Not Enough", desc: "A graduation certificate doesn't qualify you for banking. Banks want KYC knowledge, digital banking skills, and compliance awareness that standard degrees never teach." },
            { icon: "🔄", title: "No Clear Path", desc: "IBPS? SBI PO? Private banks? Most graduates spend months confused about which route to take — and many take the wrong one, wasting critical years." },
            { icon: "🤝", title: "No Bank Connections", desc: "Even qualified candidates struggle to get interview calls without industry connections. IPB's 25+ bank partnerships eliminate this barrier." },
          ].map(p => (
            <div key={p.title} className="glass-card rounded-2xl p-8">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-montserrat text-xl font-bold text-[#F0EDE6] mb-3">{p.title}</h3>
              <p className="text-[#A8B89A] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
