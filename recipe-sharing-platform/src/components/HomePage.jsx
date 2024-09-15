import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const recipeElements = recipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      title={recipe.title}
      description={recipe.summary}
      source={recipe.imageURL}
    />
  ));

  return (
    <section className="bg-gray pt-6 px-9 pb-9">
      <div className="bg-blue rounded shadow hover:shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray py-1 uppercase my-6">
          Welcome to MapishiHub
        </h1>
      </div>
      <div className="bg-gray grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipeElements}
      </div>
    </section>
  );
}

export default HomePage;
