// map

const arr = [1, 2, 3];

// pollyfil for map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const mapProto = arr.myMap((item) => item * 2);
console.log(mapProto);

// prototype filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const filterProto = arr.myFilter((item) => item > 2);
console.log(filterProto);

// reduce proto

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const reduceProto = arr.myReduce((acc, cur) => acc + cur, 0);
console.log(reduceProto);

// prototype promise all
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

const promiseArray = [promise1, promise2, promise3, promise4];

Promise.myAll = function (promiseArray) {
  let result = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      promise
        .then((res) => {
          counter++;
          result[index] = res;
          if (counter === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

// bind pollyfill
Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1); //remove obj we will get argument
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};
