import React from "react";
import { Link } from "react-router-dom";
import  "./Home.css"

function Home() {
  return (
    <div className="home">
      <Link to="/dashboard"></Link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>
      <div className="Home container">
        <h1 className="quote">Chat with Huge Friends, Family, etc..</h1>
        <div className="signInbuttons">
          <button className="signup">SignUp</button>
          <button className="signIn">SignIn</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
