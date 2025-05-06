import { fetchJobById } from "@/api/AxiosInstance"
// import DashboardHeader from "@/components/dashboard/DashboardHeader"
import { JobType } from "@/types"
import { ArrowLeft, Building, Clock, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


export default function JobDetailPage() {

    const { id } = useParams()
    console.log(id)
    const [job, setJob] = useState<JobType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const loadJob = async () => {
        try {
          const response = await fetchJobById(id as string)
          setJob(response.data)
        } catch (error) {
          console.error("FAiled to fetch Job: ", error)
        } finally {
          setLoading(false)
        }
      }

      loadJob()
    }, [id])

    if(loading) return <div>Loading....</div>
    if(!job) return <div>Job not found</div>
    
    return (
        <div className="min-h-screen bg-slate-50">
        {/* <DashboardHeader /> */}

        <main className="container-custom py-8">
            <Link to="/app/dashboard" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to job listings
            </Link>

            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600">
                    <div className="flex items-center">
                    <Building className="mr-1 h-4 w-4" />
                    <span>{job.company}</span>
                    </div>
                    <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{job.type}</span>
                    </div>
                </div>
                </div>

                <div className="mt-4 md:mt-0">
                <Link to={`/app/interview/${job._id}`} className="btn-primary inline-flex items-center">
                    Start Interview
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                <section className="mb-8">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Job Description</h2>
                    <p className="text-slate-700 mb-4">{job.description}</p>
                </section>

                {/* <section className="mb-8">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </section> */}

                {/* <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </section> */}
                </div>

                <div>
                <div className="bg-slate-50 rounded-lg p-6 sticky top-24">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Job Overview</h3>

                    <div className="space-y-4">
                    <div>
                        <p className="text-sm text-slate-500">Salary Range</p>
                        <p className="font-medium text-slate-900">{job.salary}</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">Job Type</p>
                        <p className="font-medium text-slate-900">{job.type}</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">Location</p>
                        <p className="font-medium text-slate-900">{job.location}</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">Posted</p>
                        <p className="font-medium text-slate-900">{job.postedDate}</p>
                    </div>

                    {/* <div>
                        <p className="text-sm text-slate-500 mb-2">Required Skills</p>
                        <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-slate-200 text-slate-700 text-xs rounded-full">
                            {skill}
                            </span>
                        ))}
                        </div>
                    </div> */}
                    </div>

                    <div className="mt-6">
                    <Link to={`app/interview/${job._id}`} className="w-full btn-primary flex justify-center items-center">
                        Start Interview
                    </Link>

                    <button className="w-full mt-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2 rounded-md font-medium transition-colors">
                        Save Job
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
        </div>
    )
}