import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

export default function Layout() {
  return (
    <>
      <Header />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      <Footer />
    </>
  )
}