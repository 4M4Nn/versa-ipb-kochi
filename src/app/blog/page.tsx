import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/data"
export const metadata: Metadata = {
  title: "Blog — Banking Career Insights",
  description: "Expert insights on banking exams, career strategies, and industry trends from IPB Kochi.",
}
export default function BlogPage() {
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">INSIGHTS</p>
        <h1 className="font-montserrat text-4xl font-bold text-[#F0EDE6]">Banking Career Blog</h1>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {BLOG_POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass-card rounded-xl p-6 flex flex-col gap-3 hover:border-[#C9A84C]/30 transition-all border border-transparent">
              <span className="text-xs px-2 py-1 rounded self-start" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{p.tag}</span>
              <h2 className="font-montserrat font-bold text-[#F0EDE6] group-hover:text-[#C9A84C] transition-colors leading-snug">{p.title}</h2>
              <p className="text-[#A8B89A] text-sm leading-relaxed">{p.excerpt}</p>
              <span className="text-[#FF6B00] text-xs tracking-widest mt-auto">READ MORE →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
