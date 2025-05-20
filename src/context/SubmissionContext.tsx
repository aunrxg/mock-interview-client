import api from "@/api/AxiosInstance";
import { SubContextType, SubmissionsType } from "@/types";
import { createContext, ReactNode, useContext, useMemo, useState, } from "react";


const SubContext = createContext<SubContextType>({
  submissions: null,
  sub: null,
  subLoading: true,
  loading: true,
  fetchAllSubs: async () => {},
  fetchSub: async () => {},
})

export const SubProvider = ({ children }: { children: ReactNode }) => {

  const [submissions, setSubmissions] = useState<SubmissionsType[] | null>(null)
  const [subLoading, setSubLoading] = useState(true)
  const [sub, setSub] = useState<SubmissionsType | null>(null)
  const [loading, setLoading] = useState(true)
  // const [testCaseResult, setTestCaseResult] = useState<TestCaseResultType[] | null>(null)
  
  const fetchAllSubs = async (jobId: string) => {
    try {
      setSubLoading(true)
      const res = await api.get(`/submit/getAll/${jobId}`)
      setSubmissions(res.data.data.submissions)
    } catch (error) {
      console.error("failed to fetch submissions: ", error)
      setSubmissions([])
    } finally{
      setSubLoading(false)
    }
  } 

  const fetchSub = async (id: string) => {
    try {
      const res = await api.get(`/submit/get/${id}`)
      setSub(res.data.data.submission)
    } catch (error) {
      console.error("failed to fetch the submission", error)
      setSub(null)
    } finally{
      setLoading(false)
    }
  } 

  const value = useMemo(() => ({
    submissions,
    sub,
    subLoading,
    loading,
    fetchAllSubs,
    fetchSub,
  }), [submissions, subLoading, sub, loading])

  return (
    <SubContext.Provider value={value}>
      {children}
    </SubContext.Provider>
  )
}

export const useSub = () => useContext(SubContext)