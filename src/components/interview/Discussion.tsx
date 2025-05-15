import { MessageSquare } from "lucide-react";


export default function Discussion() {

  return (
    <div className="text-center py-8">
      <MessageSquare className="h-12 w-12 mx-auto text-slate-300 mb-4" />
      <h3 className="text-lg font-medium text-slate-900 mb-2">Discussion will be available</h3>
      <p className="text-slate-600">
        After you complete the interview, you can discuss your approach with the AI interviewer.
      </p>
    </div>
  )
}