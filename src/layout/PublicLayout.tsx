import { Navigate, Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";
import { useAuth } from "@/context/AuthContext";

export default function PublicLayout() {
  const { isLoggedIn } = useAuth()

  // if(loading) return <div>Loading The public page...</div>

  if(isLoggedIn) {
    return <Navigate to='/app/dashboard' replace />
  }
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}