import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#1a73e8',
        padding: '10px 20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom:"100px"
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0',
          padding: '0',
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.25rem',
              padding: '10px',
              borderRadius: '4px',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3367d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.25rem',
              padding: '10px',
              borderRadius: '4px',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3367d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.25rem',
              padding: '10px',
              borderRadius: '4px',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3367d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.25rem',
              padding: '10px',
              borderRadius: '4px',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3367d6';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
