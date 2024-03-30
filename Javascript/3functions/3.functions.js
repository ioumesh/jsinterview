// IIFE

(function sum(a, b) {
  console.log(a + b);
})(3, 4);

// funtional scope
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function square(nums) {
  //params
  return nums * 2;
}

console.log(square(10)); //arguments

// spread and rest operator

const arr1 = ["num"];
const arr2 = ["num2"];

const final = [...arr1, ...arr2];
console.log(final);

function spreadRest(...args) {
  console.log(args);
}

spreadRest("umesh", "sanjiv");


