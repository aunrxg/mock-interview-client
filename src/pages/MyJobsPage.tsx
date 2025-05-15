import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, BookmarkX, Calendar, Search } from "lucide-react"
import { JobType } from "@/types"

export default function MyJobsPage() {

  
  const [savedJobs, setSavedJobs] = useState<JobType[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  // const [statusFilter, setStatusFilter] = useState<string | null>(null)

  useEffect(() => {
    const rawData = localStorage.getItem('jobs')
    try {
      const parsed = rawData ? JSON.parse(rawData) : [];
      if(Array.isArray(parsed)) {
        setSavedJobs(parsed)
      }
    } catch (error) {
      console.error("Failed to parse savedJObs from localstorage", error)
    }
  }, [])


  // Filter interviews based on search query and status filter
  const filteredJobs = savedJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())

    // const matchesStatus = statusFilter ? interview.status === statusFilter : true

    // return matchesSearch && matchesStatus
    return matchesSearch
  })

  // Function to remove an interview
  const removeInterview = (id: string) => {
    setSavedJobs(savedJobs.filter((job) => job._id !== id))
    const existingData = localStorage.getItem('jobs')
    if(!existingData) return;
    try {
      const parsed = JSON.parse(existingData)
      if(Array.isArray(parsed)) {
        const updatedJobs = parsed.filter(job => job._id !== id )
        localStorage.setItem('jobs', JSON.stringify(updatedJobs))
        setSavedJobs(updatedJobs)
      }
    } catch (error) {
      console.log("Failed to remove job from localstorage: ", error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* <DashboardHeader /> */}

      <main className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">My Jobs</h1>
            <p className="text-slate-600">Manage your saved and upcoming interviews.</p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link to="/app/dashboard" className="btn-primary">
              Find New Jobs
            </Link>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by job title or company..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-500" />
              <select
                className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                value={statusFilter || ""}
                onChange={(e) => setStatusFilter(e.target.value || null)}
              >
                <option value="">All Statuses</option>
                <option value="Saved">Saved</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div> */}
          </div>
        </div>

        {/* Interviews List */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h2>
                    <p className="text-slate-700 mb-2">{job.company}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Saved on {new Date(job.savedAt).toLocaleDateString()}</span>
                      </div>

                      {/* {job.nextInterview && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Next interview: {new Date(job.nextInterview).toLocaleDateString()}</span>
                        </div>
                      )} */}

                      {/* <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.status === "Saved"
                            ? "bg-slate-100 text-slate-700"
                            : job.status === "In Progress"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {job.status}
                      </div> */}

                      {/* {job.score !== undefined && (
                        <div className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                          Score: {job.score}%
                        </div>
                      )} */}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <button
                      onClick={() => removeInterview(job._id)}
                      className="p-2 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-100"
                      title="Remove from saved"
                    >
                      <BookmarkX className="h-5 w-5" />
                    </button>

                    <Link
                      to={`/app/interview/${job._id}`}
                      className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 flex items-center"
                    >
                      {/* {job.status === "Completed" ? "Review" : "Continue"} */}
                      Continue
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookmarkX className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No saved interviews</h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              You haven't saved any interviews yet. Browse available jobs and save them to prepare for your interviews.
            </p>
            <Link to="/app/dashboard" className="btn-primary">
              Browse Jobs
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
