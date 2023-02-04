import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase";
import { getStorage } from "../utils/storage";

const AuthContext = createContext({
  currentUser: null,
  isLoading: true,
  setIsLoading: () => {},
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getStorage("token");
    const getCurrentUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser(token);

      if (user) {
        console.log("user", user);
        setCurrentUser(user);
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
