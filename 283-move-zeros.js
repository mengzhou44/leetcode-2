var moveZeroes = function (nums) {
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[current] = nums[i];
      current++;
    }
  }

  for (let i = current; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// recursive

var moveZeroes = function (nums) {
  if (nums.length === 0) {
    return;
  }

  let first = nums.shift();
  moveZeroes(nums);
  if (first === 0) {
    nums.push(0);
  } else {
    nums.unshift(first);
  }
};
