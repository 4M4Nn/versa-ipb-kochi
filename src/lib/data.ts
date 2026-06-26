import type { Course, Founder, BlogPost, FAQ, Scheme, NavLink, Placement } from "@/types"

export const SITE_NAME = "IPB Kochi"
export const SITE_TAGLINE = "Kerala's #1 Banking Career Institute"
export const SITE_DESCRIPTION = "IPB Kochi has placed 13,200+ students in top Indian banks. Expert-led banking programs with 100% placement assistance."
export const PHONE = "+91 7907215816"
export const WHATSAPP = "917907215816"
export const WA_URL = "https://wa.me/917907215816"
export const EMAIL = "admissions@ipbkochi.com"
export const ADDRESS = "Kochi, Kerala, India"
export const SOURCE = "ipb-kochi"
export const TOTAL_PLACED = 13200
export const PARENT_URL = "https://versagrowthventures.com"

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Placements", href: "/placements" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Schemes", href: "/schemes" },
  { label: "Contact", href: "/contact" },
]

export const COURSES: Course[] = [
  {
    id: "cbfs", name: "Certificate in Banking & Financial Services", short: "CBFS",
    duration: "6 months", fee: "₹35,000", color: "#C9A84C",
    banks: ["SBI", "HDFC", "Axis", "ICICI", "Canara", "Federal"],
    highlights: ["KYC & AML compliance", "Digital banking platforms", "Customer acquisition", "Loan processing basics", "Investment product knowledge"],
    eligibility: "Any graduate (minimum 50% marks)", placements: "2,800+ placements",
    desc: "Our flagship program — the most comprehensive entry-level banking certification in Kerala. Designed by senior bankers, this 6-month intensive covers everything from RBI compliance to digital banking systems, customer relationship management, and financial product sales. Graduates consistently receive multiple bank interview calls.",
  },
  {
    id: "po-program", name: "Probationary Officer Preparation", short: "PO Program",
    duration: "4 months", fee: "₹28,000", color: "#003087",
    banks: ["SBI PO", "IBPS PO", "Bank of Baroda", "Canara Bank PO"],
    highlights: ["Quantitative aptitude mastery", "Reasoning & English", "General awareness & banking", "Mock test series (200+)", "Interview preparation"],
    eligibility: "Graduates below 30 years of age", placements: "5,200+ IBPS/SBI selections",
    desc: "India's banking sector hires thousands of Probationary Officers every year. Our PO Program has been the launchpad for over 5,200 Kerala candidates who cleared IBPS PO, SBI PO, and other competitive exams. Our structured curriculum, 200+ mock tests, and dedicated interview coaching give you the edge.",
  },
  {
    id: "htd-dcb", name: "Home Loan & Trade Finance (DCB Focus)", short: "HTD DCB",
    duration: "3 months", fee: "₹22,000", color: "#FF6B00",
    banks: ["DCB Bank", "IDFC First", "Kotak Mahindra", "Yes Bank"],
    highlights: ["Home loan processing", "Trade finance documents", "Foreign exchange basics", "DCB-specific protocols", "Credit appraisal"],
    eligibility: "Any graduate", placements: "1,800+ specialized placements",
    desc: "A specialized program developed in partnership with DCB Bank for fast-track placement in home loan and trade finance verticals. This focused 3-month course gives candidates specific technical skills that command higher starting packages. Placement success rate for this program exceeds 94%.",
  },
  {
    id: "equitas-ignite", name: "Equitas Ignite — Small Finance Banking", short: "Equitas Ignite",
    duration: "2 months", fee: "₹15,000", color: "#10B981",
    banks: ["Equitas Small Finance Bank", "Jana Small Finance Bank", "Ujjivan SFB"],
    highlights: ["Microfinance fundamentals", "Self-help group banking", "Rural & semi-urban banking", "Financial inclusion products", "Equitas systems training"],
    eligibility: "Any graduate (freshers preferred)", placements: "3,400+ SFB placements",
    desc: "Small Finance Banks are the fastest-growing segment in Indian banking — and they are hiring aggressively. Equitas Ignite is a co-branded program with Equitas Small Finance Bank that provides direct placement pipeline for graduates interested in serving India's underbanked population. This program opens doors that most candidates don't even know exist.",
  },
]

