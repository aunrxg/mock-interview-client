import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Footer } from "@/components";

export default function PrivateLayout () {
  const { loading, isLoggedIn, user } = useAuth()
  console.log("🔐 PrivateLayout - loading:", loading, "| isLoggedIn:", isLoggedIn, "| user:", user);

  if(loading) return <>Loading the private page...</>
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