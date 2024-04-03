// javascript is a programing language that works in the browser before the incepetion of node js
// ES6 and babel due to diffrent browser ecma script introduced
// bebel that converts the modern javascript to the supported javascript.
// older the brower the more the pollyfill the budle size depend on it 2015

// 1- declartion
// 2-scoping
// 3-execution hoisting
// 4-shadowing

var a = 10;
let b = 20;
const c = 30;

// global scope
// block scope
// functional scope

{
  var a = 20; //var is a functional scope
}

console.log(a);
//block scope
{
  let block = "i am block";
  const isConst = "hi i am const";
  console.log(block);
  console.log(isConst);
}
// funtional scope
function abc() {
  var isHoisted = undefined; //hoisting concept
  console.log(isHoisted); //when execution happes in funtions javascript moves variable and funtions to the top of the code and varibale is defined by undefiend
  isHoisted = "yes";
}
abc();
// temporal dead zone
function tempDeadZone() {
  console.log(temp);
  let temp = "deadzone"; //let and const are hoisted in temporal dead zone
}

// tempDeadZone();

// shadowing
// Variable Shadowing refers to the practice of naming 2 variables with the same name, within the scopes that overlaps.
// to avoid confusion we have to use meaning ful names for variables
function shadow() {
  let user = "umesh";
  if (true) {
    var user = "shubham"; //illega; shadowing
    console.log(user);
  }
  console.log(user);
}

shadow()