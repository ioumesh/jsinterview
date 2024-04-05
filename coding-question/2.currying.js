// simple currying
function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(5)(6));

// infinite currying
function addInfinite(a) {
  return function (b) {
    if (b) {
      return addInfinite(a + b);
    }
    return a;
  };
}

console.log(addInfinite(1)(2)(3)());

// currying function accepts argument 5
let argsLength = 5;
function sumArgs(...args) {
  if (args.length === argsLength)
    return args.reduce((acc, cur) => acc + cur, 0);
  else {
    function recursive(...args2) {
      args = args.concat(args2);
      if (args.length === argsLength)
        return args.reduce((acc, cur) => acc + cur, 0);
      else {
        return recursive;
      }
    }
    return recursive;
  }
}

console.log(sumArgs(1, 2, 3, 4, 5));
console.log(sumArgs(1, 2, 3, 4)(5));
console.log(sumArgs(1)(2)(3)(4)(5));

// curry funtion that return sum of previous value
const curryFn = () => {
  let prevSum = 0;
  return (newSum = 0) => {
    prevSum += newSum;
    return prevSum;
  };
};

const sum = curryFn();
console.log(sum(1));
console.log(sum(3));
console.log(sum(3));
console.log(sum(4));
console.log(sum());
// bind currying
function multiply(a, b, c) {
  return a * b * c;
}
function curry(cb) {
  function helper(...arg) {
    if (arg.length === 3) {
      return cb(...arg);
    } else {
      return helper.bind(this, ...arg);
    }
  }
  return helper;
}

let curried = curry(multiply);
console.log(curried(2)(3)(4)); // 24

console.log(curried(2, 3)(4)); // 24

console.log(curried(2, 3, 4)); // 24

console.log(curried(5)(6, 7)); // 210
