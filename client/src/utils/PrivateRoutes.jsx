import { LoadingOverlay } from "@mantine/core";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import supabase from "../services/supabase";

const PrivateRoutes = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      console.log(data);
      setSession(data.session);
    };
    getSession();
  }, []);

  if (session) {
    return <Outlet />;
  } else {
    <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
