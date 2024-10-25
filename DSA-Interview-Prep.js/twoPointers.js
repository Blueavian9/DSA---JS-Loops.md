/* TWO POINTERS */

//example 1: Two-sum (sorted Array):

function twoSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let((sum = arr[left] + arr[right]));
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}

// example 2: Remove Duplicates from Sorted Array:
function removeDuplicates(arr) {
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

// example 3: Valid Palindrome:

function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
}

function AlphaNumeric(c) {
  return /^[a-z0-9]+$/i.test(c);
}

