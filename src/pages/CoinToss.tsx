// COMPONENTS
import GameCard from "@/components/gameCard";
import Button from "@/components/Button";
import HowTo from "@/components/HowTo";
import GameInfo from "@/components/GameInfo";

// DEV DEPENDENCIES
import { useState, useEffect } from "react";

// INFO
import { infoArrCT } from "@/helpers/InfoArray";

// HELPERS
import { handleResultsCoinToss, handleReset } from "@/helpers/helperFunctions";

// GLOBAL VARIABLES
import { coinTossScore, themeSet } from "@/zustandStore/globalStore";

const CoinToss = () => {
  // GLOBAL VARIABLES
  const { wins, setWins, loses, setLoses, resetWins, resetLoses } =
    coinTossScore();

  const { theme } = themeSet();

  // OPTIONS
  const namesArr: string[] = ["heads", "tails"];

  // LOCAL STATES
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [showHelpCT, setShowHelpCT] = useState(false);

  useEffect((): void => {
    window.addEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelpCT) {
        setShowHelpCT(false);
      }
    });
    document.title = "Coin Toss";

    return window.removeEventListener("keydown", (event: any): void => {
      if (event.key === "Escape" && showHelpCT) {
        setShowHelpCT(false);
      }
    });
  }, [showHelpCT]);

  return (
    <main className={`theme${theme}`}>
      <div
        className="card-container"
        onClick={(event) =>
          handleResultsCoinToss(event, setResult, setWins, setLoses, setMessage)
        }
      >
        {namesArr.map((name) => (
          <GameCard key={crypto.randomUUID()} id={name} />
        ))}
      </div>
      <div className="results">
        <p id="score">
          {message ? message : "Play a game to see results."}
          {(result === "win" || result === "lose") && `so you ${result}`}
        </p>
        <div className="resultsInner">
          <p>Wins: {wins}</p>
          <p>Loses: {loses}</p>
        </div>
        <Button
          theme={`theme${theme}`}
          funcParam={() => handleReset(resetWins, resetLoses, () => null)}
        />
      </div>
      <HowTo
        theme={`theme${theme}`}
        title="How to play"
        func={() => setShowHelpCT(true)}
      />
      <GameInfo
        theme={`theme${theme}`}
        h1={infoArrCT.title}
        p={infoArrCT.howTo}
        func={() => setShowHelpCT(false)}
        hidShow={showHelpCT}
      />
    </main>
  );
};

export default CoinToss;
