let initialValue1 = 0;
let sum1 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, initialValue1);
console.log(sum1);

let initialValue2 = 0;
let sum2 = [{ x: 1 }, { y: 2 }, { x: 3 }].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
}, initialValue2);
console.log(sum2);
