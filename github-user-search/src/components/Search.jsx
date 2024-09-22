import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setUserData(null);
    setIsloading(true);

    try {
      const response = await fetchUserData(searchTerm);

      if (response.status >= 200 && response.status < 300) {
        setUserData(response.data);
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

  console.log("User data", userData);

  return (
    <section>
      <form
        className="mt-d text-white p-3 w-2/5 mx-auto mt-10 rounded-md flex gap-4 justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none grow pl-3 rounded  text-lg outline-none text-darkBlue focus:shadow-lg"
        />

        <button
          type="submit"
          className={`py-2 px-8 bg-darkBlue rounded font-bold text-lg hover:bg-sky-900 active:scale-90 ${
            isloading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Search
        </button>
      </form>

      <div className="w-4/5 mx-auto mt-3">
        {error && <p className="text-red text-center text-lg">{error}</p>}

        {isloading && (
          <p className="text-blue text-center text-lg">Loading...</p>
        )}

        {userData && (
          <article className="bg-darkBlue py-4 flex gap-4 items-center text-white w-4/5 mx-auto rounded shadow-md pl-8">
            <img
              src={userData.avatar_url}
              alt={`A photo of ${userData.name}`}
              className="w-40 rounded-full "
            />

            <div>
              <h3 className="text-2xl text-teal">{userData.login}</h3>
              <a
                href={userData.html_url}
                target="_blank"
                className=" text-teal hover:text-white hover:underline hover:underline-offset-4"
              >
                View profile
              </a>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

export default Search;
