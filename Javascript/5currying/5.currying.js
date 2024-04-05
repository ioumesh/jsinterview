function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "Add") {
        return a + b;
      }
    };
  };
}

// infinite sum using currying

// sum(1)(2)(3).......(n)
function add(a) {
  return function (b) {
    if (b) return add(a + b); //recursion
    return a;
  };
}
console.log(add(5)(2)(4)(5)());
