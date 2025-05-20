import api from "@/api/AxiosInstance";
import { SubContextType, SubmissionsType } from "@/types";
import { createContext, ReactNode, useContext, useMemo, useState, } from "react";


const SubContext = createContext<SubContextType>({
  submissions: null,
  // testCaseResult: null,
  subLoading: true,
  fetchSubs: async () => {},
})

export const SubProvider = ({ children }: { children: ReactNode }) => {

  const [submissions, setSubmissions] = useState<SubmissionsType[] | null>(null)
  const [subLoading, setSubLoading] = useState(true)
  // const [testCaseResult, setTestCaseResult] = useState<TestCaseResultType[] | null>(null)
  
  const fetchSubs = async (jobId: string) => {
    console.log('fetching submission for jobId: ', jobId)

    try {
      setSubLoading(true)
      const res = await api.get(`/submit/get/${jobId}`)
      console.log('sub response: ', res.data.data)

      setSubmissions(res.data.data.submissions)
    } catch (error) {
      console.error("failed to fetch submissions: ", error)
      setSubmissions([])
    } finally{
      setSubLoading(false)
    }
  } 

  const value = useMemo(() => ({
    submissions,
    // testCaseResult,
    subLoading,
    fetchSubs,
  }), [submissions, subLoading])

  return (
    <SubContext.Provider value={value}>
      {children}
    </SubContext.Provider>
  )
}

export const useSub = () => useContext(SubContext)