var removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;

  let cur = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[cur]) {
      cur++;
      nums[cur] = nums[i];
    }
  }

  return cur + 1;
};
