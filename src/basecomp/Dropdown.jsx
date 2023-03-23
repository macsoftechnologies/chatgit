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
      class="checkbox"
      id="checkbox"
      onClick={dropdown()}
    />
    <label for="checkbox" class="label">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
      <div class="ball"></div>
    </label>
  </div>;
};
export default Dropdown;
