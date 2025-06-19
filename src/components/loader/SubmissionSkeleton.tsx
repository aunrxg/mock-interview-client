export default function SubmissionSkeleton() {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Your Submissions</h3>

      <div className="overflow-x-auto animate-pulse">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              {["Submission ID", "Result", "Tests Passed", "Time", "Memory", "Actions"].map((heading, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-slate-200">
            {Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="h-4 w-20 bg-slate-200 rounded"></div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="h-5 w-5 bg-slate-200 rounded-full"></div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="h-4 w-16 bg-slate-200 rounded"></div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="h-4 w-12 bg-slate-200 rounded"></div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="h-4 w-12 bg-slate-200 rounded"></div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <div className="h-4 w-12 bg-slate-200 rounded"></div>
                    <div className="h-4 w-20 bg-slate-200 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
