import useRecipeStore from "./recipeStore";

const styles = {
  padding: "6px 6px 6px 15px",
  border: "none",
  borderRadius: "5px",
  fontSize: "1.125rem",
  color: "#333333",
};

function SearchBar() {
  const setSearchTerm = useRecipeStore((store) => store.setSearchTerm);
  const searchTerm = useRecipeStore((store) => store.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  function handleChange(e) {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes();
  }

  return (
    <input
      type="text"
      placeholder="Search recipes....."
      onChange={handleChange}
      value={searchTerm}
      style={styles}
    />
  );
}

export default SearchBar;