export const FOUNDERS: Founder[] = [
  {
    name: "Sandeep Neelamana", role: "Founder & Operations Head", monogram: "SN", color: "#4A7C59",
    bio: "Sandeep oversees the operational excellence that has made IPB Kochi's placement record the benchmark for banking education in Kerala. His systems thinking ensures every student gets the full IPB experience.",
    quote: "Systems create freedom. When operations run perfectly, students can focus on learning.",
  },
  {
    name: "Sreenivasa Prabhu", role: "Founder & Finance Head", monogram: "SP", color: "#C9A84C",
    bio: "Sreenivasa's financial strategy has kept IPB affordable without compromising quality. His banking sector relationships are the backbone of our placement network.",
    quote: "Banking education should be accessible to every Kerala graduate. We made that happen.",
  },
  {
    name: "Aman Faisal S", role: "Founder & Marketing Head", monogram: "AF", color: "#FF6B00",
    bio: "Aman built IPB's reputation from zero to the most recognized banking institute in Kerala. His marketing vision connects the right students with the right opportunities.",
    quote: "The best banking career starts with the right first step. IPB is that step for Kerala.",
  },
]

export const PLACEMENTS: Placement[] = [
  { name: "Anjali Suresh", role: "Banking Associate", bank: "HDFC Bank", year: "2024", package: "₹3.2 LPA" },
  { name: "Rohith Menon", role: "Probationary Officer", bank: "SBI", year: "2024", package: "₹4.1 LPA" },
  { name: "Priya Nair", role: "Relationship Manager", bank: "Axis Bank", year: "2023", package: "₹3.8 LPA" },
  { name: "Muhammed Rashid", role: "Home Loan Executive", bank: "DCB Bank", year: "2024", package: "₹3.5 LPA" },
  { name: "Divya Krishnan", role: "Branch Officer", bank: "Canara Bank", year: "2023", package: "₹3.6 LPA" },
  { name: "Arun Kumar", role: "SFB Officer", bank: "Equitas SFB", year: "2024", package: "₹2.8 LPA" },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ibps-po-strategy-2026",
    title: "How to Clear IBPS PO 2026: A Complete Strategy Guide",
    date: "June 2026", tag: "Exam Tips",
    excerpt: "IBPS PO 2026 is one of the most competitive exams in India. Here is the exact preparation strategy our top-scoring students used.",
    body: `The IBPS PO exam is a gateway to a prestigious banking career, but it demands disciplined preparation across multiple sections.\n\nThe Quantitative Aptitude section trips most candidates. The key is not just solving problems but solving them fast. Our mock test series trains you to target 80%+ accuracy at speed, not perfection at leisure.\n\nReasoning Ability rewards pattern recognition. Daily practice with IPB's reasoning workbook (500+ questions) builds the mental agility that separates toppers from also-rans.\n\nEnglish Language is often underestimated. Reading financial newspapers daily — The Hindu Business Line, Mint — gives you both vocabulary and current affairs in one habit.\n\nBanking Awareness is the great equalizer. Most candidates know general knowledge. IPB's banking awareness module covers RBI policies, recent scheme launches, and banking terminology in focused 30-minute daily sessions.\n\nOur success rate for IBPS PO: 68% of enrolled students who complete the full program clear the written exam. The national average is under 2%.`,
  },
  {
    slug: "banking-career-kerala-guide",
    title: "The Complete Guide to Starting a Banking Career from Kerala",
    date: "May 2026", tag: "Career Guide",
    excerpt: "Everything Kerala graduates need to know about starting a banking career — from choosing the right exam to getting your first placement.",
    body: `Kerala consistently produces some of India's best banking professionals. The state's high literacy rate, financial awareness, and strong work ethic make Kerala graduates highly sought-after by major banks.\n\nThe first decision is choosing your path: public sector banking (SBI, nationalized banks) via IBPS/SBI exams, or private sector banking (HDFC, Axis, ICICI) via direct recruitment.\n\nPublic sector banking offers job security, pension benefits, and respectability. Private sector offers faster salary growth and more dynamic environments. Both are excellent careers.\n\nFor public sector, start IBPS preparation immediately after graduation. The window between 21-30 years is your prime opportunity — use it.\n\nFor private sector, the CBFS certification from IPB gives you the skills and credential that gets you interview calls. Our placement team has direct connections with HR heads at 25+ private banks.\n\nDon't delay. Every day you wait is a day your peers get ahead. IPB's admission process takes 48 hours. Your banking career could start this week.`,
  },
  {
    slug: "small-finance-bank-opportunity",
    title: "Why Small Finance Banks Are Kerala's Best Banking Opportunity in 2026",
    date: "April 2026", tag: "Industry",
    excerpt: "Small Finance Banks are hiring aggressively and offering starting packages that rival traditional PSBs. Here's why SFBs are the hidden opportunity most Kerala graduates miss.",
    body: `Small Finance Banks — Equitas, Jana, Ujjivan, AU — are the fastest-growing segment in Indian banking. They are mandate-driven (financial inclusion targets), growth-oriented, and chronically understaffed in Kerala.\n\nThe hiring math is simple: SFBs need to grow their branch networks to meet RBI targets. They need branch officers, relationship managers, and customer service executives by the thousands. Kerala, with its educated workforce and financial literacy, is a prime hiring ground.\n\nStarting packages at SFBs range from ₹2.8-4.0 LPA depending on role — comparable to entry-level PSB positions without the 2-year exam preparation wait.\n\nThe career trajectory is faster too. SFBs promote merit over seniority. A motivated officer can move to branch manager level in 3-4 years — something that takes 10+ years in PSBs.\n\nIPB's Equitas Ignite program is the fastest route to SFB placement in Kerala. The co-branded certificate and direct referral to Equitas HR gives candidates a genuine first-mover advantage.`,
  },
]

