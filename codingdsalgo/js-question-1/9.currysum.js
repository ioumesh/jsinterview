function sum(a, b) {
  if (b!==undefined) {
    return a + b;
  }
  return function (c) {
    return a + c;
  };
}

console.log(sum(2, 3));
console.log(sum(2)(3));
