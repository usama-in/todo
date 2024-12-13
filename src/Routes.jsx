import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import ErrorPage from "./pages/ErrorPage";
import Root from './Root'


    const router = createBrowserRouter( [
        {
          path: "/",
          element: <Root />,
          errorElement: <ErrorPage />,
          children: [
            { path:'/',element: <Navigate to='/todos' replace />},
            { path:'/todos',element: <HomePage /> },
            { path: "/create", element: <CreateTodo /> },
            { path: "/edit", element: <EditTodo /> },
          ],
        },
      ]);
  


export default router