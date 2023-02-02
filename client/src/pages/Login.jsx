import React, { useState } from "react";
import Input from "../components/Input";
import "../css/login&signup.css";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { showNotification } from "@mantine/notifications";
import { Button, TextInput } from "@mantine/core";

const Login = () => {
  const navigate = useNavigate();
  const [formDetail, setFormDetail] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formDetail.email,
      password: formDetail.password,
    });

    if (data.user) {
      showNotification({
        message: "Login Successful",
        color: "green",
      });
      navigate("/home");
    } else if (error) {
      showNotification({
        message: error.message,
        color: "red",
      });
    }
  };

  const setValue = (e) => {
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
          <div className="inputs-div">
            <TextInput
              placeholder="fullname@tuicms.edu.np"
              label="Email"
              name="email"
              type="email"
              required
              onChange={(e) => setValue(e)}
            />
          </div>
          <div className="inputs-div">
            <TextInput
              placeholder="Enter your Password"
              label="Password"
              type="password"
              name="password"
              required
              onChange={(e) => setValue(e)}
            />
          </div>

          <div className="inputs-div">
            <Button color="pink">Login</Button>
          </div>
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
