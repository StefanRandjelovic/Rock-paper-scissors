// DEV DEPENDENCIES
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Chose a game to play</h1>
      <Link to={"/rps"}> Rock, Paper, Scissors</Link>
      <Link to={"/rpsws"}> Rock, Paper, Scissors, Wood, Saw</Link>
      <Link to={"/coin-toss"}> Coin Toss </Link>
    </div>
  );
};

export default HomePage;
