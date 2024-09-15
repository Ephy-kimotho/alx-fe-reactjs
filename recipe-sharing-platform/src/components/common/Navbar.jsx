import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-darkBlue py-2 flex justify-center">
      <nav className="text-white text-xl">
        <Link
          to="/"
          className="mx-1 no-underline hover:text-sky-300 hover:underline underline-offset-4"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
