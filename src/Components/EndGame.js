import xIcon from "../img/icon-x.svg";
import oIcon from "../img/icon-o.svg";

export default function EndGame() {
  return (
    <div className="end-game">
      <div>
        <p>text</p>

        <div className="end-game-heading">
          <img src={xIcon} alt="X icon" />
          <h2>TAKES THE ROUND</h2>
        </div>

        <div>
          <button className="silver-btn">QUIT</button>
          <button className="yellow-btn-secondary">NEXT ROUND</button>
        </div>
      </div>
    </div>
  );
}
