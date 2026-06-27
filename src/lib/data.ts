import type { Course, Testimonial, BlogPost, Stat, FAQ, NavLink, TrustBadge } from "@/types"

export const SITE = {
  name: "IPB Kochi",
  tagline: "India's Premier Banking Institute",
  phone: "+91 7907215816",
  email: "admissions@ipbkochi.com",
  address: "Kochi, Kerala, India",
  parent: "versagrowthventures.com",
  description: "IPB Kochi is India's leading banking training institute with 13,200+ students placed in top banks across India.",
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Placements", href: "/#placements" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
]

export const COURSES: Course[] = [
  {
    id: "cbfs",
    name: "Certified Banking & Financial Services (CBFS)",
    duration: "3 Months",
    description:
      "India's most recognized banking certification. Covers retail banking, financial products, customer service, and compliance.",
    highlights: [
      "NSDC Approved",
      "100% Placement Support",
      "2.4-3 LPA Starting",
      "Industry Mentors",
    ],
    fee: "Contact for Details",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
    color: "#003087",
  },
  {
    id: "po-program",
    name: "PO Program – Utkarsh Small Finance Bank",
    duration: "1 Year",
    description:
      "Full-time Probationary Officer training program with guaranteed placement at Utkarsh Small Finance Bank upon completion.",
    highlights: [
      "Guaranteed Placement",
      "2.8-4 LPA Package",
      "Bank-Sponsored Training",
      "Leadership Track",
    ],
    fee: "Contact for Details",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80&auto=format&fit=crop",
    color: "#FF6B00",
  },
  {
    id: "htd-dcb",
    name: "HTD – DCB Bank",
    duration: "2 Weeks",
    description:
      "Rapid job-ready program for DCB Bank roles. Intensive training on banking operations, customer handling, and digital tools.",
    highlights: [
      "Fast-Track 2 Weeks",
      "Direct Bank Placement",
      "Digital Banking Focus",
      "Immediate Joining",
    ],
    fee: "Contact for Details",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop",
    color: "#C9A84C",
  },
  {
    id: "equitas",
    name: "Equitas IGNITE",
    duration: "2 Weeks",
    description:
      "Equitas Small Finance Bank's exclusive hiring program. Intensive training followed by guaranteed placement at Equitas branches.",
    highlights: [
      "Equitas Bank Partnership",
      "2.4+ LPA CTC",
      "2-Week Intensive",
      "Pan-India Placement",
    ],
    fee: "Contact for Details",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80&auto=format&fit=crop",
    color: "#10B981",
  },
]

export const STATS: Stat[] = [
  { value: 13200, suffix: "+", label: "Students Placed" },
  { value: 100, suffix: "%", label: "Placement Rate" },
  { value: 25, suffix: "+", label: "Bank Partners" },
  { value: 8, suffix: "+", label: "Years of Trust" },
]

