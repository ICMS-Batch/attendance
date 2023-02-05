import { useEffect, useState } from "react";
import supabase from "../supabase";

const useGetAttendances = () => {
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAttendances = async () => {
      const { data, error } = await supabase.rpc("get_all_attendances");
      if (data) {
        console.log(data);
        setAttendances(data);
      }
      if (error) {
        setError(error.message);
      }
    };
    getAttendances();
  }, []);

  return { attendances, error };
};

export default useGetAttendances;
