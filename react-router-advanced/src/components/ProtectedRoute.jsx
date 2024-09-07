/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function ProtectedRoute({ children, path }) {
  const { isAuthenticated } = useAuth()
  
  return isAuthenticated ? children : <Navigate to={path} replace />;
}

export default ProtectedRoute;
