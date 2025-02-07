function indexOf(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (arr[middle] == value) return middle;

        if (arr[middle] < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

const testCases = [
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 5 }, // Target in the middle
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 1 }, // Target at the start
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 10 }, // Target at the end
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 11 }, // Target not found
    { array: [], target: 5 }, // Empty array
    { array: [1], target: 1 }, // Single-element array, target found
    { array: [1], target: 0 }, // Single-element array, target not found
];

// Run and log test cases
testCases.forEach(({ array, target }) => {
    const result = indexOf(array, target);
    console.log(`Searching for ${target} in [${array}] gives index: ${result}`);
});
