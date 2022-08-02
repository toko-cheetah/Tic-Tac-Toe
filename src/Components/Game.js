import { useState, useEffect } from "react";

import logo from "../img/logo.svg";
import xSilverSmall from "../img/icon-x-silver-small.svg";
import oSilverSmall from "../img/icon-o-silver-small.svg";

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
          <img src={xSilverSmall} alt="Silver X or O icon small" />
          <p>TURN</p>
        </div>

        <button className="restart-btn silver-btn"></button>
      </header>

      <main>{spaces}</main>

      <footer>
        <div>
          <p>X</p>
          <p>0</p>
        </div>

        <div>
          <p>TIES</p>
          <p>0</p>
        </div>

        <div>
          <p>O</p>
          <p>0</p>
        </div>
      </footer>
    </div>
  );
}
