var mojObjekat = {
    a: 2,
    b: 33,
    c: function double(x) { return 2 * x; }
};

console.log(mojObjekat.c(8));
console.log(mojObjekat.c(mojObjekat.b));
