// DEV DEPENDENCIES
import { simpleScore } from "./zustandStore/globalStore";

function App() {
  const { wins, setWins, loses, setLoses } = simpleScore();
  // console.log(loses);
  // console.log(wins);

  const handleResults = (event: any) => {
    const computerMove = Math.floor(Math.random() * 3);
    console.log(computerMove);
    console.log(event.target.id);
  };
  return (
    <>
      <div onClick={handleResults}>
        <p id="rock">Rock</p>
        <p id="paper">Paper</p>
        <p id="scissors">Scissors</p>
        
      </div>
    </>
  );
}

export default App;
