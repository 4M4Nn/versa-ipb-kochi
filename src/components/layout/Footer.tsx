import { siteConfig } from "@/lib/data"
export default function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-[#C9A84C]/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#F5D78E] flex items-center justify-center">
                <span className="text-[#0A1628] font-bold text-sm">IPB</span>
              </div>
              <div>
                <p className="text-white font-bold">IPB Kochi</p>
                <p className="text-[#C9A84C] text-xs">Institute of Professional Banking</p>
              </div>
            </div>
            <p className="text-[#94A3B8] text-sm">ISO 9001:2015 Certified &middot; NSDC Approved Training Partner</p>
          </div>
          <div>
            <h4 className="text-[#C9A84C] font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2 text-[#94A3B8] text-sm">
              <a href="#courses" className="hover:text-white transition-colors">Courses</a>
              <a href="#recruiters" className="hover:text-white transition-colors">Recruiters</a>
              <a href="#why" className="hover:text-white transition-colors">Why IPB</a>
              <a href="#apply" className="hover:text-white transition-colors">Apply Now</a>
            </div>
          </div>
          <div>
            <h4 className="text-[#C9A84C] font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-2 text-[#94A3B8] text-sm">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.email}</span>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#C9A84C]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-sm">&copy; {new Date().getFullYear()} IPB Kochi &middot; A Versa Growth Ventures Company</p>
          <p className="text-[#94A3B8] text-sm">Built by <span className="text-[#C9A84C]">Loopgen Technologies</span></p>
        </div>
      </div>
    </footer>
  )
}
