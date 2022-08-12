import xIcon from "../img/icon-x.svg";
import oIcon from "../img/icon-o.svg";

export default function EndGame({
  player1sMarkX,
  vsCpu,
  winner,
  tied,
  restart,
  cancelRestart,
  nextRound,
  quit,
}) {
  return (
    <div className="end-game">
      <div>
        {!restart && !tied && (
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
          {!restart && !tied && (
            <img src={winner === "x" ? xIcon : oIcon} alt="X icon" />
          )}
          <h2>
            {restart
              ? "RESTART GAME?"
              : tied
              ? "ROUND TIED"
              : "TAKES THE ROUND"}
          </h2>
        </div>

        <div>
          <button
            className="silver-btn"
            onClick={restart ? cancelRestart : quit}
          >
            {restart ? "NO, CANCEL" : "QUIT"}
          </button>
          <button
            className="yellow-btn-secondary"
            onClick={restart ? quit : nextRound}
          >
            {restart ? "YES, RESTART" : "NEXT ROUND"}
          </button>
        </div>
      </div>
    </div>
  );
}
