function bubbleSort(arr, fn) {
    console.log("Unsorted array:", arr);
    if (typeof fn !== "function") {
        let noSwaps;
        for (let i = arr.length; i > 0; i--) {
            noSwaps = true;
            for (let j = 0; j < i - 1; j++) {
                // console.log(arr, "- comparing", arr[j], "with", arr[j + 1]);
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    noSwaps = false;
                }
            }
            if (noSwaps) break;
        }
        return arr;
    }

    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            // console.log(arr, "- comparing", arr[j], "with", arr[j + 1]);
            if (fn(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log("Sorted array:", bubbleSort([1, 3, 6, 2, 9]));
console.log("Sorted array:", bubbleSort([10, 3, 6, 2, 9]));
console.log("Sorted array:", bubbleSort(kitties, strComp));

var moarKittyData = [
    {
        name: "LilBub",
        age: 7,
    },
    {
        name: "Garfield",
        age: 40,
    },
    {
        name: "Heathcliff",
        age: 45,
    },
    {
        name: "Blue",
        age: 1,
    },
    {
        name: "Grumpy",
        age: 6,
    },
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log("Sorted array:", bubbleSort(moarKittyData, oldestToYoungest));
