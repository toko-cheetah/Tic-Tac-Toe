import { useState } from "react";
import "./App.css";
import NewGame from "./Components/NewGame";
import Game from "./Components/Game";

export default function App() {
  const [newGame, setNewGame] = useState(false);

  return (
    <div className="App">
      {newGame && <NewGame />}
      <Game />
    </div>
  );
}
