/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m == 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return;
  } else if (n === 0) {
    return;
  }

  let mCurrent = m - 1;
  let nCurrent = n - 1;
  let current = m + n - 1;

  while (mCurrent >= 0 && nCurrent >= 0) {
    if (nums2[nCurrent] < nums1[mCurrent]) {
      nums1[current] = nums1[mCurrent];
      mCurrent--;
    } else {
      nums1[current] = nums2[nCurrent];
      nCurrent--;
    }
    current--;
  }

  if (nCurrent < 0) return;

  for (let i = 0; i <= nCurrent; i++) {
    nums1[i] = nums2[i];
  }
};
