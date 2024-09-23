import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSearchTerm("");
    setLocation("");
    setRepos("");
    setError(null);
    setUserData(null);
    setIsloading(true);

    try {
      const response = await fetchUserData(searchTerm, location, repos);

      if (response.status >= 200 && response.status < 300) {
        setUserData(response.data.items);
      } else {
        setError("Looks like we cant find the user");
      }
    } catch (error) {
      setError("An error ocurred, please try again later");
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  console.log(userData);

  return (
    <section className="flex h-screen flex-col items-center pt-2 px-5">
      <h2 className="text-xl sm:text-3xl text-darkBlue mt-3 font-bold uppercase">
        Github user search app
      </h2>
      <form
        className="text-white py-3 rounded-md flex flex-col gap-4 w-full sm:w-3/5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter username."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none grow pl-3  py-1 rounded text-lg outline-none text-darkBlue focus:shadow-lg w-5/5"
        />

        <input
          type="text"
          name="location"
          placeholder="Enter location (optional)."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-none grow pl-3   py-1 rounded  text-lg outline-none text-darkBlue focus:shadow-lg w-5/5"
        />

        <input
          type="text"
          name="repos"
          placeholder="Enter repository count (optional)."
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border-none grow pl-3   py-1 rounded  text-lg outline-none text-darkBlue focus:shadow-lg w-5/5"
        />

        <div className="text-center">
          <button
            type="submit"
            className={`py-2 px-8 sm:px-16 sm:text-xl bg-darkBlue rounded font-bold text-lg hover:bg-sky-900 active:scale-90 ${
              isloading ? "cursor-not-allowed" : "cursor-pointer"
            } tracking-wider`}
          >
            Search
          </button>
        </div>
      </form>

      <div className="w-full mt-3 ">
        {error && (
          <p className="text-red text-center text-lg uppercase font-bold">
            {error}
          </p>
        )}

        {isloading && (
          <p className="text-blue text-center text-lg uppercase font-bold">
            Loading...
          </p>
        )}

        {userData && userData.length === 0 && (
          <p className="text-red text-center text-lg uppercase font-bold">
            No such user found !
          </p>
        )}

        {userData &&
          userData.length > 0 &&
          userData.map((item) => (
            <article
              key={item.id}
              className="bg-darkBlue w-4/5 sm:w-4/5  mx-auto p-4 flex gap-4 items-center rounded-lg shadow-md mb-4"
            >
              <img
                src={item.avatar_url}
                alt={`A photo of ${item.name}`}
                className="w-24 sm:w-36 rounded-full "
              />

              <div>
                <h3 className="text-xl sm:text-3xl text-white">{item.login}</h3>
                <a
                  href={item.html_url}
                  target="_blank"
                  className=" text-white text-base sm:text-lg hover:text-teal hover:underline hover:underline-offset-4"
                >
                  View profile
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Search;
