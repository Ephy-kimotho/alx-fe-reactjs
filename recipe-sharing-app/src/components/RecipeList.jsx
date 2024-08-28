import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <>
      <SearchBar />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <footer className="links-container">
              <Link to={`/recipe/${recipe.id}`} className="view-link">
                View Details
              </Link>

              <button
                onClick={() => addFavorite(recipe.id)}
                className="add-fav-btn"
              >
                Add favorite
              </button>
            </footer>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
