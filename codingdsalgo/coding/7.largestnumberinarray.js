function findLargestNumber(arr) {
  // step1 set the intial largest element to the first element of the array
  let largest = arr[0];
  //step2 intertae thorugh array with intial value 1 and update the largest element if a larger element if found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  //   return the largest num
  return largest;
}

console.log(findLargestNumber([2, 4, 6, 9, 3]));
