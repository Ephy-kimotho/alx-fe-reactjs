import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    /* Logic to handle logout of the user */
    logout();
    navigate("/login");
  };
  return (
    <section>
      <h1>WELCOME TO THE HOME PAGE.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime
        nobis, ea temporibus dolorem necessitatibus. Illo exercitationem tenetur
        ullam! Eaque quae sed illum, provident, quos atque incidunt delectus
        adipisci vero nemo sit non excepturi id nobis ad ducimus? Distinctio,
        omnis!
      </p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}

export default Home;
