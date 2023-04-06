import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { MessageContext } from "../context/MessageContextProvider";

function Home() {
  const messageContext = useContext(MessageContext);
  console.log(messageContext);
  const navigate = useNavigate();
  const login = () => {
    navigate(messageContext.id);
  };
  return (
    <div className="home">
      <Link to="dashboard"></Link>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous"
      />

      <div className="container">
        {/* <h1 className="quote">Chat with Huge Friends, Family, etc..</h1> */}
        <div className="row">
          <div className="col-md-6">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div class="d-flex justify-content-center h-100">
                  <div class="card">
                    <div class="card-header">
                      <h3>Sign In</h3>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="input-group form-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="username"
                          />
                        </div>
                        <div class="input-group form-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-key"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="password"
                          />
                        </div>

                        <div class="form-group">
                          <button
                            type="submit"
                            class="btn float-right login_btn"
                            onClick={login}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer"></div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                {" "}
                <div class="d-flex justify-content-center h-100">
                  <div class="card">
                    <div class="card-header">
                      <h3>Sign Up</h3>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="input-group form-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="username"
                          />
                        </div>
                        <div class="input-group form-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fa-solid fa-envelope"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>

                        <div class="input-group form-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fas fa-key"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="password"
                          />
                        </div>

                        <div class="form-group">
                          <input
                            type="submit"
                            value="Register"
                            class="btn float-right login_btn"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="card-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  sign-in
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  sign-up
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
