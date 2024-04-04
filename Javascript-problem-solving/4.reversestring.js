function reverseStr(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr = revstr + str[i];
  }
  return revstr;
}
console.log(reverseStr("umesh"));

function rev(str) {
  if (str === "") {
    return "";
  }
  return rev(str.substr(1)) + str.charAt(0);
}

console.log(rev("umesh"));
