/* eslint-disable react/prop-types */

function Recipe({ title, description, source }) {
  return (
    <article className="flex flex-col gap-2 shadow hover:shadow-lg rounded-md  bg-green-100 p-5 hover:scale-105 hover:cursor-pointer">
      <div className="flex justify-center">
        <img
          src={source}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-darkBlue mb-3 capitalize">
          {title}
        </h2>
        <p className="text-base text-darkBlue">{description}</p>
      </div>
    </article>
  );
}

export default Recipe;
