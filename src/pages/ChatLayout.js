import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sideBars/ChatSidebar";
import "./ChatLayout.css";

function ChatLayout() {
  return (
    <div className="content-wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default ChatLayout;
