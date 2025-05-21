import api from "@/api/AxiosInstance"
import { Bot, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

interface AiProp {
  id: string | undefined;
  updateTab: React.Dispatch<React.SetStateAction<"description" | "submissions" | "discussion" | "aiReview">>;
}

export default function AiReview({ id, updateTab }: AiProp) {

  const [review, setReview] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  console.log(loading)
  useEffect(() => {
    const fetchAiReview = async (id: string) => {
      try {
        setLoading(true)
        const review = await api.get(`/submit/get-ai/${id}`)
        setReview(review.data.data)
      } catch (error) {
        console.log("failed to fetch ai review: ", error)
      } finally {
        setLoading(false)
      }
    }
    if(id) {
      fetchAiReview(id)
    }
  }, [id])

  if(loading) {
    return(
      <div className="text-center py-8 bg-slate-50 rounded-lg">
        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">Generating AI Review</h3>
        <p className="text-slate-600">Our AI is analyzing your code and preparing feedback...</p>
      </div>
    )
  }
  else if(!review) {
    return(
      <div className="text-center py-8 bg-slate-50 rounded-lg">
        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <Bot className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">No submission selected</h3>
        <p className="text-slate-600 mb-4">
          Select a submission from the Submissions tab to get an AI review.
        </p>
        <button
          onClick={() => updateTab("submissions")}
          className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800"
        >
          Go to Submissions
        </button>
      </div>
    )
  }


  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Bot className="h-5 w-5 text-purple-600 mr-2" />
          <span className="font-medium">Review for submission: {id}</span>
        </div>
        <button
          onClick={() => updateTab("submissions")}
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
        >
          Back to submissions
        </button>
      </div>

      <div className="bg-slate-50 p-4 rounded-lg prose max-w-none">
        <div className="whitespace-pre-line">{review}</div>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={() => { 
          navigator.clipboard.writeText(review)
          alert('copied.')
          }} 
          className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          Copy Review
        </button>

        <button onClick={() => alert('Gonna build this soon :)')} className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 flex items-center">
          Apply Suggestions
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}