import { useJob } from "@/context/JobContext";
import { useEffect } from "react"
type DescriptionProp = {
  id: string;
}

export default function Description({ id }: DescriptionProp) {

  const { fetchJobById, problem, jobLoading } = useJob()


  useEffect(() => {
    if(id) fetchJobById(id)
  }, [id])

  if(jobLoading) return <div>Loading...</div>
  if(!problem) return <div>No Problem found...</div>
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold">{problem.title}</h2>
        <span
          className={`ml-3 px-2 py-1 text-sm font-semibold text-white rounded-full ${
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
  )
}