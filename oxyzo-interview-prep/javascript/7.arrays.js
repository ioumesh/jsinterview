const arr = [1, 2, 3];
const [first, , third] = arr;
console.log(first, third);

// spread

const arr2 = [4, 5, 6];

const combine = [...arr, ...arr2];
console.log(combine);

const [first1, ...rest] = combine;
console.log(first1, rest);

// for of loop access array

for (let value of arr) {
  console.log(value);
}
for (let key in arr) {
  console.log(key);
  console.log(arr[key]);
}

// we can convert arr to object using spread operator
const obj = { ...arr };
console.log(obj); //key as index and value as value

// map filter , reduce and foreach

const mapResult = arr.map((item) => item * 2);
console.log(mapResult);

const filterResult = arr.filter((item) => item > 2);
console.log(filterResult);

const sumReduce = arr.reduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);

console.log(sumReduce);

// prototype or pollyfills
// prototype is a way to extend or inherit a funtion or object in javascript

Array.prototype.find = function (val) {
  return this.includes(val);
};

const value = [1, 2, 3];
console.log(value.find(4));

//

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const testMap = [2, 3, 5];
const resultTest = testMap.myMap((item) => item * 2);
console.log("result my map", resultTest);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
const testFilter = testMap.myFilter((item) => item > 2);
console.log(testFilter);

const sumReduce1 = arr.myReduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);

console.log(sumReduce1);