export const FAQS: FAQ[] = [
  { q: "What is IPB Kochi?", a: "IPB (Institute of Professional Banking) Kochi is Kerala's leading banking career institute. We have placed 13,200+ students in 25+ partner banks through our specialized banking education programs." },
  { q: "Which banks do IPB graduates get placed in?", a: "Our graduates work at SBI, HDFC Bank, Axis Bank, ICICI Bank, Canara Bank, Federal Bank, DCB Bank, Equitas SFB, Jana SFB, and 20+ other banks across India." },
  { q: "What is the CBFS program?", a: "The Certificate in Banking & Financial Services (CBFS) is our flagship 6-month program covering KYC/AML compliance, digital banking, customer acquisition, loan processing, and investment products. It has the highest placement rate of any banking program in Kerala." },
  { q: "Is the PO program for IBPS or SBI PO?", a: "Our PO Program covers both IBPS PO and SBI PO, as well as Bank of Baroda and Canara Bank PO exams. The curriculum is designed to help you clear any competitive banking exam." },
  { q: "What is the fee structure?", a: "Our programs range from ₹15,000 (Equitas Ignite, 2 months) to ₹35,000 (CBFS, 6 months). EMI options are available. Contact us for scholarship eligibility." },
  { q: "Do you offer placement guarantee?", a: "We offer 100% placement assistance — meaning every eligible student who completes the program gets placement support, interview preparation, and access to our bank partner network. We have placed over 13,200 students with this commitment." },
  { q: "What is the minimum qualification?", a: "Most programs require a bachelor's degree with minimum 50% marks. The Equitas Ignite program accepts freshers with any graduation. Age eligibility varies by program." },
  { q: "How long does placement take after course completion?", a: "Most students receive their first placement interview within 2-4 weeks of completion. The average time from course completion to first joining is 6-8 weeks." },
]

export const SCHEMES: Scheme[] = [
  {
    title: "Early Bird Admission", tag: "LIMITED SEATS",
    desc: "Book your seat in the next CBFS batch 30 days in advance and get ₹5,000 off the course fee plus priority placement listing with all 25+ partner banks.",
    cta: "Claim Early Bird Offer",
  },
  {
    title: "Sibling Discount", tag: "FAMILY OFFER",
    desc: "Two siblings enrolling together get 15% off each. We believe banking careers run in families — help your sibling start their journey.",
    cta: "Apply for Sibling Discount",
  },
  {
    title: "Freshers Fast Track", tag: "FOR 2024-25 GRADUATES",
    desc: "Fresh graduates from 2024-2025 batches get a dedicated placement cohort, intensive interview prep, and guaranteed 3 bank interview calls before the course ends.",
    cta: "Enroll in Fast Track",
  },
]
