function findString(text, target) {
    let count = 0;

    if (text.length < target.length) {
        return 0;
    }

    for (let i = 0; i <= text.length - target.length; i++) {
        let match = true;
        for (let j = 0; j < target.length; j++) {
            if (text[i + j] !== target[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            count++;
        }
    }
    return count;
}

console.log(findString("hello, my name is Rikuya. name is a funny word.", "name")); // Output: 2
console.log(findString("banananana", "ana")); // Output: 3 (overlapping)
console.log(findString("hello", "hello")); // Output: 1
console.log(findString("hello", "world")); // Output: 0
console.log(findString("", "")); // Output: 0
console.log(findString("a", "aa")); // Output: 0
