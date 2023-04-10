import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import ChatLayout from "./ChatLayout";
import UserChat from "../components/UserChat";
import Users from "./Users";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ChatLayout />,
        children: [{ path: ":id", element: <UserChat /> }],
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);
function RouterLayout() {
  return <RouterProvider router={router} />;
}

export default RouterLayout;
