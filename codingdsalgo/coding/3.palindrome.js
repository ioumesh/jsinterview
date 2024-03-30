function isPalindrome(value) {
  let revValue = "";
  for (let i = value.length - 1; i >= 0; i--) {
    revValue += value[i];
  }
  return revValue === value ? true : false;
}

console.log(isPalindrome("madam"));
