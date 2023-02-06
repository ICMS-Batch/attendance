import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { useAuth } from "./contexts/AuthContext";
import AttendanceForm from "./pages/Attendance";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/student/Dashboard";
import StudentLists from "./pages/admin/Students";
import AttendanceList from "./pages/admin/Attendances";
import DashboardLayout from "./components/DashboardLayout";
import Loader from "./components/Loader";
const Router = () => {
  const { profile, isLoading } = useAuth();
  const { role } = profile;

  console.log("role", role);
  if (isLoading) {
    return <Loader />;
  }

  const routes = {
    student: {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <StudentDashboard />,
        },
        {
          path: "form",
          element: <AttendanceForm />,
        },
      ],
    },
    admin: {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "students",
          element: <StudentLists />,
        },
        {
          path: "attendances",
          element: <AttendanceList />,
        },
        {
          path: "*",
          element: <h1>Not found</h1>,
        },
      ],
    },
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path={routes[role].path} element={routes[role].element}>
            {routes[role].children.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))}
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
