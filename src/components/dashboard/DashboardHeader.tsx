import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Bell, ChevronDown, LogOut, Menu, User, X } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

export default function DashboardHeader() {

  const sampleNotifications = [
  {
    id: 1,
    title: "New feature available",
    message: "Try our new AI code review feature for better feedback.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    title: "Interview scheduled",
    message: "Your mock interview for Frontend Developer is scheduled for tomorrow at 10:00 AM.",
    time: "1 day ago",
    read: true,
  },
  {
    id: 3,
    title: "Practice reminder",
    message: "You haven't practiced in 3 days. Keep up your coding streak!",
    time: "3 days ago",
    read: true,
  },
]


  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false)
  const [isNotificationDropDownOpen, setIsNotificationDropDownOpen] = useState(false)
  const [notifications, setNotifications] = useState(sampleNotifications)

  const profileDropDownRef = useRef<HTMLDivElement>(null)
  const notificationDropDownRef = useRef<HTMLDivElement>(null)

  const { user, loading, logout } = useAuth()

  // close dropdowns when click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if(profileDropDownRef.current && !profileDropDownRef.current.contains(event.target as Node)) {
        setIsProfileDropDownOpen(false)
      }
      if(notificationDropDownRef.current && !notificationDropDownRef.current.contains(event.target as Node)) {
        setIsNotificationDropDownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    )
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length


  const handleLogout = async () => {
    try {
      console.log("logging out...")
      await logout()
    } catch (error) {
      console.error("Error while loggin out: ", error)
    } finally {
      console.log("Succefully loggedout")
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/dashboard" className="text-2xl font-bold text-slate-900">
            GeekCodesAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/app/dashboard" className="text-slate-900 font-medium">
              Dashboard
            </Link>
            <Link to="/app/my-jobs" className="text-slate-600 hover:text-slate-900 font-medium">
              My Jobs
            </Link>
            <Link to="/app/problemset" className="text-slate-600 hover:text-slate-900 font-medium">
              Practice
            </Link>
            <Link to="/app/resource" className="text-slate-600 hover:text-slate-900 font-medium">
              Resources
            </Link>
          </nav>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="p-2 rounded-full hover:bg-slate-100">
              <Search className="h-5 w-5 text-slate-600" />
            </button> */}
            <div className="relative" ref={notificationDropDownRef}>
              <button 
                className="p-2 rounded-full hover:bg-slate-100 relative cursor-pointer"
                onClick={() => {
                  setIsNotificationDropDownOpen(!isNotificationDropDownOpen)
                  setIsProfileDropDownOpen(false)
                }}
              >
                <Bell className="h-5 w-5 text-slate-600" />
                {unreadCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
              </button>

              {isNotificationDropDownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden z-20">
                  <div className="p-3 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="font-medium">Notifications</h3>
                    {unreadCount > 0 && (
                      <button className="text-xs text-blue-600 hover:text-blue-800" onClick={() => markAllAsRead}>
                        Mark all as read
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length > 0 ? (
                      <div>
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 border-b border-slate-100 hover:bg-slate-50 ${!notification.read ? "bg-blue-50" : ""}`}
                            onClick={() => markAsRead(notification.id)}
                          >
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-sm">{notification.title}</h4>
                              <span className="text-xs text-slate-500">{notification.time}</span>
                            </div>
                            <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Bell className="h-6 w-6 text-slate-400" />
                        </div>
                        <p className="text-slate-600">No new notifications</p>
                      </div>
                    )}
                  </div>

                  <div className="p-3 border-t border-slate-200 text-center">
                    <Link
                      to="/notifications"
                      className="text-sm text-blue-600 hover:text-blue-800"
                      onClick={() => setIsNotificationDropDownOpen(false)}
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {/* <button className="p-2 rounded-full hover:bg-slate-100">
              <MessageSquare className="h-5 w-5 text-slate-600" />
            </button> */}
            <div className="h-8 w-px bg-slate-200"></div>
            {/* { name && 
              <div className="flex items-center space-x-2">
                <Link to='/app/profile' className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer">
                  <User className="h-5 w-5 text-slate-600" />
                </Link>
                <span className="font-medium">{ name }</span>
              </div>
            } */}
            <div className="relative" ref={profileDropDownRef}>
              <button 
                className="flex items-center space-x-2 hover:bg-slate-50 rounded-full p-1" 
                onClick={() => {
                  setIsProfileDropDownOpen(!isProfileDropDownOpen)
                  setIsNotificationDropDownOpen(false)
                }}
                >
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer">
                  <User className="h-5 w-5 text-slate-600" />
                </div>
                <span className="font-medium">
                { loading ? "..." : user?.fullName?.split(" ")[0] || "Guest" }
                </span>
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </button>

              {isProfileDropDownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden z-20">
                  <div className="p-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-6 w-6 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{ loading ? "..." : user?.fullName?.split(" ")[0] || "Guest" }</h3>
                        <p className="text-sm text-slate-500">@{ loading ? "..." : user?.username?.split(" ")[0] || "@guest" }</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">{ loading ? "..." : user?.email?.split(" ")[0] || "guest@example.com" }</p>
                  </div>
                  <div className="py-1">
                    <Link
                      to="/app/profile"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setIsProfileDropDownOpen(false)}
                    >
                      <User className="h-4 w-4 mr-3 text-slate-500" />
                      Your Profile
                    </Link>
                    {/* <Link
                      to="/app/settings"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setIsProfileDropDownOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-3 text-slate-500" />
                      Settings
                    </Link>
                    <Link
                      to="/app/change-password"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => setIsProfileDropDownOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-3 text-slate-500"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Change Password
                    </Link> */}
                  </div>

                  <div className="py-1 border-t border-slate-200">
                    <button
                      // to="/logout"
                      className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-slate-100"
                      onClick={() => {
                        setIsProfileDropDownOpen(false)
                        handleLogout()
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-3 text-red-500" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
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
              <Link to="/app/dashboard" className="text-slate-900 font-medium" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
              <Link
                to="/app/my-jobs"
                className="text-slate-600 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                My Jobs
              </Link>
              <Link
                to="/app/progress"
                className="text-slate-600 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Progress
              </Link>
              <Link
                to="/app/resources"
                className="text-slate-600 hover:text-slate-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="pt-2 flex items-center space-x-4">
                {/* <button className="p-2 rounded-full hover:bg-slate-100">
                  <Search className="h-5 w-5 text-slate-600" />
                </button> */}
                <button className="p-2 rounded-full hover:bg-slate-100 relative">
                  <Bell className="h-5 w-5 text-slate-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                {/* <button className="p-2 rounded-full hover:bg-slate-100">
                  <MessageSquare className="h-5 w-5 text-slate-600" />
                </button> */}
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center  space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-600" />
                  </div>
                  <span className="font-medium">
                  { loading ? "..." : user?.fullName?.split(" ")[0] || "Guest" }
                  </span>
                </div>
                <button 
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                  onClick={() => {
                    handleLogout()
                  }}
                >
                  Logout
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

