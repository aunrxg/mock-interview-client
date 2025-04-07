import { Link } from "react-router-dom";
import LoginForm from "./SignInForm";

export default function SignIn() {
  return (
    <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-slate-600">Sign in to your account to continue</p>
        </div>

        <LoginForm />

        <div className="text-center mt-4">
          <p className="text-sm text-slate-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-slate-900 hover:text-slate-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}