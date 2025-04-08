import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";

export default function PublicLayout() {
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