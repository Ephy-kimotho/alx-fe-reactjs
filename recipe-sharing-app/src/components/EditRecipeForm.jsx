/* eslint-disable react/prop-types */
import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm({ recipeId }) {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  const [newTitle, setNewTitle] = useState(recipe.title);
  const [newDescription, setNewDescription] = useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  function handleSubmit(event) {
    event.preventDefault();
    updateRecipe(newTitle, newDescription, recipeId);
    setNewTitle("");
    setNewDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <input
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        placeholder="Enter new title"
      />
      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Enter new description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm;
