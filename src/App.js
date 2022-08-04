import { useState } from "react";
import "./App.css";
import NewGame from "./Components/NewGame";
import Game from "./Components/Game";
import EndGame from "./Components/EndGame";

export default function App() {
  const [newGame, setNewGame] = useState(false);
  const [endGame, setEndGame] = useState(true);

  return (
    <div className="App">
      {newGame ? <NewGame /> : <Game />}
      {endGame && <EndGame />}
    </div>
  );
}
