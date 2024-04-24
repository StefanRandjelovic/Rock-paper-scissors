const handleResults = (
  event: any,
  setResult: (param: string) => void,
  setWins: () => void,
  setLoses: () => void,
  setTies: () => void,
  setMessage: (param: any) => void
): void => {
  const computerMove = Math.floor(Math.random() * 3);
  const realCM =
    computerMove === 0
      ? "rock"
      : computerMove === 1
      ? "paper"
      : computerMove === 2
      ? "scissors"
      : null;
  if (computerMove === 0 && event.target.id === "rock") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 1 && event.target.id === "rock") {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 2 && event.target.id === "rock") {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 0 && event.target.id === "paper") {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 1 && event.target.id === "paper") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 2 && event.target.id === "paper") {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 0 && event.target.id === "scissors") {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 1 && event.target.id === "scissors") {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 2 && event.target.id === "scissors") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
};

const handleReset = (
  resetWins: () => void,
  resetLoses: () => void,
  resetTies: () => void
): void => {
  resetWins();
  resetLoses();
  resetTies?.();
};

const handleShowMenu = (
  event: any,
  setShowModal: (param: boolean) => void,
  showMenu: boolean
): void => {
  event.stopPropagation();
  if (event.target.id === "showMenu" || event.target.tagName === "SPAN") {
    setShowModal(!showMenu);
  } else {
    return;
  }
};

const getTitle = (
  pathname: string,
  infoArrRPS: string,
  infoArrRPSWS: string,
  infoArrCT: string
) => {
  switch (pathname) {
    case "/":
      return "Game Menu";
    case "/rps":
      return `${infoArrRPS}`;
    case "/rpsws":
      return `${infoArrRPSWS}`;
    case "/coin-toss":
      return `${infoArrCT}`;
  }
};

const handleResultsComplex = (
  event: any,
  setResult: (param: string) => void,
  setWins: () => void,
  setLoses: () => void,
  setTies: () => void,
  setMessage: (param: any) => void
): void => {
  const computerMove = Math.floor(Math.random() * 5);
  const realCM =
    computerMove === 0
      ? "rock"
      : computerMove === 1
      ? "paper"
      : computerMove === 2
      ? "scissors"
      : computerMove === 3
      ? "wood"
      : computerMove === 4
      ? "saw"
      : null;
  if (computerMove === 0 && event.target.id === "rock") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 1 || computerMove === 3) &&
    event.target.id === "rock"
  ) {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 2 || computerMove === 4) &&
    event.target.id === "rock"
  ) {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 0 || computerMove === 3) &&
    event.target.id === "paper"
  ) {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 1 && event.target.id === "paper") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 2 || computerMove === 4) &&
    event.target.id === "paper"
  ) {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 0 || computerMove === 3) &&
    event.target.id === "scissors"
  ) {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 1 || computerMove === 4) &&
    event.target.id === "scissors"
  ) {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 2 && event.target.id === "scissors") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 0 || computerMove === 2) &&
    event.target.id === "wood"
  ) {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 3 && event.target.id === "wood") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (
    (computerMove === 1 || computerMove === 4) &&
    event.target.id === "wood"
  ) {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }

  if ((computerMove === 1 || computerMove === 3) && event.target.id === "saw") {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if (computerMove === 4 && event.target.id === "saw") {
    setTies();
    setResult("tie");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
  if ((computerMove === 0 || computerMove === 2) && event.target.id === "saw") {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, computer chose ${realCM} `);
  }
};

const handleResultsCoinToss = (
  event: any,
  setResult: (param: string) => void,
  setWins: () => void,
  setLoses: () => void,
  setMessage: (param: any) => void
): void => {
  const computerMove = Math.random();
  const realCM = computerMove >= 0.5 ? "heads" : "tails";
  if (realCM === "heads" && event.target.id === "heads") {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, and it was ${realCM} `);
  }
  if (realCM === "heads" && event.target.id === "tails") {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, and it was ${realCM} `);
  }
  if (realCM === "tails" && event.target.id === "heads") {
    setLoses();
    setResult("lose");
    setMessage(`You chose ${event.target.id}, and it was ${realCM} `);
  }
  if (realCM === "tails" && event.target.id === "tails") {
    setWins();
    setResult("win");
    setMessage(`You chose ${event.target.id}, and it was ${realCM} `);
  }
};

export {
  handleResults,
  handleReset,
  handleShowMenu,
  getTitle,
  handleResultsComplex,
  handleResultsCoinToss,
};
