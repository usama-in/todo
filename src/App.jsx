import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import Root from "./Root";
import ErrorPage from "./pages/ErrorPage";
import router from "./Routes";

function App() {

 


 

  return <RouterProvider router={router} />;
}

export default App;
