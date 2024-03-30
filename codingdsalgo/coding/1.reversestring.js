const input = "kumar";
//output ramuk

function getReverseString(str) {
  let reversestring = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversestring = reversestring + str[i];
  }
  return reversestring;
}
console.log(getReverseString(input));

function getRevstring(str) {
  const revstr = str.split("").reverse().join("");
  return revstr;
}

console.log(getRevstring(input));
