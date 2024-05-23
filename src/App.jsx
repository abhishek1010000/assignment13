import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from "./AboutUs/About"
import Contact from './Contact/Contact'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar /> <Home /></> 
    },
    {
      path : "/aboutus",
      element : <> <Navbar /> <About /> </>
    },
    {
      path : "/contact",
      element : <> <Navbar /> <Contact /> </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
