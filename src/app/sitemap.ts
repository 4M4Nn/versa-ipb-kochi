import type { MetadataRoute } from "next"
import { BLOG_POSTS, COURSES } from "@/lib/data"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ipbkochi.com"
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...["/courses","/placements","/about","/blog","/faq","/schemes","/contact"].map(r => ({ url:`${base}${r}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:0.8 })),
    ...COURSES.map(c => ({ url:`${base}/courses/${c.id}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:0.7 })),
    ...BLOG_POSTS.map(p => ({ url:`${base}/blog/${p.slug}`, lastModified:new Date(), changeFrequency:"monthly" as const, priority:0.6 })),
  ]
}
