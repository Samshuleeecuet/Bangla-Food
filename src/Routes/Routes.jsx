import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import ChefRecepies from '../Pages/Home/ChefRecepies';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/Error/ErrorPage';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import PrivateRoutes from './PrivateRoutes';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=>fetch('https://bangla-food-server.vercel.app/chef'),
        },
        {
            path: 'recepies/:id',
            element:<PrivateRoutes><ChefRecepies></ChefRecepies></PrivateRoutes>,
            loader: ({params})=>fetch(`https://bangla-food-server.vercel.app/recepies/${params.id}`)
        },
        {
          path:'blog',
          element:<Blog></Blog>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);


export default router;