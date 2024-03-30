// variable  are used to store information
// how to decalare and intialization

var firstName = "umesh";
var firstName = "numa";

let person;
person = "umesh";
const value = "29";

console.log(firstName, person, value);

// variable scope
// global scope
// block scope
// functional scope var
function funScope() {
  var value = 20;
  console.log(value);
}
funScope();
{
  var number = 10;
}
console.log(number);

// varaible shadowing

function shadow() {
  var a = 30;
  if (true) {
    let a = 20;
    console.log(a, "shadow");
  }
  console.log(a, "shadow");
}

shadow();

// var can be shadow by let but let can not be shadow by var called illegal shadowing

// javascript execution
// console.log(inputValue);
// var inputValue = "hoist";

console.log(inputValue1);
let inputValue1 = "hoist2";
