function memoize(fn) {
  let cache = {};
  return (...args) => {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log("value is coming from cache", argsToString);
      return cache[argsToString];
    } else {
      console.log("value is calculating", argsToString);
      const result = fn.apply(this, args);
      cache[argsToString] = result;
      return result;
    }
  };
}

const addThreeNumber = (a, b, c) => a + b + c;
const add = memoize(addThreeNumber);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3));

// recursive function factorial

const factorial = memoize((n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(6));
