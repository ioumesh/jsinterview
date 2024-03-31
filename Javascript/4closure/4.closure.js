// global scope
var firstName = "umesh";

function local() {
  // local scope
  //   varibale defined outside thw function can be access inside function is called lexical scope
  console.log(firstName);
  //   lexical scope
}

local();

// closure the ability of a function to remember variable and funtion lexically out of it its scope is called ability
function closure() {
  // outer scope
  var displayValue = "display";
  function display() {
    // inner scope
    console.log(displayValue);
  }
  display();
}

closure();



// example 2
function makeFun() {
  let counter = 2;

  function displayCounter(num) {
    console.log(counter * num);
  }
  return displayCounter;
}

makeFun()(5);

// closure scope chain

var e = 10;

function scopeChain(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(scopeChain(1)(2)(3)(4));

//
function createBase(base) {
  return function (num) {
    return base + num;
  };
}
var addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));

// private counter using closure

function privatecounter() {
  let _counter = 0;
  function add(increment) {
    _counter += increment;
  }

  function get() {
    return "Counter=" + _counter;
  }
  return {
    add,
    get,
  };
}

const c = privatecounter();
c.add(15);
console.log(c.get());

//
let view;
function likeTheVideo() {
  let count = 0;
  return function () {
    if (count > 0) {
      console.log("umesh is best already");
    } else {
      view = "umesh is best";
      console.log("subscribe to ", view);
      count++;
    }
  };
}

const isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();

// implement caching /memoize function
function myMemoize(fn, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyPorduct = (num1, num2) => {
  for (let i = 0; i <= 10000000000; i++) {
    return num1 * num2;
  }
};

const memo = myMemoize(clumsyPorduct);
console.time();
console.log(memo(9467, 7649), "memo");
console.timeEnd();

console.time();
console.log(memo(9467, 7649), "memo2");
console.timeEnd();
