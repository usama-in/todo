import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import ErrorPage from "./pages/ErrorPage";
import Root from './Root'
import "./App.css";

import router from "./Routes";

function App() {

 
  console.log(router)

 

  return <RouterProvider router={router} />;
}

export default App;
