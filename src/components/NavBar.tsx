// INFO
import { infoArrRPS, infoArrRPSWS, infoArrCT } from "@/helpers/InfoArray";

// STYLES
import "@styles/NavBar.scss";

// DEV DEPENDENCIES
import { useEffect, useState } from "react";
import { handleShowMenu } from "@/helpers/helperFunctions";
import { themeSet } from "@/zustandStore/globalStore";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = (): React.JSX.Element => {
  // LOCAL STATE VARIABLE
  const [showModal, setShowModal] = useState(false);

  // GLOBAL STATE VARIABLE
  const { theme, setTheme } = themeSet();

  const navigate = useNavigate();

  useEffect((): void => {
    document.documentElement.addEventListener("click", (): void =>
      setShowModal(false)
    );
    return document.documentElement.removeEventListener("click", (): void =>
      setShowModal(false)
    );
  }, []);

  const getTitle: () => string | undefined = () => {
    if (pathname === "/") {
      return "Game Menu";
    } else if (pathname === "/rps") {
      return `${infoArrRPS.title}`;
    } else if (pathname === "/rpsws") {
      return `${infoArrRPSWS.title}`;
    } else if (pathname === "/coin-toss") {
      return `${infoArrCT.title}`;
    }
  };

  // URL STRING GETTER
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav>
      <div className="navigation">
        <p onClick={(): void => navigate(-1)}>V</p>
        <Link to={"/"}>Home Page</Link>
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

      <h1>{getTitle()}</h1>

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
