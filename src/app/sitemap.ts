import { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://ipbkochi.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]
}
