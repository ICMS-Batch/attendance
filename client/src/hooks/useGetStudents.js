import { useEffect, useState } from "react";
import supabase from "../supabase";

const useGetStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("role", "student");
      if (data) {
        setStudents(data);
      }
      if (error) {
        setError(error.message);
      }
    };
    getStudents();
  }, []);

  return { students, error };
};

export default useGetStudents;
