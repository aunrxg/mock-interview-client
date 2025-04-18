import { Navigate, Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";
import { AuthProvider, useAuth } from "@/context/AuthContext";

export default function PublicLayout() {
  const { loading, isLoggedIn } = useAuth()

  if(loading) return <div>Loading...</div>

  if(isLoggedIn) {
    return <Navigate to='/app/dashboard' replace />
  }
  return (
    <>
      <Header />
      <main>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </main>
      <Footer />
    </>
  )
}