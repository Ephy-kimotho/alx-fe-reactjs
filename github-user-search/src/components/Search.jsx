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
    setSearchTerm("")
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

  return (
    <section className="flex flex-col items-center mt-10 px-5">
      <form
        className="text-white py-3 rounded-md flex gap-4 justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none grow pl-3 rounded  text-lg outline-none text-darkBlue focus:shadow-lg w-full"
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

      <div className="w-full mt-3 ">
        {error && <p className="text-red text-center text-lg">{error}</p>}

        {isloading && (
          <p className="text-blue text-center text-lg">Loading...</p>
        )}

        {userData && (
          <article className="bg-darkBlue w-full sm:w-4/5  mx-auto p-4 flex gap-4 items-center rounded-lg shadow-md">
            <img
              src={userData.avatar_url}
              alt={`A photo of ${userData.name}`}
              className="w-1/5 rounded-full "
            />

            <div>
              <h3 className="text-xl sm:text-3xl text-teal">
                {userData.login}
              </h3>
              <a
                href={userData.html_url}
                target="_blank"
                className=" text-teal text-base sm:text-lg hover:text-white hover:underline hover:underline-offset-4"
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
