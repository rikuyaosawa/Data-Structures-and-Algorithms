// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

function validAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    let lookup = {};

    for (let letter of s1) {
        lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
    }

    for (let letter of s2) {
        if (lookup[letter] === undefined) return false;
        else lookup[letter]--;
    }

    if (!Object.values(lookup).every((value) => value === 0)) return false;

    return true;
}

console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
