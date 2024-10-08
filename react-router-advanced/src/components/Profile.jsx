import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section>
      <h2>Welcome to the profile section</h2>
      <div>
        <p>Username: John</p>
        <p>Email: john@gmail.com</p>
        <p>Phone: +254712345678</p>
      </div>

      <nav>
        <ul style={{ padding: "10px" }}>
          <Link to="profiledetails" style={{ margin: "1rem" }}>
            ProfileDetails
          </Link>
          <Link to="profilesettings">ProfileSettings</Link>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
