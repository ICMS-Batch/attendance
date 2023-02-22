import { useEffect, useState } from "react";
import supabase from "../supabase";

const useGetAttendances = () => {
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAttendances = async () => {
      const { data, error } = await supabase.rpc("get_all_attendances");
      console.log("data", data);
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      if (data) {
        const response = data.map((attendance, index) => {
          const { weekday, ...rest } = attendance;
          return {
            sn: index + 1,
            ...rest,
            day: days[weekday - 1],
          };
        });
        console.log(response);
        setAttendances(response);
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
