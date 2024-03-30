function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

const student1 = new Student("umesh", "kumar");
const greet = function (prefix, suffix) {
  console.log(`${prefix} ${this.firstName} ${this.lastName} ${suffix}`);
};

greet.call(student1, "hi", "there");
greet.apply(student1, ["hi", "umesh"]);
const fn = greet.bind(student1);
fn("num");
function Employee(firstName, lastName, department) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
}

const employee1 = new Employee("umesh", "kumar", "javascript");
greet.call(employee1, "react", "frontend");
greet.apply(student1, ["react", "there"]);

// polyfill for bind

let obj = {
  name: "Jack",
};

let myFunc = function () {
  console.log(`${this.name}`);
};

Function.prototype.myBind = function (obj) {
  let func = this;
  return function () {
    func.apply(obj);
  };
};

let newFunc = myFunc.myBind(obj);
newFunc();
