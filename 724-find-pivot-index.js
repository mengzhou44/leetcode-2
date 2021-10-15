var pivotIndex = function (nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }

  let leftSum = 0;
  let rightSum = sum;
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (i > 0) {
      leftSum += nums[i - 1];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};
