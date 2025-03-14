// function saberi(a, b) {
//     if (b == undefined) {
//         return ++a;
//     }
//     return a + b;
// }

// function saberi(a, b) {
//     return b == undefined ? ++a : a + b;
// }

function saberi(a, b = 1) {
    return a + b;
}

console.log(saberi(5));
console.log(saberi(5, 3));
