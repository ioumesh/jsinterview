// stack question

const validParenthesis = (str) => {
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let item of str) {
    if (item === "(" || item === "{" || item === "[") {
      stack.push(item);
    } else {
      if (map[stack.pop()] !== item) return false;
    }
  }
  return true;
};
const input1 = "()";
const input2 = "()[]{}";
const input3 = "([)]";
const input4 = "(]";

console.log(validParenthesis(input1));
console.log(validParenthesis(input2));
console.log(validParenthesis(input3));
console.log(validParenthesis(input4));
