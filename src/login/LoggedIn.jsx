import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const LoggedIn = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};
