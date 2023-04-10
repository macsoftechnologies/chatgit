import React, { useState } from "react";
import Service from "../service";
import Input from "./Input";

const Register = () => {
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameHandler = (e) => {
    setSignupDetails({ ...signupDetails, name: e.target.value });
  };

  const signUpEmailHandler = (e) => {
    setSignupDetails({ ...signupDetails, email: e.target.value });
  };

  const signUpPasswordHandler = (e) => {
    setSignupDetails({ ...signupDetails, password: e.target.value });
  };

  const signUpUserDetails = async () => {
    const response = await Service(
      "POST",
      "https://reactbasic.onrender.com/user/addUser",
      signupDetails
    );
    if (response.status === 200 || response.status === 201) {
      setSignupDetails({ name: "", email: "", password: "" });
    } else {
      console.log("failed");
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (
      signupDetails.email !== "" &&
      signupDetails.password !== "" &&
      signupDetails.name !== ""
    ) {
      signUpUserDetails();
    } else {
      console.log("enter user details");
    }
  };

  return (
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <div className="card-header">
          <h3>Sign Up</h3>
        </div>
        <div className="card-body">
          <form onSubmit={register}>
            <Input
              icon="fa fa-user"
              errorMsg="Enter valid Name"
              input={{
                id: "register-addon1",
                type: "text",
                placeholder: "Username",
                value: signupDetails.name,
                onChange: nameHandler,
                required: true,
              }}
            />
            <Input
              icon="fa fa-envelope"
              errorMsg="Enter valid mail ID"
              input={{
                id: "register-addon2",
                type: "email",
                placeholder: "Email",
                value: signupDetails.email,
                onChange: signUpEmailHandler,
                required: true,
              }}
            />
            <Input
              icon="fa fa-key"
              errorMsg="Enter valid Password"
              input={{
                id: "register-addon3",
                type: "password",
                placeholder: "Password",
                value: signupDetails.password,
                onChange: signUpPasswordHandler,
                required: true,
              }}
            />

            <div className="form-group">
              <button type="submit" className="btn float-right login_btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
