"use strict";
function maxVal(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max > arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxVal([1, 2, 4, 23, 4]));
