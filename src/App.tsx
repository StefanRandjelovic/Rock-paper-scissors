// DEV DEPENDENCIES
import { useEffect, useState } from "react";

// STYLES
import "@styles/global.scss";

// GLOBAL VARIABLES
import { simpleScore } from "@store/globalStore";

// HELPERS
import { handleResults, handleReset } from "@helpers/helperFunctions";

// COMPONENTS
import GameCard from "./components/gameCard";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import HowTo from "./components/HowTo";
import GameInfo from "./components/GameInfo";

// INFO
import { infoArrRPS } from "./helpers/InfoArray";

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
  const [showHelp, setShowHelp] = useState(false);

  const namesArr: string[] = ["rock", "paper", "scissors"];

  useEffect((): void => {
    window.addEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelp) {
        setShowHelp(false);
      }
    });
  }, []);

  return (
    <main>
      <NavBar />
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
      <div className="results">
        <p id="score">
          {message ? message : "Play a game to see results."}
          {result === "tie" && `the result is ${result}`}
          {(result === "win" || result === "lose") && `you ${result}`}
        </p>
        <div className="resultsInner">
          <p>Wins: {wins}</p>
          <p>Loses: {loses}</p>
          <p>Ties: {tie}</p>
        </div>
        <Button
          funcParam={() => handleReset(resetWins, resetLoses, resetTies)}
        />
      </div>
      <HowTo title="How to play" func={() => setShowHelp(true)} />
      <GameInfo
        h1={infoArrRPS.title}
        p={infoArrRPS.howTo}
        func={() => setShowHelp(false)}
        hidShow={showHelp}
      />
    </main>
  );
}

export default App;