export const TRUST_BADGES: TrustBadge[] = [
  {
    title: "13,200+ Placed",
    subtitle: "India's largest banking placement record",
    icon: "award",
  },
  {
    title: "ISO Certified",
    subtitle: "Quality assured training programs",
    icon: "shield",
  },
  {
    title: "NSDC Approved",
    subtitle: "National Skill Development Corporation",
    icon: "check-circle",
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anjali Menon",
    course: "CBFS 2024",
    company: "HDFC Bank",
    quote:
      "IPB Kochi changed my life. Within 3 months of completing CBFS, I was placed at HDFC Bank as a Personal Banker. The faculty are incredible and the placement support is unmatched.",
    rating: 5,
  },
  {
    name: "Rahul Krishnan",
    course: "PO Program 2024",
    company: "Utkarsh Small Finance Bank",
    quote:
      "The PO Program is incredibly comprehensive. The faculty are ex-bankers who teach with real-world case studies. I learned more in one year than I could have in five years on the job.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    course: "Equitas IGNITE",
    company: "Equitas SFB",
    quote:
      "2 weeks felt short but the training was intense and practical. Got placed at Equitas Bank immediately after completing the program. Best investment I ever made in my career.",
    rating: 5,
  },
  {
    name: "Arun Pillai",
    course: "HTD DCB",
    company: "DCB Bank",
    quote:
      "Best decision of my career. The placement team at IPB is exceptional. They guided me every step of the way and helped me land a great role at DCB Bank.",
    rating: 5,
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ibps-po-strategy-2026",
    title: "Complete IBPS PO Strategy for Kerala Students 2026",
    category: "Exam Strategy",
    date: "June 2026",
    excerpt:
      "Crack IBPS PO with this step-by-step preparation strategy from IPB Kochi faculty.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
    body: `The IBPS PO examination remains one of the most competitive and sought-after banking exams in India, especially for graduates in Kerala. With thousands of aspirants vying for limited seats, a structured preparation strategy is essential to stand out and succeed.

The first step to cracking IBPS PO is understanding the exam pattern thoroughly. The examination consists of a Preliminary exam, Mains exam, and an Interview round. The Prelims covers English Language, Quantitative Aptitude, and Reasoning Ability — each section with its own sectional cutoffs. Mains adds General Awareness, Computer Aptitude, and a Descriptive Writing section. Knowing where you stand in each area helps you prioritize your study time effectively.

For Kerala students specifically, the advantage lies in the strong English foundation many graduates possess. However, Quantitative Aptitude and Reasoning sections often need extra focus. Our faculty at IPB Kochi recommends dedicating at least 3 hours daily to these sections in the first two months of preparation. Use standard reference books, previous year papers, and online mock tests to build speed and accuracy.

General Awareness is another crucial differentiator. Stay updated with banking news, RBI policy changes, government schemes, and economic developments. Read financial newspapers daily and maintain a monthly current affairs notebook. At IPB Kochi, we provide weekly current affairs capsules specifically curated for banking exams, which has helped hundreds of our students clear the General Awareness section with high scores. With consistent effort and the right guidance, IBPS PO 2026 is very much achievable.`,
  },
  {
    slug: "banking-career-kerala",
    title: "Why Banking is Kerala's Best Career Choice in 2026",
    category: "Career Guide",
    date: "May 2026",
    excerpt:
      "Explore why thousands of Kerala graduates are choosing banking as their career path.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80&auto=format&fit=crop",
    body: `Kerala has long been known for producing some of India's most educated graduates, yet employment opportunities within the state have historically been limited. In 2026, the banking sector stands out as the single most promising career pathway for Kerala's youth, offering stability, growth, and competitive compensation that few other industries can match.

The banking sector in India is expanding at an unprecedented rate. With the rise of small finance banks, payment banks, and the government's financial inclusion agenda, the demand for trained banking professionals has never been higher. Kerala graduates are particularly well-positioned to take advantage of this boom — the state's high literacy rate, strong English proficiency, and cultural emphasis on education make Kerala students ideal candidates for banking roles.

Starting salaries in banking have improved significantly. Entry-level positions at private sector banks now offer 2.4 to 4 LPA, with rapid progression for performers. Unlike many other sectors, banking offers a clear career ladder from Executive to Manager to Branch Manager and beyond. The pension benefits, job security, and work-life balance of banking careers also make them particularly attractive for Kerala families who value stability.

IPB Kochi has been at the forefront of this banking career movement in Kerala. With over 13,200 students placed in top banks across India, we have seen firsthand how a well-trained banking professional from Kerala can rise quickly through the ranks. Our alumni are now Branch Managers, Relationship Managers, and even Regional Heads at major banks — a testament to the quality of training and the limitless potential of a banking career for Kerala graduates.`,
  },
  {
    slug: "small-finance-bank-opportunity",
    title: "Small Finance Banks: The Hidden Gem for Banking Freshers",
    category: "Industry Insight",
    date: "April 2026",
    excerpt:
      "Small finance banks offer faster growth, better packages, and more opportunities than traditional banks.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80&auto=format&fit=crop",
    body: `When most banking aspirants think of a banking career, they immediately think of large public sector banks or established private banks like HDFC or ICICI. However, the smartest career move for freshers in 2026 might be to start with a Small Finance Bank (SFB) — and here is why this is the hidden gem that experienced banking professionals wish they had discovered earlier.

Small Finance Banks like Equitas, Utkarsh, AU, Jana, and others are growing at rates of 25-35% annually, significantly outpacing traditional banks. This rapid growth creates an extraordinary number of promotion opportunities. In a traditional bank, you might wait 5-7 years for a significant promotion. In an SFB, performers can become Senior Executives, then Team Leaders, then Branch Managers within 3-4 years. The talent demand is so high that motivated individuals advance at a pace unheard of in conventional banking.

The compensation at SFBs has also become highly competitive. What was once a perceived disadvantage — lower salaries compared to large private banks — has now been largely closed. Entry-level packages at top SFBs range from 2.4 to 3.6 LPA, and with performance incentives, many executives earn significantly more in their first year. Some SFBs also offer ESOPs (Employee Stock Ownership Plans) that can add substantial long-term value.

At IPB Kochi, we have strong partnerships with Equitas Small Finance Bank and Utkarsh Small Finance Bank. Our Equitas IGNITE and PO Program courses are specifically designed to get candidates placement-ready for these institutions. We have placed over 3,000 students in SFBs across India, and the feedback consistently highlights the rapid career growth, supportive work environment, and financial rewards that these banks offer. If you are a fresher looking to build a stellar banking career, SFBs should be your first choice in 2026.`,
  },
]

