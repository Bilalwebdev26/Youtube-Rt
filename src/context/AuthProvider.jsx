import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidApi.js";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");
  useEffect(() => {
    fetchAllData(value);
  }, [value]);
  const fetchAllData = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setData(contents);
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthHook = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthHook must be used within an AuthProvider");
  }
  return context;
};
