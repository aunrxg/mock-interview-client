import { CheckCircle, XCircle } from "lucide-react"

interface TestCases {
  input: string
  expectedOutput: string
  explanation: string
}

interface TestResult {
  passed: boolean
  actualOutput: string
  error: string
}

interface TestCasesProps {
  testCases: TestCases[]
  results: TestResult[]
}

export default function TestCases({ testCases, results }: TestCasesProps) {
  return (
    <div className="divide-y divide-slate-200">
      {testCases.map((testCase, index) => {
        const result = results[index]

        return (
          <div key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Test Case {index + 1}</h4>
              {result && (
                <div className="flex items-center">
                  {result.passed ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">Passed</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-sm text-red-600">Failed</span>
                    </>
                  )}
                </div>
              )}
            </div>

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
                    result ? (result.passed ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800") : "bg-slate-100"
                  }`}
                >
                  {result ? result.actualOutput : "Run code to see output"}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}