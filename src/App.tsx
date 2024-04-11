// DEV DEPENDENCIES
import { useState } from "react";

// STYLES
import "@styles/global.scss";

// GLOBAL VARIABLES
import { simpleScore } from "@store/globalStore";

// HELPERS
import { handleResults, handleReset } from "@helpers/helperFunctions";

// COMPONENTS
import GameCard from "./components/gameCard";

function App() {
  // GLOBAL VARIABLES
  const {
    wins,
    setWins,
    loses,
    setLoses,
    tie,
    setTies,
    resetWins,
    resetLoses,
    resetTies,
  } = simpleScore();

  // LOCAL STATES
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  const namesArr: string[] = ["rock", "paper", "scissors"];

  return (
    <>
      <div
        className="card-container"
        onClick={(event) =>
          handleResults(
            event,
            setResult,
            setWins,
            setLoses,
            setTies,
            setMessage
          )
        }
      >
        {namesArr.map((name) => (
          <GameCard key={crypto.randomUUID()} id={name} />
        ))}
      </div>

      <p id="score">
        {message}
        {result === "tie" && `the result is ${result}`}
        {(result === "win" || result === "lose") && `you ${result}`}
      </p>
      <p>Wins: {wins}</p>
      <p>Loses: {loses}</p>
      <p>Ties: {tie}</p>
      <button onClick={() => handleReset(resetWins, resetLoses, resetTies)}>
        Reset score
      </button>
    </>
  );
}

export default App;
