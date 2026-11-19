const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// converts number to string:
let numString = defaultResult.toString();

function addv1(num1, num2) {
  const result = num1 + num2;
  console.log("fn add_v1 says: ", result);
  return result;
}

// to simplify code we add this helper functin that repeats in all fns
// see in all fns except add that was the original lenghty one
function getUserNumberInput() {
  return parseFloat(userInput.value);
}

function writeToLog(opIdentifier, prevResult, inputValue, newResult) {
  const logEntry = {
    opKey: opIdentifier,
    prevResult: prevResult,
    inputNumber: inputValue,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log("typeof logEntry: ", typeof logEntry);
  console.log("typeof logEntries: ", typeof logEntries);
  console.log("log: ", logEntries);
  console.log("log entry op: ", logEntry.opKey);
  console.log("log 0: ", logEntries[0].opKey)

}

// `${variable_name}' extrapola los valores a texto
function add() {
  // const calcDescription = `${currentResult} + ${parseFloat(userInput.value)}`
  const calcDescription = `${currentResult} + ${userInput.value}`;
  // currentResult = currentResult + parseInt(userInput.value);
  // currentResult = currentResult + parseFloat(userInput.value);
  currentResult = currentResult + +userInput.value;
  outputResult(currentResult, calcDescription);
  console.log("fn add says: ", currentResult);
  return currentResult;
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  // currentResult = currentResult + -userInput.value;
  // currentResult = currentResult - enteredNumber;
  currentResult -= enteredNumber;
  // to add or subtract 1 > currentResult++ or currentResult--
  outputResult(currentResult, calcDescription);
  // console.log("fn subtract says: ", currentResult);
  writeToLog("subtract", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calcDescription);
  writeToLog("multiply", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);

// currentResultv1 = ((defaultResult + 10) * 3) / 2 - 1;
// let calculationDescription = `(${defaultResult} + 10) * 3/2 -1`;

// to add a linebreak in strings:
let errorMessage = "An error \noccurred!";
console.log(errorMessage);

// currentResult = addv1(55, -42);
// outputResult(currentResult, calculationDescription);
