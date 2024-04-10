// DEV DEPENDENCIES
import { useState } from "react";

// GLOBAL VARIABLES
import { simpleScore } from "./zustandStore/globalStore";

// HELPERS
import { handleResults } from "./helpers/helperFunctions";

function App() {
  // GLOBAL VARIABLES
  const { wins, setWins, loses, setLoses, tie, setTies } = simpleScore();

  // LOCAL STATES
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
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
        <p id="rock">Rock</p>
        <p id="paper">Paper</p>
        <p id="scissors">Scissors</p>
        <p id="score">
          {message}
          {result === "tie" && `the result is ${result}`}
          {(result === "win" || result === "lose") && `you ${result}`}
        </p>
        <p>Wins: {wins}</p>
        <p>Loses: {loses}</p>
        <p>Ties: {tie}</p>
      </div>
    </>
  );
}

export default App;
