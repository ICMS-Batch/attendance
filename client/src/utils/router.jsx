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

const Routers = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/managestudent" element={<ManageStudent />} />
        <Route path="/history" element={<History/>} />
        <Route path="/Settings" element={<Settings />} />

      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
