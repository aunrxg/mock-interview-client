

export default function InterviewSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Skeleton */}
      <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-slate-700 rounded mr-4 animate-pulse"></div>
          <div className="h-6 w-32 bg-slate-700 rounded animate-pulse"></div>
          <div className="ml-3 h-5 w-12 bg-slate-700 rounded-full animate-pulse"></div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="h-4 w-16 bg-slate-700 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-slate-700 rounded animate-pulse"></div>
          <div className="w-5 h-5 bg-slate-700 rounded animate-pulse"></div>
        </div>
      </header>

      {/* Main Content Skeleton */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Panel Skeleton */}
        <div className="w-full md:w-2/5 border-r border-slate-200 flex flex-col">
          {/* Tabs Skeleton */}
          <div className="flex border-b border-slate-200">
            <div className="h-12 w-24 bg-slate-200 animate-pulse"></div>
            <div className="h-12 w-24 bg-slate-200 animate-pulse"></div>
            <div className="h-12 w-24 bg-slate-200 animate-pulse"></div>
          </div>

          {/* Content Skeleton */}
          <div className="flex-1 p-4">
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded w-4/5 animate-pulse"></div>
            </div>

            <div className="mt-6">
              <div className="h-6 bg-slate-200 rounded w-24 mb-4 animate-pulse"></div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-4 bg-slate-50 p-3 rounded-md">
                  <div className="h-4 bg-slate-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel Skeleton */}
        <div className="flex-1 flex flex-col">
          {/* Code Editor Skeleton */}
          <div className="flex-1 bg-slate-50 p-4">
            <div className="space-y-2">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="flex">
                  <div className="w-8 h-4 bg-slate-200 rounded mr-4 animate-pulse"></div>
                  <div
                    className={`h-4 bg-slate-200 rounded animate-pulse ${index % 3 === 0 ? "w-3/4" : index % 3 === 1 ? "w-1/2" : "w-5/6"}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Cases Panel Skeleton */}
          <div className="border-t border-slate-200">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50">
              <div className="h-5 w-24 bg-slate-200 rounded animate-pulse"></div>
              <div className="flex space-x-2">
                <div className="h-7 w-16 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-7 w-20 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="h-64 p-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="mb-4 p-2 border border-slate-200 rounded">
                  <div className="h-4 w-24 bg-slate-200 rounded mb-2 animate-pulse"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-8 bg-slate-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
