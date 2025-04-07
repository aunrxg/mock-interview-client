import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer, Header } from './components'
// import Layout from './Layout'


function App() {

  return (
    <>
      <main className='min-h-screen flex flex-col'>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
