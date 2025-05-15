import { MessageSquare } from "lucide-react";


export default function Submission() {

  return (
    <div className="text-center py-8">
      <MessageSquare className="h-12 w-12 mx-auto text-slate-300 mb-4" />
      <h3 className="text-lg font-medium text-slate-900 mb-2">Solution will be available</h3>
      <p className="text-slate-600">
        After you successfully submit your solution or when the interview is complete.
      </p>
    </div>
  )
}