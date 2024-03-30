//1 output on  truthy falsy
let randowmValue = { name: "umesh" };

randowmValue = 21;

if (!typeof randowmValue === "string") {
  console.log("its not a string");
} else {
  console.log("its a string");
}
console.log(typeof randowmValue);

//2 output based on this context arrow function

const user = {
  email: "myemail@gmail.com", //global scope as this is arrow function and it does not have context
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("newemail@gmail.com");
console.log(user.email);

// 3 object reference

const animals = {};

let dog = { emoji: "dog" };
let cat = { emoji: "cat" };

animals[dog] = { ...dog, name: "jony" };
// animals["object","object"]={emoji:"",name:""}
animals[cat] = { ...cat, name: "sara" };
// animals["object","object"]={emoji:"",name:""}

console.log(animals[dog]);
console.log(animals);
// both object have same refernce that is

// 4 object refernce
let person = { name: "umesh" };
const member = [person]; //created own copy of person refernce
person = null;

console.log(member);
console.log(person);

// 5 this context call bind

let data = { name: "umesh" };

function helloBudy(job) {
  return `${this.name} is working as ${job}`;
}

console.log(helloBudy.call(data, "cars24 sde2"));
console.log(helloBudy.bind(data, "sde2 cars24"));

// 6 object reference

function checkOcc(data) {
  if (data === { obj: "engineer" }) {
    console.log("you are en engineer");
  } else {
    console.log("you are not ");
  }
}

console.log(checkOcc({ obj: "engineer" }));

// 7 tagged template litrals
function getPersonInfo(one, two, three) {
  console.log(one, two, three);
}

const person1 = "umesh";
const occ = "engineer";

getPersonInfo`${person1} is working as ${occ}`;
