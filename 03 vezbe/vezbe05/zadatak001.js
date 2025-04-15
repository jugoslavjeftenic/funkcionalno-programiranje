let racunar = {};

Object.defineProperty(racunar, "cena", {
    value: 100000,
    writable: true,
    enumerable: true,
    configurable: true
});

// Object.defineProperty(racunar, "proizvodjac", {
//     value: "Lenovo",
//     writable: false,
//     enumerable: true,
//     configurable: false
// });

Object.defineProperty(racunar, "proizvodjac", {
    value: "Lenovo",
    enumerable: true
});

let racunar2 = racunar;
let racunar3 = { ...racunar };
let racunar4 = JSON.parse(JSON.stringify(racunar));

racunar.cena = 50000;
racunar.proizvodjac = "HP";

console.log(racunar);
console.log(racunar2);
console.log(racunar3);
console.log(racunar4);
