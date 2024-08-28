import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add-recipe" className="nav-link">Add Recipe</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <Link to="/recommendations" className="nav-link">Recommendations</Link>
      </nav>
    </header>
  );
}

export default Navbar;
