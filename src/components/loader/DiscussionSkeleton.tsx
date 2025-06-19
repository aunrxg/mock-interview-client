export default function DiscussionSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <h3 className="font-bold text-lg mb-4">Community Discussion</h3>

      {/* Skeleton Comments */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-slate-50 p-4 rounded-md mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
            <div className="h-3 w-16 bg-slate-200 rounded"></div>
          </div>
          <div className="h-4 w-full bg-slate-200 rounded mb-2"></div>
          <div className="h-4 w-3/4 bg-slate-200 rounded mb-4"></div>
          <div className="h-4 w-16 bg-slate-200 rounded"></div>
        </div>
      ))}

      {/* Skeleton Comment Input Box */}
      <div className="mt-4">
        <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
        <div className="w-full h-24 bg-slate-100 border border-slate-200 rounded-md mb-3"></div>
        <div className="h-9 w-32 bg-slate-300 rounded-md"></div>
      </div>
    </div>
  );
}
