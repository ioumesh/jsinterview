// objects can have two things property and other is method
const a = {
  b: 10,
  c: function () {
    return this.b + 10;
  },
};

// shorthand operator
// access properties of object
// destructure
const { b: alias, c } = a;
console.log(alias);

// spread and rest operator

const d = {
  e: 20,
};
// spread operator
const combine = { ...a, ...d }; //right hand side
console.log(combine);

const { b, ...rest } = combine;
// rest is accumulate the value
console.log(rest); //left hand side rest operator

// spread and rest operation in funtion accumulate in the form of array
function restFn(...args) {
  //rest operator
  console.log(args);
}

restFn("umesh");
// spread operator
function abc(x1, x2, x3) {
  console.log(x1, x2, x3);
}
const arr = [1, 2, 3];
abc(...arr);

//
function abcDes({ b, c }) {
  console.log(b);
}
abcDes(a);

// funtion with default value
function xyz(x, y = 10) {
  console.log(x + y);
}

xyz(20);
function xyz1(x, y = x) {
  console.log(x + y);
}

xyz1(20);

//access using dot and square notation
console.log(a["b"]);
console.log(a.b);

// iterate the object
// for in loop iterate over the key

for (let key in a) {
  console.log(a[key]); //always use square bracket when dynamicaaly access the value
}

// shallow copy and deep copy

const person = {
  name: "umesh",
  address: {
    city: "delhi",
    country: "india",
  },
};

const person1 = Object.assign({}, person);
// console.log(person1);
person1.address.city = "new delhi";
console.log(person);

const person2 = JSON.parse(JSON.stringify(person));
console.log(person2)
person2.address.city="mumbai"
console.log(person)
