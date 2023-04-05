// import { Dropdown } from "bootstrap";
import React from "react";
import "../basecomp/Dropdown.css";
import "../basecomp/Dropdown";
const Dropdown = () => {
  function dropdown() {
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    });
  }
  <div>
    <input
      type="checkbox"
      className="checkbox"
      id="checkbox"
      onClick={dropdown()}
    />
    <label for="checkbox" className="label">
      <i className="fas fa-moon"></i>
      <i className="fas fa-sun"></i>
      <div className="ball"></div>
    </label>
  </div>;
};
export default Dropdown;
