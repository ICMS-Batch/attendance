import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

const PrivateRoutes = () => {
  const { isLoading, currentUser } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
