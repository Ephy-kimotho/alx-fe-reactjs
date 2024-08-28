/* eslint-disable react/prop-types */
import useRecipeStore from "./recipeStore"

function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)

  return (
    <button onClick={() => deleteRecipe(recipeId)} className="delete-btn">
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton
