export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center font-bold text-white">
                M
              </div>
              <span className="font-bold text-lg text-white">Muscle Tec</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise software development and digital transformation services for forward-thinking organizations.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  App Modernization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Digital Acceleration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Co-Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="mailto:hello@muscletec.com" className="hover:text-white transition">
                  hello@muscletec.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-8900
                </a>
              </li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; 2025 Muscle Tec Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
