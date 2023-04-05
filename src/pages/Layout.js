import React from "react";
import { Outlet } from "react-router-dom";
import ThemeContextProvider from "../context/ThemeContextProvider";
import MessageContextProvider from "../context/MessageContextProvider";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <ThemeContextProvider>
        <MessageContextProvider>
          <Navbar />
          <Outlet />
        </MessageContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default Layout;
