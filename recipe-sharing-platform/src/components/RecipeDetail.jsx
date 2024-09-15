import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((item) => item.id === recipeId);
        setRecipe(item);
      });
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="w-screen h-screen bg-gray flex justify-center items-center">
        <h1 className="uppercase font-bold text-darkBlue font-4xl">
          Loading Recipe....
        </h1>
      </div>
    );
  }

  const ingredientsElements = recipe.ingredients.map((ingredient, idx) => (
    <li key={idx} className="text-blue my-1 text-lg">
      {ingredient}
    </li>
  ));

  const instructionElements = recipe.instructions.map((instruction, idx) => (
    <li key={idx} className="text-blue my-1 text-lg">
      {instruction}
    </li>
  ));

  return (
    <section className="bg-gray pb-6">
      <article className="flex flex-col md:flex-row gap-4 p-3 bg-cyan rounded-lg  w-full">
        <img
          src={recipe.imageURL}
          alt={recipe.title}
          className="flex-1  rounded-md"
        />

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue my-3 capitalize">
            {recipe.title}
          </h2>
          <p className="text-base md:text-xl text-darkBlue">{recipe.summary}</p>
        </div>
      </article>

      <div className="ml-12">
        <h3 className="text-2xl font-bold text-darkBlue my-3 capitalize">
          Ingredients
        </h3>
        <ul className="list-disc">{ingredientsElements}</ul>

        <h3 className="text-2xl font-bold text-darkBlue my-3 capitalize">
          Instructions
        </h3>
        <ul className="list-decimal">{instructionElements}</ul>
      </div>
    </section>
  );
}

export default RecipeDetail;
