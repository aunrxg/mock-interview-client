import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Play } from "lucide-react";

import api from "@/api/AxiosInstance";
import MonacoEditor from "@/components/interview/CodeEditor";
import { AiReview, Description, Discussion, Header, Submission, TestCases } from "@/components/interview";

import { useParams } from "react-router-dom";
import { useJob } from "@/context/JobContext";
import { useEditor } from "@/context/EditorContext";
import { InterviewSkeleton } from "@/components/loader";
import { TestCasesType, TestResultType } from "@/types";
import { useToast } from "@/context/ToastContext";


export default function InterviewPage() {

  const { id } = useParams()
  const { toast } = useToast()
  if(!id) {
    return;
  }
  const { fetchJobById, jobLoading, problem } = useJob()
  const { code, setCode, language, setLanguage } = useEditor()
  
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true)
  const [isTestCasesExpanded, setIsTestCasesExpanded] = useState(true)
  const [activeTab, setActiveTab] = useState<"description" | "submissions" | "discussion" | "aiReview">("description")
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState<TestResultType[]>([])
  const [subId, setSUbId] = useState<string | undefined>("")

  useEffect(() => {
    if(id) fetchJobById(id)
  }, [id])

  const handleRunCode = async (testCases: [TestCasesType]): Promise<void> => {
    setIsRunning(true)

    // await new Promise(resolve => setTimeout(resolve, 1500))

    try {
      console.log("Code Run Success")
      const payload = { code, language, testCases }
      const res = await api.post("/submit/run", payload)
      console.log("run respo: ", res.data)
      setTestResults(res.data.data.testResult.results)
    } catch (error) {
      console.error("failed to run code ", error)
    } finally {
      setIsRunning(false)
    }
  }
  
  const handleSubmit = async (): Promise<void> => {
  setIsRunning(true)

  // Optional delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  try {
    console.log("submission success here")
    const payload = { jobId: id, code, language }
    const res = await api.post('/submit', payload)
    console.log("Response : ", res.data)
    setTestResults(res.data.data.testResult.results)
  } catch (error) {
    console.error("failed to submit: ", error)
  } finally {
    setIsRunning(false)
  }
}

  const toggleTestCasesPanel = () => {
    setIsTestCasesExpanded(!isTestCasesExpanded)
  }
  // if(!problem) return <div>No problem found. (interview page)</div>
  if(jobLoading) return <InterviewSkeleton />
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Problem Description Panel */}
        <div
          className={`border-r border-slate-200 ${isDescriptionExpanded ? "w-full md:w-2/5" : "w-full md:w-16"} flex flex-col transition-all duration-300 overflow-hidden`}
        >
          {isDescriptionExpanded ? (
            <>
              {/* Tabs */}
              <div className="flex border-b border-slate-200">
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === "description" ? "text-slate-900 border-b-2 border-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === "submissions" ? "text-slate-900 border-b-2 border-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                  onClick={() => setActiveTab("submissions")}
                >
                  Submissions
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === "discussion" ? "text-slate-900 border-b-2 border-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                  onClick={() => setActiveTab("discussion")}
                >
                  Discussion
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === "aiReview" ? "text-slate-900 border-b-2 border-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                  onClick={() => setActiveTab("aiReview")}
                >
                  AI Review
                </button>

                <div className="ml-auto pr-2 flex items-center">
                  <button
                    className="p-1 text-slate-500 hover:text-slate-700"
                    onClick={() => setIsDescriptionExpanded(false)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {activeTab === "description" && (
                  <Description id={id} />
                )}

                {activeTab === "submissions" && (
                  <Submission id={id} updateTab={setActiveTab} setReviewId={setSUbId} />
                )}

                {activeTab === "discussion" && (
                  <Discussion />
                )}

                {activeTab === 'aiReview' && (
                  <AiReview id={subId} updateTab={setActiveTab} />
                )}
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center py-4 bg-slate-50">
              <button
                className="p-2 text-slate-500 hover:text-slate-700"
                onClick={() => setIsDescriptionExpanded(true)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Code Editor Panel */}
        <div id="editor-panel" className={`flex-1 h- flex flex-col ${isDescriptionExpanded ? "md:w-3/5" : "md:flex-1"}`}>
          
          <div className="flex items-center justify-end border-b border-slate-200 space-x-5 px-3 py-2">
            <div className="flex items-center text-slate-800">
              <pre className="text-slate-800">Language: </pre>
              <select
                name="lang"
                id="lang"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value as "javascript" | "python" | "java")
                  // setCode(problem.starterCode[e.target.value as "javascript" | "python" | "java"])
                }}
                className="text-sm rounded px-2 py-1 border border-slate-700 "
                >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>
            {/* <div className="flex items-center text-slate-800">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">25:00</span>
            </div>  */}
            {/* <button className="text-slate-800">
              <Settings className="h-5 w-5" />
            </button> */}
          </div>
          <div className="flex-1 overflow-hidden">
            <MonacoEditor value={code} language={language} onChange={(value) => setCode(value || "")} />
          </div>

          <div className="border-t border-slate-200">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50">
              <div className="flex items-center">
                <h3 className="font-medium">Test Cases</h3>
                <button className="ml-2 p-1 text-slate-500 hover:text-slate-700" onClick={toggleTestCasesPanel}>
                  {isTestCasesExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex space-x-2">
                {problem && <button
                  className="px-3 py-1 bg-slate-200 text-slate-800 rounded text-sm font-medium hover:bg-slate-300 flex items-center"
                  onClick={() => problem?.testCases && handleRunCode(problem?.testCases)}
                  disabled={isRunning}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Run
                </button>}
                <button
                  className="px-3 py-1 bg-slate-900 text-white rounded text-sm font-medium hover:bg-slate-800"
                  onClick={() => {
                    handleSubmit()
                    toast({
                      title: "Sumitted",
                      description: "You Solution is Submitted.",
                      duration: 3000
                    })
                  }}
                  disabled={isRunning}
                >
                  {isRunning ? "Processing..." : "Submit"}
                </button>
              </div>
            </div>

            {/* <div className={`overflow-y-auto transition-all duration-300 ${isTestCasesExpanded ? "h-64" : "h-0"}`}>
              {isTestCasesExpanded && <TestCases testCases={problem.testCases} results={testResults} />}
            </div> */}
            <div id="test-cases-panel" className={`overflow-y-auto transition-all duration-300 ${isTestCasesExpanded ? "h-64" : "h-0"}`}>
              { problem && 
                (isTestCasesExpanded && 
                  <TestCases testCases={problem?.testCases} results={testResults} loading={jobLoading} running={isRunning} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
