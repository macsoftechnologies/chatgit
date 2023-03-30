import React from "react";
import "./sidebar.css";
const Sidemenu = () => {
  return (
    <div className="sidebar">
      <div className="side-text">
        <h3 className="head-text">Chats</h3>
      </div>
      <div className="form-control-icon-start">
        <i class="fa fa-search"></i>
        <input
          type="text"
          className="form-control form-control solid"
          id="search"
          placeholder="search contact / chat"
        ></input>
      </div>
      <div className="container">
        <div class="row">
          <div className="col-md-2">
            <div className="image1">
              <img src="Assets/img1.jpg"></img>
            </div>
            <div className="col-md-8">
              <p className="text">suresh</p>
            </div>
            <div className="col-md-2">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
