import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
          <Route path="addrecipe" element={<AddRecipeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
