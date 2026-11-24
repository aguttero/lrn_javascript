const PLAYER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

// this is a tip to avoid typos in if comparisons...
// define variables with strings that are easy
// or use value numbers
const MODE_REGULAR_ATTACK = "REGULAR_ATTACK"; // MODE_REG_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK"; // MODE_STRONG_ATTACK = 1

// for the log
let battleLog = [];
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

// get a value from user input 'prompt' returns a string
const enteredValue = prompt("Input Max Life value: ", "100");

// this is not in caps as user can change it in the UI
// let chosenMaxLife = 100;
let chosenMaxLife = parseInt(enteredValue);

// validate if enteredValue is not a number NaN
// the OR checks from left to right, so if the value is not a number it validates true
// and does not run the second comparison <= 0 which would produce a type error
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100; // if entered value is not a number the set MaxLife to 100
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerrHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// log functionality
function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry;
  // to save lines of code create the Log Entry object here and only add the different field in the if elses
  // let logEntry = {
  //   event: event,
  //   value: value,
  //   finalMonsterHealth: monsterHealth,
  //   finalPlayerHealth: playerHealth,
  // };
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: "MONSTER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event === "LOG_EVENT_MONSTER_ATTACK") {
    // log event monster attack
    // target: 'PLAYER'
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerrHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_REGULAR_ATTACK) {
    maxDamage = PLAYER_ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  // should place if here to see if player won before monster did :-)
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerrHealth -= playerDamage;
  writeToLog(LOG_EVENT_PLAYER_ATTACK, monsterDamage,currentMonsterHealth, currentPlayerrHealth)
  console.log("player, monster: ", currentPlayerrHealth, currentMonsterHealth);

  if (currentMonsterHealth <= 0 && currentPlayerrHealth > 0) {
    alert("You Win! ughrrghhh");
    reset();
  } else if (currentPlayerrHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster Wins! ughrrghhh");
    reset();
  } else if (currentPlayerrHealth <= 0 && currentMonsterHealth <= 0) {
    alert("Draw. Player and Monster are dead!");
    reset();
  }
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

// is a convention use a fn name related to the event like:
// onClickAttack or attackHandler
function attackHandler() {
  attackMonster(MODE_REGULAR_ATTACK);
}

function printLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
logBtn.addEventListener('click',printLogHandler)
