import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Banking Insights Blog",
  description: "Expert guidance on banking exams, career strategies, and financial services from IPB Kochi faculty.",
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="bg-white">
      <section className="bg-[#0A1628] text-white py-16 px-4 text-center">
        <p className="text-[#FF6B00] text-xs font-semibold tracking-widest uppercase mb-4">Insights</p>
        <h1 className="font-poppins text-4xl font-bold mb-4">Banking Career Blog</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Expert guidance from our faculty on banking exams, career paths, and industry trends.</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 bg-[#F8F9FA] rounded-2xl overflow-hidden mb-12 hover:shadow-md transition-all border border-gray-100">
            <div className="relative h-64 md:h-auto">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#FFF3EC] text-[#FF6B00] text-xs font-semibold px-3 py-1 rounded-full">{featured.category}</span>
                <span className="text-xs text-[#6B7280]">Featured</span>
              </div>
              <h2 className="font-poppins text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#FF6B00] transition-colors">{featured.title}</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <p className="text-xs text-[#6B7280]">{featured.date}</p>
            </div>
          </Link>

          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#FFF3EC] text-[#FF6B00] text-xs font-semibold px-3 py-1 rounded-full mb-3">{post.category}</span>
                    <h3 className="font-poppins text-base font-bold text-[#0A1628] mb-2 group-hover:text-[#FF6B00] transition-colors">{post.title}</h3>
                    <p className="text-[#6B7280] text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                    <p className="text-xs text-[#6B7280]">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
