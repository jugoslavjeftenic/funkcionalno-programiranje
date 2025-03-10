let sum1 = (a, b) => a + b;
console.log(sum1(1, 2));

let double2 = function (n) { return n * 2; };
console.log(double2(5));

let double1 = n => n * 2;
console.log(double1(5));

let sayHi = () => console.log("Hello!");
sayHi();

let age = +prompt("Koliko Vam je godina?", 18);
let wellcome = (age < 18) ? () => console.log("Cao") : () => console.log("Dobar dan");
wellcome();

let sum2 = (a, b) => {
    let result = a + b;
    return result;
};
console.log(sum2(1, 2));
