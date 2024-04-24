// INFO ARRAY
import { infoArrRPSWS } from "@/helpers/InfoArray";

// COMPONENTS
import GameCard from "@/components/gameCard";
import Button from "@/components/Button";
import HowTo from "@/components/HowTo";
import GameInfo from "@/components/GameInfo";

// DEV DEPENDENCIES
import { useState, useEffect } from "react";
import { handleReset, handleResultsComplex } from "@/helpers/helperFunctions";

// GLOBAL STATE VARIABLES
import { complexScore, themeSet } from "@/zustandStore/globalStore";

const RockPaperScissorsWoodSaw = () => {
  // GLOBAL STATE VARIABLES
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
  } = complexScore();

  const { theme } = themeSet();

  // LOCAL STATES
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [showHelpRPSWS, setShowHelpRPSWS] = useState(false);

  // OPTIONS
  const arrInfo: string[] = ["rock", "paper", "scissors", "wood", "saw"];

  useEffect((): void => {
    window.addEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelpRPSWS) {
        setShowHelpRPSWS(false);
      }
    });
    document.title = "Rock, Paper, Scissors, Wood, Saw game";

    return window.removeEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelpRPSWS) {
        setShowHelpRPSWS(false);
      }
    });
  }, [showHelpRPSWS]);

  return (
    <main className={`theme${theme}`}>
      <div
        className="card-container"
        onClick={(event) =>
          handleResultsComplex(
            event,
            setResult,
            setWins,
            setLoses,
            setTies,
            setMessage
          )
        }
      >
        {arrInfo.map((name) => (
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
        func={() => setShowHelpRPSWS(true)}
      />
      <GameInfo
        theme={`theme${theme}`}
        h1={infoArrRPSWS.title}
        p={infoArrRPSWS.howTo}
        func={() => setShowHelpRPSWS(false)}
        hidShow={showHelpRPSWS}
      />
    </main>
  );
};

export default RockPaperScissorsWoodSaw;
