function removeWhitespace(str) {
  const result = str.replace(/\s/g, "");
  return result;
}

const inputString = "interview,   happy";

console.log(removeWhitespace(inputString));
