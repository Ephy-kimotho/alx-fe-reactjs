import { useNavigate } from "react-router-dom";
import { useContext,  } from "react";
import { AuthContext } from "./AuthProvider";

function Login() {
  const { login, } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/");
  }
  return (
    <section>
      <h2>This is the login page</h2>
      <button onClick={handleLogin}>Login</button>
    </section>
  );
}

export default Login;
