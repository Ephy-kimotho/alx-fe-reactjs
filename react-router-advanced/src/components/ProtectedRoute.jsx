/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
