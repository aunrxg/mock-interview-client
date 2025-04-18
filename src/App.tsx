import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DashboardPage, HomePage, SignInPage, SignUpPage } from './pages'
import PublicLayout from './layout/PublicLayout'
import PrivateLayout from './layout/PrivateLayout'
import RootLayout from './layout/RootLayout'
// import Layout from './Layout'


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
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
