import React, { useEffect, useState } from "react";

import Button from "../components/Button";
import "../css/login&signup.css";
import { Link } from "react-router-dom";
import supabase from "../services/supabase";
import { NativeSelect, TextInput } from "@mantine/core";

const SignUp = () => {
  const [semesters, setSemesters] = useState([]);
  const [error, setError] = useState(null);
  const [formDetail, setFormDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    semester: "",
  });

  useEffect(() => {
    const getSemesters = async () => {
      const { data, error } = await supabase
        .from("semesters")
        .select("name, id");
      if (error) {
        setError(error);
      } else if (data) {
        setSemesters(data);
      }
    };
    getSemesters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname } = formDetail;
    const full_name = `${firstname} ${lastname}`;
    const { data, error } = await supabase.auth.signUp({
      email: formDetail.email,
      password: formDetail.password,
      options: {
        data: {
          full_name,
          semester_id: Number(formDetail.semester),
        },
      },
    });
    console.log(data, error);
  };

  const handleSignup = (e) => {
    setFormDetail({
      ...formDetail,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <img src="/assets/icmslogo.png" className="imglogo" />
        <label className="form-title">Sign Up</label>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="inputs-div">
            <TextInput
              placeholder="Enter your First Name"
              label="First Name"
              name="firstname"
              error="first name is required"
              onChange={(e) => handleSignup(e)}
            />
          </div>
          <div className="inputs-div">
            <TextInput
              placeholder="Enter your Last Name"
              label="Last Name"
              name="lastname"
              error="Last name is required"
              onChange={(e) => handleSignup(e)}
            />
          </div>
          <div className="inputs-div">
            <TextInput
              placeholder="fullname@tuicms.edu.np"
              label="Email"
              name="email"
              type="email"
              error="email is required and should be valid"
              onChange={(e) => handleSignup(e)}
            />
          </div>
          <div className="inputs-div">
            <TextInput
              placeholder="Enter your Password"
              label="Password"
              type="password"
              name="password"
              error="password is required"
              onChange={(e) => handleSignup(e)}
            />
          </div>
          <div className="inputs-div">
            <NativeSelect
              data={semesters.map((semester) => semester.name)}
              value={formDetail.semester}
              name="semester"
              label="Select your semester"
              onChange={(e) => handleSignup(e)}
              withAsterisk
            />
          </div>

          <Button title="Sign Up" className="btn" />
        </form>
        <div className="action-container">
          Have an account?
          <Link className="action-txt" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
