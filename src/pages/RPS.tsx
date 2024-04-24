// DEV DEPENDENCIES
import { useEffect, useState } from "react";

// STYLES
import "@styles/global.scss";

// GLOBAL VARIABLES
import { simpleScore, themeSet } from "@store/globalStore";

// HELPERS
import { handleResults, handleReset } from "@helpers/helperFunctions";

// COMPONENTS
import GameCard from "@/components/gameCard";
import Button from "@/components/Button";
import HowTo from "@/components/HowTo";
import GameInfo from "@/components/GameInfo";

// INFO
import { infoArrRPS } from "@/helpers/InfoArray";

const RockPaperScissors = () => {
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

  const { theme } = themeSet();

  // LOCAL STATES
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [showHelpRPS, setShowHelpRPS] = useState(false);

  // OPTIONS
  const namesArr: string[] = ["rock", "paper", "scissors"];

  useEffect((): void => {
    window.addEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelpRPS) {
        setShowHelpRPS(false);
      }
    });

    return window.removeEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelpRPS) {
        setShowHelpRPS(false);
      }
    });
  }, [showHelpRPS]);

  return (
    <main className={`theme${theme}`}>
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
          theme={`theme${theme}`}
          funcParam={() => handleReset(resetWins, resetLoses, resetTies)}
        />
      </div>
      <HowTo
        theme={`theme${theme}`}
        title="How to play"
        func={() => setShowHelpRPS(true)}
      />
      <GameInfo
        theme={`theme${theme}`}
        h1={infoArrRPS.title}
        p={infoArrRPS.howTo}
        func={() => setShowHelpRPS(false)}
        hidShow={showHelpRPS}
      />
    </main>
  );
};

export default RockPaperScissors;
