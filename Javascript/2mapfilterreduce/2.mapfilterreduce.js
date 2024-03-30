const input = [1, 2, 3, 4, 5];

const result = input.map((item, index, input) => {
  console.log(index); //return new array
  console.log(input);
  return item * 2;
});

console.log(result);

const filterResult = input.filter((item) => item > 2);
console.log(filterResult);

const reducesum = input.reduce((prev, curr) => {
  return (prev = prev + curr);
}, 0);

console.log(reducesum);

// prototypes or polyfills
// map prototype
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const myProtoResult = input.myMap((item) => {
  return item * 0;
});
console.log(myProtoResult, "my map");

// filter prototype
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const myProtofilterResult = input.myFilter((item) => {
  return item > 2;
});
console.log(myProtofilterResult, "my filter proto");

// reduce prototype
Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const reducemysum = input.myReduce((prev, curr) => {
  return (prev = prev + curr);
}, 0);

console.log(reducemysum, "my reduce");

// map and foreach
const inputArray = [1, 2, 3];
const forEachResult = inputArray.forEach((arr, i) => {
  inputArray[i] = arr + 2;
});
console.log(forEachResult, inputArray, "last input");

// map filter reduce -O/P based question
let student = [
  { name: "umesh", rollNumber: 31, marks: 80 },
  { name: "jenny", rollNumber: 15, marks: 69 },
  { name: "eliya", rollNumber: 16, marks: 35 },
  { name: "numa", rollNumber: 7, marks: 55 },
];

// Ques1 Return only name of students in Capital letter


console.log(nameOfStudent, "student name");
