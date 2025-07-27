import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
							<img
								src="assets/img/Tsunami.png"
								alt="Tsunami Logo"
								className="h-full w-full object-cover"
							/>
						</div>
              <span className="font-bold text-xl">Tsunami Development</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Driving innovation through strategic development and transformative solutions across multiple industries.
              Building sustainable value for the future.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>N/A</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (435) 850-7344</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@tsunamidev.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              {/*<li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>*/}
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Legal Documents
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2023–{new Date().getFullYear()} Tsunami Development. All rights reserved.</p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">Building the future, one project at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
