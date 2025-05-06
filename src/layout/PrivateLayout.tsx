import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Footer } from "@/components";

export default function PrivateLayout () {
  const { loading, isLoggedIn, user } = useAuth()
  const location = useLocation()

  console.log("🔐 PrivateLayout - loading:", loading, "| isLoggedIn:", isLoggedIn, "| user:", user);

  const hideLayoutFor = ["/app/interview", "/app/interview/:id"]

  const shouldHideLayout = hideLayoutFor.some((path) => location.pathname.startsWith(path))

  if(loading) return <>Loading the private page...</>
  if(!isLoggedIn) return <Navigate to="/login" replace />

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