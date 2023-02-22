import { useEffect, useState } from "react";
import supabase from "../supabase";

const useGetStudents = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      const { data, error } = await supabase.rpc("get_all_students");
      if (data) {
        const response = data.map((student, index) => ({
          sn: index + 1,
          ...student,
        }));
        setStudents(response);
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
