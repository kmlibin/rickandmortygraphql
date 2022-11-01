import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path ="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
