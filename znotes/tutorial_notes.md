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

## DOM
### JS script position in html page
* js code always has to load after the html elements that it has to interact with
Otherwise it tries to modify an element that does not exist
* place just before </body> as general best practice

#### JS healt-check
add just before </body>
<script src="index.js" charset="utf-8"></script>
in index.js > alert("health-check ok");

### console commands // DOM navigation and reference
document; > shows the doc tree
document.firstElementChild;
document.lastChild.firstElementChild; // and so on, multiple options
- in browser dev tool > 'Elements' > right click > copy JS path
i.e: document.querySelector("body > ul > li:nth-child(2)");

* js selector.click() > perfirms click action
i.e: document.querySelector("body > input[type=checkbox]").click();

### Property getter and setter & Methods
* get:
car.color; > returns the value of the color property

* set:
document.querySelector("body > ul > li:nth-child(3)").innerHTML = "Tercero";
car.color = "blue"; > sets the value of the property
car.nunberOfDoors = "0";

* method:
* car.drive(); > calls a method

#### get selectors
document.getElements (plural > returns an array, not a single element)
- getElementsByTagName("li")[];
- getElementsByClassName("[class name]");

- document.getElementById("id") (singular > 'id' are unique)
- ie: document.getElementById("title").innerHTML = "Good Bye"; (si hay html tags dentro del h1, las trae)
- ie: document.getElementById("title").textContent = "Good Bye";

- document.querySelector > returns single item
- allows to mix Tag + id + class +  positional
- also uses the CSS type of selection (#list a) anchor tag, inside a #list id

- document.querySelectorAll > array

#### css style manipulation example
- document.querySelector("button").classList.add("invisible");
- document.querySelector("button").classList.remove("invisible");
- document.querySelector("button").classList.toggle("invisible");


#### element content manipulation example:
- document.getElementById("title").innerHTML = "Good Bye"; (si hay html tags dentro del h1, las trae)
- document.getElementById("title").textContent = "Good Bye";

#### element attribute manipulation example:
- document.querySelector("a");
- document.querySelector("a").attributes;
- document.querySelector("a").getattribute("href");
- document.querySelector("a").setattribute("href","https://new.url.example");



## Best Practice - WebSite Concern separation
* Css -> Styling
* HTML -> Content / Structure
* JS -> Behaviour



## UI inspiration 2026 08
https://www.uidesigndaily.com/
Free open source UI Resources
