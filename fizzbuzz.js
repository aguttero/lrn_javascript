// random number from 1 to 100
var n = Math.random();
n = Math.floor(n * 100) + 1;
console.log(n);

// fizzBuzz with arrays
var output = [];

function fizzBuzz1() {
  if (output.length > 0) {
    // pop last number, add 1 push old and new
    lastNumber = output.pop();
    newNumber = lastNumber + 1;
    output.push(lastNumber);
    output.push(newNumber);
  } else {
    // initiales the array with 1
    output.push(1);
  }
  console.log(output);
}

fizzBuzz1();

// fizzBuzz2 simpler
var output = [];
var counter = 1;

function fizzBuzz2() {
  while (counter <= 100) {
    result = fizBuzzCheck(counter);
    output.push(result);
    counter++;
  }
  console.log(output);
}

fizzBuzz2();

// fizzBuzz2 with for loop
var output = [];

function fizzBuzz3() {
  for (counter = 1; counter <= 100; counter++) {
    result = fizBuzzCheck(counter);
    output.push(result);
  }
  console.log(output);
}

fizzBuzz3();

// divisible by 3 and 5 > fizzbuzz to console log
function fizBuzzLog(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + "fizzbuzz");
  } else {
    if (number % 3 === 0) {
      console.log(number + " fizz");
    } else {
      if (number % 5 === 0) {
        console.log(number + " buzz");
      } else {
        console.log(number + " shhh");
      }
    }
  }
}

// divisible by 3 and 5 > fizzbuzz to return value
function fizBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

// divisible by 3 and 5 > fizzbuzz to return value
function fizBuzzCheckOld(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else {
    if (number % 3 === 0) {
      return "Fizz";
    } else {
      if (number % 5 === 0) {
        return "Buzz";
      } else {
        return number;
      }
    }
  }
}
