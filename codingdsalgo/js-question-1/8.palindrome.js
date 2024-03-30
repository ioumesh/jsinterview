const isPalindrom = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev === str ? true : false;
};

console.log(isPalindrom("121"));

function checkPalindrome(str) {
  const rev = str.split("").reverse().join("");
  return rev;
}

console.log(checkPalindrome("ram"));

function checkPalindrome1(str) {
  const rev = [...str].reverse().join("");
  return rev;
}

console.log(checkPalindrome1("kiran"));

// using recursion

function isPalinRec(str) {
  if (str === "") {
    return "";
  }
  return isPalinRec(str.substr(1)) + str.charAt(0);
}


console.log(isPalinRec("numa"))

// using reduce
