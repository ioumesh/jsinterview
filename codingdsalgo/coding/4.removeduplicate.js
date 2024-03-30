// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

function removeDuplicates1(arr) {
  let uniqueElement = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueElement.indexOf(arr[i])===-1) {
      uniqueElement.push(arr[i]);
    }
  }
  return uniqueElement;
}

console.log(removeDuplicates1([1, 2, 3, 4, 4, 5, 6, 6]));
