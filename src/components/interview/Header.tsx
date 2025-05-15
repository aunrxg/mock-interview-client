import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Header() {

  const navigate = useNavigate()
  return (
    <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 text-slate-300 hover:text-white">
          <ArrowLeft className="h-6 w-6 " />
        </button>
        <h1 className="text-2xl font-bold">GeeksCodeAI</h1>
      </div>
    </header>
  )
}