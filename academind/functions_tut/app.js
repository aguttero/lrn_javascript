const startGameBtn = document.getElementById("start-game-btn");

const SEL_ROCK = "ROCK";
const SEL_PAPER = "PAPER";
const SEL_SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = SEL_ROCK;
const RES_DRAW = "DRAW";
const RES_PLAYER = "PLAYER WINS";
const RES_COMPUTER = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${SEL_ROCK}, ${SEL_PAPER} or ${SEL_SCISSORS}?`,
    "",
  ).toUpperCase();
  if (selection != SEL_ROCK && selection != SEL_PAPER && selection != SEL_SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE; // return de la funcion, no del if
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random(); // 0 <= randomValue < 1
  const oneToThree = randomValue * 3; // 0 <= oneToThree < 3
  console.log(`random: ${randomValue} | selector: ${oneToThree}`);
  if (oneToThree < 1) {
    return SEL_ROCK;
  } else if (oneToThree < 2) {
    return SEL_PAPER;
  } else {
    return SEL_SCISSORS;
  }
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RES_DRAW;
  } else if (
    (cChoice === SEL_ROCK && pChoice === SEL_PAPER) ||
    (cChoice === SEL_PAPER && pChoice === SEL_SCISSORS) ||
    (cChoice === SEL_SCISSORS && pChoice === SEL_ROCK)
  ) {
    return RES_PLAYER;
  } else {
    return RES_COMPUTER;
  }
};

startGameBtn.addEventListener("click", function () {
  // to avoid have simultaneos events triggering paralell games
  if (gameIsRunning) {
    console.log("game already running, dismissed event");
    return;
  }
  gameIsRunning = true;
  console.log("Game Starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(`Player: ${playerSelection} | Computer: ${computerSelection}`);
  const winner = getWinner(computerSelection, playerSelection);
  console.log(`Game Result: ${winner}`);
  gameIsRunning = false;
});
