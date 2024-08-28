import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
      </nav>
    </header>
  );
}

export default Navbar;
