# Objects and Arrays

> Objects are unordered, key-value pairs.

Use Objects when:

-   order isn't necessary
-   needing fast access/insertion and removal

> Arrays are ordered lists

Use Arras when:

-   order is important
-   needing fast access/insertion and removal (sort of)

## Big O of Objects

-   Insertion - `O(1)`
-   Removal - `O(1)`
-   Searching - `O(n)`
-   Access - `O(1)`

Methods:

-   `Object.keys` - `O(n)`
-   `Object.values`- `O(n)`
-   `Object.entries`- `O(n)`
-   `hasOwnProperty` - `O(1)`

## Big O of Arrays

-   Insertion
    -   If adding to the end of an array, then `O(1)`
    -   If adding to the beginning of an array, then `O(n)`
-   Removal
    -   If removing the end of an array, then `O(1)`
    -   If removing the beginning of an array, then `O(n)`
-   Searching - `O(n)`
-   Access - `O(1)`

Insertion and removal may be `O(n)` because of the index that references each item in an array.

Methods:

-   `push` - `O(1)`
-   `pop` - `O(1)`
-   `shift` - `O(n)`
-   `unshift` - `O(n)`
-   `concat` - `O(n)`
-   `slice` - `O(n)`
-   `splice` - `O(n)`
-   `sort` - `O(n * log n)`
-   `forEach/map/filter/reduce/etc` - `O(n)`

---

END
