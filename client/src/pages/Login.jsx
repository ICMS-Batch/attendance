import React, { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import * as css from "../css/login&signup.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [formDetail, setFormDetail] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetail);
  };

  const handleLogin = (e) => {
    setFormDetail({
      ...formDetail,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src="/assets/icmslogo.png" className="imglogo" />
        <label className="form-title">Login</label>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            placeholder="fullname@tuicms.edu.np"
            label="Email"
            name="email"
            type="email"
            errorMessage="email is required and should be valid"
            onChange={(e) => handleLogin(e)}
          />
          <Input
            placeholder="Enter your Password"
            label="Password"
            type="password"
            name="password"
            errorMessage="password is required"
            onChange={(e) => handleLogin(e)}
          />

          <Button title="Login" className="btn" />
        </form>
        <div className="action-container">
          New Here?
          <Link className="action-txt" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
