import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold">
              GeekCodesAI
            </Link>
            <p className="mt-4 text-slate-400">
              Master your technical interviews with AI-powered practice and feedback.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="features" smooth={true} duration={500} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Features
                </ScrollLink>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://aunrxg.vercel.app" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="https://aunrxg.vercel.app/contacts" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">© {new Date().getFullYear()} GeekCodesAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="https://x.com/aunrxg" className="text-slate-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link to="https://linkedin.com/in/anurag-poddar-dev" className="text-slate-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link to="https://github.com/aunrxg/mock-interview-client" className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

