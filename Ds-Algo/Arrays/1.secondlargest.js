// Ques 1- second largest number
// Given an array Arr of size N, print second largest
// distinct element from an array

// input-[12,35,1,10,34,1]--output 34
// input -[10,5,10]---output 5

const input = [12, 35, 1, 10, 34, 1];
const input2 = [10, 5, 10];

// brute force
// first unique array
// sort from decending
// return 1 index

function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr));
  const sortedArr = uniqueArr.sort((a, b) => {
    return b - a;
  });
  if (uniqueArr.length >= 2) {
    return sortedArr[1];
  } else {
    return -1;
  }
}

console.log(secondLargest(input));
console.log(secondLargest(input2));

// optimised approach
function optimisedSecondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(optimisedSecondLargest([12, 35, 1, 10, 34, 1]));

// Time complexity O(n)
// Space Complexity O(1)
