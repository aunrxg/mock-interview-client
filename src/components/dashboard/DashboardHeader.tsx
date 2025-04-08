import { useState } from "react"
import { Link } from "react-router-dom"
import { Bell, Menu, MessageSquare, Search, User, X } from "lucide-react"

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/dashboard" className="text-2xl font-bold text-slate-900">
            InterviewAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-slate-900 font-medium">
              Dashboard
            </Link>
            <Link to="/interviews" className="text-slate-600 hover:text-slate-900 font-medium">
              My Interviews
            </Link>
            <Link to="/progress" className="text-slate-600 hover:text-slate-900 font-medium">
              Progress
            </Link>
            <Link to="/resources" className="text-slate-600 hover:text-slate-900 font-medium">
              Resources
            </Link>
          </nav>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-slate-100">
              <Search className="h-5 w-5 text-slate-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 relative">
              <Bell className="h-5 w-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100">
              <MessageSquare className="h-5 w-5 text-slate-600" />
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <User className="h-5 w-5 text-slate-600" />
              </div>
              <span className="font-medium">John Doe</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 mt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/dashboard" className="text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <Link
                to="/interviews"
                className="text-slate-600 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Interviews
              </Link>
              <Link
                to="/progress"
                className="text-slate-600 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Progress
              </Link>
              <Link
                to="/resources"
                className="text-slate-600 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-2 flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-slate-100">
                  <Search className="h-5 w-5 text-slate-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-slate-100 relative">
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-slate-100">
                  <MessageSquare className="h-5 w-5 text-slate-600" />
                </button>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                  <User className="h-5 w-5 text-slate-600" />
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

