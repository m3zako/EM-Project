import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import Navbar from './components/Navbar';

function App() {

  // change to false to make it work
  const currentUser = true;

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }
    return children
  }

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <Home />
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/home/priv-events",
          element:<privEvents/>
        },
        {
          path:"/home/pub-events",
          element:<pubEvents/>
        },
        {
          path:"/home/RSO-events",
          element:<rsoEvents/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;