// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let pointer1 = 0;
    for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
        if (arr[pointer1] !== arr[pointer2]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
    }
    return pointer1 + 1;
}

console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 12])); // 5
