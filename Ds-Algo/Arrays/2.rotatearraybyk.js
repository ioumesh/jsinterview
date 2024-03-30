// Ques rotate array by k
// Given an integer array nums, rotate the array to the right by k steps
// where k is non-negative

// Input :nums=[1,2,3,4,5,6,7] ,k=3 --------->output :[5,6,7,1,2,3,4]
// Input :nums=[-1,-100,3,99] ,k=2--------->output :[3,99,-1,-100]
// using inbuilt function
function getRotatedArray(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, k);
  nums.unshift(...rotated);
  return nums;
}

console.log(getRotatedArray([1, 2, 3, 4, 5, 6, 7], 3));

function getoptimisedRotate(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverseThree(nums, 0, nums.length - 1);
  reverseThree(nums, 0, k - 1);
  reverseThree(nums, k, nums.length - 1);
  return nums;
}

// [4,3,2,1]
function reverseThree(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(getoptimisedRotate([1, 2, 3, 4, 5, 6, 7], 3));
