import JobListings from "@/components/dashboard/JobListing"
import OnboardingPrompt from "@/components/dashboard/OnBoardPrompt"
import { useJob } from "@/context/JobContext"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"

export default function DashboardPage() {

  const { fetchAllJobs, allJobs, allJobsLoading } = useJob()
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchAllJobs()
  }, [])

  if(!allJobs) return <div>Jobs couldn't load </div>
  const filterJobs = allJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(job => job.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase())


    return matchesSearch;
  });
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <DashboardHeader /> */}

      <main className="container-custom py-8">
        {/* Onboarding Prompt */}
        <OnboardingPrompt />

        {/* Job Listings Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900">Job Listings</h1>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by job title, company, or skills..."
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-md w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <JobListings loading={allJobsLoading} filteredJobs={filterJobs} />
        </div>
      </main>
    </div>
  )
}

