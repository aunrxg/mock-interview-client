import api from "@/api/AxiosInstance";
import { JobContextType, JobType, ProblemType } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

const JobContext = createContext<JobContextType>({
  allJobs: null,
  job: null,
  problem: null,
  jobLoading: true,
  allJobsLoading: true,
  fetchAllJobs: async () => {},
  fetchJobById: async () => {},
})

export const JobProvider = ({ children }: { children: ReactNode } ) => {

  const [allJobs, setAllJobs] = useState<JobType[] | null>(null)
  const [job, setJob] = useState<JobType | null>(null)
  const [problem, setProblem] = useState<ProblemType | null>(null)
  const [allJobsLoading, setAllJobsLoading] = useState(true)
  const [jobLoading, setJobLoading] = useState(true)

  useEffect(() => {
    fetchAllJobs();
  }, [])

  const fetchAllJobs = async () => {
    try {
      const res = await api.get("/jobs")
      setAllJobs(res.data.data)
    } catch (error) {
      console.error("Error while fetching all jobs: ", error)
    } finally {
      setAllJobsLoading(false)
    }
  }

  const fetchJobById = async (id: string) => {
    try {
      const res = await api.get(`/jobs/${id}`)
      setJob(res.data.data)
      setProblem(res.data.data.question)
    } catch (error) {
      console.error("Error while fetching some job: ", error)
      throw error
    } finally {
      setJobLoading(false)
    }
  }

  const value = useMemo(() => ({ 
    allJobs, 
    job, 
    problem,
    fetchAllJobs, 
    fetchJobById, 
    allJobsLoading, 
    jobLoading, 
  }), [allJobs, job, problem, allJobsLoading, jobLoading])

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  )
}

export const useJob = () => useContext(JobContext)