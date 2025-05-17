function sum(num1, ...nums) {
    if (nums.length == 0) return num1;
    return num1 + sum(...nums);
}
console.log(sum(3, 1, 17, 94, 8));

"use strict";
function sumPTC(result, num1, ...nums) {
    result = result + num1;
    if (nums.length === 0) return result;
    return sum(result, ...nums);
}
console.log(sumPTC(0, 3, 1, 17, 94, 8));

"use strict";
function sumRec(result, num1, ...nums) {
    result = result + num1;
    if (nums.length == 0) return result;
    return sumRec(result, ...nums);
}
function sumInterface(...nums) {
    return sumRec(0, ...nums);
}
console.log(sumInterface(3, 1, 17, 94, 8));

"use strict";
function sumHide(...nums) {
    return sumRec(0, ...nums);
    function sumRec(result, num1, ...nums) {
        result = result + num1;
        if (nums.length == 0) return result;
        return sumRec(result, ...nums);
    }
}
console.log(sumHide(3, 1, 17, 94, 8));

"use strict";
var sumIIFE = (function () {
    return function sumIIFE(...nums) {
        return sumRec(0, ...nums);
    };
    function sumRec(result, num1, ...nums) {
        result = result + num1;
        if (nums.length == 0) return result;
        return sumRec(result, ...nums);
    }
})();
console.log(sumIIFE(3, 1, 17, 94, 8));
