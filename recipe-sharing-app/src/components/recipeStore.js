import { create } from "zustand";

const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => {
    set((state) => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    }))
  },

  addRecipe: (newRecipe) => {
    set(state => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.filteredRecipes, newRecipe] 
    }));
  },

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (title, description, id) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, title, description } : recipe
    ),
    filteredRecipes: state.filteredRecipes.map(recipe =>
      recipe.id === id ? { ...recipe, title, description } : recipe
    )
  })),

  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id)
  }))
}));

export default useRecipeStore;
