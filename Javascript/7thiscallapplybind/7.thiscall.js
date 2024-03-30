const person = {
  name: "umesh",
  age: 29,
  getDetails() {
    console.log(this.name);
  },
};

// person.getDetails();

const person1 = {
  name: "umesh",
  age: 29,
  getDetails: () => {
    console.log(this.name);
  },
};

// person1.getDetails();

// constructor funtion

function coder(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

function employee(firstName, lastName, department) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
}

const greet = function (prefix, suffix) {
  console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);
};
let coder1 = new coder("umesh", "kumar", "javascript");
greet.call(coder1, "hi", "are you fine");
greet.apply(coder1, ["hi", "are you happy"]);

let bind = greet.bind(coder1); //new funtion create
bind("hey", "boy");
let employee1 = new employee("numa", "imran", "seo");
