// STYLES
import "@styles/NavBar.scss";

const NavBar = (): React.JSX.Element => {
  return (
    <nav>
      <div id="anotherGameMenu">
        <p>
          Play another game <span>v</span>
        </p>
        <div id="anotherGameMenuHidden">
          <p>Rock, Paper, Scissors</p>
          <p>Rock, Paper, Scissors, Wood, Saw</p>
          <p>Coin toss</p>
        </div>
      </div>
      <h1>Rock, Paper, Scissors game</h1>

      <div id="themeSelector">
        <p>Theme:</p>
        <div id="themeSelectorInner">
          <div id="numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <input
            onChange={(event) => console.log(event.target.value)}
            type="range"
            min={1}
            max={3}
            step={1}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
