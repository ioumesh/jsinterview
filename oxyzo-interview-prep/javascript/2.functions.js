// functions
// 4 ways to declare a function
// diiffrence between function and method
// value of this in function
// call apply bind
// 1)
function abc() {
  console.log(this); //value of this is determined by the way the function is
  //refer to window objcet in browser
  // refer global in node environment
}
abc();
// 2)
const firstFunction = (function () {})(
  (function sum(a, b) {
    console.log(a + b);
  })(2, 5)
);

//3) method
const a = {
  abc: function () {},
};
a.abc();

//4)this
function windowObj() {
  "use strict"; //value is undefined
  this.a = "pqr";
}
// abc();
// console.log(window.a); //we can access it throughout window but if we use use strict it wont print

// 5 constructor function
function ABC() {
  console.log(this); //value of this is emplty object  for constructor funtion
}

const abc1 = new ABC(); //both are returning new object
const abc2 = new ABC();

console.log(abc1 === abc2);

// 6)method invokation

const obj = {
  user: "umesh",
  abc: function () {
    //here this refers to its parent object
    console.log(this.user);
    console.log(this);
  },
};

obj.abc();

// case 2 if extract
const objEx = obj.abc;
// objEx(); // it it treated as normal funtion invoked

// invovked inner function

const innerObj = {
  abc: function () {
    function inner() {
      console.log(this === window); //if we want to change we can use fat arrow function
    }
    inner();
    const inner1 = () => {
      console.log(this == innerObj); //nearest parent
    };
    inner1();
    // another way
    inner.call(this);
  },
};

// innerObj.abc();

// bind
const bind = {
  abc: function () {
    function inner(x) {
      console.log(x);
      console.log(this === bind);
    }
    const c = inner.bind(this);
    c("hello umesh");
    c("words");
  },
};
bind.abc();

//

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


// params and argument

function paramArgs(args){
// params
}

paramArgs("umehs")//arguments
// spread and rest operator