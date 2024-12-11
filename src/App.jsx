import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage";

function App() {

  //configure router using version 6
  
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


 

  return <RouterProvider router={router} />;
}

export default App;
