import React from "react";

// import img from "./images.jpeg";
import './Leftsidemenu/Sidebar.css'
function Sidebar() {
  return (
    <div className="side_container">
      <h4>Chats</h4>
      <div className="container my-3">
        <div className="search-container">
          <form action="">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input
              className="form-control"
              type="text"
              typeof="search"
              placeholder="search contact/chat"
            />
          </form>
        </div>
      </div>
      <div className="container bg-light">
        <div className="row p-2">
          <div className="col-md-2">
            <div className="img-container">
              <img src="assets/img1.jpg" alt="user" />
            </div>
          </div>
          <div className="col-md-8 content">
            <h5>Jasmine Thomson</h5>
            <p className="sub-title">Had they visited Rome before</p>
          </div>
          <div className="col-md-2">
            <div className="circle">
              <div class="dropdown dropdown-menu-end">
                <p
                  class="btn"
                  href="#"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ...
                </p>
                <ul class="dropdown-menu">
                  <li className="d-flex" active>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-check" aria-hidden="true"></i>&nbsp; Mark
                      as Read
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-bell-o" aria-hidden="true"></i>&nbsp; Mute
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; View
                      Profile
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; Audio
                      Call
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-video-camera" aria-hidden="true"></i>{" "}
                      &nbsp;Video Call
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-file-o" aria-hidden="true"></i>&nbsp;
                      Archive
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-trash" aria-hidden="true"></i>&nbsp;
                      Delete
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i
                        class="fa fa-exclamation-triangle"
                        aria-hidden="true"
                      ></i>{" "}
                      &nbsp;Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-primary">
        <div className="row p-2">
          <div className="col-md-2">
            <div className="img-container">
              <img src="Assets/img2.jpg" alt="user" />
            </div>
          </div>
          <div className="col-md-8 content">
  
            <h5>Jasmine Thomson</h5>
            <p className="sub-title">Had they visited Rome before</p>
          </div>
          <div className="col-md-2">
            <div className="circle">
              <div class="dropdown dropdown-menu-end">
                <p
                  class="btn"
                  href="#"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ...
                </p>
                <ul class="dropdown-menu">
                  <li className="d-flex" active>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-check" aria-hidden="true"></i>&nbsp; Mark
                      as Read
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-bell-o" aria-hidden="true"></i>&nbsp; Mute
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-user-o" aria-hidden="true"></i>&nbsp; View
                      Profile
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-phone" aria-hidden="true"></i>&nbsp; Audio
                      Call
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-video-camera" aria-hidden="true"></i>{" "}
                      &nbsp;Video Call
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-file-o" aria-hidden="true"></i>&nbsp;
                      Archive
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa fa-trash" aria-hidden="true"></i>&nbsp;
                      Delete
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i
                        class="fa fa-exclamation-triangle"
                        aria-hidden="true"
                      ></i>{" "}
                      &nbsp;Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
