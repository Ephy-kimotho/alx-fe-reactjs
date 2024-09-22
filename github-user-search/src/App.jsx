import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
