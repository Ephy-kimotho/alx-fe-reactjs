/* eslint-disable react/prop-types */
import useRecipeStore from "./recipeStore"
import { useNavigate } from "react-router-dom"

function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
    const navigate = useNavigate()

    function handleDelete(){
      deleteRecipe(recipeId)

      setTimeout(() => {
        navigate("/")
      }, 1000)
    }

  return (
    <button onClick={handleDelete} className="delete-btn">
      Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton
