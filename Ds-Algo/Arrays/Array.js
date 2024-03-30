//decalare an array
// Array can used any data types
const array = new Array();
let person = {
  name: "umesh",
  age: 29,
};
const values = [1, 2, 3, 4, 5, person];

// access array using array indexing
console.log(values[5].name);

// get length of an array
console.log(values.length);

// Add and remove the element from array

const fruits = ["apple", "banana", "orange", "papaya"];

// array add and remove element
// push
// pop
// shift
// unshift
fruits.push("umesh");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("umesh");
console.log(fruits);

// loops in array
const item = ["umesh", "amardeep", "sanjiv", "rohit"];

for (let i = 0; i < item.length; i++) {
  console.log(item[i]);
}

let i = 0;
while (i < item.length) {
  console.log(item[i]);
  i++;
}

// built in loops
const numbers = [1, 2, 3, 4, 5];

// map
const result = numbers.map((item) => item + 5);

console.log(result);
// filter

const filterNum = numbers.filter((item) => item > 2);
console.log(filterNum, "filter num");

// reduce
const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// 2)spread and rest operator

const num1 = [1, 2, 3];
const num2 = [2, 3, 4];

const finalNum = [...num1, ...num2];
console.log(finalNum);

function finalSum(...arg) {
  console.log(arg);
}

finalSum(num1, num2, "hello");
// 3 array methods 
// 3.1 concate


console.log(num1.concat(num2))

// 3.2 slice
console.log(num1.slice(0,2))
// 3.3

