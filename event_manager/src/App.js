import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet} from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/StudentPages/Home';
import StudentNavbar from './components/studentNavbar';
import AdminNavbar from './components/adminNavbar';
import SANavbar from './components/saNavbar';
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateEvents from './components/pages/StudentPages/privEvents';
import PubEvents from './components/pages/StudentPages/pubEvents';
import RsoEvents from './components/pages/StudentPages/rsoEvents';
import AdminHome from './components/pages/AdminPages/adminHome';
import AdminPrivateEvents from './components/pages/AdminPages/adminPrivEvents';
import AdminPubEvents from './components/pages/AdminPages/adminPubEvents';
import AdminRsoEvents from './components/pages/AdminPages/adminRsoEvents';

import AdminRsoHub from './components/pages/AdminPages/Rso/adminRsoHub';
import AdminRsoOptions from './components/pages/AdminPages/Rso/adminRsoOptions';


function App() {

  const { currentUser } = useContext(AuthContext);
  const userRole = 'admin';
  //const userRole = currentUser?.role;

  const queryClient = new QueryClient();

  const Layout = () => {
    let content = null;
    if (userRole === 'admin') {
      content = (
        <div>
          <AdminNavbar/>
          <div>
            <Outlet/>
          </div>
        </div>
      )
    } else if (userRole === 'student') {
      content = (
        <div>
          <StudentNavbar/>
          <div>
            <Outlet/>
          </div>
        </div>
      )
    } else if (userRole === 'superadmin') {
      content = (
        <div>
          <SANavbar/>
          <div>
            <Outlet/>
          </div>
        </div>
      )
    }
    return (
      <QueryClientProvider client={queryClient}>
        {content}
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
          element:<PrivateEvents/>
        },
        {
          path:"/home/pub-events",
          element:<PubEvents/>
        },
        {
          path:"/home/rso-events",
          element:<RsoEvents/>
        },
        {
          path:"/adminhome",
          element:<AdminHome/>
        },
        {
          path:"/adminhome/adminpriv-events",
          element:<AdminPrivateEvents/>
        },
        {
          path:"/adminhome/adminpub-events",
          element:<AdminPubEvents/>
        },
        {
          path:"/adminhome/adminrso-events",
          element:<AdminRsoEvents/>
        },
        {
          path:"/adminhome/admin-rso-hub",
          element:<AdminRsoHub/>
        },
        {
          path:"/adminhome/admin-rso-hub",
          element:<AdminRsoHub/>
        },
        {
          path: '/adminhome/admin-rso-hub/rso-options/:rsoId',
          element: <AdminRsoOptions />,
        },
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