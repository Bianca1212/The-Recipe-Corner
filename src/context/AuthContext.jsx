import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const { item: localStorageUser, set, remove } = useLocalStorage("user");

  const login = (userObject) => {
    set(userObject);
    setUser(userObject);
  };

  const logout = () => {
    remove();
    setUser(null);
  };

  useEffect(() => {
    if (localStorageUser) {
      setUser(localStorageUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};
