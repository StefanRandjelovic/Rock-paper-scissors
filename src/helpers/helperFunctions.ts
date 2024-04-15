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
  console.log(event.target.id);
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
  resetTies();
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

export { handleResults, handleReset, handleShowMenu };
