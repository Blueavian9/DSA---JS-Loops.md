// Sliding Window
// example 1: Maximum Sum of Subarray of Size K 
function maxSumSubarray(arr, k) {
    let maxSum = 0, windowSum = 0; 
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let end = k; end < arr.length; end++) {
        windowSum +=  arr[end] - arr[end - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}