import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import supabase from "../supabase";

const useGetCurrentClass = () => {
  const [currentClass, setCurrentClass] = useState(null);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchCurrentClass = async () => {
      const {
        data: { semester_id },
      } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", currentUser.id)
        .single();

      const { data, error: fetchError } = await supabase
        .from("routine")
        .select(
          `
          day, 
          start_time,
          end_time,
          subject(name)
        `
        )
        .eq("sem_id", semester_id)
        .eq("day", 7)
        .gte("start_time", "07:00")
        .lte("end_time", "09:00")
        .single();

      if (fetchError) {
        console.log(fetchError);
        setError(fetchError.message);
      }

      if (data) {
        console.log("data", data);
        setCurrentClass(data);
      }
    };

    fetchCurrentClass();
  }, [currentUser]);

  return { currentClass, error };
};

export default useGetCurrentClass;
