function checkValidParen(str) {
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  for (let item of str) {
    if (item === "{" || item === "[" || item === "(") {
      stack.push(item);
    } else {
      if (map[stack.pop()] !== item) return false;
    }
  }
  return true;
}
