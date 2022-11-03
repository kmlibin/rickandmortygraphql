import { Route, Routes } from "react-router-dom";

//components
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";
import Search from "./pages/Search";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
