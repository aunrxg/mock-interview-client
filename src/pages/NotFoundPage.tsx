import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";


export default function NotFound() {

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-slate-900 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
          <p className="text-slate-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>

          <Link
            to="/app/dashboard"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">Need help finding what you're looking for?</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">
              Contact Support
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/help" className="text-slate-600 hover:text-slate-900">
              Help Center
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/sitemap" className="text-slate-600 hover:text-slate-900">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}