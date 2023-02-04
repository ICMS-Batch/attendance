import { Route, Routes, BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import AttendanceForm from "./pages/Attendance";
import Login from "./pages/Login";
import Register from "./pages/Register";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="form" element={<AttendanceForm />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
