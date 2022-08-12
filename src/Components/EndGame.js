import xIcon from "../img/icon-x.svg";
import oIcon from "../img/icon-o.svg";

export default function EndGame({
  player1sMarkX,
  vsCpu,
  winner,
  tied,
  nextRound,
  quit,
}) {
  return (
    <div className="end-game">
      <div>
        {!tied && (
          <p>
            {(player1sMarkX && winner === "x") ||
            (!player1sMarkX && winner === "o")
              ? vsCpu
                ? "YOU WON!"
                : "PLAYER 1 WINS!"
              : vsCpu
              ? "OH NO, YOU LOST…"
              : "PLAYER 2 WINS!"}
          </p>
        )}

        <div className="end-game-heading">
          {!tied && <img src={winner === "x" ? xIcon : oIcon} alt="X icon" />}
          <h2>{tied ? "ROUND TIED" : "TAKES THE ROUND"}</h2>
        </div>

        <div>
          <button className="silver-btn" onClick={quit}>
            QUIT
          </button>
          <button className="yellow-btn-secondary" onClick={nextRound}>
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  );
}
