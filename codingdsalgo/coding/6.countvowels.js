function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  //   step iterate thorugh each charof string
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      // step if true increment the count
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello world"));
