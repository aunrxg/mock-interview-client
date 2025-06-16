import DashboardHeader from "../dashboard/DashboardHeader";


export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />

      <main className="container-custom py-8">
        {/* Onboarding Prompt Skeleton */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8 animate-pulse">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-slate-200 p-4 rounded-lg">
              <div className="h-20 w-20 bg-slate-300 rounded"></div>
            </div>
            <div className="flex-1">
              <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-4"></div>
              <div className="flex flex-wrap gap-3">
                <div className="h-8 w-24 bg-slate-200 rounded-full"></div>
                <div className="h-8 w-28 bg-slate-200 rounded-full"></div>
                <div className="h-8 w-20 bg-slate-200 rounded-full"></div>
              </div>
            </div>
            <div className="h-10 w-24 bg-slate-200 rounded"></div>
          </div>
        </div>

        {/* Job Listings Header Skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 bg-slate-200 rounded w-48 animate-pulse"></div>
          <div className="h-10 w-80 bg-slate-200 rounded animate-pulse"></div>
        </div>

        {/* Job Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 animate-pulse">
              <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-1/2 mb-1"></div>
              <div className="h-3 bg-slate-200 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-4"></div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                <div className="h-6 w-20 bg-slate-200 rounded-full"></div>
                <div className="h-6 w-12 bg-slate-200 rounded-full"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 w-20 bg-slate-200 rounded"></div>
                <div className="h-8 w-28 bg-slate-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}