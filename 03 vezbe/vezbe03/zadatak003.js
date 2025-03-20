let sumaReciprocnihVrednosti = (n = 1) =>
    [...Array(n).keys()]
        .map(i => 1 / (i + 1))
        .reduce((sum, val) => sum + val, 0);

console.log(sumaReciprocnihVrednosti(5));
console.log(sumaReciprocnihVrednosti());
