import { useState } from "react"
import { X } from "lucide-react"

export default function OnboardingPrompt() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="bg-slate-100 p-4 rounded-lg">
          <img src="/placeholder.svg?height=80&width=80" alt="Welcome" className="h-20 w-20" />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Welcome to InterviewAI, John!</h2>
          <p className="text-slate-600 mb-4">
            Ready to ace your next technical interview? Start by selecting a job role below that matches your career
            goals, and begin practicing with our AI interviewer.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-medium">
                1
              </div>
              <span className="ml-2 text-slate-700">Select a job</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-medium">
                2
              </div>
              <span className="ml-2 text-slate-700">Start an interview</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-medium">
                3
              </div>
              <span className="ml-2 text-slate-700">Get AI feedback</span>
            </div>
          </div>
        </div>

        <div className="md:self-center">
          <button className="btn-primary whitespace-nowrap">Take a tour</button>
        </div>
      </div>
    </div>
  )
}

