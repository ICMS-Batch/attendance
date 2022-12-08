import React from "react";
import { Router, Route, Routes } from "react-router-dom";

import * as css from "./css/app.css";
import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
