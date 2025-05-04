let niz = [2, 4, 7, 8, 10, 3, 6];
console.log(niz
    .filter((broj) => broj % 2 == 0 && broj > 5)
    .reduce((suma, broj) => suma += broj * broj, 0)
);
