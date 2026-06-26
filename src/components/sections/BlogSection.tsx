import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"
export default function BlogSection() {
  return (
    <section className="py-20 bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">INSIGHTS</p>
            <h2 className="font-montserrat text-3xl font-bold text-[#F0EDE6]">Banking Career Insights</h2>
          </div>
          <Link href="/blog" className="hidden md:block text-sm tracking-widest text-[#C9A84C] border border-[#C9A84C]/30 px-4 py-2 hover:bg-[#C9A84C]/10 transition-colors">VIEW ALL</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {BLOG_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass-card rounded-xl p-5 flex flex-col gap-3 hover:border-[#C9A84C]/30 transition-all border border-transparent">
              <span className="text-xs px-2 py-1 rounded self-start" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{p.tag}</span>
              <h3 className="font-montserrat font-bold text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors leading-snug text-sm">{p.title}</h3>
              <p className="text-[#A8B89A] text-xs leading-relaxed line-clamp-2">{p.excerpt}</p>
              <span className="text-[#FF6B00] text-xs tracking-widest mt-auto">READ →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
