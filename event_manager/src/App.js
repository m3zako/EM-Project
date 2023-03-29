import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Home from './components/pages/Home'
import Navbar from './components/Navbar';
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();


  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <Navbar/>
        <Home />
      </div>
      </QueryClientProvider>
    )
  };

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }
    return children
  }

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