import logo from "../img/logo.svg";

export default function NewGame() {
  return (
    <div className="new-game">
      <img src={logo} alt="XO logo" />

      <div className="pick-player">
        <h3>PICK PLAYER 1'S MARK</h3>

        <div>
          <div id="select-x" className="silver-x x-selected"></div>
          <div id="select-o" className="silver-o"></div>
        </div>

        <p>REMEMBER : X GOES FIRST</p>
      </div>

      <div>
        <button className="yellow-btn">NEW GAME (VS CPU)</button>
        <button className="blue-btn">NEW GAME (VS PLAYER)</button>
      </div>
    </div>
  );
}
