import { create } from "zustand";

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => {
    set(state => ({ recipes: [...state.recipes, newRecipe] }));
  },
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (title, description, id) => set(state => ({
    recipes: state.recipes.map(recipe => recipe.id === id ? { ...recipe, title, description } : recipe)
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
}));

export default useRecipeStore