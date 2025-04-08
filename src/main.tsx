import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// import { DashboardPage, HomePage, SignInPage, SignUpPage } from './pages/index.ts'
import { AuthProvider } from '@/context/AuthContext.tsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<HomePage />} />
//       <Route path='login' element={<SignInPage />} />
//       <Route path='signup' element={<SignUpPage />} />
//       <Route path='dashboard' element={<DashboardPage />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
