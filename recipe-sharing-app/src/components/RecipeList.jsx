import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const RecipeList = () => { 
  const recipes = useRecipeStore(state => state.filteredRecipes)

  return (
    <>
      <SearchBar />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`} className="view-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
