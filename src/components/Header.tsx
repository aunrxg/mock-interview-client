import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink} from "react-scroll"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900">
            GeekCodesAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-slate-900 font-medium">
              Home
            </Link>
            <ScrollLink to="features" smooth={true} duration={500} className="text-slate-700 hover:text-slate-900 font-medium cursor-pointer">
              Features
            </ScrollLink>
            <Link to="https://aunrxg.vercel.app" className="text-slate-700 hover:text-slate-900 font-medium">
              About
            </Link>
            <Link to="https://aunrxg.vercel.app/contacts" className="text-slate-700 hover:text-slate-900 font-medium">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
            <Link to="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-slate-700 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-slate-700 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="https://aunrxg.vercel.app"
                className="text-slate-700 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="https://aunrxg.vercel.app/contacts"
                className="text-slate-700 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" className="btn-secondary text-center" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

