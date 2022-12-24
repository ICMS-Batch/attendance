import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../pages/AdminLayout";
import SideBar from "../components/SideBar";

const Routers = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
