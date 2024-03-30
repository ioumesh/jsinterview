// anagrams

const areAnagram = (value1, value2) => {
  const sortedArr1 = value1.split("").sort().join("");
  const sortedArr2 = value1.split("").sort().join("");

  return sortedArr1 === sortedArr2;
};
console.log(areAnagram("listen", "silent"));
