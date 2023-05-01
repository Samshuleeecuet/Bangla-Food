import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import ChefRecepies from '../Pages/ChefRecepies';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=>fetch('http://localhost:5000/chef'),
        },
        {
            path: 'recepies/:id',
            element:<ChefRecepies></ChefRecepies>,
            loader: ({params})=>fetch(`http://localhost:5000/recepies/${params.id}`)
        }
      ]
    },
  ]);


export default router;