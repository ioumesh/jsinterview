// the child function are able to access the variable or the properties of the parent function even after the parent execution ended
//1 closure the ability of a function to remember variable and funtion lexically out of it its scope is called closure
function outer() {
  // local scope
  let a = 10;
  return function inner() {
    console.log(a); //lexical scope
    a++;
  };
}
const child = outer();
child();
child();
child();

// 1.2 closure scope chain
// console.log(scopeChain(a)(b)(c)(d)(e))

// 1.3example
function createBase(base) {
  return function (num) {
    return base + num;
  };
}
const addSix = createBase(6);
console.log(addSix(4));

// 1.4 private counter
function privateCounter() {
  let _counter = 0;
  function add(increment) {
    _counter = _counter + increment;
  }
  function get() {
    return _counter;
  }
  return {
    add,
    get,
  };
}
const c = privateCounter();
c.add(5);
console.log(c.get());



//2 currying we keep on returning funtion until desired condition is met

// infinite sum

function infinitesum(a) {
  return function (b) {
    if (b !== undefined) {
      return infinitesum(a + b);
    } else {
      return a;
    }
  };
}

const result = infinitesum(5)(6)(3)();
console.log("currying sum", result);
