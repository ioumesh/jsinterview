function memoize(fn) {
  let cache = {};
  return function (...args) {
    let argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log("value is coming from cache");
      return cache[argsToString];
    } else {
      console.log("value is calculating ");
      const result = fn.apply(this, args);
      cache[argsToString] = result;
      return result;
    }
  };
}

const addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

const add = memoize(addThreeNumbers);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));
console.log(add(1, 4, 3));

// factorial
const factorial = memoize((n) => {
  if (n < 2) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(6));
