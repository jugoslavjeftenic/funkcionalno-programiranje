let nizBrojeva = [4, 16, 1, 9, 10];

console.log(nizBrojeva.filter((broj) => broj < 10 && broj > -10));
console.log(nizBrojeva.reduce((proizvod, broj) => proizvod * broj, 1));
console.log(nizBrojeva.map((broj) => broj - 3));
console.log(nizBrojeva.map((broj) => broj % 2 == 0 ? broj / 2 : broj));
console.log(nizBrojeva.reduce((najveci, broj) => broj > najveci ? broj : najveci, nizBrojeva[0]));
console.log(nizBrojeva.filter((broj) => broj % 10 == 1));
