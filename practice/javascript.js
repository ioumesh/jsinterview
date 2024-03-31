//1 var let and cont

// how to declare
var firstName = "umesh";
console.log(firstName);

var firstName = "sanjiv";
console.log(firstName);

let lastName;
lastName = "kumar";
console.log(lastName);

const userName = "user1";
console.log(userName);

// scoping
// global scope
// localscope
// block scope

{
  var studentName = "ravi";
}
console.log(studentName);

//
console.log(isHoisted);
var isHoisted = "yes";

// due to execution context ,js moves variable and funtion to the top of the code
// let and const are also hoisted but in temporal dead zone

// console.log(temporalDeadZone);
let temporalDeadZone = "yes i am in dead zone";

// shadowing

function shadow() {
  var a = 10;
  if (true) {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}

shadow();

// 2map filter and reduce map vs foreach

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.map((item) => item * 2);
console.log(result);

const filterResult = arr.filter((item) => {
  return item > 3;
});
console.log(filterResult);

const reduce = arr.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);

console.log(reduce);

// foreach will modify actual array

const foreach = arr.forEach((item, index) => {
  arr[index] = item - 2;
});

console.log(arr);

// 3funtions

// IIFE
(function iife(a) {
  console.log(a);
})("uemsh");

// funtional scope
for (let i = 0; i < 5; i++) {
  // setTimeout(() => {
  //   console.log(i);
  // }, 1000);
}

// arguments and params

function argsParam(param) {
  //param
}

argsParam("umesh"); //argument

// spread and rest operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const finalAraay = [...arr1, ...arr2];
console.log(finalAraay);

function rest(a, b, ...args) {
  console.log(a, b, args);
}

rest("umesh", "kumar", [1, 2, 3, 4]);

// higher order funtion take and funtion and return a function
// currying
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(1)(2));

// 4 closures
// global scope
var lexicalValue = "lexical value";

function local() {
  // local scope
  //  variable can be access from outside funtion after declartion is called lexically scope
  console.log(lexicalValue);
  //   lexical scope
}
local();

//the ability of a function to remember its variable and funtions lexically out of its  scope is called closure
function closure() {
  // outer scope
  var displayValue = "allahnum";
  function display() {
    // inner scope
    console.log(displayValue);
  }
  display();
}

closure();

//
function makeFun() {
  let counter = 2;
  function displayCounter(num) {
    console.log(counter * num);
  }
  return displayCounter;
}

makeFun()(0);

// closure scope chain

var e = 5;
function closureScopechain(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log("sum", closureScopechain(1)(2)(3)(4));

// private counter
function privateCounter() {
  let _counter = 0;
  function add(increment) {
    _counter = _counter + increment;
  }
  function get() {
    return "counter" + _counter;
  }

  return {
    add,
    get,
  };
}

const c = privateCounter();
c.add(15);
const res = c.get();
console.log(res);

// implement a caching funtion

function memoise(fn, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {
    return num1 * num2;
  }
};

console.time();
console.log(clumsyProduct(9456, 7895));
console.timeEnd();

console.time();
console.log(clumsyProduct(9456, 7895));
console.timeEnd();

//
let cache = {};
function factorial(num) {
  console.log("fac");
  if (num < 0) return -1;
  if (num < 2) return 1;
  if (num in cache) {
    return cache[num];
  }
  return (cache[num] = num * factorial(num - 1));
}

console.log(factorial(5));
console.log(factorial(5));

// meoise funtion

function memoise(fn, context) {
  let res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

//5function currying infinite sum

function infiniteSum(a) {
  return function (b) {
    if (b) return infiniteSum(a + b);
    return a;
  };
}
console.log(infiniteSum(1)(2)());

// 6 object
const person = {
  name: "umesh",
  age: 29,
  address: {
    city: "new delhi",
    country: "india",
  },
};

const personCopy = Object.assign({}, person);

personCopy.address.city = "delhi";

console.log(person);

// deep copy

const personcopy1 = JSON.parse(JSON.stringify(person));
console.log(personcopy1);
personcopy1.address.city = "new";
console.log(personcopy1);
console.log(person);

// call apply bind

function student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}
const greet = function (prefix, sufix) {
  return `${prefix} ${this.firstName} ${this.lastName} ${sufix}`;
};
const student1 = new student("umesh", "kumar", "coding");

console.log(greet.call(student1, "hey", "miss"));
console.log(greet.apply(student1, ["hey", "miss"]));
const fn = greet.bind(student1);
console.log(fn("ummm", "num"));
function Employee(firstName, lastName, department) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
}

const employee1 = new Employee("kumar", "umesh", "");
// console.log(employee1.greet("num", "tarab"));

// callback , callback event promise async await

// register
// verify
// login user
// logout user

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 2000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("verify");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 500);
  });
}

function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("logout");
      return reject(new Error("error in logout"));
      resolve();
    }, 100);
  });
}

// register(() => {
//   verify(() => {
//     login(() => {
//       logout(() => {
//         console.log("application end");
//       });
//     });
//   });
// });

// call back hell
register()
  .then(verify)
  .then(login)
  .then(logout)
  .catch((err) => {
    console.log(err);
  });

async function result1() {
  await register();
  await verify();
  await login();
  await logout();
}

result1();

// debounce
function debounce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(args);
    }, delay);
  };
}

function callingApi() {
  console.log("...api calling");
}
const debounceCall = debounce(callingApi, 2000);
const input = document.getElementById("input");

input.addEventListener("input", () => {
  debounceCall();
});

// throttle
let count = 1;
function throttle(cb, limit) {
  let isThottle = false;
  return function (...args) {
    if (!isThottle) {
      cb(args);
      setTimeout(() => {
        isThottle = false;
        btn.disabled = true;
        count = 0;
      }, limit);
    }
  };
}
const btn = document.getElementById("shoot-btn");
function hitshot() {
  console.log("headshot");
  btn.disabled = false;
}
const th = throttle(hitshot, 2000);
btn.addEventListener("click", () => {
  th();
});


// event propagtion 
// bubble bottom to up
// capture top to bottom
// event delegation list example