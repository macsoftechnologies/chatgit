import React, { useState } from "react";
import "./input.css";

function Input(props) {
  const [focused, setFocused] = useState(false);
  const inputTouched = () => {
    setFocused(true);
  };
  return (
    <div className="input">
      <div className="input-group has-validation mb-3">
        <span className="input-group-text" id={props.id}>
          <i className={props.icon}></i>
        </span>
        <input
          className="form-control"
          {...props.input}
          focused={focused.toString()}
          onBlur={inputTouched}
        />
        <span className="invalid-feedback">{props.errorMsg}</span>
      </div>
    </div>
  );
}

export default Input;
