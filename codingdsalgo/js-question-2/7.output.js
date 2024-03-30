function getAge() {
  //   "use strict";
  age = 21;
  console.log(age);
}

getAge();

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);

//
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]);

//
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());

//
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

//
const person = { name: "kiran" };
Object.seal(person);
person.age = 29;
person.name = "umesh";
console.log(person);
