import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase";
import { getStorage } from "../utils/storage";

const defaultProfile = {
  full_name: null,
  role: "student",
};

const AuthContext = createContext({
  currentUser: null,
  isLoading: true,
  profile: structuredClone(defaultProfile),
  setIsLoading: () => {},
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const token = getStorage("token");
    const getCurrentUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser(token);

      if (user) {
        setCurrentUser(user);
        const { data: userProfile } = await supabase
          .from("profiles")
          .select("full_name, role")
          .eq("id", user.id)
          .single();

        setProfile(userProfile);

        setIsLoading(false);
      } else if (error) {
        setCurrentUser(null);
        setIsLoading(false);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth should be within a AuthProvider");
  }
  return context;
}
export default AuthContext;
