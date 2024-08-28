import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
