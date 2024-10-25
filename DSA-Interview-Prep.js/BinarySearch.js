/* BREATH-FIRST SEARCH */

// example 1: Binary Search in Sorted Array: 
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid; 
        else if (arr[mid] < target) left = mid + 1; 
        else right = mid - 1;
    }
    
    return -1; 
}

// example 2: Find First and Last Position of Element: 
function searchRange(arr, target) {
    const firstPos = findBound(arr, target, true); 
    if (firstPos === -1) return [-1, -1];
    const lastPos = findBound(arr, target, false); 
    return [firstPos, lastPos];
}

function findBound(arr, target, isFirst) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); 
        if (arr[mid] === target) {
            if (isFirst) {
                if (mid === left) || arr[mid - 1] !== target) return mid;
                right = mid - 1; 
            } else {
                if (mid === right right || arr[mid + 1] !== target) return mid; 
                left = mid + 1; 
            }
        } else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1; 
    }

    return -1;
}

// example 3: Find Minimum in Rotated Sorted Array: 