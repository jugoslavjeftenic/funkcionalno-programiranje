var A = {};
var B = Object.create(A);
var C = Object.create(B);

console.log(B.isPrototypeOf(C));
console.log(C.isPrototypeOf(A));
console.log(B.isPrototypeOf(A));
console.log(B.isPrototypeOf(C));
console.log(C.isPrototypeOf(B));

console.log(Object.getPrototypeOf(C) === B);
console.log(Object.getPrototypeOf(B) === A);
console.log(Object.getPrototypeOf(C) === A);
