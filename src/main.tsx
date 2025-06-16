import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Suspense, lazy } from 'react'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import PublicLayout from './layout/PublicLayout.tsx'
import { SignInPage, SignUpPage, NotFound } from './pages/index.ts'
import { DashboardSkeleton, HomeSkeleton, InterviewSkeleton, JobDetailSkeleton, MyJobsSkeleton, } from './components/loader/index.ts'
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        children: [
          { path: '/', element: <Suspense fallback={<HomeSkeleton />}> <Home /> </Suspense> },
          { path: '/login', element: <SignInPage /> },
          { path: '/signup', element: <SignUpPage /> },
        ],
      },
      {
        path: '*',
        element: <NotFound />
      }
    ],
  },
  {
    path: '/app',
    element: <PrivateLayout />,
    children: [
      { path: 'dashboard', element: <Suspense fallback={<DashboardSkeleton />}> <Dashboard /> </Suspense> },
      { path: 'my-jobs', element: <Suspense fallback={<MyJobsSkeleton />}> <MyJobs /> </Suspense> },
      { path: 'job/:id', element: <Suspense fallback={<JobDetailSkeleton />}> <Jobs /> </Suspense> },
      { path: 'interview/:id', element: <Suspense fallback={<InterviewSkeleton />}> <Interview /> </Suspense> },
    ],
  },
  {
    path: '/app/*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <JobProvider>
        <SubProvider>
          <EditorProvider>
            <RouterProvider router={router} />
          </EditorProvider>
        </SubProvider>
      </JobProvider>
    </AuthProvider>
  </StrictMode>,
)
