var majorityElement = function (nums) {
  let result = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === result) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      result = nums[i];
      count = 1;
    }
  }

  return result;
};
