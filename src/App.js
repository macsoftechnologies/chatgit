// <<<<<<< HEAD
import React, { useState } from "react";
import Sidebar from './basecomp/Sidebar'
import Navbar from './basecomp/Navbar'
// import Sidebar from "./"
import { createContext } from "react";
import ReactSwitch from "react-switch";
import "./basecomp/App.css";
// import Dropdown from "./basecomp/Dropdown";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
    <Navbar/>
      <Sidebar/>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        {/* <Dropdown /> */}
      </div>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
