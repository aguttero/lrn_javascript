const PLAYER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

// this is not in caps as user can change it in the UI
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerrHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerrHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === "REGULAR_ATTACK") {
    maxDamage = PLAYER_ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  // should place if here to see if player won before monster did :-)
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerrHealth -= playerDamage;
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
  attackMonster("STRONG_ATTACK");
}

// is a convention use a fn name related to the event like:
// onClickAttack or attackHandler
function attackHandler() {
  attackMonster("REGULAR_ATTACK");
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
