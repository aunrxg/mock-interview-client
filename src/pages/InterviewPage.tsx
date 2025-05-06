import { fetchJobById } from "@/api/AxiosInstance";
import CodeEditor from "@/components/interview/CodeEditor";
import TestCases from "@/components/interview/TestCase";
import { ProblemType } from "@/types";
import { ArrowLeft, ChevronUp, Clock, MessageSquare, Play, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function InterviewPage() {

  const { id } = useParams()
  
  const [problem, setProblem] = useState<ProblemType | null>(null)
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState<"javascript" | "python" | "java">("python")
  const [code, setCode] = useState("")
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true)
  const [activeTab, setActiveTab] = useState<"description" | "submissions" | "discussion">("description")
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState<Array<{ passed: boolean, output: string, error: string }>>([])

  useEffect(() => {
    const loadProblem = async () => {
      try {
        const response = await fetchJobById(id as string)
        console.log("Response problem :", response.data.question)
        setProblem(response.data.question)
      } catch (error) {
        console.error("failed fetching problem : ", error)
      } finally {
        setLoading(false)
      }
    }

    loadProblem()
  }, [id])

  const handleRunCode = () => {
    setIsRunning(true)

    setTimeout(() => {
      console.log("Code Run Success")

      setTestResults([])
      setIsRunning(false)
    }, 1500)
  }
  
  const handleSubmit = () => {
    setIsRunning(true)

    setTimeout(() => {
      console.log("sumission success here")
      setTestResults([])
      setIsRunning(false)
    }, 1500);
  }

  if(loading) return <div>loading problem....</div>
  if(!problem) return <div>No problem found</div>


  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to={`/interview/${id}`} className="mr-4 text-slate-300 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-lg font-bold">{problem.title}</h1>
          <span
            className={`ml-3 px-2 py-1 text-xs rounded-full ${
              problem.difficulty === "Easy"
                ? "bg-green-600"
                : problem.difficulty === "Medium"
                  ? "bg-yellow-600"
                  : "bg-red-600"
            }`}
          >
            {problem.difficulty}
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center text-slate-300">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">25:00</span>
          </div>

          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value as "javascript" | "python" | "java")
              // setCode(problem.starterCode[e.target.value as "javascript" | "python" | "java"])
            }}
            className="bg-slate-800 text-white text-sm rounded px-2 py-1 border border-slate-700"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>

          <button className="text-slate-300 hover:text-white">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </header>

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
                  Solution
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === "discussion" ? "text-slate-900 border-b-2 border-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                  onClick={() => setActiveTab("discussion")}
                >
                  Discussion
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
                  <div className="space-y-4">
                    <div className="prose max-w-none">
                      <p className="whitespace-pre-line">{problem.description}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mt-6 mb-2">Examples:</h3>
                      {problem.testCases.map((example, index) => (
                        <div key={index} className="mb-4 bg-slate-50 p-3 rounded-md">
                          <div className="mb-1">
                            <span className="font-medium">Input:</span> {example.input}
                          </div>
                          <div className="mb-1">
                            <span className="font-medium">Output:</span> {example.expectedOutput}
                          </div>
                          {example.explanation && (
                            <div>
                              <span className="font-medium">Explanation:</span> {example.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mt-6 mb-2">Constraints:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {problem.constraints.map((constraint, index) => (
                          <li key={index}>{constraint}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "submissions" && (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Solution will be available</h3>
                    <p className="text-slate-600">
                      After you successfully submit your solution or when the interview is complete.
                    </p>
                  </div>
                )}

                {activeTab === "discussion" && (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Discussion will be available</h3>
                    <p className="text-slate-600">
                      After you complete the interview, you can discuss your approach with the AI interviewer.
                    </p>
                  </div>
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
        <div className={`flex-1 flex flex-col ${isDescriptionExpanded ? "md:w-3/5" : "md:flex-1"}`}>
          <CodeEditor code={code} language={language} setCode={setCode} />

          <div className="border-t border-slate-200">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50">
              <div className="flex items-center">
                <h3 className="font-medium">Test Cases</h3>
                <button
                  className="ml-2 p-1 text-slate-500 hover:text-slate-700"
                  onClick={() => {
                    const testCasesElement = document.getElementById("test-cases-panel")
                    if (testCasesElement) {
                      testCasesElement.classList.toggle("h-64")
                      testCasesElement.classList.toggle("h-12")
                    }
                  }}
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </div>

              <div className="flex space-x-2">
                <button
                  className="px-3 py-1 bg-slate-200 text-slate-800 rounded text-sm font-medium hover:bg-slate-300 flex items-center"
                  onClick={handleRunCode}
                  disabled={isRunning}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Run
                </button>
                <button
                  className="px-3 py-1 bg-slate-900 text-white rounded text-sm font-medium hover:bg-slate-800"
                  onClick={handleSubmit}
                  disabled={isRunning}
                >
                  {isRunning ? "Processing..." : "Submit"}
                </button>
              </div>
            </div>

            <div id="test-cases-panel" className="h-64 overflow-y-auto transition-all duration-300">
              <TestCases testCases={problem.testCases} results={testResults} />
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
