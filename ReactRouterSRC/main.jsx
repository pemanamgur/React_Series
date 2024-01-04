import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './Component/Home'
import Layout from './Component/Layout'
import About from './Component/About'
import Contact from './Component/Contact'
import User from './Component/User'
import Github  from './Component/Github'
import { githubInfo } from './Component/Github'


// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "Home",
//         element : <Home />
//       },
//       {
//         path : "About",
//         element : <About />
//       },
//       {
//         path : "Contact",
//         element : <Contact />
//        }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout />}>
        <Route path='Home' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='user/:userid' element={<User/>} />
        <Route
         loader={githubInfo}
         path='Github' 
         element={<Github/>} 
         />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 <RouterProvider router={router}  />

  </React.StrictMode>,
)
