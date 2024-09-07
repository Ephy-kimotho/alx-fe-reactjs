import { useNavigate, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  function handleLogin() {
    /* Logic to authenticate the user is here */
    login();
    navigate("/");
  }
  return (
    <section>
      <h2>This is the login page</h2>
      <button onClick={handleLogin}>Log In</button>
    </section>
  );
}

export default Login;
