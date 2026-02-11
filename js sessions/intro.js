// ================= OUTPUT =================

// console.log() prints data to the browser console
// Console = developer tool used to see messages and debug code
// It does NOT show on the webpage — only inside developer tools
console.log("hello world");

// alert() shows a popup message on the screen
// It pauses the program until the user clicks OK
alert("im an alien");

// window.alert() is the same as alert()
// "window" is the global browser object
// alert() is actually a method of window
window.alert("im an alien 2");

// ================= INPUT =================

// prompt() asks the user for input
// First value = message to show
// Second value = default value inside input box
prompt("Enter your name ", "user name");

// ================= VARIABLES =================

// A variable is like a box used to store data
// The label on the box is called the variable name

// var keyword is used to create a variable

var box;
// Declaration = creating a variable with a name
// At this moment the box is empty

box = 33;
// Initialization = putting a value inside the variable

var age = 34;
// Declaration + initialization in one line

// ================= VARIABLE NAMING RULES =================

// Rule 1: No spaces in variable name

// var my age; ❌ wrong
var myage; // ✅ correct

// Rule 2: Cannot start with a number
// But numbers can exist after first character

// var 1name; ❌ wrong
var name1; // ✅ correct
var my1name; // ✅ correct

// Rule 3: Special symbols not allowed
// Only "_" and "$" are allowed

// var @name; ❌ wrong
var my_name_; // ✅ correct
var $my$; // ✅ correct

// Rule 4: Reserved keywords cannot be used

// var for; ❌ wrong (for is a keyword)
var forever; // ✅ correct

// ================= NAMING STYLE SUGGESTIONS =================

// camelCase → first word lowercase, next words capitalized
var helloWorldMyNameIs;

// snake_case → words separated with underscore
var hello_world_my_name_is;

// ================= DATA TYPES =================

// 1. Number
// Whole numbers (integers) and decimals (floats)
var price = 123;
var weight = 12.5;

// 2. Boolean
// Only two values: true or false
var isActive = true;

// 3. String
// Text wrapped in quotes
var name = "Rohan";

// 4. undefined
// A variable created but not assigned a value
var x;
console.log(x); // prints undefined

// 5. null
// Intentional empty value
var result = null;
console.log(result);

// Reassignment = changing value of variable
var age = 34;
console.log(age);

age = 45; // new value replaces old value
console.log(age);

// ✅ 20 PRACTICE TASKS (strictly based on same concepts)

// Task 1
// Create a variable and store your name. Print it using console.log.

// Task 2
// Create a variable storing your age. Show it using alert.

// Task 3
// Use prompt to ask the user for their city and store it in a variable.

// Task 4
// Declare a variable without value. Print it.

// Task 5
// Create a variable and assign null. Print it.

// Task 6
// Store a decimal number in a variable and print it.

// Task 7
// Create a boolean variable and print true.

// Task 8
// Create a variable → assign value → reassign a new value → print both.

// Task 9
// Create 3 variables: name, age, country. Print all.

// Task 10
// Ask user for name using prompt and print it.

// Task 11
// Create a variable using camelCase naming.

// Task 12
// Create a variable using snake_case naming.

// Task 13
// Store a big number in a variable and print.

// Task 14
// Create a string variable using single quotes.

// Task 15
// Create a string variable using double quotes.

// Task 16
// Create a string using backticks.

// Task 17
// Create an empty variable → later assign a number.

// Task 18
// Store true in a variable and show alert.

// Task 19
// Store false in a variable and print console.

// Task 20
// Ask user age with prompt and store in variable.
