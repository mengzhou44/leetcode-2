var sortedSquares = function (nums) {
  let res = new Array(nums.length).fill(0);

  let left = 0;
  let right = nums.length - 1;
  let current = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[current] = nums[left] ** 2;
      left++;
    } else {
      res[current] = nums[right] ** 2;
      right--;
    }
    current--;
  }

  return res;
};
