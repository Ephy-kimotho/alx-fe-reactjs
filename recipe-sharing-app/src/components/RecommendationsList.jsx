import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

function RecommendationsList() {
  const getRecommedations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    getRecommedations();
  }, [getRecommedations]);

  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <section className="recipe-list">
      <h2>
        Your Recommendations
        <div className="underline underline-rec"></div>
      </h2>
      {recommendations.map((recipe) => {
        return (
          <article key={recipe.id} className="recipe">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </article>
        );
      })}
    </section>
  );
}

export default RecommendationsList;
