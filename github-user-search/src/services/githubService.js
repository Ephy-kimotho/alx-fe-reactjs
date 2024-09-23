import axios from "axios";

function getURL(username, location, repos) {
  let baseUrl = `https://api.github.com/search/users?q=`;
  let query = [];

  if (username) {
    query.push(`${username}`);
  }

  if (location) {
    query.push(`location:${location}`);
  }

  if (repos) {
    query.push(`repos:>=${repos}`);
  }

  let url = `${baseUrl}${query.join("+")}`;

  console.log(url);
  

  return url;
}

async function fetchUserData(username, location, repos) {
  const url = getURL(username, location, repos);
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error.response;
  }
}

export default fetchUserData;
