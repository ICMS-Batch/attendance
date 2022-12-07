import React, { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import * as signup from "../css/signup.css";
const SignUp = () => {
  const [formDetail, setFormDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    semester: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetail);
  };

  const handleSignup = (e) => {
    setFormDetail({
      ...formDetail,
      [e.target.name]: e.target.value,
    });
  };

  const values = [
    "1st Semester",
    "2nd Semester",
    "3rd Semester",
    "4th Semester",
    "5th Semester",
    "6th Semester",
    "7th Semester",
  ];

  return (
    <div className="container">
      <div className="form-container">
        <img src="/assets/icmslogo.png" className="imglogo" />
        <label className="form-title">Sign Up</label>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            placeholder="Enter your First Name"
            label="First Name"
            name="firstname"
            errorMessage="first name is required"
            onChange={(e) => handleSignup(e)}
          />
          <Input
            placeholder="Enter your Last Name"
            label="Last Name"
            name="lastname"
            errorMessage="Last name is required"
            onChange={(e) => handleSignup(e)}
          />
          <Input
            placeholder="fullname@tuicms.edu.np"
            label="Email"
            name="email"
            type="email"
            errorMessage="email is required and should be valid"
            onChange={(e) => handleSignup(e)}
          />
          <Input
            placeholder="Enter your Password"
            label="Password"
            type="password"
            name="password"
            errorMessage="password is required"
            onChange={(e) => handleSignup(e)}
          />
          <div className="inputs-div">
            <label className="input-labels">Semester</label>
            <select
              value={formDetail.semester}
              name="semester"
              className="dropdown"
              onChange={(e) => handleSignup(e)}
              required
            >
              {values.map((options, index) => {
                return (
                  <option value={options} key={index} className="dropdown-list">
                    {options}
                  </option>
                );
              })}
            </select>
          </div>

          <Button title="Sign Up" className="btn" />
        </form>
        <div className="action-container">
          Have an account?
          <a className="action-txt" href="../screens/login.php">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
