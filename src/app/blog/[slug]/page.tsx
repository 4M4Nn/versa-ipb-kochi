import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BLOG_POSTS, WA_URL } from "@/lib/data"

type Props = { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return BLOG_POSTS.map(p => ({ slug: p.slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = BLOG_POSTS.find(x => x.slug === slug)
  return p ? { title: p.title, description: p.excerpt } : {}
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()
  return (
    <div className="pt-24 bg-[#0A1628] min-h-screen">
      <article className="py-16 px-6 max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 inline-block hover:underline">← BLOG</Link>
        <span className="text-xs px-2 py-1 rounded block mb-4 w-fit" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{post.tag}</span>
        <h1 className="font-montserrat text-4xl font-bold text-[#F0EDE6] mb-6 leading-tight">{post.title}</h1>
        <p className="text-[#A8B89A] text-lg leading-relaxed mb-8 border-l-2 border-[#C9A84C] pl-4 italic">{post.excerpt}</p>
        <div className="space-y-4">{post.body.split("\n\n").map((p, i) => <p key={i} className="text-[#A8B89A] leading-relaxed">{p}</p>)}</div>
        <div className="mt-12 p-6 glass-card rounded-2xl text-center">
          <p className="font-montserrat text-2xl font-bold text-[#F0EDE6] mb-2">Ready to Start Your Banking Career?</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-3 bg-[#FF6B00] text-white font-bold text-sm tracking-widest uppercase">Talk to Our Team</a>
        </div>
      </article>
    </div>
  )
}
