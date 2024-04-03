function student(firstName, secondName, subject) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.subject = subject;
}
const greet = function (prefix,sufix) {
  return `${prefix} ${this.firstName} ${this.secondName} ${sufix}`;
};
const student1 = new student("umesh", "kumar", "coding");

console.log(greet.call(student1,"hi","all is well"));
console.log(greet.apply(student1,["hi","all is well"]));

const fn=greet.bind(student1)

console.log(fn("hello","bind"))