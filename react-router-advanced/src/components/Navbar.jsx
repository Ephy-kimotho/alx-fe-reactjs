import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/" >
            HOME
          </Link>
          <Link to="/profile" style={{ margin: "1rem" }}>PROFILE</Link>
          <Link to="/login">LOGIN</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
