//1 prototype chain -- all object are the instances of an object so it inherit its property from its prototype
// circle ,rectangle prototype is shape and base is  general prototype object
// prototype --base object

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}
Person.prototype.getFullName = function () {
  return this.first + this.last + this.age;
};
const p1 = new Person("umesh", "kumar", "29");
console.log(p1.getFullName());
// 2
String.prototype.givePizz = () => {
  return "you just give me one ";
};
const userName = "umesh";
console.log(userName.givePizz());

// diffrence between proto and prototype
// proto is the link that is created between your levels of prototype chain
// and using prototype to create this link

// 3
class Dog {
  constructor(dogName) {
    this.dogName = dogName;
  }
}

Dog.prototype.bark = function () {
  console.log(`woof i am ${this.dogName}`);
};

const pet = new Dog("mara");

pet.bark();

delete Dog.prototype.bark; //it will delete prototype funtion bark

// pet.bark();

// 4 classicaal inheritance - inherited propperty from object hybrid inheritance
// prototype inheritance

function giveMeOne() {
  return "pizza";
}

const giveChoco = () => {
  return "choco";
};

console.log(giveMeOne.prototype);
console.log(giveChoco.prototype);

// get set prototype of an object
// getPrototypeof(Object)
// setPrototypeOf(Object)

// create object using prototype

const user = {
  name: "kiran",
};
const anotherUser=Object.create(user)
console.log(anotherUser.name)