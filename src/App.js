// <<<<<<< HEAD
import React from "react";
import "./components/App.css";
import RouterLayout from "./pages/RouterLayout";
import ThemeContextProvider from "./context/ThemeContextProvider";
import MessageContextProvider from "./context/MessageContextProvider";
// import Dropdown from "./components/Dropdown";

function App() {
  return (
    <ThemeContextProvider>
      <MessageContextProvider>
        <RouterLayout />
      </MessageContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
