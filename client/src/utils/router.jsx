import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../pages/AdminLayout";
import ManageStudent from "../pages/ManageStudent";
import Settings from "../pages/Settings";
import History from "../pages/History";
import Routine from "../pages/Routine";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<PrivateRoutes />} path="/">
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/managestudent" element={<ManageStudent />} />
        <Route path="/admin/history" element={<History />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/routine" element={<Routine />} />
      </Route>
    </Routes>
  );
};

export default Routers;
