import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import PublicLayout from './layout/PublicLayout.tsx'
import { HomePage, DashboardPage, SignInPage, SignUpPage, JobDetailPage, InterviewPage, MyJobsPage } from './pages/index.ts'
import PrivateLayout from './layout/PrivateLayout.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/login', element: <SignInPage /> },
          { path: '/signup', element: <SignUpPage /> },
        ],
      },
    ],
  },
  {
    path: '/app',
    element: <PrivateLayout />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'my-jobs', element: <MyJobsPage /> },
      { path: 'job/:id', element: <JobDetailPage /> },
      { path: 'interview/:id', element: <InterviewPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
