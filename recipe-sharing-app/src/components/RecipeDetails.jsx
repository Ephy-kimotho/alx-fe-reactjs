import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

function RecipeDetails() {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);

  const recipes = useRecipeStore((state) => state.recipes);
  const currentRecipe = recipes.find((recipe) => recipe.id === recipeId);

  if (!currentRecipe) {
    return (
      <div>
        <h1>No recipe found.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{currentRecipe.title}</h1>
      <p>{currentRecipe.description}</p>
      <EditRecipeForm  recipeId={recipeId}/>
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
}

export default RecipeDetails;