export const FAQS: FAQ[] = [
  {
    question: "What is the placement rate?",
    answer:
      "IPB Kochi provides 100% placement support for all enrolled students. We have successfully placed 13,200+ students to date in top banks across India. Our dedicated placement team works with each student individually to match them with the right opportunity.",
  },
  {
    question: "Who are the bank partners?",
    answer:
      "We partner with 25+ banks including HDFC Bank, ICICI Bank, Axis Bank, Equitas Small Finance Bank, Utkarsh Small Finance Bank, DCB Bank, Federal Bank, South Indian Bank, and many more regional and national banking institutions.",
  },
  {
    question: "What is the minimum qualification?",
    answer:
      "Any graduate from any stream can apply to IPB Kochi programs. Final year students who are awaiting their results are also eligible to apply and can join upon result declaration. No specific educational background is required.",
  },
  {
    question: "Do you provide study materials?",
    answer:
      "Yes, comprehensive study materials are provided for all courses. This includes printed course modules, digital resources, practice question banks, and mock tests. Our materials are regularly updated to reflect current industry standards and banking practices.",
  },
  {
    question: "Is there accommodation?",
    answer:
      "We help connect students with affordable PG accommodation near our campus in Kochi. Our student services team maintains a list of verified PG options for outstation students and can assist with the search process.",
  },
  {
    question: "How to apply?",
    answer:
      "You can apply by filling out our online application form on this website, WhatsApp us at +91 7907215816, or call us directly. Our admissions team will guide you through the entire process including counseling, documentation, and enrollment.",
  },
]

export const ABOUT = {
  heading: "Kerala's Most Trusted Banking Training Institute",
  description:
    "Founded over 8 years ago, IPB Kochi has established itself as the gold standard in banking education in Kerala. We bridge the gap between academic learning and industry requirements, producing job-ready banking professionals who excel from day one.",
  mission:
    "To empower every graduate with the skills, knowledge, and confidence to build a successful banking career.",
  vision:
    "To be India's most trusted banking training institute, known for quality education and 100% placement outcomes.",
  checkpoints: [
    "Industry-expert faculty with 15+ years banking experience",
    "Curriculum designed in partnership with leading banks",
    "Dedicated placement cell with bank partnerships",
    "State-of-the-art training infrastructure in Kochi",
    "Ongoing alumni support and career advancement guidance",
    "NSDC approved and ISO certified programs",
  ],
  image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80&auto=format&fit=crop",
}

export const PLACEMENTS = {
  heading: "13,200+ Students Placed in Top Banks",
  subheading: "Our placement record speaks for itself",
  description:
    "Every student who completes a program at IPB Kochi receives dedicated placement support. Our relationships with 25+ banking partners ensure a steady stream of opportunities for our graduates.",
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop",
  banks: [
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Equitas SFB",
    "Utkarsh SFB",
    "DCB Bank",
    "Federal Bank",
    "South Indian Bank",
    "Kotak Mahindra",
    "Yes Bank",
  ],
}

export const OFFER = {
  badge: "Limited Time Offer",
  heading: "Early Bird: 10% Off Course Fees",
  description:
    "Enroll before July 31, 2026 and save 10% on any course. Seats are limited — secure yours today.",
  cta: "Claim Your Discount",
}
