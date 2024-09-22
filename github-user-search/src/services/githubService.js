import axios from "axios";

async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
}

export default fetchUserData;
