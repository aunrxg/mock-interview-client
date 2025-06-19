import { useEditor } from "@/context/EditorContext";
import { useSub } from "@/context/SubmissionContext";
import { AlertCircle, Bot, CheckCircle, Clock, MessageSquare, XCircle } from "lucide-react";
import React, { useEffect } from "react";
import { SubmissionSkeleton } from "../loader";

type SubmissionProp = {
  id: string;
  updateTab: React.Dispatch<React.SetStateAction<"description" | "submissions" | "discussion" | "aiReview">>;
  setReviewId: React.Dispatch<React.SetStateAction<string | undefined>>;
}


export default function Submission({ id, updateTab, setReviewId }: SubmissionProp) {

  const { fetchAllSubs, subLoading, submissions, fetchSub, sub } = useSub()
  const { setCode } = useEditor()

  useEffect(() => {
    if (id) {
      console.log("Calling fetchSubs with id:", id);
      fetchAllSubs(id);
    }
  }, [id]);

  if(subLoading){
    return (
      <SubmissionSkeleton />
    ) 
  } 

  const handleViewSubmission = (id: string) => {
    fetchSub(id)
    if(sub) {
      setCode(sub.code)
    }
  }

  const handleRequestAiReview = (id: string) => {
    if(id) {
      setReviewId(id)
      updateTab("aiReview")
    }
  }

  if(!submissions) {
    return (
      <div className="text-center py-8">
        <MessageSquare className="h-12 w-12 mx-auto text-slate-300 mb-4" />
        <h3 className="text-lg font-medium text-slate-900 mb-2">Solution will be available</h3>
        <p className="text-slate-600">
          After you successfully submit your solution or when the interview is complete.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Your Submissions</h3>

      {submissions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Submission ID
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Result
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Tests Passed
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Memory
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {submissions.map((submission) => (
                <tr key={submission._id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">
                    {submission._id.slice(16)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {submission.judgeResult.results.filter(item => item.passed).length === submission.judgeResult.results.length ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : submission.judgeResult.results.filter(item => item.passed).length === 0 ? (
                      <XCircle className="h-5 w-5 text-red-500" />
                    ) :  (
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    )}
                    
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">
                    {submission.judgeResult.results.filter(item => item.passed).length} / {submission.judgeResult.results.length}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">
                    {submission.judgeResult.totalTime}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">
                    {submission.judgeResult.maxMemory}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewSubmission(submission._id)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleRequestAiReview(submission._id)}
                        className="text-purple-600 hover:text-purple-800 flex items-center"
                      >
                        <Bot className="h-3 w-3 mr-1" />
                        AI Review
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 bg-slate-50 rounded-lg">
          <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No submissions yet</h3>
          <p className="text-slate-600 mb-4">Submit your solution to see your submissions history.</p>
        </div>
      )}
    </div>
  )
}