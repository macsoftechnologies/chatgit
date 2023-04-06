// <<<<<<< HEAD
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/App.css";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import UserChat from "./components/UserChat";
import ChatLayout from "./pages/ChatLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Dropdown from "./components/Dropdown";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ChatLayout />,
        children: [
          // { path: "", element: <Dashboard /> },
          { path: ":id", element: <UserChat /> },
        ],
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
