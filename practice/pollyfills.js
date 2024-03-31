// 1Array Polyfills map, filter ,reduce

const givenArray = [1, 2, 3];

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const result = givenArray.myMap((item) => item * 0);
console.log(result);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const result1 = givenArray.myFilter((item) => item > 2);
console.log(result1);

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const result2 = givenArray.myReduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);
console.log(result2);

// closure caching implement

function memoise(fn, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}
