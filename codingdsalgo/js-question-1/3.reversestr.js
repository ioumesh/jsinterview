// reverse string
const input = "hello";

// output 0lleh
function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

console.log(reverseString(input));

//
function rev(str) {
  const revstr = str.split("").reverse().join("");
  return revstr;
}

console.log(rev("umeshnum"));

// using recursion

function revstrrec(str) {
  if (str === "") {
    return "";
  }
  return revstrrec(str.substr(1)) + str.charAt(0);
}
console.log(revstrrec("umesh"))


// reduce 
// str.split("").reduce((acc,item)=>item+acc,"")