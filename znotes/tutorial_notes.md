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

## event listener
addEventListener (event, function);
* example: click inspect over an element in a browser (gets selected as $0)
$0.addEventListener("click", function () { // ZAG: this is anonymus function
  console.log("I got clicked");
});
// ZAG is the same as this with a named function:
$0.addEventListener("click",  respondToClick);
function respondToClick() {
  console.log("I got clicked");
}

### this and switch selectors
this > see code drums_01.js
switch (variable){
  case "input1":
    do something;
   break;
  case "imput2":
    do another thing;
   break;
   default:
    do the default thing;
}

## passing a function as parameter. Calculator example:
```js
function add (num1, num2) {
 return num1 + num2; 
}

function multiply (num1, num2) {
 return num1 * num2; 
}

function calculator (num1, num2, operator) {
 return operator(num1,num2); 
}
// call the function:
calculator(3,2,add);
```

## debugger
Simple debugger mode:
in console:
debugger; (shift + Enter)
input function call; (enter)
click on icons in the debugger panel to step forward

## play a sound
```js
var audio = new Audio('audio_file.mp3');
audio.play();
```

## Objects
### declare:
var bellboy1 = {
name: "Timmy",
age: 19,
languages: ["French", "English"]
}
* access:
alert("Hello, my name is: "+ bellboy1.name);

### constructor function (starts with Capital Letter) 
* constructor declaration (name needs to be capitalized )
function BellBoy (name, age, languages){
this.name = name;
this.age = age;
this.languages = languages;
}

* constructor use:
var bellBoy1 = new BellBoy ("Timmy", 19, ["French", "English"]);


### methods
* declare in object:
var bellboy1 = {
name: "Timmy",
age: 19,
languages: ["French", "English"]
moveSuitecase: function () {
  alert("May I take your suitecase?");
  pickUpSuitcase();
  move();
  }
}
* invoke: bellBoy1.moveSuitcase();

* declare in constructor:
function BellBoy (name, age, languages){
  this.name = name;
  this.age = age;
  this.languages = languages;
  this.moveSuitecase = function () {
    alert("May I take your suitecase?");
    pickUpSuitcase();
    move();
  }
}

## Call back in the jkeypress example
https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384168#overview
```js
document.addEventListener("keydown", respondToKey(event));

// This is the call back function
// will know data related to the event once the event happens
// event paramenter can have the name of your choice
// usually called event, evt, evnt, e..
function respondToKey(event){
  console.log("key pressed");
  console.log(event);
}
```

## jQuery
https://api.jquery.com/
https://jquery.com/download/
https://releases.jquery.com/
Google CDN
https://developers.google.com/speed/libraries#jquery
download or use a CDN
* Allows to shorten the selectors:
- ie: document.querySelector("h1") > jQuery("h1") > $("h1");
- 
**Place before call to local index.js script**
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

### safeguard function to wait for the cdn library to load:
* use when <script jQuery CDN> is loaded in the <head> section of the HTML
* if jQuery CDN script is called at </body> don't need the .ready callback
/// callback function... once the document is ready it calls the anonymus function
```js
$(document).ready(function() {
  $("h1").css("color", "red");
});
```

## Minify js or css files
www.minify.org


## Best Practice - WebSite Concern separation
* Css -> Styling
* HTML -> Content / Structure
* JS -> Behaviour



## UI inspiration 2026 08
https://www.uidesigndaily.com/
Free open source UI Resources
