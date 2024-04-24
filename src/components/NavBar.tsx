// INFO
import { infoArrRPS, infoArrRPSWS, infoArrCT } from "@/helpers/InfoArray";

// STYLES
import "@styles/NavBar.scss";

// DEV DEPENDENCIES
import { useEffect, useState } from "react";
import { handleShowMenu } from "@/helpers/helperFunctions";
import { themeSet } from "@/zustandStore/globalStore";
import { Link, useLocation, useNavigate } from "react-router-dom";

// HELPERS
import { getTitle } from "@/helpers/helperFunctions";

const NavBar = (): React.JSX.Element => {
  // LOCAL STATE VARIABLE
  const [showModal, setShowModal] = useState(false);

  // GLOBAL STATE VARIABLE
  const { theme, setTheme } = themeSet();

  useEffect((): void => {
    document.documentElement.addEventListener("click", (): void =>
      setShowModal(false)
    );
    return document.documentElement.removeEventListener("click", (): void =>
      setShowModal(false)
    );
  }, []);

  // URL STRING GETTER
  const { pathname } = useLocation();
  console.log(pathname);

  // BACKWARDS NAVIGATION
  const navigate = useNavigate();

  return (
    <nav className={`theme${theme}`}>
      <div className="navigation">
        <p id="backButton" onClick={(): void => navigate(-1)}>
          V
        </p>
        <Link id="homePage" to={"/"}>
          Home Page
        </Link>
        <div
          id="anotherGameMenu"
          onClick={(event) => handleShowMenu(event, setShowModal, showModal)}
        >
          <p id="showMenu">
            Play another game{" "}
            <span id={showModal ? "upSide" : "normal"}>v</span>
          </p>
          <div
            id={
              showModal ? "anotherGameMenuInner" : "anotherGameMenuInnerHidden"
            }
          >
            <Link to={"/rps"} onClick={() => setShowModal(false)}>
              Rock, Paper, Scissors
            </Link>
            <Link to={"/rpsws"} onClick={() => setShowModal(false)}>
              Rock, Paper, Scissors, Wood, Saw
            </Link>
            <Link to={"/coin-toss"} onClick={() => setShowModal(false)}>
              Coin toss
            </Link>
          </div>
        </div>
      </div>

      <h1>
        {getTitle(
          pathname,
          infoArrRPS.title,
          infoArrRPSWS.title,
          infoArrCT.title
        )}
      </h1>

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
