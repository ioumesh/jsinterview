let cache = {};
function factorial(n) {
  console.log("fac");
  if (n < 0) {
    return -1;
  }
  if (n < 2) return 1;
  if (n in cache) {
    return cache[n];
  }
  return (cache[n] = n * factorial(n - 1));
}

console.log(factorial(5));
console.log(factorial(5));
