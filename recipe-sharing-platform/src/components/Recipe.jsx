/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Recipe({ title, description, source, id }) {
  return (
    <article className="shadow hover:shadow-lg rounded-md  bg-green-100 p-5 hover:scale-105 hover:cursor-pointer">
      <Link to={`/recipe/${id}`}>
        <div className="flex justify-center">
          <img
            src={source}
            alt={title}
            className="w-full h-44 object-cover rounded-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-darkBlue my-3 capitalize">
            {title}
          </h2>
          <p className="text-base text-darkBlue">{description}</p>
        </div>
      </Link>
    </article>
  );
}

export default Recipe;
