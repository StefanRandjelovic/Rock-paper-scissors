// STYLES
import "@styles/global.scss";

// DEV DEPENDENCIES
import { Link } from "react-router-dom";

// GLOBAL STATE VARIABLES
import { themeSet } from "@/zustandStore/globalStore";
import { useEffect } from "react";

const HomePage = () => {
  // GLOBAL STATE VARIABLES
  const { theme } = themeSet();

  useEffect((): void => {
    document.title = "Home Page";
  }, []);

  return (
    <div id="home" className={`theme${theme}`}>
      <h1>Chose a game to play</h1>
      <Link to={"/rps"}> Rock, Paper, Scissors</Link>
      <Link to={"/rpsws"}> Rock, Paper, Scissors, Wood, Saw</Link>
      <Link to={"/coin-toss"}> Coin Toss </Link>
    </div>
  );
};

export default HomePage;
