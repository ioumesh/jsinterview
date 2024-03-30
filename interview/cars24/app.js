// hoisting
// during the creation phase js moves variable and funtion to the top of the code and this is known as hoisting

function abc() {
  console.log(a);
  var a;
}
abc();

// implicit and explicit binding

var obj = {
  name: "umesh",
  display: function () {
    console.log(this.name);
  },
  display1: () => {
    console.log(this);
  },
};

var obj1 = {
  name: "ABC",
};

obj.display.call(obj1);

// obj1 will take the refernce and this value is ABC
obj.display1.call(obj1);

// implement caching and /memoize funtion

function memoize(fn, context) {
  let res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

console.time("first call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("second call");

console.time("first call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("second call");

// event loop
console.log("a");
setTimeout(() => {
  console.log("set");
}, 0);
Promise.resolve(() => console.log("pro")).then((res) => res());
console.log("b");

// infinite currying
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}
console.log("sum", add(5)(2)(4)(5)(1)());

// implement

const calc = {
  total: 0,
  add: function (num) {
    this.total += num;
    return this;
  },
  multiply: function (num) {
    {
      this.total *= num;
      return this;
    }
  },
  subtract: function (num) {
    {
      this.total -= num;
      return this;
    }
  },
};
const result = calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total, "total result");

function PollyfillPromise(executor) {
  let onResolve, onReject;
  function resolve(value) {
    onResolve(value);
  }
  function reject(value) {
    onReject(value);
  }
  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

// promise pollyfill

const promisePollyfill = new PollyfillPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("i am from resolved promise=" + 2);
  }, 1000);
});

promisePollyfill
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
