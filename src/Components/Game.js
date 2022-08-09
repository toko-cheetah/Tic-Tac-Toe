import { useState, useEffect } from "react";

import logo from "../img/logo.svg";
import xSilver from "../img/icon-x-silver.svg";
import oSilver from "../img/icon-o-silver.svg";

export default function Game() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    setSpaces(() => {
      const arr = [];
      for (let i = 0; i < 9; i++) {
        arr.push(<div key={`space-${i}`} className="space"></div>);
      }
      return arr;
    });
  }, []);

  return (
    <div className="game">
      <header>
        <img src={logo} alt="XO logo" />

        <div className="whos-turn">
          <img src={xSilver} alt="Silver X or O icon small" />
          <p>TURN</p>
        </div>

        <button className="restart-btn silver-btn"></button>
      </header>

      <main>{spaces}</main>

      <footer>
        <div id="x-player">
          <p>X</p>
          <p className="point">0</p>
        </div>

        <div id="ties">
          <p>TIES</p>
          <p className="point">0</p>
        </div>

        <div id="o-player">
          <p>O</p>
          <p className="point">0</p>
        </div>
      </footer>
    </div>
  );
}
