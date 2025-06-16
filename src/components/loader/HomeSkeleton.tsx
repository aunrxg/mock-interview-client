

export default function LayoutSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Loading InterviewAI</h2>
        <p className="text-slate-600">Please wait while we prepare your experience...</p>
      </div>
    </div>
  )
}