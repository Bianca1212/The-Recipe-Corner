import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AppRouter } from "./components/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);
