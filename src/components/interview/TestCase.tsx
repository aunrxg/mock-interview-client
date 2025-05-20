import { TestCasesType } from "@/types"
import { CheckCircle, ChevronDown, ChevronUp, XCircle } from "lucide-react"
import { useState } from "react"

// interface TestCases {
//   input: string
//   expectedOutput: string
//   explanation: string
// }

interface TestResult {
  passed: boolean
  actualOutput: string
  error: string
}

interface TestCasesProps {
  testCases: TestCasesType[]
  results: TestResult[]
  loading: boolean
}

export default function TestCases({ testCases, results, loading }: TestCasesProps) {

  const [expandedTestCase, setExpandedTestCase] = useState<number | null>(null)

  const toggleTestCase = (index: number) => {
    setExpandedTestCase(expandedTestCase === index ? null : index)
  }

  if(loading) return <div>Loading...</div>
  return (
    <div className="divide-y divide-slate-200">
      {testCases.map((testCase, index) => {
        const result = results[index]
        const isExpanded = expandedTestCase === index

        return (
          <div key={index} className="py-2">
            <div
              className={`flex items-center justify-between p-2 cursor-pointer rounded-md ${
                isExpanded ? "bg-slate-100" : "hover:bg-slate-50"
              }`}
              onClick={() => toggleTestCase(index)}
            >
              <div className="flex items-center">
                <h4 className="font-medium">Test Case {index + 1}</h4>
                {result && (
                  <div className="ml-3 flex items-center">
                    {result.passed ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center">
                {result && (
                  <span className={`mr-2 text-sm ${result.passed ? "text-green-600" : "text-red-600"}`}>
                    {result.passed ? "Passed" : "Failed"}
                  </span>
                )}
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 text-slate-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                )}
              </div>
            </div>

            {isExpanded && (
              <div className="mt-2 p-2 bg-slate-50 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-500 mb-1">Input:</p>
                    <div className="bg-slate-100 p-2 rounded font-mono text-xs">{testCase.input}</div>
                  </div>

                  <div>
                    <p className="text-slate-500 mb-1">Expected:</p>
                    <div className="bg-slate-100 p-2 rounded font-mono text-xs">{testCase.expectedOutput}</div>
                  </div>

                  <div>
                    <p className="text-slate-500 mb-1">Output:</p>
                    <div
                      className={`p-2 rounded font-mono text-xs ${
                        result
                          ? result.passed
                            ? "bg-green-50 text-green-800"
                            : "bg-red-50 text-red-800"
                          : "bg-slate-100"
                      }`}
                    >
                      {result ? result.actualOutput : "Run code to see output"}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}