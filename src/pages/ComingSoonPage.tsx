import { ArrowLeft, Construction, Wrench } from "lucide-react"
import { Link } from "react-router-dom"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <DashboardHeader /> */}

      <main className="container-custom py-8">
        <Link to="/app/dashboard" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to dashboard
        </Link>

        <div className="max-w-2xl mx-auto text-center py-16">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="h-12 w-12 text-yellow-600" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">Resources Coming Soon</h1>
          <p className="text-lg text-slate-600 mb-8">
            We're working hard to bring you comprehensive interview resources including study guides, cheat sheets, and
            practice materials.
          </p>

          <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">What's Coming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900">Study Guides</h3>
                  <p className="text-sm text-slate-600">Comprehensive guides for different programming topics</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900">Cheat Sheets</h3>
                  <p className="text-sm text-slate-600">Quick reference materials for algorithms and data structures</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900">Video Tutorials</h3>
                  <p className="text-sm text-slate-600">Step-by-step explanations of common interview problems</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-slate-900">Interview Tips</h3>
                  <p className="text-sm text-slate-600">Best practices and strategies for technical interviews</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/practice" className="btn-primary">
              Practice Problems
            </Link>
            <Link to="/dashboard" className="btn-secondary">
              Back to Dashboard
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-center text-slate-500">
              <Wrench className="h-4 w-4 mr-2" />
              <span className="text-sm">Expected launch: Coming Soon</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
