// ques flatten nested array
const input = [1, [2, 3], [4, 5, 6], [7, 8, 9]];
// output [1,2,3,4,5,6,7,8,9]

function flatten(arr) {
  someNewArray = arr.reduce((acc, cur) => {
    // if array perform recursion
    // if number simply push into array
    if (Array.isArray(cur)) {
      acc = acc.concat(flatten(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
  return someNewArray;
}

console.log(flatten(input));
