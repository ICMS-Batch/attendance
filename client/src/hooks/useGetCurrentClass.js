import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import supabase from "../supabase";

const useGetCurrentClass = () => {
  const [currentClass, setCurrentClass] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchCurrentClass = async () => {
      setIsLoading(true);
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
          id,
          day, 
          start_time,
          end_time,
          subject(id, name)
        `
        )
        .eq("sem_id", semester_id)
        .eq("day", 7)
        .single();

      if (fetchError) {
        setError(fetchError.message);
      }

      if (data) {
        setCurrentClass(data);
      }

      setIsLoading(false);
    };

    fetchCurrentClass();
  }, [currentUser]);

  return { currentClass, error, isLoading };
};

export default useGetCurrentClass;
