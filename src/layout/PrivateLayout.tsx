import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Footer } from "@/components";

export default function PrivateLayout () {
  const { loading, isLoggedIn } = useAuth()

  if(loading) return <>Loading...</>
  if(!isLoggedIn) return <Navigate to="/login" replace />

  return (
    <>
      <DashboardHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}