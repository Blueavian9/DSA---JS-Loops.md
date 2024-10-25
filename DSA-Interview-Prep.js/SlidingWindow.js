/* SLIDING WINDOW */

/* example 1: Maximum Sum of Subarray of Size K : */

function maxSumSubarray(arr, k) {
  let maxSum = 0,
    windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

/* example 2: Longest Substring w/ K Distinct Characters: */

function longestDistinct(s, k) {
  let start = 0,
    maxLength = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    charMap.set(s[end], (charMap.get(s[end]) || 0) + 1);
    while (charMap.size > k) {
      charMap.set(s[start], charMap.get(s[start]) - 1);
      if (charMap.get(s[start]) === 0) charMap.delete(s[start]);
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

/* example 3: Minimum Size Subarray Sum : */

function minSubArrayLen(target, arr) {
  let minLength = Infinity,
    windowSum = 0,
    start = 0;
  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    while (windowSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      windowSum -= arr[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}