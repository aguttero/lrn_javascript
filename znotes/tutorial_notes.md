# JS Tutorial Udemy Complete Full Stack Web Dev Bootcamp
## browser console tricks
- opt + cmd + i > open dev tools
- Sources > left nav bar '>>' Snippets (to write small scripts) > + New snippet > code lines
  - to run > bottom right corner or cmd + Enter

## documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://www.w3schools.com/js/
https://github.com/rwaldron/idiomatic.js > style convention

## JS Style convention
https://github.com/rwaldron/idiomatic.js
strings " (double quotes) 

## Data types
- string ""
- number
- boolean > true false
> to find type > typeof([element])

## comments
// single line comment
/* multi
line
comment */

## variables
var myName = "Alejo";
var yourName = "Guille";
keyword varName = value
type 'myName' in the console > returns the value
To modify exisiting var > varName = "new name"
> concatenate : alert ("My name is: " + myName + " and yours is: " + yourName);
- var name can't start with a number
- var name can only have letters, numbers, underscore and '$'
- var names in camelCase
> to output to console: console.log([element]);

### methods
varName.lenght;
varName.slice(start_postion, end_position (not included));
varName.toUpperCase(); .toLowerCase(); 

## Arithmetic operators
Modulo operator
var e = 9 % 6; > reminder of division = 3
x = x + 1 > x++; x--;
x = x +2 > x += 2 (+ - * /)
Math.floor(varName) > Rounds down to largest integer
Math.random(); > pseudo random 0 to 1 (not including 1)

### dice roll
var n = Math.random();
n = Math.floor(n*6) + 1;
console.log (n);

## Functions
* definition / creation
function functionName() {[function instructions];}
function functionName(parameter) {[function instructions][parameter];}
function functionName(parameter) {[function instructions][parameter]; return [element];}

* call function
functionName();

## Control flow statements
### if 
if ( var === value){
doThis();
} else {
doThat();
}

if ( var === value){
doThis();
} else if (condition) {
doThat();
}

### while loops
while (condition) {
  //do something
}

### for loops
for (start; end; change)
for (i=0; i<2; i++) {
  //do something 
} // i++ runs just before the closing bracket '}'


## logical operators
=== is equal to and data type match
!== is not equal to
== is equal to and don't care about data type match ( 1 == "1" > true)

## combiners
&& AND
|| OR
! NOT

## arrays
var myArray = ["a","b","c","d","e"];
myArray[0]; > a
myArray.length; > 5
myArray.includes("d"); > true (boolean)
myArray.push("f"); > add to the end of the array
myArray.pop(); > removes the last element of the array

## UI inspiration 2026 08
https://www.uidesigndaily.com/
Free open source UI Resources
