import React, { useContext, useState } from "react";
import Service from "../service";
import { MessageContext } from "../context/MessageContextProvider";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

function Login() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const messageContext = useContext(MessageContext);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setUserDetails({ ...userDetails, email: e.target.value });
  };

  const passwordHandler = (e) => {
    setUserDetails({ ...userDetails, password: e.target.value });
  };

  const getUserDetails = async () => {
    const response = await Service(
      "POST",
      "https://reactbasic.onrender.com/user/login",
      userDetails
    );
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      messageContext.setUserId(response.data.logindetails._id);
      navigate(`${response.data.logindetails._id}`);
    } else {
      console.log("failed");
    }
  };

  const login = (e) => {
    e.preventDefault();
    if (userDetails.email.trim() !== "" && userDetails.password.trim() !== "") {
      getUserDetails();
    } else {
      console.log("enter values");
    }
  };
  return (
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <div className="card-header">
          <h3>Sign In</h3>
        </div>
        <div className="card-body">
          <form onSubmit={login}>
            <Input
              icon="fa fa-envelope"
              errorMsg="Enter valid mail ID"
              input={{
                id: "basic-addon1",
                type: "email",
                placeholder: "Email",
                value: userDetails.email,
                onChange: emailHandler,
                required: true,
              }}
            />
            <Input
              icon="fa fa-key"
              errorMsg="Enter valid Password"
              input={{
                id: "basic-addon2",
                type: "password",
                placeholder: "Password",
                value: userDetails.password,
                onChange: passwordHandler,
                required: true,
              }}
            />
            <div className="form-group">
              <button type="submit" className="btn float-right login_btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
