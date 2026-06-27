import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { SITE, NAV_LINKS, COURSES } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="font-poppins font-bold text-2xl text-white">IPB</span>
              <span className="font-poppins font-bold text-2xl text-[#FF6B00]">Kochi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              India&apos;s most trusted banking training institute. 13,200+ students placed in top banks across India.
            </p>
            <div className="flex items-center gap-2">
              {["f", "in", "yt", "li"].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs font-bold text-gray-400 hover:border-orange-500 hover:text-orange-400 transition-colors uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <a
                    href="/#courses"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#FF6B00]" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#FF6B00] shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Mail size={16} className="text-[#FF6B00] shrink-0" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} IPB Kochi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            A{" "}
            <a
              href={`https://${SITE.parent}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] hover:text-white transition-colors"
            >
              Versa Growth Ventures
            </a>{" "}
            initiative
          </p>
        </div>
      </div>
    </footer>
  )
}
