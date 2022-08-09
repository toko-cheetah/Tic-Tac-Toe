import { useState } from "react";
import "./App.css";
import NewGame from "./Components/NewGame";
import Game from "./Components/Game";
import EndGame from "./Components/EndGame";

export default function App() {
  const [newGame, setNewGame] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [player1sMarkX, setPlayer1sMarkX] = useState(true);
  const [vsCpu, setVsCpu] = useState(false);

  // console.log(vsCpu);

  const getEl = (id) => document.getElementById(id);

  function selectMark(event) {
    const e = event.target;

    return e.id === "select-x"
      ? (setPlayer1sMarkX(true),
        e.classList.add("x-selected"),
        getEl("select-o").classList.remove("o-selected"))
      : (setPlayer1sMarkX(false),
        e.classList.add("o-selected"),
        getEl("select-x").classList.remove("x-selected"));
  }

  function selectRival(event) {
    const e = event.target;

    return (
      e.id === "vs-cpu" ? setVsCpu(true) : setVsCpu(false), setNewGame(false)
    );
  }

  return (
    <div className="App">
      {newGame ? (
        <NewGame selectMark={selectMark} selectRival={selectRival} />
      ) : (
        <Game />
      )}
      {endGame && <EndGame />}
    </div>
  );
}
