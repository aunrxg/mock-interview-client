import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Suspense, lazy } from 'react'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import PublicLayout from './layout/PublicLayout.tsx'
import { SignInPage, SignUpPage, NotFound, ComingSoonPage } from './pages/index.ts'
import { DashboardSkeleton, LayoutSkeleton, InterviewSkeleton, JobDetailSkeleton, MyJobsSkeleton, } from './components/loader/index.ts'
const Home = lazy(() => import('./pages/HomePage.tsx'))
const Interview = lazy(() => import('./pages/InterviewPage.tsx'))
const Jobs = lazy(() => import('./pages/JobDetailPage.tsx'))
const Dashboard = lazy(() => import('./pages/DashBoardPage.tsx'))
const MyJobs = lazy(() => import('./pages/MyJobsPage.tsx'))
import PrivateLayout from './layout/PrivateLayout.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { JobProvider } from './context/JobContext.tsx'
import { SubProvider } from './context/SubmissionContext.tsx'
import { EditorProvider } from './context/EditorContext.tsx'
import { ToastViewport } from './components/ui/toast.tsx'
import { ToastProvider } from './context/ToastContext.tsx'
// import { ToastProvider } from '@radix-ui/react-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<LayoutSkeleton />}> <PublicLayout /> </Suspense>,
        children: [
          { path: '/', element: <Suspense fallback={<LayoutSkeleton />}> <Home /> </Suspense> },
          { path: '/login', element: <SignInPage /> },
          { path: '/signup', element: <SignUpPage /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
  {
    path: '/app',
    element: <Suspense fallback={<LayoutSkeleton />}> <PrivateLayout /> </Suspense>,
    children: [
      { path: 'dashboard', element: <Suspense fallback={<DashboardSkeleton />}> <Dashboard /> </Suspense> },
      { path: 'my-jobs', element: <Suspense fallback={<MyJobsSkeleton />}> <MyJobs /> </Suspense> },
      { path: 'job/:id', element: <Suspense fallback={<JobDetailSkeleton />}> <Jobs /> </Suspense> },
      { path: 'interview/:id', element: <Suspense fallback={<InterviewSkeleton />}> <Interview /> </Suspense> },
      { path: 'resource', element: <ComingSoonPage /> },
      { path: 'problemset', element: <ComingSoonPage /> },
      { path: '*', element: <NotFound /> }
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <ToastViewport />
      <AuthProvider>
        <JobProvider>
          <SubProvider>
            <EditorProvider>
              <RouterProvider router={router} />
            </EditorProvider>
          </SubProvider>
        </JobProvider>
      </AuthProvider>
    </ToastProvider>
  </StrictMode>,
)
