import { useContext } from "react";
import UserContext from "./UserContext";

const styles = {
  backgroundColor: "#f2f2f2",
  color: "#333",
  border: "2px solid orangered",
  padding: "20px",
  borderRadius:"5px",
  fontSize:"1,2rem"
};

function UserDetails() {
  const userData = useContext(UserContext)
  return (
    <div style={styles}>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
