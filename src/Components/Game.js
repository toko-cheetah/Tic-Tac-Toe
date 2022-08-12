import { useState, useEffect } from "react";

import logo from "../img/logo.svg";
import xSilver from "../img/icon-x-silver.svg";
import oSilver from "../img/icon-o-silver.svg";

export default function Game({
  whosX,
  xTurn,
  selectSpace,
  grid,
  score,
  restartGame,
}) {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    setSpaces(() => {
      const arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(
          <div
            key={`space-${i}`}
            id={`space${i + 1}`}
            className={`space ${
              grid[`space${i + 1}`].filled
                ? grid[`space${i + 1}`].mark === "x"
                  ? "x-filled"
                  : "o-filled"
                : xTurn
                ? "hover-x"
                : "hover-o"
            }`}
            onClick={selectSpace}
          ></div>
        );
      }
      return arr;
    });
  }, [xTurn, grid, selectSpace]);

  return (
    <div className="game">
      <header>
        <img src={logo} alt="XO logo" />

        <div className="whos-turn">
          <img
            src={xTurn ? xSilver : oSilver}
            alt={xTurn ? "X icon" : "O icon"}
          />
          <p>TURN</p>
        </div>

        <button
          className="restart-btn silver-btn"
          onClick={restartGame}
        ></button>
      </header>

      <main>{spaces}</main>

      <footer>
        <div id="x-player">
          <p>X ({whosX.markX})</p>
          <p className="point">{score.x}</p>
        </div>

        <div id="ties">
          <p>TIES</p>
          <p className="point">{score.ties}</p>
        </div>

        <div id="o-player">
          <p>O ({whosX.markO})</p>
          <p className="point">{score.o}</p>
        </div>
      </footer>
    </div>
  );
}
