const infoArrRPS: { readonly title: string; readonly howTo: string } = {
  title: "Rock, Paper, Scissors game",
  howTo:
    "In this game, you choose one of the three options on offer: Rock, paper or scissors. \n Rock beats scissors, but loses to paper; \n Paper beats rock, but loses to scissors; \n And scissors beats paper, but loses to rock. And in case you both chose the same option, then the result is tie.",
};

const infoArrRPSWS: { readonly title: string; readonly howTo: string } = {
  title: "Rock, Paper, Scissors, Wood, Saw game",
  howTo:
    "In this game, you choose one of the five options on offer: Rock, paper, scissors, wood or saw. \n Rock beats scissors and saw, but loses to paper and wood; \n Paper beats rock and wood, but loses to scissors and saw; \n Scissors beats paper and saw, but loses to rock and wood; \n  Wood beats rock and scissors, but loses to paper and saw; \n Saw beats wood and paper, but loses to rock and scissors. \n And in case you both chose the same option, then the result is tie.",
};

const infoArrCT: { readonly title: string; readonly howTo: string } = {
  title: "Coin-Toss",
  howTo:
    "In this game, you simply choose heads or tails of the coin; \n If your pick matches the result of the coin toss, you win, if it doesn't match, you lose.",
};

export { infoArrRPS, infoArrRPSWS, infoArrCT };
