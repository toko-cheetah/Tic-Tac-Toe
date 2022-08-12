import { useEffect, useState } from "react";
import "./App.css";
import NewGame from "./Components/NewGame";
import Game from "./Components/Game";
import EndGame from "./Components/EndGame";
import { defaultGrid } from "./helper";

export default function App() {
  const [newGame, setNewGame] = useState(true);
  const [endGame, setEndGame] = useState(false);

  const [player1sMarkX, setPlayer1sMarkX] = useState(true);
  const [vsCpu, setVsCpu] = useState(false);

  const [xTurn, setXTurn] = useState(true);
  const [grid, setGrid] = useState(defaultGrid);
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState({
    x: 0,
    ties: 0,
    o: 0,
  });

  const players = {
    player1: vsCpu ? "YOU" : "P1",
    player2: vsCpu ? "CPU" : "P2",
  };
  const whosX = {
    markX: player1sMarkX ? players.player1 : players.player2,
    markO: player1sMarkX ? players.player2 : players.player1,
  };

  const getEl = (id) => document.getElementById(id);

  console.log(endGame, winner);

  useEffect(() => {
    findOutWinner("space1", "space2", "space3");
    findOutWinner("space4", "space5", "space6");
    findOutWinner("space7", "space8", "space9");
    findOutWinner("space1", "space4", "space7");
    findOutWinner("space2", "space5", "space8");
    findOutWinner("space3", "space6", "space9");
    findOutWinner("space1", "space5", "space9");
    findOutWinner("space3", "space5", "space7");
  }, [xTurn, grid]);

  function findOutWinner(spaceNum1, spaceNum2, spaceNum3) {
    return (
      grid[spaceNum1].filled &&
      grid[spaceNum1].mark === grid[spaceNum2].mark &&
      grid[spaceNum1].mark === grid[spaceNum3].mark &&
      (setWinner(grid[spaceNum1].mark), setEndGame(true))
    );
  }

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

  function selectSpace(event) {
    const e = event.target;
    return (
      !grid[e.id].filled &&
      (setGrid((prev) => ({
        ...prev,
        [e.id]: {
          filled: true,
          mark: xTurn ? "x" : "o",
        },
      })),
      setXTurn((prev) => !prev))
    );
  }

  return (
    <div className="App">
      {newGame ? (
        <NewGame selectMark={selectMark} selectRival={selectRival} />
      ) : (
        <Game
          whosX={whosX}
          xTurn={xTurn}
          selectSpace={selectSpace}
          grid={grid}
          score={score}
        />
      )}
      {endGame && <EndGame />}
    </div>
  );
}
