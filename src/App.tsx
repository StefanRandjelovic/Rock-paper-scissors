// STYLES
import "@styles/global.scss";

// DEV DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// COMPONENTS
import NavBar from "./components/NavBar";

// PAGES
import RockPaperScissors from "@/pages/RPS";
import RockPaperScissorsWoodSaw from "@/pages/RPSWS";
import CoinToss from "@/pages/CoinToss";
import HomePage from "@/pages/HomePage";

// GLOBAL VARIABLE
import { themeSet } from "./zustandStore/globalStore";
import { useEffect } from "react";

function App(): React.JSX.Element {
  // GLOBAL STATE VARIABLE
  const { theme } = themeSet();

  useEffect((): void => {
    document.documentElement.id = `theme${theme}`;
  }, [theme]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/rpsws" element={<RockPaperScissorsWoodSaw />} />
        <Route path="/coin-toss" element={<CoinToss />} />
      </Routes>
    </Router>
  );
}

export default App;
