export interface Course {
  id: string
  name: string
  duration: string
  description: string
  highlights: string[]
  fee: string
  image: string
  color: string
  badge?: string
}

export interface Placement {
  company: string
  role: string
  salary: string
}

export interface Testimonial {
  name: string
  course: string
  company: string
  quote: string
  rating: number
  image?: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
  body: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface NavLink {
  label: string
  href: string
}

export interface TrustBadge {
  title: string
  subtitle: string
  icon: string
}
