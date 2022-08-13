import logo from "../img/logo.svg";

export default function NewGame({ selectMark, selectRival }) {
  return (
    <div className="new-game">
      <img src={logo} alt="XO logo" />

      <div className="pick-player">
        <h3>PICK PLAYER 1'S MARK</h3>

        <div>
          <div
            id="select-x"
            className="silver-x x-selected"
            onClick={selectMark}
          ></div>

          <div id="select-o" className="silver-o" onClick={selectMark}></div>
        </div>

        <p>REMEMBER : X GOES FIRST</p>
      </div>

      <div>
        <button
          id="vs-cpu"
          className="yellow-btn"
          onClick={selectRival}
          disabled
        >
          NEW GAME (VS CPU - disabled)
        </button>
        <button id="vs-player" className="blue-btn" onClick={selectRival}>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}
