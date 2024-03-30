// string
// loops
// objects

// first non repeating character

const firstNonRepeatingchar = (str) => {
  let obj = {};
  for (let item of str) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  for(let key in obj){
    if(obj[key]===1){
        return str.indexOf(key)
    }
  }
  return -1
};

const input1 = "kirandeep"; //k -index 0
const input2 = "iiilllbbbq"; //q-index 9
const input3 = "aabcc"; //b index 2
const input4 = "aabb"; //nothing return -1

console.log(firstNonRepeatingchar(input1));
console.log(firstNonRepeatingchar(input2))
console.log(firstNonRepeatingchar(input3))
console.log(firstNonRepeatingchar(input4))
