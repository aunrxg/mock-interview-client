import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { jobsData } from "@/constants/JobData"


export default function JobListings() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobsData.map((job) => (
        <div
          key={job.id}
          className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          onMouseEnter={() => setHoveredJob(job.id)}
          onMouseLeave={() => setHoveredJob(null)}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h2>
            <p className="text-slate-700 font-medium mb-1">{job.company}</p>
            <p className="text-slate-500 text-sm mb-4">
              {job.location} • {job.type}
            </p>

            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{job.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <Link to={`/job/${job.id}`} className="text-slate-600 hover:text-slate-900 text-sm font-medium">
                View Details
              </Link>

              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  hoveredJob === job.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                }`}
                onClick={() => (window.location.href = `/interview/${job.id}`)}
              >
                Start Interview
                {hoveredJob === job.id && <ArrowRight className="ml-2 h-4 w-4 inline" />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

