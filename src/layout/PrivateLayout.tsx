import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Footer } from "@/components";
import { DashboardSkeleton } from "@/components/loader";

export default function PrivateLayout () {
  const { isLoggedIn, loading } = useAuth()
  const location = useLocation()

  // console.log("🔐 PrivateLayout - loading:", loading, "| isLoggedIn:", isLoggedIn, "| user:", user);

  const hideLayoutFor = ["/app/interview"]

  const shouldHideLayout = hideLayoutFor.some((path) => location.pathname.startsWith(path))

  if(loading) return <DashboardSkeleton />

  // if(loading) return <>Loading the private page...</>
  if(!isLoggedIn) return <Navigate to="/login" state={{ from: location }} replace />

  return (
    <>
      {!shouldHideLayout && <DashboardHeader /> }
      <main>
        <Outlet />
      </main>
      {!shouldHideLayout && <Footer /> }
    </>
  )
}