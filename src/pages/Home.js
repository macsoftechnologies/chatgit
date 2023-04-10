import React from "react";
import "./Home.css";
import Login from "../components/Login";
import Register from "../components/Register";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                <Login />
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex="0"
              >
                <Register />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Sign-in
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Sign-up
                </button>
              </li>
            </ul>
            <h1 className="quote">
              Powerful Messages To Send Your Long Distance Friends
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
