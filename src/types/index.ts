export interface Course {
  id: string; name: string; short: string; duration: string; fee: string; banks: string[]
  highlights: string[]; eligibility: string; placements: string; color: string
  desc: string
}
export interface Founder {
  name: string; role: string; monogram: string; color: string; bio: string; quote: string
}
export interface BlogPost {
  slug: string; title: string; date: string; excerpt: string; tag: string; body: string
}
export interface FAQ { q: string; a: string }
export interface Scheme { title: string; desc: string; cta: string; tag: string }
export interface NavLink { label: string; href: string }
export interface Placement {
  name: string; role: string; bank: string; year: string; package: string
}
