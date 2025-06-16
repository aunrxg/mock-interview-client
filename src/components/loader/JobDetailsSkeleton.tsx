// import DashboardHeader from "../dashboard/DashboardHeader";


export default function JobDetailSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* <DashboardHeader /> */}

      <main className="container-custom py-8">
        {/* Back Button Skeleton */}
        <div className="h-6 w-32 bg-slate-200 rounded mb-6 animate-pulse"></div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          {/* Header Skeleton */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex-1">
              <div className="h-8 bg-slate-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="h-10 w-32 bg-slate-200 rounded mt-4 md:mt-0 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="h-6 bg-slate-200 rounded w-48 mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-slate-200 rounded w-4/5 animate-pulse"></div>
                </div>
              </div>

              <div className="mb-8">
                <div className="h-6 bg-slate-200 rounded w-40 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                  ))}
                </div>
              </div>

              <div>
                <div className="h-6 bg-slate-200 rounded w-36 mb-4 animate-pulse"></div>
                <div className="space-y-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="h-6 bg-slate-200 rounded w-32 mb-4 animate-pulse"></div>
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                      <div className="h-3 bg-slate-200 rounded w-20 mb-1 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded w-32 animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
