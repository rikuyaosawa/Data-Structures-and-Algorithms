function indexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(indexOf([1, 2, 3], 4));
console.log(indexOf(["Tom", "John", "Jerry"], "John"));
