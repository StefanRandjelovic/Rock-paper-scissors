// STYLES
import "@styles/NavBar.scss";

// DEV DEPENDENCIES
import { useEffect, useState } from "react";
import { handleShowMenu } from "@/helpers/helperFunctions";
import { themeSet } from "@/zustandStore/globalStore";

const NavBar = (): React.JSX.Element => {
  // LOCAL STATE VARIABLE
  const [showModal, setShowModal] = useState(false);

  // GLOBAL STATE VARIABLE
  const { theme, setTheme } = themeSet();

  useEffect((): void => {
    document.documentElement.addEventListener("click", (): void =>
      setShowModal(false)
    );
  }, []);

  return (
    <nav>
      <div
        className={`theme${theme}`}
        id="anotherGameMenu"
        onClick={(event) => handleShowMenu(event, setShowModal, showModal)}
      >
        <p id="showMenu">
          Play another game <span id={showModal ? "upSide" : "normal"}>v</span>
        </p>
        <div id={showModal ? "anotherGameMenu" : "anotherGameMenuHidden"}>
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
            value={theme}
            onChange={(event) => {
              setTheme(Number(event.target.value));
            }}
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
