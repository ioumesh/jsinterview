// shallow copy vs deep copy

const person = {
  name: "Umesh Kumar",
  age: 29,
  address: {
    city: "New Delhi",
    country: "India",
  },
};

const shallowCopy = Object.assign({}, person);

shallowCopy.address.city = "mumbai";

console.log(person);
console.log(shallowCopy.address.city);

const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.city = "banglore";
console.log(person, "deep");
console.log(deepCopy.address.city, "deep");

const shallow = { ...person };
shallow.address.city = "num";

console.log(person);
