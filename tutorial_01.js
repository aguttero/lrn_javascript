var myName = "Alejo";
var yourName = "Guille";

// dice roll
var n = Math.random();
n = Math.floor(n*6) + 1;
console.log (n);

if (n > 5 || n < 2) {
  console.log ("1 o 6");
  console.log("rolled: "+n);
} else {
  console.log ("2 a 5");
  console.log("rolled: "+n);
}

// Get Milk Robot
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  const milkCost = 1.5
  var numberOfBottles = Math.floor(money/milkCost);
  var price = bottles * 1.5;
  console.log("enterHouse");
  console.log("Bottles: "+ bottles);
  //var change = money - price;
  var change = money % milkCost;
  return change;
}
var vuelto = getMilk(4);
console.log("Vuelto: "+vuelto);

// Arrays
var guestList = ["alejo","blejo","clejo"];
console.log(guestList);
guestList.length;
guestList.includes("blejo");
