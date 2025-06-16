import DashboardHeader from "../dashboard/DashboardHeader";


export default function MyJobsSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />

      <main className="container-custom py-8">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <div className="h-8 bg-slate-200 rounded w-48 mb-2 animate-pulse"></div>
            <div className="h-4 bg-slate-200 rounded w-64 animate-pulse"></div>
          </div>
          <div className="h-10 w-32 bg-slate-200 rounded mt-4 md:mt-0 animate-pulse"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 h-10 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Interview Cards Skeleton */}
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 animate-pulse">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="h-4 w-32 bg-slate-200 rounded"></div>
                    <div className="h-4 w-24 bg-slate-200 rounded"></div>
                    <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                  <div className="h-8 w-24 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
