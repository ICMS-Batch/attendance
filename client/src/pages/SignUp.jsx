import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import * as signup from "../css/signup.css";
const SignUp = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form className="login-form">
          <label className="form-title">Sign Up</label>
          <Input placeholder="Enter your First Name" label="First Name" />
          <Input placeholder="Enter your Last Name" label="Last Name" />
          <Input placeholder="fullname@tuicms.edu.np" label="Email" />
          <Button title="Sign Up" className="btn" />
        </form>
        <p class="action-container">
          Have an account?
          <a class="action-txt" href="../screens/login.php">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
