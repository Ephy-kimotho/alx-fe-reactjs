import useRecipeStore from "./recipeStore";

function FavoritesList() {
  const favorites = useRecipeStore((state) => {
    return state.favorites.map((id) => {
      return state.recipes.find((recipe) => recipe.id === id);
    });
  });

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <section className="recipe-list">
      <h2>My Favourite Recpies</h2>
      {favorites.map((recipe) => {
        return (
          <div key={recipe.id} className="recipe">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <div>
              <button
                onClick={() => removeFavorite(recipe.id)}
                className="remove-fav-btn"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default FavoritesList;
